"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export function NavMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-red-900/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-red-500 font-orbitron">
              ARCADIIOUS
            </a>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a href="#" className="text-white hover:text-red-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#overview" className="text-white hover:text-red-400 transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#capabilities" className="text-white hover:text-red-400 transition-colors">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#modules" className="text-white hover:text-red-400 transition-colors">
                  Modules
                </a>
              </li>
              <li>
                <a href="#developers" className="text-white hover:text-red-400 transition-colors">
                  Developers
                </a>
              </li>
              <li>
                <a href="#monitor" className="text-white hover:text-red-400 transition-colors">
                  Monitor
                </a>
              </li>
            </ul>
          </nav>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="px-4 pb-4">
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="block text-white hover:text-red-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#overview"
                    className="block text-white hover:text-red-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#capabilities"
                    className="block text-white hover:text-red-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Capabilities
                  </a>
                </li>
                <li>
                  <a
                    href="#modules"
                    className="block text-white hover:text-red-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Modules
                  </a>
                </li>
                <li>
                  <a
                    href="#developers"
                    className="block text-white hover:text-red-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Developers
                  </a>
                </li>
                <li>
                  <a
                    href="#monitor"
                    className="block text-white hover:text-red-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Monitor
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
