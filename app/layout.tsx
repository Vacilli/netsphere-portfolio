'use client'

import React, { useState } from 'react'
import { Geist_Mono } from 'next/font/google'
import '@/app/globals.css'
import Sidebar from './components/sidebar'
import HeaderSearch from './components/header-search'
import BootSequence from './components/boot-sequence'

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isBooting, setIsBooting] = useState(true)

  return (
    <html lang='en' className={`${geistMono.variable}`}>
      <body className='bg-black text-white h-screen flex flex-col overflow-hidden select-none font-mono antialiased'>
        {isBooting ? (
          /* STAGE 0: PURE FULLSCREEN BOOT ROUTINE */
          <BootSequence onComplete={() => setIsBooting(false)} />
        ) : (
          /* STAGE 1: THE PORTAL REVEAL (Animate this whole chassis entering smoothly) */
          <div className='flex-1 flex w-full h-full overflow-hidden animate-fade-in'>
            <Sidebar />

            <section className='flex-1 flex flex-col overflow-hidden'>
              <HeaderSearch />
              <div className='flex-1 overflow-y-auto p-8 custom-scrollbar'>
                {children}{' '}
                {/* Your terminal page is born right here, right now */}
              </div>
            </section>
          </div>
        )}
      </body>
    </html>
  )
}
