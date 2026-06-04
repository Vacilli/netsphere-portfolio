'use client'

import React, { useState } from 'react'
import Sidebar from '@/app/components/sidebar'
import MobileNav from '@/app/components/mobile-nav'
import HeaderSearch from '@/app/components/header-search'
import BootSequence from '@/app/components/boot-sequence'
import TelemetryBar from '@/app/components/telemetry-bar'

export default function MainSiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isBooting, setIsBooting] = useState(true)

  const handleBootComplete = () => {
    setIsBooting(false)
  }

  if (isBooting) {
    return <BootSequence onComplete={handleBootComplete} />
  }

  return (
    <>
      {/* 1. HIDE TELEMETRY BAR ON MOBILE LAYER */}
      <div className='hidden md:block'>
        <TelemetryBar />
      </div>

      {/* 2. THE PERSISTENT MOBILE NAVIGATION SHELL */}
      <MobileNav />

      <div className='flex-1 flex flex-col md:flex-row w-full h-full overflow-hidden animate-fade-in'>
        <Sidebar />

        {/* Added 'relative' and 'z-10' to keep page contents neatly stacked below menu animations */}
        <section className='flex-1 flex flex-col overflow-hidden relative z-10'>
          {/* 3. HIDE DESKTOP SEARCH BAR UTILITY ON MOBILE NODES */}
          <div className='hidden md:block'>
            <HeaderSearch />
          </div>

          <div className='flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar'>
            {children}
          </div>
        </section>
      </div>

      <footer className='min-h-7 py-1 sm:py-0 border-t border-zinc-900 bg-black text-[10px] text-zinc-500 font-mono px-4 flex flex-col sm:flex-row justify-between sm:items-center select-none tracking-widest shrink-0 z-20 gap-1'>
        {/* FIXED: Added whitespace-nowrap and flex-wrap utility flags to handle small viewports safely */}
        <div className='whitespace-nowrap flex flex-wrap gap-x-2 items-center uppercase'>
          <span>&copy; 2026 MAINFRAME.OS</span>
          <span className='text-zinc-800 hidden xs:inline'>//</span>
          <span className='text-zinc-600 sm:text-zinc-500'>
            SYSTEM_ARCHITECT_PORTFOLIO
          </span>
        </div>

        <div className='text-emerald-500/70 animate-pulse hidden sm:block whitespace-nowrap'>
          SECURE_CONNECTION_ESTABLISHED // NODE_01
        </div>
      </footer>
    </>
  )
}
