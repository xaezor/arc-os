"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function SystemMonitor() {
  const [cpuUsage, setCpuUsage] = useState(0)
  const [memoryUsage, setMemoryUsage] = useState(0)
  const [networkUsage, setNetworkUsage] = useState(0)
  const [aiActivity, setAiActivity] = useState(0)

  useEffect(() => {
    // Simulate changing system metrics
    const interval = setInterval(() => {
      setCpuUsage(Math.random() * 100)
      setMemoryUsage(Math.random() * 100)
      setNetworkUsage(Math.random() * 100)
      setAiActivity(Math.random() * 100)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="backdrop-blur-md bg-black/30 p-6 rounded-xl border border-red-900/50 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-red-400">System Diagnostics</h3>
          <p className="text-gray-300 mb-6">
            Real-time monitoring of system resources and AI activity. Arcadiious OS continuously optimizes performance
            based on usage patterns and current demands.
          </p>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">CPU Usage</span>
                <span className="text-red-400">{Math.round(cpuUsage)}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <motion.div
                  className="bg-red-500 h-2 rounded-full"
                  style={{ width: `${cpuUsage}%` }}
                  animate={{ width: `${cpuUsage}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">Memory Allocation</span>
                <span className="text-red-400">{Math.round(memoryUsage)}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <motion.div
                  className="bg-orange-500 h-2 rounded-full"
                  style={{ width: `${memoryUsage}%` }}
                  animate={{ width: `${memoryUsage}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">Network Activity</span>
                <span className="text-red-400">{Math.round(networkUsage)}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <motion.div
                  className="bg-yellow-500 h-2 rounded-full"
                  style={{ width: `${networkUsage}%` }}
                  animate={{ width: `${networkUsage}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">AI Activity</span>
                <span className="text-red-400">{Math.round(aiActivity)}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <motion.div
                  className="bg-pink-500 h-2 rounded-full"
                  style={{ width: `${aiActivity}%` }}
                  animate={{ width: `${aiActivity}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-full border-4 border-red-500/30 flex items-center justify-center p-8 max-w-[300px] mx-auto">
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
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="text-xl font-bold text-white font-orbitron">SYSTEM</div>
              <div className="text-sm text-gray-300">MONITOR</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
