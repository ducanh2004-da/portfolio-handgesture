// file: routes/about.tsx
import { createFileRoute } from '@tanstack/react-router'

// 1. Định nghĩa Route cho TanStack Start
export const Route = createFileRoute('/about/')({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: 'The Intelligence Core | Kinetic AI' },
      { name: 'description', content: 'Specialized minds shaping the future of spatial interaction.' }
    ]
  })
})

// 2. Dữ liệu thành viên nhóm
const teamMembers = [
  {
    name: 'Alex Thorne',
    role: 'LEAD CV ARCHITECT',
    // Dùng ảnh placeholder tạm thời, bạn thay bằng đường dẫn ảnh thực tế nhé
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    isOffset: false, // Dùng để quyết định thẻ này có bị đẩy xuống tạo hiệu ứng so le không
  },
  {
    name: 'Sarah Chen',
    role: 'NEURAL MAPPING SPECIALIST',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    isOffset: true, // Thẻ ở giữa được đẩy xuống dưới
  },
  {
    name: 'Marcus Volkov',
    role: 'INTERACTION DESIGNER',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    isOffset: false,
  },
]

// 3. Component giao diện chính
function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Phần Header của trang About */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <h3 className="text-[11px] tracking-[0.15em] text-[#a5a1b8] font-semibold uppercase mb-4">
              Engineers of Perception
            </h3>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              The Intelligence Core
            </h1>
          </div>
          
          <p className="max-w-xs text-gray-400 text-sm leading-relaxed">
            Specialized minds shaping the future of spatial interaction through gesture mapping.
          </p>
        </div>

        {/* Phần Grid hiển thị thành viên */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              // Thêm margin-top cho thẻ ở giữa để tạo hiệu ứng so le (staggered) trên màn hình lớn
              className={`relative rounded-2xl overflow-hidden group aspect-[3/4] ${
                member.isOffset ? 'md:mt-16' : ''
              }`}
            >
              {/* Ảnh chân dung với hiệu ứng Grayscale */}
              <img 
                src={member.imageUrl} 
                alt={member.name} 
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 contrast-125 transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Lớp Overlay Gradient để làm nổi bật chữ */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101216] via-[#101216]/60 to-transparent opacity-90"></div>
              
              {/* Thông tin Text nằm đè lên Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-8 transition-transform duration-500 transform group-hover:-translate-y-2">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {member.name}
                </h2>
                <p className="text-[10px] tracking-[0.15em] font-semibold text-[#a5a1b8] uppercase">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  )
}