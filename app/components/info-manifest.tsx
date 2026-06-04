// app/components/InfoManifest.tsx
'use client'

import React, { useState } from 'react'

interface InfoManifestProps {
  currentRoute: 'HOME' | 'PROFILE' | 'VAULT' | 'SECURE'
}

export default function InfoManifest({ currentRoute }: InfoManifestProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Dictionary mapping out data blocks based on active node context
  const manifestData = {
    HOME: {
      title: 'ROOT_CONSOLE_CORE',
      lines: [
        {
          cmd: 'help / about',
          desc: 'Prints local system metadata logs to the feed.',
        },
        {
          cmd: 'profile',
          desc: 'Routes terminal framework to skill telemetry layer.',
        },
        {
          cmd: 'demo / vault',
          desc: 'Opens secure project index archive directories.',
        },
      ],
    },
    PROFILE: {
      title: 'TELEMETRY_DATA_MANIFEST',
      lines: [
        {
          cmd: '/interface_layer',
          desc: 'Core frontend client engineering tools.',
        },
        {
          cmd: '/infrastructure',
          desc: 'Database models and backend pipeline runtimes.',
        },
        {
          cmd: '/operations',
          desc: 'Automated CI/CD deployments and performance specs.',
        },
        {
          cmd: 'Timeline Nodes',
          desc: 'Corporate software engineering experience matrix.',
        },
      ],
    },
    VAULT: {
      title: 'SECURE_REPOSITORY_REGISTRY',
      lines: [
        {
          cmd: 'Index_Directory',
          desc: 'Left column handles switching active project state keys.',
        },
        {
          cmd: 'Data_Core',
          desc: 'Right column prints telemetry profiles for selected build.',
        },
        {
          cmd: 'Visual Feed',
          desc: 'Automated live sandbox streams or local image fallback tracks.',
        },
      ],
    },
    SECURE: {
      title: 'ENCRYPTED_UPLINK_PARAMETERS',
      lines: [
        {
          cmd: 'Status: ONLINE',
          desc: 'Secure Server-Side Actions communication loop.',
        },
        {
          cmd: 'Transport Encryption',
          desc: 'Cryptographically sealed session channel.',
        },
        {
          cmd: 'Secure Input',
          desc: 'Masking engines active to eliminate data sniffing.',
        },
      ],
    },
  }

  const activeManifest = manifestData[currentRoute]

  return (
    <div className='relative'>
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        type='button'
        className={`w-7 h-7 rounded-sm border text-xs font-bold transition-all duration-200 cursor-pointer flex items-center justify-center shrink-0 ${
          isOpen
            ? 'border-[var(--color-accent-action)] bg-[var(--color-accent-action)]/10 text-[var(--color-text-main)]'
            : 'border-[var(--color-border-subtle)] text-[var(--color-text-dim)] hover:border-zinc-500 hover:text-[var(--color-text-main)]'
        }`}
      >
        [!]
      </button>

      <div
        className={`absolute right-0 top-full mt-2 w-85 border border-[var(--color-border-subtle)] bg-zinc-950/95 backdrop-blur-md p-4 space-y-3 shadow-xl z-50 rounded-sm transition-all duration-300 pointer-events-none transform ${
          isOpen
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 -translate-y-2 scale-98'
        }`}
      >
        <div className='text-[10px] text-[var(--color-accent-action)] font-bold tracking-widest uppercase pb-1 border-b border-zinc-800'>
          [ DECK_OS // {activeManifest.title} ]
        </div>
        <div className='grid grid-cols-1 gap-2 text-[11px] text-zinc-400'>
          {activeManifest.lines.map((item, index) => (
            <div key={index}>
              <span className='text-zinc-200 font-bold'>&gt; {item.cmd}:</span>{' '}
              {item.desc}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
