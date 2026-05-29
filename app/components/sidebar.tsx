'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar() {
  const pathname = usePathname()

  // Maps your old tabs directly to real Next.js route paths
  const navigationRoutes = [
    { name: 'home', path: '/' },
    { name: 'profile', path: '/profile' },
    { name: 'vault', path: '/vault' },
    { name: 'secure-line', path: '/secure-line' },
  ] as const

  return (
    <section className='w-80 border-r border-[var(--color-border-subtle)] p-6 flex flex-col justify-between hidden md:flex bg-black/20 font-mono'>
      <div className='space-y-6'>
        <div>
          <h1 className='text-sm font-bold tracking-wider uppercase text-[var(--color-text-main)]'>
            Systems Architect
          </h1>
          <p className='text-[11px] text-[var(--color-text-dim)] mt-0.5'>
            &gt; Fullstack Software Engineer
          </p>
        </div>

        {/* Dynamic Navigation Directory Links */}
        <nav className='space-y-2 text-xs'>
          <div className='text-[10px] text-[var(--color-text-dim)] uppercase tracking-widest mb-2'>
            /root_directory
          </div>

          {navigationRoutes.map((route, i) => {
            // Check if the current URL matches this route path exactly
            const isActive = pathname === route.path

            return (
              <Link
                key={route.path}
                href={route.path}
                className={`flex items-center gap-2 text-left w-full transition-colors cursor-pointer group text-xs ${
                  isActive
                    ? 'text-[var(--color-accent-action)]'
                    : 'text-[var(--color-text-dim)] hover:text-[var(--color-text-main)]'
                }`}
              >
                <span>0{i + 1}.</span>
                <span
                  className={
                    isActive ? 'underline font-bold' : 'group-hover:underline'
                  }
                >
                  ~/{route.name}
                  {isActive && ' [ACTIVE]'}
                </span>
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Outbound Link Node */}
      <div className='border-t border-[var(--color-border-subtle)] pt-4'>
        <a
          href='https://linkedin.com'
          target='_blank'
          rel='noreferrer'
          className='text-[10px] tracking-widest text-[var(--color-text-dim)] hover:text-[var(--color-text-main)] transition-colors flex items-center gap-2 uppercase'
        >
          <FontAwesomeIcon icon={faCodeBranch} className='text-[9px]' />
          <span>[LINKEDIN_SECURE_NODE]</span>
        </a>
      </div>
    </section>
  )
}
