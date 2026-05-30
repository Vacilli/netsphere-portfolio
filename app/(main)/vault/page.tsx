'use client'

import React, { useState } from 'react'

const PROJECT_REGISTRY = [
  {
    id: 'NEX-01',
    name: 'Codex OS',
    subTitle: 'Operational Infrastructure Task Manager',
    status: 'STABLE // PRODUCTION',
    stack: ['React', 'Tailwind v3', 'TypeScript'],
    description:
      'A minimal, system-level task management architecture built to replace bloated traditional interfaces. Features an active terminal focus engine, responsive data matrix arrays, and direct state synchronization hooks.',
    liveUrl: 'https://codex-os-task-manager.vercel.app/',
    repoUrl: 'https://github.com/Vacilli/React-To_Do-List',
    hasVideo: true,
    // Asset path aligned with Next.js static routing
    videoSrc: '/assets/demo.gif',
  },
  {
    id: 'NEX-02',
    name: 'Netsphere Universe',
    subTitle: 'Ecosystem Telemetry Dashboard & Portfolio',
    status: 'ACTIVE // DEPLOYED',
    stack: ['Next.js 15', 'Tailwind v4', 'React Server Components'],
    description:
      'The core aesthetic node for full-stack operations. Built using a high-speed programmatic interface with zero wasted motion, dynamic viewport portals, and unified theme inversion variables.',
    liveUrl: 'https://netsphere.universe',
    repoUrl: 'https://github.com/yourusername/netsphere',
    hasVideo: false,
    videoSrc: '',
  },
]

export default function VaultPage() {
  const [selectedId, setSelectedId] = useState('NEX-01')

  const activeProject =
    PROJECT_REGISTRY.find((p) => p.id === selectedId) || PROJECT_REGISTRY[0]

  // Dynamic helper to verify if the targeted node is a GIF image or an MP4 stream
  const isGif = activeProject.videoSrc.endsWith('.gif')

  return (
    <div className='space-y-6 max-w-5xl animate-scan font-mono p-4'>
      {/* HEADER NODE */}
      <div className='border-b border-[var(--color-border-subtle)] pb-4'>
        <p className='text-xs text-[var(--color-accent-action)] mb-1 animate-pulse'>
          &gt; EXECUTING: DIRECTORY_SCAN --TARGET=SECURE_VAULT --STATUS=ONLINE
        </p>
        <h2 className='text-xl font-bold uppercase tracking-wider text-[var(--color-text-main)]'>
          The Data Vault // Node Selection
        </h2>
      </div>

      {/* SPLIT LAYOUT MAINFRAME */}
      <div className='grid grid-cols-1 md:grid-cols-12 gap-6 items-start'>
        {/* LEFT COLUMN: REGISTRY INDEX LIST (4 cols) */}
        <div className='md:col-span-4 space-y-2'>
          <div className='text-[10px] text-[var(--color-text-dim)] uppercase tracking-widest px-2 mb-1'>
            Index_Directory
          </div>
          {PROJECT_REGISTRY.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedId(project.id)}
              className={`w-full text-left p-3 border transition-all cursor-pointer flex items-center justify-between ${
                selectedId === project.id
                  ? 'border-[var(--color-accent-action)] bg-[var(--color-accent-action)]/5 text-[var(--color-text-main)]'
                  : 'border-[var(--color-border-subtle)] bg-zinc-950/10 text-[var(--color-text-dim)] hover:border-zinc-700 hover:text-[var(--color-text-main)]'
              }`}
            >
              <div className='space-y-0.5'>
                <div className='text-xs font-bold uppercase'>
                  {project.name}
                </div>
                <div className='text-[10px] opacity-80 tracking-tight'>
                  {`${project.id} // ${project.status.split(' ')[0]}`}
                </div>
              </div>
              <span className='text-xs'>
                {selectedId === project.id ? '►' : '::'}
              </span>
            </button>
          ))}
        </div>

        {/* RIGHT COLUMN: ACTIVE METRIC DATA CORE (8 cols) */}
        <div className='md:col-span-8 border border-[var(--color-border-subtle)] bg-zinc-950/20 p-6 space-y-5 relative'>
          {/* Top Identifier Node Accent */}
          <div className='absolute top-0 right-4 transform -translate-y-1/2 bg-[#09090b] px-2 text-[10px] text-[var(--color-text-dim)] border border-[var(--color-border-subtle)]'>
            DATA_CORE::{activeProject.id}
          </div>

          {/* Heading */}
          <div className='border-b border-[var(--color-border-subtle)] pb-3'>
            <h3 className='text-lg font-bold text-[var(--color-text-main)] uppercase tracking-wide'>
              {activeProject.name}
            </h3>
            <p className='text-xs text-[var(--color-text-dim)] uppercase mt-0.5'>
              {activeProject.subTitle}
            </p>
          </div>

          {/* Architecture Tech Badges */}
          <div className='flex flex-wrap gap-1.5'>
            {activeProject.stack.map((tech) => (
              <span
                key={tech}
                className='text-[10px] border border-[var(--color-border-subtle)] bg-zinc-900 px-2 py-0.5 text-zinc-400'
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Weyland-Yutani Style Visual Telemetry Display Feed */}
          {activeProject.hasVideo && (
            <div className='space-y-1'>
              <div className='text-[9px] text-[var(--color-text-dim)] uppercase tracking-widest flex items-center gap-1.5'>
                <span className='w-1.5 h-1.5 rounded-full bg-[var(--color-accent-action)] animate-pulse' />
                LIVE_TELEMETRY_FEED // STREAM_ACTIVE
              </div>
              <div className='border border-[var(--color-border-subtle)] bg-black relative overflow-hidden aspect-video group'>
                <div className='absolute inset-0 bg-linear-to-b from-transparent via-zinc-950/10 to-zinc-950/20 pointer-events-none z-10 mix-blend-overlay' />

                {/* DYNAMIC MEDIA ROUTER */}
                {isGif ? (
                  <img
                    src={activeProject.videoSrc}
                    alt={`${activeProject.name} visual feed`}
                    className='w-full h-full object-fill opacity-80 filter brightness-95 contrast-105'
                  />
                ) : (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className='w-full h-full object-fill opacity-80 filter brightness-95 contrast-105'
                    src={activeProject.videoSrc}
                  />
                )}
              </div>
            </div>
          )}

          {/* Description */}
          <div className='space-y-1.5'>
            <div className='text-[10px] text-[var(--color-text-dim)] uppercase tracking-widest'>
              /operational_parameters
            </div>
            <p className='text-xs text-zinc-400 leading-relaxed'>
              {activeProject.description}
            </p>
          </div>

          {/* Command Directive Vectors */}
          <div className='pt-2 border-t border-[var(--color-border-subtle)] flex gap-4'>
            <a
              href={activeProject.liveUrl}
              target='_blank'
              rel='noreferrer'
              className='text-xs text-[var(--color-accent-action)] hover:underline'
            >
              &gt; INITIALIZE_LIVE_INTERFACE_PORTAL
            </a>
            <a
              href={activeProject.repoUrl} // Direct access to the string data model
              target='_blank'
              rel='noreferrer'
              className='text-xs text-[var(--color-text-dim)] hover:text-[var(--color-text-main)] hover:underline'
            >
              &gt; VIEW_SOURCE_TREE
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
