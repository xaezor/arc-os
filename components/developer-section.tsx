"use client"

import { motion } from "framer-motion"
import { Code, GitBranch, Terminal, Cpu, Database, Braces } from "lucide-react"

export function DeveloperSection() {
  return (
    <section id="developers" className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border border-red-500 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full border border-red-400 animate-ping animation-delay-500"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-orbitron">
            Developer <span className="text-red-500">Integration</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build intelligent applications that leverage the power of Arcadiious OS with our comprehensive developer
            tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="backdrop-blur-md bg-black/30 p-6 rounded-xl border border-red-900/50 h-full">
              <h3 className="text-2xl font-bold mb-4 text-red-400">API Documentation</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Code className="text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Neural Processing Unit</h4>
                    <p className="text-gray-300 text-sm">Access the NPU for AI-accelerated computing tasks.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Database className="text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Context Engine</h4>
                    <p className="text-gray-300 text-sm">Tap into the OS's understanding of user context.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Braces className="text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Adaptive UI Framework</h4>
                    <p className="text-gray-300 text-sm">Create interfaces that evolve based on user behavior.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Cpu className="text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Resource Prediction</h4>
                    <p className="text-gray-300 text-sm">
                      Optimize app performance with predictive resource allocation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="backdrop-blur-md bg-black/30 p-6 rounded-xl border border-red-900/50 h-full">
              <h3 className="text-2xl font-bold mb-4 text-red-400">Code Example</h3>

              <div className="bg-black/50 rounded-lg p-4 font-mono text-sm text-gray-300 overflow-x-auto">
                <pre className="language-typescript">
                  <code>{`Will be Added`}</code>
                </pre>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black/40 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Terminal className="text-red-500" />
                    <h4 className="font-bold text-white">SDK Installation</h4>
                  </div>
                  <div className="bg-black/70 p-2 rounded font-mono text-sm text-gray-300">
                    <code>will be added</code>
                  </div>
                </div>

                <div className="bg-black/40 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <GitBranch className="text-red-500" />
                    <h4 className="font-bold text-white">Version Control</h4>
                  </div>
                  <div className="text-sm text-gray-300">
                    <p>
                      Latest SDK: <span className="text-red-400">v0</span>
                    </p>
                    <p>
                      OS Compatibility: <span className="text-red-400">Arcadiious 1.0+</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
