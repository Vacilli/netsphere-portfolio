'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import AuthSequence from '../components/auth-sequence'
import InfoManifest from '../components/info-manifest'
import TerminalInput from '../components/terminal-input-props'

interface LogEntry {
  id: string
  text: string
  type: 'system' | 'success' | 'warn' | 'user'
}

export default function TerminalMainframePage() {
  const router = useRouter()
  const [inputCommand, setInputCommand] = useState('')
  const [terminalLogs, setTerminalLogs] = useState<LogEntry[]>([])
  const [isAwaitingPassword, setIsAwaitingPassword] = useState(false)
  const [authStage, setAuthStage] = useState<
    'idle' | 'loading_success' | 'loading_failed'
  >('idle')
  const logContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const activeTimers: NodeJS.Timeout[] = []
    const bootSequence = [
      { text: 'INITIALIZING NETSPHERE MASTER DECK LINK...', type: 'system' },
      {
        text: 'ESTABLISHING SECURE PROTOCOLS // CORE_V4.2.1...',
        type: 'system',
      },
      { text: 'LOADING TELEMETRY PARAMETERS... [OK]', type: 'success' },
      {
        text: 'WARNING: UNAUTHORIZED INTERFACES WILL BE LOGGED.',
        type: 'warn',
      },
      {
        text: 'TYPE "help" TO DISCOVER ACTIVE TERMINAL ROUTINES.',
        type: 'system',
      },
      {
        text: 'USE THE NAVIGATION TREE OR TERMINAL COMMANDS TO EXPLORE.',
        type: 'success',
      },
    ] as const

    bootSequence.forEach((log, index) => {
      const streamTimer = setTimeout(
        () => {
          setTerminalLogs((prev) => [
            ...prev,
            {
              id: `boot-${Date.now()}-${index}`,
              text: log.text,
              type: log.type,
            },
          ])
        },
        (index + 1) * 250,
      )
      activeTimers.push(streamTimer)
    })
    return () => activeTimers.forEach((timerId) => clearTimeout(timerId))
  }, [])

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight
    }
  }, [terminalLogs])

  const handleAuthSequenceResolution = () => {
    if (authStage === 'loading_success') {
      setAuthStage('idle')
      router.push('/vault')
    } else if (authStage === 'loading_failed') {
      setAuthStage('idle')
      setTerminalLogs((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          text: 'ACCESS_DENIED: SECURE_AUTHENTICATION_OVERRIDE_FAILED',
          type: 'warn',
        },
      ])
    }
  }

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const rawInput = inputCommand.trim()

    if (isAwaitingPassword) {
      setTerminalLogs((prev) => [
        ...prev,
        { id: `${Date.now()}-user`, text: `> **********`, type: 'user' },
      ])
      setIsAwaitingPassword(false)
      if (rawInput === 'password123') setAuthStage('loading_success')
      else setAuthStage('loading_failed')
      setInputCommand('')
      return
    }

    const cleanCmd = rawInput.toLowerCase()
    if (!cleanCmd) return

    setTerminalLogs((prev) => [
      ...prev,
      { id: `${Date.now()}-user`, text: `> ${inputCommand}`, type: 'user' },
    ])
    setInputCommand('')

    setTimeout(() => {
      switch (cleanCmd) {
        case 'help':
          setTerminalLogs((prev) => [
            ...prev,
            {
              id: `${Date.now()}-res`,
              text: 'AVAILABLE ROUTINES: [about] [profile] [demo] [contact] [clear]',
              type: 'system',
            },
          ])
          break
        case 'about':
          const manifest = [
            'SYSTEM_MANIFEST:',
            'GIOVANNI AMIGHETTI',
            '------------------------------------------',
            'IDENTITY: Fullstack Software Engineer',
            'FOCUS: Low-level systems, hardened UI/UX, Core Architectures.',
            '------------------------------------------',
            'SKILL_CORE_MATRIX:',
            '[React] [Next.js] [TypeScript] [TailwindCSS] [Node.js] [SQL/Postgres]',
            '------------------------------------------',
            'STATUS: OPEN_TO_OPPORTUNITIES // SEEKING_COLLABORATION',
          ]
          manifest.forEach((line, i) => {
            setTerminalLogs((prev) => [
              ...prev,
              { id: `about-${Date.now()}-${i}`, text: line, type: 'success' },
            ])
          })
          break
        case 'profile':
          setTerminalLogs((prev) => [
            ...prev,
            {
              id: `${Date.now()}-nav`,
              text: 'LOADING PROFILE_MANIFEST...',
              type: 'system',
            },
          ])
          setTimeout(() => router.push('/profile'), 600)
          break
        case 'demo':
        case 'vault':
          setTerminalLogs((prev) => [
            ...prev,
            {
              id: `${Date.now()}-res`,
              text: 'ROUTING TO VAULT_SUBDIRECTORY...',
              type: 'system',
            },
          ])
          setTimeout(() => router.push('/vault'), 600)
          break
        case 'contact':
          setTerminalLogs((prev) => [
            ...prev,
            {
              id: `${Date.now()}-res`,
              text: 'ESTABLISHING SECURE LINE PROTOCOL...',
              type: 'system',
            },
          ])
          setTimeout(() => router.push('/secure-line'), 600)
          break
        case 'login':
          setTerminalLogs((prev) => [
            ...prev,
            {
              id: `log-${Date.now()}-1`,
              text: 'AUTH_SEQUENCE_INITIATED...',
              type: 'system',
            },
            {
              id: `log-${Date.now()}-2`,
              text: 'ENTER_SYSTEM_KEY (MASK ACTIVE)...',
              type: 'warn',
            },
          ])
          setIsAwaitingPassword(true)
          break
        case 'clear':
          setTerminalLogs([])
          break
        default:
          setTerminalLogs((prev) => [
            ...prev,
            {
              id: `${Date.now()}-res`,
              text: `COMMAND_NOT_FOUND: "${cleanCmd}"`,
              type: 'warn',
            },
          ])
      }
    }, 150)
  }

  return (
    <div className='space-y-6 md:space-y-8 max-w-2xl font-mono text-xs text-[var(--color-text-main)] animate-scan p-1 sm:p-4 relative w-full h-full flex flex-col justify-between md:block'>
      {authStage !== 'idle' && (
        <AuthSequence
          status={authStage === 'loading_success' ? 'success' : 'failed'}
          onComplete={handleAuthSequenceResolution}
        />
      )}

      {/* PARENT FLEX BLOCK */}
      <div className='space-y-6 md:space-y-8 flex-1 md:flex-none'>
        {/* COMPACT ROUTE HEADER MATRIX */}
        <div className='border-b border-[var(--color-border-subtle)] pb-4 flex items-center justify-between gap-4'>
          <div>
            <p className='text-[10px] sm:text-xs text-[var(--color-accent-action)] mb-1 animate-pulse tracking-wide font-bold'>
              &gt; SYSTEM_STATUS: OPERATIONAL // NODE_0X4F_ONLINE
            </p>
            <h1 className='text-base sm:text-xl font-bold uppercase tracking-wider leading-tight'>
              Core Console // Terminal Mainframe
            </h1>
            <p className='text-[10px] text-[var(--color-text-dim)] uppercase tracking-widest mt-1 font-semibold'>
              // INDEX_ROUTE // MAIN_HOME_PAGE_NODE
            </p>
          </div>
          <InfoManifest currentRoute='HOME' />
        </div>

        {/* METRIC MATRIX PANEL */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 border border-[var(--color-border-subtle)]/40 bg-zinc-950/20 p-3 sm:p-4 rounded-sm'>
          <div className='space-y-1'>
            <p className='text-[9px] text-[var(--color-text-dim)] uppercase tracking-wider'>
              [PARAMETER]
            </p>
            <p className='text-[11px] sm:text-xs'>
              <span className='text-[var(--color-text-dim)]'>LOC:</span>{' '}
              SAN_JOSE_CR
            </p>
            <p className='text-[11px] sm:text-xs'>
              <span className='text-[var(--color-text-dim)]'>SYS:</span>{' '}
              NEXTJS_15_APP
            </p>
          </div>
          <div className='space-y-1 border-t border-zinc-900/60 pt-2 sm:pt-0 sm:border-t-0'>
            <p className='text-[9px] text-[var(--color-text-dim)] uppercase tracking-wider'>
              [TELEMETRY]
            </p>
            <p className='text-[11px] sm:text-xs'>
              <span className='text-[var(--color-text-dim)]'>ROLE:</span>{' '}
              CORE_ENGINEER
            </p>
            <p className='text-[11px] sm:text-xs'>
              <span className='text-[var(--color-text-dim)]'>UPTIME:</span>{' '}
              LIVE_GRID_ACTIVE
            </p>
          </div>
        </div>

        {/* INTEGRATED TRANSLATION LAYER PANEL */}
        <div className='border border-[var(--color-border-subtle)]/40 bg-zinc-950/20 p-3 sm:p-4 rounded-sm space-y-2'>
          <p className='text-[9px] text-[var(--color-accent-action)] uppercase tracking-wider font-bold'>
            [SYSTEM_MANIFEST: BIOGRAPHY_DECODE]
          </p>
          <div className='space-y-1.5'>
            <h2 className='text-xs sm:text-sm font-bold tracking-wide text-[var(--color-text-main)] uppercase'>
              Personal Operating System of Giovanni Amighetti
            </h2>
            <p className='text-[11px] sm:text-xs leading-relaxed text-[var(--color-text-dim)]'>
              Full Stack Software Engineer specializing in React, Next.js,
              TypeScript, modern frontend architecture, and AI-powered
              applications. I build stable systems that connect beautiful,
              functional user interfaces with optimized backend data structures.
            </p>
          </div>
        </div>

        {/* SIMULATED STREAM FEED LOG WINDOW */}
        <div className='space-y-2'>
          <p className='text-[9px] sm:text-[10px] text-[var(--color-text-dim)] uppercase tracking-wider'>
            // LOG_STREAM_FEED
          </p>

          <div
            ref={logContainerRef}
            className='h-40 sm:h-48 w-full bg-black/40 border border-[var(--color-border-subtle)] p-3 sm:p-4 overflow-y-auto custom-scrollbar space-y-2 rounded-sm text-[11px] sm:text-xs'
          >
            {terminalLogs.map((log) => (
              <p
                key={log.id}
                className={`leading-relaxed tracking-wide break-words ${
                  log.type === 'success'
                    ? 'text-emerald-400'
                    : log.type === 'warn'
                      ? 'text-amber-500 font-semibold'
                      : log.type === 'user'
                        ? 'text-[var(--color-accent-action)]'
                        : 'text-zinc-400'
                }`}
              >
                {log.text}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* CLEAN INJECTED FIELD CONTROLLER */}
      <div className='pt-4 md:pt-0 shrink-0'>
        <TerminalInput
          inputCommand={inputCommand}
          setInputCommand={setInputCommand}
          isAwaitingPassword={isAwaitingPassword}
          setIsAwaitingPassword={setIsAwaitingPassword}
          onSubmit={handleCommandSubmit}
        />
      </div>
    </div>
  )
}
