"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  title: string
  description: string
  icon: ReactNode
  className?: string
}

export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
  return (
    <motion.div
      className={cn(
        "backdrop-blur-md bg-black/30 p-6 rounded-xl border border-red-900/50 h-full",
        "hover:border-red-500/50 transition-colors duration-300",
        className,
      )}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-red-500 mb-4 text-3xl">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-red-400">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}
