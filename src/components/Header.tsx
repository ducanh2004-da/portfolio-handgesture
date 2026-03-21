import { Link } from '@tanstack/react-router'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  // Gom các class dùng chung lại để code gọn gàng, dễ bảo trì hơn
  const baseLinkClass = "pb-1 border-b-2 transition-colors duration-200";

  return (
    <header className="w-full flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-widest text-gray-200">
            KINETIC_AI
        </div>

        {/* Bỏ class text-gray-500 ở thẻ nav đi để kiểm soát trạng thái trực tiếp trên từng Link */}
        <nav className="hidden md:flex space-x-12 text-xs font-semibold tracking-widest uppercase">
            <Link 
                to="/" 
                // Quan trọng: Bắt buộc URL phải khớp chính xác '/' thì mới tính là active
                activeOptions={{ exact: true }} 
                className={baseLinkClass}
                activeProps={{ className: "text-gray-200 border-[#00d8ff]" }}
                inactiveProps={{ className: "text-gray-500 border-transparent hover:text-gray-300" }}
            >
                Intro
            </Link>
            
            <Link 
                to="/about" 
                className={baseLinkClass}
                activeProps={{ className: "text-gray-200 border-[#00d8ff]" }}
                inactiveProps={{ className: "text-gray-500 border-transparent hover:text-gray-300" }}
            >
                About
            </Link>
            
            <Link 
                to="/tech" 
                className={baseLinkClass}
                activeProps={{ className: "text-gray-200 border-[#00d8ff]" }}
                inactiveProps={{ className: "text-gray-500 border-transparent hover:text-gray-300" }}
            >
                Tech
            </Link>
            
            <Link 
                to="/contact" 
                className={baseLinkClass}
                activeProps={{ className: "text-gray-200 border-[#00d8ff]" }}
                inactiveProps={{ className: "text-gray-500 border-transparent hover:text-gray-300" }}
            >
                Contact
            </Link>
        </nav>

        <div className="flex items-center space-x-4">
            {/* Chỗ này để sẵn ThemeToggle mà bạn đã import */}
            <ThemeToggle /> 
            <a href="#" className="bg-[#00d8ff] text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#33dfff] transition-colors shadow-[0_0_15px_rgba(0,216,255,0.3)]">
                Launch Demo
            </a>
        </div>
    </header>
  )
}