"use client"

import { motion } from "framer-motion"
import { Brain, Cpu, Shield, Zap, Clock, Fingerprint } from "lucide-react"
import { FeatureCard } from "./feature-card"

export function AICapabilities() {
  const features = [
    {
      title: "Real-time AI Decision Making",
      description:
        "Arcadiious OS makes intelligent decisions in real-time, optimizing system performance based on your usage patterns.",
      icon: <Brain />,
    },
    {
      title: "Autonomous System Optimization",
      description:
        "The OS continuously learns and adapts to optimize resource allocation, power usage, and application performance.",
      icon: <Cpu />,
    },
    {
      title: "Adaptive UI/UX",
      description:
        "The interface evolves based on your preferences and habits, presenting the most relevant information and controls.",
      icon: <Zap />,
    },
    {
      title: "Context-aware Computing",
      description:
        "Arcadiious understands your context and anticipates your needs, preparing resources before you even ask.",
      icon: <Clock />,
    },
    {
      title: "Advanced Security Intelligence",
      description: "AI-powered security that detects and neutralizes threats before they can compromise your system.",
      icon: <Shield />,
    },
    {
      title: "Biometric Integration",
      description:
        "Seamless integration with biometric authentication systems for enhanced security and personalization.",
      icon: <Fingerprint />,
    },
  ]

  return (
    <section id="capabilities" className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full border border-red-500 animate-ping animation-delay-300"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full border border-red-400 animate-pulse"></div>
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
            Systems <span className="text-red-500">AI Capabilities</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Arcadiious OS integrates AI at the core level, enabling unprecedented intelligence and adaptability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}
