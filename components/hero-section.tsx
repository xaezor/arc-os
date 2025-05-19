"use client"

import { motion } from "framer-motion"
import { GlowingButton } from "./glowing-button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section style={{marginTop:'3%'}} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/arcrot.png" // Place your PNG in the public folder and update the filename here
          alt="Spinning"
          width={500}
          height={500}
          className="rounded-full animate-[spin_60s_linear_infinite]"
        /></div>

        <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/arcrot2.png" 
          alt="Spinning"
          width={700}
          height={700}
          className="rounded-full animate-[spin_3s_reverse_infinite]"
        /></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 font-orbitron"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image src="/image-removebg-preview.png" alt="Logo" className="h-39 w-39 mr-2 inline-block" width={94} height={94} />
            <span className="text-red-500">rcadiios</span> OS
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The next-generation operating system with integrated Systems AI
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#"><GlowingButton>Join</GlowingButton></a>
            <a href="#overview"><GlowingButton variant="outline">Learn More</GlowingButton></a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-red-400"
        >
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </div>
    </section>
  )
}
