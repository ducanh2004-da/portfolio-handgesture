import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ 
  component: App,
  head: () => ({
    meta: [
      { title: 'The Intelligence Core | Kinetic AI' },
      { name: 'description', content: 'Specialized minds shaping the future of spatial interaction.' }
    ]
  })
 })

function App() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center text-center px-4 mt-16 md:mt-0">
        
        <div className="border border-gray-700/60 rounded-full px-5 py-2 mb-10 flex items-center space-x-2 bg-gray-900/30 backdrop-blur-sm">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold">Mediapipe Powered</span>
            <span className="text-gray-600">•</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold">Ultra Low Latency</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tight leading-[1.1] mb-8">
            The Human Hand is the <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#dcedff] via-[#d8b4fe] to-[#00d8ff]">
                New Interface.
            </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12 font-light">
            Harnessing neural mapping and computer vision to bridge the gap between biological motion and machine intelligence.
        </p>

        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to='/tech' className="bg-[#00d8ff] text-black px-8 py-3.5 rounded-lg font-semibold hover:bg-[#33dfff] transition-colors shadow-[0_0_20px_rgba(0,216,255,0.2)] w-full sm:w-auto">
                Explore the Lab
            </Link>
            <a href='#' className="border border-gray-700 text-gray-300 px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-colors w-full sm:w-auto bg-[#1a1c23]/50">
                View Documentation
            </a>
        </div>

    </main>
  )
}
