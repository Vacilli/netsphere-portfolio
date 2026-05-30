// app/(main)/layout.tsx
'use client'

import React, { useState } from 'react'
import Sidebar from '@/app/components/sidebar'
import HeaderSearch from '@/app/components/header-search'
import BootSequence from '@/app/components/boot-sequence'
import TelemetryBar from '@/app/components/telemetry-bar'

export default function MainSiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // 1. Start as true. Every hard refresh resets this back to true automatically.
  const [isBooting, setIsBooting] = useState(true)

  const handleBootComplete = () => {
    setIsBooting(false)
  }

  // 2. Run the boot sequence on initial load or browser refresh
  if (isBooting) {
    return <BootSequence onComplete={handleBootComplete} />
  }

  // 3. Your beautiful mainframe framework layout
  return (
    <>
      <TelemetryBar />
      <div className='flex-1 flex w-full h-full overflow-hidden animate-fade-in'>
        <Sidebar />
        <section className='flex-1 flex flex-col overflow-hidden'>
          <HeaderSearch />
          <div className='flex-1 overflow-y-auto p-8 custom-scrollbar'>
            {children}
          </div>
        </section>
      </div>
      {/* SYSTEM FOOTER BAR */}
      <footer className='h-7 border-t border-zinc-900 bg-black text-[10px] text-zinc-500 font-mono px-4 flex justify-between items-center select-none tracking-widest'>
        <div>&copy; 2026 MAINFRAME.OS // SYSTEM_ARCHITECT_PORTFOLIO</div>
        <div className='text-emerald-500/70 animate-pulse'>
          SECURE_CONNECTION_ESTABLISHED // NODE_01
        </div>
      </footer>
    </>
  )
}
