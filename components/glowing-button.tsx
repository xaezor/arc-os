"use client"

import type { ButtonHTMLAttributes, ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlowingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "solid" | "outline"
}

export function GlowingButton({ children, className, variant = "solid", ...props }: GlowingButtonProps) {
  return (
    <motion.button
      className={cn(
        "relative px-8 py-3 rounded-md font-orbitron text-lg font-bold overflow-hidden transition-all duration-300",
        variant === "solid"
          ? "bg-red-600 text-white hover:bg-red-700"
          : "bg-transparent border border-red-500 text-red-500 hover:text-white hover:border-red-400",
        "before:absolute before:inset-0 before:opacity-0 before:bg-red-500/20 before:hover:opacity-100 before:transition-opacity",
        "after:absolute after:inset-0 after:opacity-0 after:hover:opacity-100 after:transition-opacity after:blur-xl after:bg-red-500/20",
        className,
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}
