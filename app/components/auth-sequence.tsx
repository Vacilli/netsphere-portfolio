'use client'
import { useEffect, useState } from 'react'

interface AuthSequenceProps {
  status: 'loading' | 'success' | 'failed'
  onComplete: () => void
}

export default function AuthSequence({
  status,
  onComplete,
}: AuthSequenceProps) {
  const [progress, setProgress] = useState(0)
  const [isSequenceDone, setIsSequenceDone] = useState(false)

  // 1. Progress Bar Tick Engine (Fixed Cascading Render Error)
  useEffect(() => {
    if (progress >= 100) return

    const timeout = setTimeout(() => {
      const increment = Math.floor(Math.random() * 12) + 4
      setProgress((prev) => {
        const nextProgress = Math.min(prev + increment, 100)

        // Push this state change out of the synchronous render pass safely
        if (nextProgress === 100) {
          setTimeout(() => setIsSequenceDone(true), 50)
        }

        return nextProgress
      })
    }, 45)

    return () => clearTimeout(timeout)
  }, [progress])

  // Handles click validation anywhere on the viewport
  const handleViewportClick = () => {
    if (isSequenceDone) {
      onComplete()
    }
  }

  return (
    <div
      onClick={handleViewportClick}
      className='fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black font-mono select-none animate-in fade-in duration-300'
    >
      {/* Background Matrix Grain Layout */}
      <div className='absolute inset-0 bg-[url("https://grainy-gradients.vercel.app/noise.svg")] opacity-20 pointer-events-none' />

      <div className='relative flex flex-col items-center max-w-md w-full px-6 pointer-events-none'>
        {/* Terminal Header Metadata Feed */}
        <div className='w-full text-left text-[11px] text-zinc-500 mb-6 space-y-1'>
          <div>[NETSPHERE SECURE PORTAL GATEWAY]</div>
          <div>DECK_LINK: ATTEMPTING HANDSHAKE...</div>
          {progress > 30 && (
            <div className='text-emerald-500/80'>
              &gt; CAPTURING ENCRYPTION HASHES... OK
            </div>
          )}
          {progress > 70 && (
            <div className='text-emerald-500/80'>
              &gt; EVALUATING ACCESS CREDENTIALS... OK
            </div>
          )}
        </div>

        {/* Top Progress Track Text Indicator */}
        <div className='w-full mb-3 flex justify-between text-[10px] tracking-[0.3em] text-emerald-400 uppercase'>
          <span>
            {!isSequenceDone
              ? 'RUNNING_DECRYPT_ROUTINE...'
              : status === 'success'
                ? 'IDENTITY_VERIFIED'
                : 'CRITICAL_SECURITY_EXCEPTION'}
          </span>
          <span>{progress}%</span>
        </div>

        {/* Dynamic Progress Bar Container */}
        <div className='h-[2px] w-full bg-zinc-900 relative overflow-hidden border border-zinc-800/50 rounded-sm mb-8'>
          <div
            className={`h-full transition-all duration-150 ease-out ${
              !isSequenceDone
                ? 'bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.6)]'
                : status === 'success'
                  ? 'bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.6)]'
                  : 'bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.6)]'
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Dynamic Telemetry CTA Display */}
        <div className='h-12 flex items-center justify-center w-full'>
          {!isSequenceDone ? (
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
          ) : status === 'success' ? (
            <div className='w-full text-[11px] tracking-[0.2em] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-4 py-3 rounded uppercase animate-pulse text-center'>
              &gt; ACCESS GRANTED // CLICK ANYWHERE TO CONTINUE &lt;
            </div>
          ) : (
            <div className='w-full text-[11px] tracking-[0.2em] text-red-400 bg-red-500/10 border border-red-500/30 px-4 py-3 rounded uppercase animate-pulse text-center'>
              &gt; ACCESS DENIED // CLICK ANYWHERE TO RETURN &lt;
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
