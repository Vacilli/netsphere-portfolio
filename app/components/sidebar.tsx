'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname()

  // Maps your tabs directly to real Next.js route paths
  const navigationRoutes = [
    { name: 'home', path: '/' },
    { name: 'profile', path: '/profile' },
    { name: 'vault', path: '/vault' },
    { name: 'secure-line', path: '/secure-line' },
  ] as const

  return (
    <section className='w-80 border-r border-[var(--color-border-subtle)] p-6 flex flex-col justify-between hidden md:flex bg-black/20 font-mono select-none'>
      {/* TOP: IDENTITY & SYSTEMS FILESYSTEM */}
      <div className='space-y-6'>
        {/* OPERATOR HEADER BRANDING */}
        <div className='border-b border-zinc-900 pb-4'>
          <h1 className='text-sm font-bold tracking-wider uppercase text-[var(--color-text-main)]'>
            Systems Architect
          </h1>
          <p className='text-[11px] text-[var(--color-text-dim)] mt-0.5 tracking-wide'>
            &gt; Fullstack Software Engineer
          </p>
        </div>

        {/* RE-ENGINEERED DIRECTORY TREE */}
        <nav className='space-y-1'>
          <div className='text-[9px] text-zinc-600 uppercase tracking-widest px-1 mb-2'>
            // CORE_DIRECTORY_TREE
          </div>

          {navigationRoutes.map((route, i) => {
            const isActive = pathname === route.path

            // CALCULATE THE BOUNDARY MAPPER
            const isLastItem = i === navigationRoutes.length - 1
            const treeSymbol = isLastItem ? '└──' : '├──'

            return (
              <Link
                key={route.path}
                href={route.path}
                className={`group flex items-center justify-between p-1 text-[11px] tracking-wider transition-all duration-200 rounded-xs border cursor-pointer ${
                  isActive
                    ? 'border-[var(--color-accent-action)]/30 bg-[var(--color-accent-action)]/[0.03] text-[var(--color-text-main)] font-bold'
                    : 'border-transparent text-[var(--color-text-dim)] hover:text-[var(--color-text-main)] hover:bg-zinc-900/40'
                }`}
              >
                <div className='flex items-center gap-2.5'>
                  {/* Structural Directory Node Vector Lines */}
                  <span
                    className={`transition-all duration-200 font-bold text-xs ${
                      isActive
                        ? 'text-[var(--color-accent-action)] opacity-100 scale-100'
                        : 'text-[var(--color-accent-action)] opacity-50 group-hover:opacity-100 group-hover:text-[var(--color-text-main)]'
                    }`}
                  >
                    {/* Keeps the indicator clear but prints the true directory shape when inactive */}
                    {isActive ? '●' : treeSymbol}
                  </span>

                  {/* Directory Token Path Text */}
                  <span
                    className={`uppercase transition-transform duration-200 ${
                      isActive ? 'translate-x-0' : 'group-hover:translate-x-0.5'
                    }`}
                  >
                    ~/{route.name}
                  </span>
                </div>

                {/* Right Side File-Index Alignment Metadata */}
                <span
                  className={`text-[9px] font-mono font-bold transition-colors duration-200 ${
                    isActive
                      ? 'text-[var(--color-accent-action)]'
                      : 'text-zinc-700 group-hover:text-zinc-500'
                  }`}
                >
                  [0{i + 1}]
                </span>
              </Link>
            )
          })}
        </nav>
      </div>

      {/* BOTTOM: OUTBOUND MATRIX PORTS */}
      <div className='border-t border-[var(--color-border-subtle)] pt-4 mt-auto space-y-3'>
        {/* Connection Telemetry Label */}
        <div className='flex items-center justify-between text-[9px] text-zinc-600 tracking-widest uppercase px-1'>
          <span>// EXT_UPLINK_PORTS</span>
          <span className='text-emerald-500/60 animate-pulse'>[READY]</span>
        </div>

        <div className='flex flex-col gap-1.5'>
          {/* GITHUB NODE */}
          <a
            href='https://github.com/repos?q=owner%3A%40me'
            target='_blank'
            rel='noreferrer'
            className='group relative text-[10px] tracking-widest text-[var(--color-text-dim)] hover:text-[var(--color-text-main)] flex items-center justify-between p-2 border border-zinc-900 bg-zinc-950/40 hover:border-[var(--color-accent-action)]/30 hover:bg-[var(--color-accent-action)]/5 rounded-xs transition-all duration-300'
          >
            <div className='flex items-center gap-2.5'>
              <span className='text-[var(--color-accent-action)] opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-[8px]'>
                &gt;
              </span>
              <span className='group-hover:translate-x-0.5 transition-transform'>
                [GITHUB_SECURE_PORT]
              </span>
            </div>
            <span className='text-[8px] text-zinc-600 group-hover:text-[var(--color-accent-action)] tracking-normal font-bold'>
              0x41
            </span>
          </a>

          {/* LINKEDIN NODE */}
          <a
            href='https://www.linkedin.com/in/giovanni-amighetti-88434955/'
            target='_blank'
            rel='noreferrer'
            className='group relative text-[10px] tracking-widest text-[var(--color-text-dim)] hover:text-[var(--color-text-main)] flex items-center justify-between p-2 border border-zinc-900 bg-zinc-950/40 hover:border-[var(--color-accent-action)]/30 hover:bg-[var(--color-accent-action)]/5 rounded-xs transition-all duration-300'
          >
            <div className='flex items-center gap-2.5'>
              <span className='text-[var(--color-accent-action)] opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-[8px]'>
                &gt;
              </span>
              <span className='group-hover:translate-x-0.5 transition-transform'>
                [LINKEDIN_SECURE_NODE]
              </span>
            </div>
            <span className='text-[8px] text-zinc-600 group-hover:text-[var(--color-accent-action)] tracking-normal font-bold'>
              0x5A
            </span>
          </a>
        </div>

        {/* Encrypted diagnostic footprint string */}
        <div className='text-[8px] text-zinc-700 tracking-normal text-center pt-1 uppercase font-light'>
          MFR_SECURE_TUNNEL_ESTABLISHED_v4
        </div>
      </div>
    </section>
  )
}
