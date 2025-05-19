import { NavMenu } from "@/components/nav-menu"
import { HeroSection } from "@/components/hero-section"
import { AICapabilities } from "@/components/ai-capabilities"
import { ModulesSection } from "@/components/modules-section"
import { DeveloperSection } from "@/components/developer-section"
import { SystemMonitor } from "@/components/system-monitor"
import { GlowingButton } from "@/components/glowing-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-red-900 via-red-950 to-black text-white overflow-hidden">
      {/* Navigation */}
      <NavMenu />

      {/* Hero Section */}
      <HeroSection />

      {/* OS Overview Section */}
      <section id="overview" className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-red-500 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full border border-red-400 animate-ping animation-delay-700"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-orbitron text-center">
            OS <span className="text-red-500">Overview</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="backdrop-blur-md bg-black/30 p-6 rounded-xl border border-red-900/50">
              <h3 className="text-2xl font-bold mb-4 text-red-400">It is just a concept</h3>
              <p className="text-gray-300 mb-6">
                Arcadiios OS is a next-generation operating system built from the ground up with
                <span className="text-red-400 font-semibold"> AI as a core component</span> — not as an application or
                tool, but as an
                <span className="text-red-400 font-semibold"> embedded, intelligent system entity</span>.
              </p>
              <p className="text-gray-300">
                The OS dynamically adapts, optimizes resources, automates user workflows, and learns over time, creating
                a seamless, proactive, and highly efficient user experience.
              </p>
            </div>

            <div className="relative">
              <div className="w-full max-w-[500px] mx-auto">
                <div className="aspect-square rounded-full border-4 border-red-500/30 flex items-center justify-center p-8">
                  <div className="absolute inset-0 rounded-full border border-red-400/20 animate-[spin_20s_linear_infinite]"></div>
                  <div className="absolute inset-[20px] rounded-full border border-red-400/30 animate-[spin_15s_linear_infinite_reverse]"></div>
                  <div className="absolute inset-[40px] rounded-full border border-red-400/40 animate-[spin_10s_linear_infinite]"></div>

                  <div className="relative z-10 text-center">
                    <div className="text-5xl text-red-500 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4" />
                        <path d="M12 8h.01" />
                      </svg>
                    </div>
                    <div className="text-xl font-bold text-white font-orbitron">Arcadiios</div>
                    <div className="text-sm text-gray-300">SYSTEMS AI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Systems AI Capabilities */}
      <AICapabilities />

      {/* Modules & Services */}
      <ModulesSection />

      {/* Developer Integration */}
      <DeveloperSection />

      {/* Live System Monitor */}
      <section id="monitor" className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 font-orbitron text-center">
            Live <span className="text-red-500">System Monitor</span>
          </h2>

          <SystemMonitor />

          <div className="mt-16 text-center">
            <GlowingButton>Start OS</GlowingButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-red-900/30 py-8 backdrop-blur-md bg-black/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 Arcadiios OS. A <a href="https://xaezor.github.com">XAEZOR</a> Product</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
