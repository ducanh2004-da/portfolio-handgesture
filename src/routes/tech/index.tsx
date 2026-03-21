// file: routes/tech.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tech/')({
  component: TechPage,
  head: () => ({
    meta: [
      { title: 'The Stack | Kinetic AI' },
      { name: 'description', content: 'Forged in Computer Vision. Performance benchmarks and tech stack.' }
    ]
  })
})

// --- DỮ LIỆU MẪU ---

const features = [
  {
    title: 'Real-time Inference',
    description: 'Low-latency tracking for instant responsiveness.',
    // Icon đồng hồ tốc độ (Speedometer)
    icon: <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  },
  {
    title: 'Landmark Tracking',
    description: '21 precise 3D hand coordinates per frame.',
    // Icon vân tay (Fingerprint)
    icon: <svg className="w-5 h-5 text-[#bfaee3]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" /></svg>
  },
  {
    title: 'Node Mapping',
    description: 'Advanced topology for complex gesture recognition.',
    // Icon mạng lưới (Nodes)
    icon: <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>
  },
  {
    title: 'WASM Pipeline',
    description: 'Compiling C++ intelligence for high-speed web runtimes.',
    // Icon vi mạch (Chip)
    icon: <svg className="w-5 h-5 text-[#00d8ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
  }
]

const benchmarks = [
  { label: 'COMPUTER VISION', value: '98% Accuracy', percent: '98%', colorClass: 'bg-white' },
  { label: 'MEDIAPIPE SDK', value: 'Advanced Integration', percent: '75%', colorClass: 'bg-gradient-to-r from-[#bfaee3] to-[#8a63d2]' },
  { label: 'REACT & WASM', value: 'Seamless Runtime', percent: '85%', colorClass: 'bg-white' },
]

// --- COMPONENT CHÍNH ---

function TechPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-8 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* CỘT TRÁI: Text và Grid tính năng */}
        <div>
          <h3 className="text-[11px] tracking-[0.2em] text-gray-400 font-semibold uppercase mb-6">
            The Stack
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
            Forged in <br className="hidden md:block" />
            Computer Vision
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-12 max-w-lg font-light">
            Our pipeline leverages Google's MediaPipe framework, optimized for sub-10ms inference. By utilizing WebAssembly and custom GPU acceleration, we achieve desktop-grade tracking performance directly in the browser environment.
          </p>

          {/* Grid 2x2 cho các thẻ tính năng */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item, idx) => (
              <div key={idx} className="bg-[#15171c] border border-gray-800/60 rounded-xl p-6 hover:bg-[#1a1c23] transition-colors">
                <div className="mb-4">
                  {item.icon}
                </div>
                <h4 className="text-white text-sm font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CỘT PHẢI: Bảng Performance Benchmarks */}
        <div className="bg-[#1a1c22] border border-gray-800/50 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-xl font-semibold mb-10">Performance Benchmarks</h2>
          
          <div className="space-y-8 mb-10">
            {benchmarks.map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-[11px] uppercase tracking-wider font-semibold mb-3">
                  <span className="text-gray-400">{item.label}</span>
                  <span className="text-gray-300">{item.value}</span>
                </div>
                {/* Thanh nền (Track) */}
                <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                  {/* Thanh tiến trình (Bar) */}
                  <div 
                    className={`h-full rounded-full ${item.colorClass}`} 
                    style={{ width: item.percent }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Thẻ Optimization Report nhỏ ở dưới cùng */}
          <div className="bg-[#15171c] border border-gray-800/80 rounded-xl p-5 flex items-center gap-5">
            <div className="bg-white rounded p-2">
              {/* Icon Chart */}
              <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" /></svg>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold">Optimization Report</h4>
              <p className="text-gray-500 text-xs mt-1">System currently running at 60FPS on standard mobile hardware.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}