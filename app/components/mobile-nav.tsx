'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { executeRegistrySearch } from './search-engine' // Clean connection to your brain file

export default function MobileNav() {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const navigationRoutes = [
    { name: 'home', path: '/' },
    { name: 'profile', path: '/profile' },
    { name: 'vault', path: '/vault' },
    { name: 'secure-line', path: '/secure-line' },
  ] as const

  const currentActiveName =
    navigationRoutes.find((r) => r.path === pathname)?.name || 'MENU'

  // Run our unified engine logic
  const mobileFilteredResults = executeRegistrySearch(searchQuery)
  const hasTyped = searchQuery.trim().length > 0

  const handleMobileNavigate = (url: string) => {
    router.push(url)
    setSearchQuery('')
    setIsOpen(false) // Safe drop menu closure array
  }

  return (
    <nav className='md:hidden w-full border-b border-[var(--color-border-subtle)] bg-zinc-950/95 backdrop-blur-md font-mono text-xs select-none relative z-50'>
      {/* MOBILE BAR STICKY LAYER HEADER */}
      <div className='flex items-center justify-between px-4 py-2'>
        <div className='flex items-center gap-2'>
          <span className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse' />
          <span className='text-[var(--color-text-dim)] uppercase text-[10px] tracking-wider'>
            SYS_NODE:{' '}
            <span className='text-[var(--color-text-main)] font-bold'>
              ~/{currentActiveName}
            </span>
          </span>
        </div>

        <button
          type='button'
          onClick={() => setIsOpen(!isOpen)}
          className={`px-2 py-1 border rounded-xs text-[10px] font-bold tracking-widest transition-all cursor-pointer ${
            isOpen
              ? 'border-[var(--color-accent-action)] text-[var(--color-accent-action)] bg-[var(--color-accent-action)]/10'
              : 'border-zinc-800 text-zinc-400'
          }`}
        >
          {isOpen ? '[ CLOSE_OVERRIDE ]' : '[ MENU_OVERRIDE ]'}
        </button>
      </div>

      {/* OVERLAY PANEL CONSOLE DRAWER */}
      <div
        className={`absolute top-full left-0 right-0 border-b border-[var(--color-border-subtle)] bg-zinc-950/98 shadow-2xl transition-all duration-300 overflow-hidden ${
          isOpen
            ? 'max-h-[100vh] opacity-100 visible'
            : 'max-h-0 opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className='p-4 space-y-4 bg-black/60 max-h-[calc(100vh-45px)] overflow-y-auto'>
          {/* TACTICAL INTEGRATED MOBILE SEARCH BAR */}
          <div className='relative border border-zinc-800 focus-within:border-[var(--color-accent-action)]/40 bg-zinc-900/30 p-2 rounded-xs flex items-center gap-2'>
            <span className='text-[var(--color-accent-action)] select-none pl-1'>
              &gt;_
            </span>
            <input
              type='text'
              placeholder='EXECUTE_SEARCH_PROTOCOL...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='w-full bg-transparent border-none outline-none text-[11px] text-[var(--color-text-main)] uppercase tracking-wider p-0 focus:ring-0 focus:outline-none'
            />
            {searchQuery && (
              <button
                type='button'
                onClick={() => setSearchQuery('')}
                className='text-[9px] text-zinc-600 hover:text-zinc-400 px-1 font-mono font-bold'
              >
                [CLR]
              </button>
            )}
          </div>

          {/* DYNAMIC SEARCH CONSOLE ENGINE FOR MOBILE VIEW */}
          {hasTyped && (
            <div className='border border-zinc-800/80 bg-zinc-950 p-2 space-y-1 max-h-60 overflow-y-auto rounded-xs text-left'>
              <div className='text-[8px] text-zinc-500 uppercase tracking-wider pb-1 border-b border-zinc-900 mb-1'>
                // PORTAL_SEARCH_OUTPUT
              </div>

              {mobileFilteredResults.length > 0 ? (
                mobileFilteredResults.map((item) => (
                  <button
                    type='button'
                    key={`mobile-${item.id}`}
                    onClick={() => handleMobileNavigate(item.targetUrl)}
                    className='w-full text-left p-2 hover:bg-zinc-900/50 flex flex-col gap-0.5 border border-transparent active:border-[var(--color-accent-action)]/20 transition-all rounded-xs cursor-pointer'
                  >
                    <div className='flex items-center justify-between gap-2'>
                      <span className='text-[11px] font-bold text-[var(--color-text-main)] uppercase truncate'>
                        {item.title}
                      </span>
                      <span className='text-[8px] tracking-wider text-[var(--color-accent-action)] font-bold px-1 bg-[var(--color-accent-action)]/5 border border-[var(--color-accent-action)]/20 rounded-xs uppercase'>
                        {item.category}
                      </span>
                    </div>
                    <p className='text-[10px] text-zinc-500 truncate w-full'>
                      {item.subtitle}
                    </p>
                  </button>
                ))
              ) : (
                <div className='text-[10px] text-amber-500/80 p-2 italic uppercase tracking-wide'>
                  ✖ NO_MATCHING_RECORDS
                </div>
              )}
            </div>
          )}

          {/* SYSTEM DIRECTORY LINKS NAVIGATION */}
          <div className='space-y-1'>
            <div className='text-[9px] text-zinc-600 uppercase tracking-widest px-1 mb-1'>
              // SUBSYSTEM_LINKS
            </div>

            {navigationRoutes.map((route, i) => {
              const isActive = pathname === route.path
              const isLastItem = i === navigationRoutes.length - 1
              const treeSymbol = isLastItem ? '└──' : '├──'

              return (
                <Link
                  key={route.path}
                  href={route.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between p-2 text-xs tracking-wider border rounded-xs transition-all ${
                    isActive
                      ? 'border-[var(--color-accent-action)]/30 bg-[var(--color-accent-action)]/[0.04] text-[var(--color-text-main)] font-bold'
                      : 'border-transparent text-[var(--color-text-dim)]'
                  }`}
                >
                  <div className='flex items-center gap-3'>
                    <span
                      className={
                        isActive
                          ? 'text-[var(--color-accent-action)] opacity-100'
                          : 'text-[var(--color-accent-action)] opacity-50'
                      }
                    >
                      {isActive ? '●' : treeSymbol}
                    </span>
                    <span className='uppercase text-[11px]'>
                      ~/{route.name}
                    </span>
                  </div>
                  <span
                    className={`text-[9px] ${isActive ? 'text-[var(--color-accent-action)]' : 'text-zinc-800'}`}
                  >
                    [0{i + 1}]
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
