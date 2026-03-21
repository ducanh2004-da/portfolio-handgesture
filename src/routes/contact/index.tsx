// file: routes/contact.tsx
import { createFileRoute } from '@tanstack/react-router'

// 1. Cấu hình Route và Tối ưu SEO (Head)
export const Route = createFileRoute('/contact/')({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: 'Initiate Collaboration | Kinetic AI' },
      { name: 'description', content: 'Seeking integration partners for the next phase of human-machine interface development. Transmit your signal to our team.' },
      // Tối ưu thêm Open Graph cho việc chia sẻ link lên mạng xã hội
      { property: 'og:title', content: 'Contact Kinetic AI' },
      { property: 'og:description', content: 'Connect with the intelligence core.' },
    ]
  })
})

// 2. Component Giao diện chính
function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 flex flex-col items-center">
      
      {/* Phần Tiêu đề */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h3 className="text-[10px] tracking-[0.2em] text-gray-400 font-semibold uppercase mb-6">
          Ready to Connect
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
          Initiate Collaboration
        </h1>
        <p className="text-gray-400 text-sm md:text-base font-light">
          Seeking integration partners for the next phase of human-machine interface development.
        </p>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-2xl bg-[#1a1c22] border border-gray-800/60 rounded-xl p-8 md:p-12 shadow-2xl">
        <form className="flex flex-col space-y-6" onSubmit={(e) => e.preventDefault()}>
          
          {/* Hàng 1: Identity (Tên) & Channel (Email) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Field: Identity */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="identity" className="text-[10px] uppercase tracking-[0.15em] text-gray-500 font-semibold ml-1">
                Identity
              </label>
              <input 
                type="text" 
                id="identity"
                placeholder="Full Name" 
                className="bg-[#101216] border border-gray-800 rounded-md px-4 py-3.5 text-sm text-white placeholder-gray-700 focus:outline-none focus:border-[#00d8ff] focus:ring-1 focus:ring-[#00d8ff] transition-all"
              />
            </div>

            {/* Field: Channel */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="channel" className="text-[10px] uppercase tracking-[0.15em] text-gray-500 font-semibold ml-1">
                Channel
              </label>
              <input 
                type="email" 
                id="channel"
                placeholder="Email Address" 
                className="bg-[#101216] border border-gray-800 rounded-md px-4 py-3.5 text-sm text-white placeholder-gray-700 focus:outline-none focus:border-[#00d8ff] focus:ring-1 focus:ring-[#00d8ff] transition-all"
              />
            </div>

          </div>

          {/* Hàng 2: Payload (Nội dung) */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="payload" className="text-[10px] uppercase tracking-[0.15em] text-gray-500 font-semibold ml-1">
              Payload
            </label>
            <textarea 
              id="payload"
              rows={5}
              placeholder="Your Message" 
              className="bg-[#101216] border border-gray-800 rounded-md px-4 py-3.5 text-sm text-white placeholder-gray-700 focus:outline-none focus:border-[#00d8ff] focus:ring-1 focus:ring-[#00d8ff] transition-all resize-none"
            ></textarea>
          </div>

          {/* Nút Submit (Transmit Signal) */}
          <button 
            type="submit"
            className="w-full mt-4 bg-gradient-to-r from-[#00d8ff] to-[#7000ff] text-white py-4 rounded-md text-xs font-bold tracking-[0.15em] uppercase hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1a1c22] focus:ring-[#00d8ff]"
          >
            Transmit Signal
          </button>
          
        </form>
      </div>

    </div>
  )
}