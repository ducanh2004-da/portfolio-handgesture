import { useEffect, useRef, useState } from 'react'
import { HeadContent, Scripts, createRootRoute, useRouter } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import Footer from '../components/Footer'
import Header from '../components/Header'

import appCss from '../styles.css?url'

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: "Team's Portfolio" },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
    ],
  }),
  shellComponent: RootDocument,
})

// 1. Định nghĩa mảng thứ tự các trang để điều hướng qua lại
const PAGE_ORDER = ['/', '/about', '/tech', '/contact']

function RootDocument({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [gesture, setGesture] = useState<string>("NONE")
  
  // 2. Dùng useRef để lưu trữ đường dẫn hiện tại. 
  // Điều này rất quan trọng để tránh lỗi "stale closure" của React khi chạy WebSocket ngầm.
  const currentPathRef = useRef(router.state.location.pathname)

  // Cập nhật ref mỗi khi route thay đổi
  useEffect(() => {
    // Chuẩn hóa path (vd: TanStack đôi khi trả về '/about/' thay vì '/about')
    let path = router.state.location.pathname
    if (path !== '/' && path.endsWith('/')) {
      path = path.slice(0, -1)
    }
    currentPathRef.current = path
  }, [router.state.location.pathname])

  // 3. Khởi tạo WebSocket Listener
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8765")

    ws.onopen = () => console.log("✅ TanStack Router: Connected to Vision Core!")

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data)
      const action = data.action
      setGesture(action) // Cập nhật state để hiển thị lên UI

      // Logic chuyển trang (NEXT / PREV)
      if (action === "NEXT" || action === "PREV") {
        const currentPath = currentPathRef.current
        const currentIndex = PAGE_ORDER.indexOf(currentPath)

        if (currentIndex !== -1) {
          let nextIndex = currentIndex

          if (action === "NEXT") {
            nextIndex = (currentIndex + 1) % PAGE_ORDER.length
          } else if (action === "PREV") {
            nextIndex = (currentIndex - 1 + PAGE_ORDER.length) % PAGE_ORDER.length
          }

          router.navigate({ to: PAGE_ORDER[nextIndex] })
        }
      }

      // Logic cuộn trang (SCROLL UP / SCROLL DOWN)
      // Sử dụng behavior: 'smooth' để trải nghiệm cuộn được mượt mà hơn
      if (action === "SCROLL UP") {
        window.scrollBy({ 
          top: -150, // Điều chỉnh số này (px) để thay đổi tốc độ/độ dài mỗi lần cuộn
          left: 0, 
          behavior: 'smooth' 
        });
      } else if (action === "SCROLL DOWN") {
        window.scrollBy({ 
          top: 150, 
          left: 0, 
          behavior: 'smooth' 
        });
      }
    }

    ws.onclose = () => console.log("❌ Connection to Vision Core lost.")

    return () => {
      ws.close()
    }
  }, [router])

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body className="font-sans antialiased [overflow-wrap:anywhere] selection:bg-[rgba(79,184,178,0.24)]">
        <Header />
        
        {/* Widget hiển thị trạng thái cử chỉ - Thiết kế Cyberpunk/Tech */}
        <div className="fixed bottom-6 right-6 z-50 bg-[#101216]/80 border border-[#00d8ff]/40 text-[#00d8ff] px-5 py-2 rounded-full shadow-[0_0_15px_rgba(0,216,255,0.15)] backdrop-blur-md flex items-center gap-3 transition-all duration-300">
          <div className={`w-2 h-2 rounded-full ${gesture !== 'NONE' ? 'bg-[#00d8ff] animate-pulse' : 'bg-gray-600'}`}></div>
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase">
            {gesture}
          </span>
        </div>

        {children}
        
        <Footer />
        <TanStackDevtools
          config={{ position: 'bottom-right' }}
          plugins={[{ name: 'Tanstack Router', render: <TanStackRouterDevtoolsPanel /> }]}
        />
        <Scripts />
      </body>
    </html>
  )
}