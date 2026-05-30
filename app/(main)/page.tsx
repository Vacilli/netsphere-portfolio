'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import AuthSequence from '../components/auth-sequence'

interface LogEntry {
  id: string
  text: string
  type: 'system' | 'success' | 'warn' | 'user'
}

export default function TerminalMainframePage() {
  const router = useRouter()
  const [inputCommand, setInputCommand] = useState('')
  const [terminalLogs, setTerminalLogs] = useState<LogEntry[]>([])

  // Terminal Native Authentication Flags
  const [isAwaitingPassword, setIsAwaitingPassword] = useState(false)
  const [authStage, setAuthStage] = useState<
    'idle' | 'loading_success' | 'loading_failed'
  >('idle')

  const logContainerRef = useRef<HTMLDivElement>(null)

  // 1. Core Log Injection Stream (Strict Mode Compatible)
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

    // Clears timers on unmount so Strict Mode double-taps reset safely
    return () => activeTimers.forEach((timerId) => clearTimeout(timerId))
  }, [])

  // Auto-scroll logs mechanism
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight
    }
  }, [terminalLogs])

  // Handles the interactive button click sequence after full-screen loading completes
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

  // 2. Command Line Router Execution Logic
  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const rawInput = inputCommand.trim()

    if (isAwaitingPassword) {
      setTerminalLogs((prev) => [
        ...prev,
        { id: `${Date.now()}-user`, text: `> **********`, type: 'user' },
      ])
      setIsAwaitingPassword(false)

      if (rawInput === 'password123') {
        setAuthStage('loading_success')
      } else {
        setAuthStage('loading_failed')
      }

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
              text: 'ENTER_SYSTEM_KEY: >',
              type: 'system',
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
    <div className='space-y-8 max-w-2xl font-mono text-xs text-[var(--color-text-main)] animate-scan p-4 relative h-full'>
      {authStage !== 'idle' && (
        <AuthSequence
          status={authStage === 'loading_success' ? 'success' : 'failed'}
          onComplete={handleAuthSequenceResolution}
        />
      )}

      {/* HEADER DIAGNOSTIC DISPLAY */}
      <div className='border-b border-[var(--color-border-subtle)] pb-4'>
        <p className='text-xs text-[var(--color-accent-action)] mb-1 animate-pulse'>
          &gt; SYSTEM_STATUS: OPERATIONAL // NODE_0X4F_ONLINE
        </p>
        <h1 className='text-xl font-bold uppercase tracking-wider'>
          Core Console // Terminal Mainframe
        </h1>
      </div>

      {/* STATIC METRIC MATRIX PANEL */}
      <div className='grid grid-cols-2 gap-4 border border-[var(--color-border-subtle)]/40 bg-zinc-950/20 p-4 rounded-sm'>
        <div className='space-y-1'>
          <p className='text-[10px] text-[var(--color-text-dim)] uppercase'>
            [PARAMETER]
          </p>
          <p>
            <span className='text-[var(--color-text-dim)]'>LOC:</span>{' '}
            SAN_JOY_CR
          </p>
          <p>
            <span className='text-[var(--color-text-dim)]'>SYS:</span>{' '}
            NEXTJS_15_APP
          </p>
        </div>
        <div className='space-y-1'>
          <p className='text-[10px] text-[var(--color-text-dim)] uppercase'>
            [TELEMETRY]
          </p>
          <p>
            <span className='text-[var(--color-text-dim)]'>ROLE:</span>{' '}
            CORE_ENGINEER
          </p>
          <p>
            <span className='text-[var(--color-text-dim)]'>UPTIME:</span>{' '}
            LIVE_GRID_ACTIVE
          </p>
        </div>
      </div>

      {/* LIVE SIMULATED STREAM LOG WINDOW */}
      <div className='space-y-2'>
        <p className='text-[10px] text-[var(--color-text-dim)] uppercase tracking-wider'>
          // LOG_STREAM_FEED
        </p>
        <div
          ref={logContainerRef}
          className='h-48 w-full bg-black/40 border border-[var(--color-border-subtle)] p-4 overflow-y-auto custom-scrollbar space-y-2 rounded-sm'
        >
          {terminalLogs.map((log) => (
            <p
              key={log.id}
              className={`leading-relaxed tracking-wide ${log.type === 'success' ? 'text-emerald-400' : log.type === 'warn' ? 'text-amber-500 font-semibold' : log.type === 'user' ? 'text-[var(--color-accent-action)]' : 'text-zinc-400'}`}
            >
              {log.text}
            </p>
          ))}
        </div>
      </div>

      {/* CORE TERMINAL FIELD INPUT COMMAND ROUTER */}
      <form onSubmit={handleCommandSubmit} className='space-y-2'>
        <label
          htmlFor='terminal-input'
          className='block text-[10px] text-[var(--color-text-dim)] uppercase tracking-widest'
        >
          EXECUTE_ROUTINE_PROMPT
        </label>
        <div className='flex items-center gap-2 border border-[var(--color-border-subtle)] focus-within:border-[var(--color-accent-action)] bg-zinc-950/40 p-3 transition-all rounded-sm'>
          <span className='text-[var(--color-accent-action)] font-bold select-none'>
            $
          </span>
          <input
            id='terminal-input'
            type='text'
            autoComplete='off'
            value={inputCommand}
            onChange={(e) => setInputCommand(e.target.value)}
            placeholder='TYPE help, about, profile, demo or contact...'
            className='w-full bg-transparent border-none outline-none text-xs text-[var(--color-text-main)] uppercase tracking-wide focus:ring-0 p-0'
          />
        </div>
      </form>
    </div>
  )
}
