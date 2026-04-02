// file: routes/about.tsx
import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router'
import DialogCard from '#/components/DialogCard'

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
    name: 'Do Duc Anh',
    role: 'WEB DEVELOPER & DIGITAL IMAGE ENGINEER',
    imageUrl: 'https://ik.imagekit.io/q4phit8d9e/teammates/DucAnh.png?tr=w-auto,h-auto,fo-auto',
    isOffset: false, 
  },
  {
    name: 'Le Van',
    role: 'BACKEND DEVELOPER & DIGITAL IMAGE ENGINEER',
    imageUrl: 'https://ik.imagekit.io/q4phit8d9e/teammates/LeVan.png?tr=w-auto,h-auto,fo-auto',
    isOffset: true, 
  },
  {
    name: 'Pham Thanh Phong',
    role: 'COMPUTER VISION & DIGITAL IMAGE ENGINEER',
    imageUrl: 'https://ik.imagekit.io/q4phit8d9e/teammates/Phong.png?tr=w-auto,h-auto,fo-auto',
    isOffset: false,
  },
]

// 3. Component giao diện chính
function AboutPage() {
  // Thay vì lưu boolean, ta lưu luôn dữ liệu của thành viên được chọn
  const [selectedMember, setSelectedMember] = React.useState<any>(null);
  
  // Mở dialog và set dữ liệu thành viên
  const handleClickOpen = (member: any) => {
    setSelectedMember(member);
  };

  // Đóng dialog thì reset về null
  const handleClose = () => {
    setSelectedMember(null);
  };

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

        {/* Phần Grid hiển thị thành viên - Đổi thành thẻ div thông thường */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              onClick={() => handleClickOpen(member)} // Bắt sự kiện click ở đây
              className={`relative rounded-2xl overflow-hidden group aspect-[3/4] cursor-pointer ${
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

        {/* Gọi component Dialog và truyền trạng thái xuống */}
        <DialogCard 
          open={Boolean(selectedMember)} // Nếu có member được chọn -> open = true
          onClose={handleClose} 
          member={selectedMember} 
        />
        
      </div>
    </div>
  )
}