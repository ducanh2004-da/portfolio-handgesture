// file: components/Footer.tsx
import { Link } from '@tanstack/react-router'

export default function Footer() {
  return (
    // Sử dụng border-t để tạo đường kẻ mờ ngăn cách nội dung phía trên với Footer
    <footer className="mt-20 border-t border-[var(--line)] px-4 pb-14 pt-10 text-[var(--sea-ink-soft)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
        
        {/* Cột Trái: Tên thương hiệu & Bản quyền */}
        <div className="flex flex-col items-center md:items-start space-y-1.5">
          <div className="text-[15px] font-bold tracking-widest text-[#e2f1ff] uppercase">
            Kinetic Intelligence
          </div>
          {/* Text siêu nhỏ, viết hoa toàn bộ và căn thưa chữ cho giống thiết kế */}
          <div className="text-[10px] tracking-[0.15em] text-gray-500 uppercase font-medium">
            &copy; {new Date().getFullYear()} Kinetic Intelligence. Built with MediaPipe.
          </div>
        </div>

        {/* Cột Giữa: Các đường dẫn điều hướng (Links) */}
        <nav className="flex items-center space-x-6 md:space-x-10 text-[13px] text-gray-400 font-medium">
          <a href="#" className="hover:text-white transition-colors">
            Documentation
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            Github
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms
          </a>
        </nav>

        {/* Cột Phải: Nút Đổi ngôn ngữ / Khu vực (Icon Quả địa cầu) */}
        <div>
          <button 
            aria-label="Change Language"
            className="p-2.5 rounded-xl border border-gray-800/60 bg-[#15171c] hover:bg-[#1a1c23] hover:border-gray-600 transition-all group shadow-sm"
          >
            {/* SVG Icon Quả địa cầu */}
            <svg 
              className="w-5 h-5 text-gray-500 group-hover:text-[#00d8ff] transition-colors" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </button>
        </div>

      </div>
    </footer>
  )
}