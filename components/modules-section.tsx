"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Layers, Database, Network, Lock, Terminal, Cpu } from "lucide-react"

export function ModulesSection() {
  const [activeTab, setActiveTab] = useState(0)

  const modules = [
    {
      title: "Kernel Layer",
      icon: <Cpu className="w-6 h-6" />,
      description:
        "The intelligent core of Arcadiious OS, featuring smart scheduling, memory optimization, process prediction, and anomaly detection.",
      features: [
        "AI-powered process scheduling",
        "Dynamic memory allocation",
        "Predictive resource management",
        "Self-healing capabilities",
        "Real-time system monitoring",
      ],
    },
    {
      title: "System Services",
      icon: <Layers className="w-6 h-6" />,
      description:
        "Intelligent file access prediction, dynamic security management, and adaptive resource allocation for optimal performance.",
      features: [
        "Predictive file caching",
        "Smart background services",
        "Adaptive power management",
        "Context-aware notifications",
        "Intelligent update scheduling",
      ],
    },
    {
      title: "Network Stack",
      icon: <Network className="w-6 h-6" />,
      description:
        "AI-based firewall, bandwidth prediction, and secure protocol optimization for enhanced connectivity.",
      features: [
        "Intelligent traffic prioritization",
        "Adaptive bandwidth allocation",
        "Predictive connection management",
        "Automatic VPN configuration",
        "Smart network troubleshooting",
      ],
    },
    {
      title: "Security Module",
      icon: <Lock className="w-6 h-6" />,
      description:
        "Advanced threat detection, behavioral analysis, and proactive security measures to keep your system safe.",
      features: [
        "AI-powered threat detection",
        "Behavioral anomaly identification",
        "Automatic vulnerability patching",
        "Secure enclave for sensitive data",
        "Biometric authentication integration",
      ],
    },
    {
      title: "Developer APIs",
      icon: <Terminal className="w-6 h-6" />,
      description: "Native AI APIs for applications to leverage OS-level intelligence and enhance functionality.",
      features: [
        "Neural processing unit access",
        "Context-aware API suggestions",
        "Intelligent code completion",
        "Automated debugging assistance",
        "Performance optimization insights",
      ],
    },
    {
      title: "Data Management",
      icon: <Database className="w-6 h-6" />,
      description:
        "Smart data organization, predictive caching, and intelligent backup systems for efficient data handling.",
      features: [
        "Predictive data prefetching",
        "Intelligent storage optimization",
        "Automated backup scheduling",
        "Content-aware file organization",
        "Smart data recovery",
      ],
    },
  ]

  return (
    <section id="modules" className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden bg-black/20">
      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-orbitron">
            Modules & <span className="text-red-500">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the core components that make Arcadiious OS the most advanced intelligent operating system.
          </p>
        </motion.div>

        <div className="backdrop-blur-md bg-black/30 p-6 rounded-xl border border-red-900/50 max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {modules.map((module, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors ${
                  activeTab === index ? "bg-red-600 text-white" : "bg-black/30 text-gray-300 hover:bg-red-900/30"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {module.icon}
                <span className="hidden md:inline">{module.title}</span>
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-red-400 flex items-center gap-2">
                {modules[activeTab].icon}
                {modules[activeTab].title}
              </h3>
              <p className="text-gray-300 mb-6">{modules[activeTab].description}</p>
              <ul className="space-y-2">
                {modules[activeTab].features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-full border-4 border-red-500/30 flex items-center justify-center p-8 max-w-[300px] mx-auto">
                <div className="absolute inset-0 rounded-full border border-red-400/20 animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute inset-[20px] rounded-full border border-red-400/30 animate-[spin_15s_linear_infinite_reverse]"></div>
                <div className="absolute inset-[40px] rounded-full border border-red-400/40 animate-[spin_10s_linear_infinite]"></div>

                <div className="relative z-10 text-center">
                  <div className="text-5xl text-red-500 mb-2">{modules[activeTab].icon}</div>
                  <div className="text-xl font-bold text-white font-orbitron">{modules[activeTab].title}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
