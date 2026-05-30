'use client'

import React, { useState, useEffect } from 'react'

export default function TelemetryBar() {
  const [timestamp, setTimestamp] = useState('')

  useEffect(() => {
    // Standardizes the clock rendering safely on the client side
    const updateClock = () => {
      const now = new Date()
      // Formats to a clean military/cyber string: DD MMM YYYY // HH:MM:SS
      const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }
      const formatted = now
        .toLocaleDateString('en-US', options)
        .replace(/,/g, '')
      setTimestamp(formatted.toUpperCase())
    }

    updateClock()
    const interval = setInterval(updateClock, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='h-7 bg-zinc-950 border-b border-[var(--color-border-subtle)] px-8 flex items-center justify-between font-mono text-[9px] tracking-widest text-[var(--color-text-dim)] uppercase select-none z-50'>
      {/* LEFT: HEARTBEAT STATUS PING */}
      <div className='flex items-center gap-2.5'>
        <span className='relative flex h-1.5 w-1.5'>
          <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span>
          <span className='relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500'></span>
        </span>
        <span className='font-semibold'>
          SYS_STATUS: <span className='text-emerald-400 font-bold'>ONLINE</span>
        </span>
      </div>

      {/* CENTER: EXTRA TERMINAL METRICS (HIDDEN ON SMALL VIEWPORTS) */}
      <div className='hidden md:flex items-center gap-6 text-zinc-600'>
        <span>NETWORK_NODE: SECURE_UPLINK</span>
        <span>CORE_TEMP: 36°C</span>
        <span>LOC: CR_MATRIX</span>
      </div>

      {/* RIGHT: LIVE SYSTEM TIMESTAMP */}
      <div className='font-bold text-zinc-400 tabular-nums'>
        {timestamp || 'INITIALIZING_CLOCK...'}
      </div>
    </div>
  )
}
