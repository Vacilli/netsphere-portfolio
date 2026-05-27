'use client'

import { useState } from 'react'
import BootSequence from './components/boot-sequence'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import ProfileManifest from './components/profile-manifest'
import DataVault from './components/data-vault'
import SecureLine from './components/secure-line'
import Home from './components/home'

export default function Page() {
  const [booted, setBooted] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  // Track which terminal subsystem module is currently active
  const [activeTab, setActiveTab] = useState<
    'home' | 'profile' | 'vault' | 'secure-line'
  >('home')

  return (
    <>
      {/* 1. Cinematic Boot Screen Layer */}
      {!booted && <BootSequence onComplete={() => setBooted(true)} />}

      {/* 2. Main Terminal Grid Framework */}
      <main className='min-h-screen h-screen w-screen bg-[var(--color-bg-main)] text-[var(--color-text-main)] flex flex-col font-mono overflow-hidden select-none'>
        {/* Top Telemetry Strip */}
        <div className='h-7 w-full border-b border-[var(--color-border-subtle)] px-4 flex items-center justify-between text-[10px] text-[var(--color-text-dim)] tracking-wider'>
          <div className='flex items-center gap-2'>
            <span className='h-1.5 w-1.5 rounded-full bg-[var(--color-accent-action)] animate-pulse shadow-[0_0_8px_#34d399]' />
            <span>SYSTEM: ONLINE</span>
          </div>
          <div>NETSPHERE_SECURE_NODE_01</div>
          <div>2026-05-23T21:35Z</div>
        </div>

        {/* System Body Split */}
        <div className='flex-1 flex w-full overflow-hidden'>
          {/* Left Pane - System Monitor Control Board */}
          <section className='w-80 border-r border-[var(--color-border-subtle)] p-6 flex flex-col justify-between hidden md:flex bg-black/20'>
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

                {(['home', 'profile', 'vault', 'secure-line'] as const).map(
                  (dir, i) => {
                    const isActive = activeTab === dir
                    return (
                      <button
                        key={dir}
                        onClick={() => setActiveTab(dir)}
                        className={`flex items-center gap-2 text-left w-full transition-colors cursor-pointer group text-xs ${
                          isActive
                            ? 'text-[var(--color-accent-action)]'
                            : 'text-[var(--color-text-dim)] hover:text-[var(--color-text-main)]'
                        }`}
                      >
                        <span>0{i + 1}.</span>
                        <span
                          className={
                            isActive
                              ? 'underline font-bold'
                              : 'group-hover:underline'
                          }
                        >
                          ~/{dir}
                          {isActive && ' [ACTIVE]'}
                        </span>
                      </button>
                    )
                  },
                )}
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

          {/* Right Pane - Content Viewport Frame */}
          <section className='flex-1 flex flex-col overflow-hidden'>
            {/* Integrated Custom Search Header */}
            <header className='h-16 flex items-center justify-between px-8 border-b border-[var(--color-border-subtle)] bg-zinc-950/40'>
              {/* The master wrapper container handles the far-right edge block status */}
              <div className='w-full relative group flex items-center edge-status-focus'>
                {/* Terminal Icon Prefix Indicator */}
                <span className='absolute left-0 text-[var(--color-text-dim)] group-focus-within:text-[var(--color-text-main)] transition-colors'>
                  <FontAwesomeIcon icon={faTerminal} className='text-xs' />
                </span>

                {/* A Single, Bulletproof Native Input Engine */}
                <input
                  type='text'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder='EXECUTE_SEARCH_PROTOCOL...'
                  className='w-full bg-transparent border-b border-[var(--color-border-subtle)] focus:border-custom-terminal-caret focus:border-[var(--color-text-main)] py-2 pl-7 pr-8 text-sm font-mono tracking-[0.1em] text-[var(--color-text-main)] focus:outline-none transition-all placeholder:text-[var(--color-text-dim)] uppercase custom-terminal-caret'
                />
              </div>
            </header>

            {/* Render Output Content Portal based on Active Subsystem State */}
            <div className='flex-1 overflow-y-auto p-8 font-mono animate-fade-in'>
              {activeTab === 'home' && <Home onNavigate={setActiveTab} />}

              {activeTab === 'profile' && <ProfileManifest />}

              {activeTab === 'vault' && <DataVault />}

              {activeTab === 'secure-line' && <SecureLine />}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
