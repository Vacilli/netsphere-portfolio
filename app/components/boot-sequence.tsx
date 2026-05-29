'use client'

import { useEffect, useState } from 'react'

interface BootSequenceProps {
  // Adding the optional status argument ensures it supports your new success/fail states
  onComplete: (status?: 'success' | 'failed') => void
}

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [progress, setProgress] = useState(0)
  const [isReady, setIsReady] = useState(false)
  const [isTerminated, setIsTerminated] = useState(false)

  // 1. Cleaner Progress Bar Logic inside app/components/BootSequence.tsx
  useEffect(() => {
    if (progress >= 100) return

    const timeout = setTimeout(() => {
      // Generate organic steps
      const increment = Math.floor(Math.random() * 8) + 2

      setProgress((prev) => {
        const nextProgress = Math.min(prev + increment, 100)

        // If this specific increment pushes us to 100, schedule the ready state
        // pushing it out of the synchronous rendering timeline
        if (nextProgress === 100) {
          setTimeout(() => setIsReady(true), 50)
        }

        return nextProgress
      })
    }, 40)

    return () => clearTimeout(timeout)
  }, [progress])

  // 2. Multi-Platform System Ignition Listener
  useEffect(() => {
    if (!isReady) return

    // Handles keyboard activation on desktops
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        triggerSystemBreach()
      }
    }

    // Handles touch taps on mobile and mouse clicks on desktop
    const handleGlobalClick = () => {
      triggerSystemBreach()
    }

    const triggerSystemBreach = () => {
      setIsTerminated(true)
      onComplete('success') // Fires our downward matrix cascade curtain
    }

    // Bind the hardware interfaces
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('click', handleGlobalClick)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('click', handleGlobalClick)
    }
  }, [isReady])

  return (
    <div
      className={`fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black transition-all duration-1000 ease-in-out ${
        isTerminated
          ? 'opacity-0 scale-105 pointer-events-none'
          : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Grain Effect from your Codex OS */}
      <div className='absolute inset-0 bg-[url("https://grainy-gradients.vercel.app/noise.svg")] opacity-20 pointer-events-none' />

      <div className='relative flex flex-col items-center max-w-md w-full px-6 font-mono'>
        {/* Terminal Telemetry Lines */}
        <div className='w-full text-left text-[11px] text-zinc-500 mb-6 space-y-1'>
          <div>[NETSPHERE PORTFOLIO CORE v2.6.0]</div>
          <div>UPLINK: ACTIVE // SECURE_NODE_OK</div>
          {progress > 40 && (
            <div className='text-emerald-500/80'>
              &gt; INITIALIZING SECURITY PROTOCOLS... OK
            </div>
          )}
          {progress > 75 && (
            <div className='text-emerald-500/80'>
              &gt; LOADING FULLSTACK MODULES....... OK
            </div>
          )}
        </div>

        {/* Dynamic Progress Feedback */}
        <div className='w-full mb-3 flex justify-between text-[10px] tracking-[0.3em] text-emerald-400 uppercase'>
          <span>
            {isReady
              ? 'SYSTEM_READY_FOR_EXECUTION'
              : 'Initializing_Sequence...'}
          </span>
          <span>{progress}%</span>
        </div>

        {/* The Progress Bar Container */}
        <div className='h-[2px] w-full bg-zinc-900 relative overflow-hidden border border-zinc-800/50 rounded-sm'>
          <div
            className='h-full bg-emerald-400 transition-all duration-200 ease-out shadow-[0_0_15px_rgba(52,211,153,0.6)]'
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* The Video Game Interactivity Call to Action */}
        <div className='h-12 mt-8 flex items-center justify-center'>
          {isReady ? (
            <button className='text-[11px] tracking-[0.2em] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 rounded uppercase animate-pulse cursor-pointer hover:bg-emerald-500/20 transition-all'>
              &gt; PRESS ENTER OR CLICK TO EXECUTE CORE.EXE &lt;
            </button>
          ) : (
            <div className='flex gap-3'>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className='w-1.5 h-1.5 bg-zinc-700 rounded-full animate-ping'
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: '1.5s',
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
