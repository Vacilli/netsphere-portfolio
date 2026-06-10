'use client'

import React, { useState } from 'react'
import { portfolioRegistry } from '../../data/portfolioData'
import InfoManifest from '@/app/components/info-manifest'

const vaultStatusStyles: Record<string, string> = {
  'STABLE // PRODUCTION':
    'text-emerald-400 border-emerald-800/40 bg-emerald-950/20',
  'ACTIVE // DEPLOYED':
    'text-cyan-400 border-cyan-800/40 bg-cyan-950/20 animate-pulse',
  'ACTIVE_CORE // HOST':
    'text-[var(--color-accent-action)] border-[var(--color-accent-action)]/40 bg-[var(--color-accent-action)]/5 font-bold',
}

export default function VaultPage() {
  // 1. Stream data directly from centralized registry filtering for 'VAULT' category
  const vaultProjects = portfolioRegistry.filter(
    (item) => item.category === 'VAULT',
  )

  // Initialize state using the first ID found in the database matrix
  const [selectedId, setSelectedId] = useState(vaultProjects[0]?.id || 'NEX-01')

  // Find the currently active repository object
  const activeProject =
    vaultProjects.find((p) => p.id === selectedId) || vaultProjects[0]

  if (!activeProject) return null

  return (
    <div className='space-y-6 max-w-5xl animate-scan font-mono p-1 sm:p-4 w-full overflow-hidden'>
      {/* HEADER NODE */}
      <div className='border-b border-[var(--color-border-subtle)] pb-4 flex items-center justify-between gap-4 w-full'>
        <div>
          <p className='text-[10px] sm:text-xs text-[var(--color-accent-action)] mb-1 animate-pulse tracking-wide font-bold'>
            &gt; EXECUTING: DIRECTORY_SCAN --TARGET=SECURE_VAULT --STATUS=ONLINE
          </p>
          <h2 className='text-base sm:text-xl font-bold uppercase tracking-wider text-[var(--color-text-main)] leading-tight'>
            The Data Vault // Node Selection
          </h2>
          <p className='text-[10px] text-[var(--color-text-dim)] uppercase tracking-widest mt-1 font-semibold'>
            // PROJECT_PORFOLIO & CASE_STUDIES
          </p>
        </div>
        <InfoManifest currentRoute='VAULT' />
      </div>

      {/* SPLIT LAYOUT MAINFRAME */}
      <div className='grid grid-cols-1 md:grid-cols-12 gap-6 items-start w-full'>
        {/* LEFT COLUMN: INDEX SELECTION DIRECTORY */}
        <div className='grid grid-cols-1 sm:grid-cols-3 md:flex md:flex-col md:col-span-4 gap-2 w-full'>
          <div className='col-span-1 sm:col-span-3 md:block text-[9px] sm:text-[10px] text-[var(--color-text-dim)] uppercase tracking-widest px-2 mb-0.5 md:mb-1'>
            Index_Directory
          </div>
          {vaultProjects.map((project) => (
            <button
              type='button'
              key={project.id}
              onClick={() => setSelectedId(project.id)}
              className={`w-full text-left p-3 border transition-all cursor-pointer flex items-center justify-between rounded-xs ${
                selectedId === project.id
                  ? 'border-[var(--color-accent-action)] bg-[var(--color-accent-action)]/5 text-[var(--color-text-main)] font-bold'
                  : 'border-[var(--color-border-subtle)] bg-zinc-950/10 text-[var(--color-text-dim)] hover:border-zinc-700 hover:text-[var(--color-text-main)]'
              }`}
            >
              <div className='space-y-0.5 min-w-0 pr-2'>
                <div className='text-xs font-bold uppercase tracking-wide truncate'>
                  {project.title}{' '}
                  {/* Maps dynamically to standard data schema */}
                </div>
                <div className='text-[9px] sm:text-[10px] opacity-80 tracking-tight truncate text-zinc-500'>
                  {`${project.id} // ${project.meta?.statusTag?.split(' ')[0]}`}
                </div>
              </div>
              <span className='text-xs text-[var(--color-accent-action)] shrink-0'>
                {selectedId === project.id ? '►' : '::'}
              </span>
            </button>
          ))}
        </div>

        {/* RIGHT COLUMN: REPOSITORY FOCUS MATRIX PORTAL */}
        <div className='md:col-span-8 border border-[var(--color-border-subtle)] bg-zinc-950/20 p-4 sm:p-6 space-y-5 relative rounded-xs w-full'>
          <div className='hidden sm:block absolute top-0 right-4 transform -translate-y-1/2 bg-[#09090b] px-2 text-[10px] text-[var(--color-text-dim)] border border-[var(--color-border-subtle)]'>
            DATA_CORE::{activeProject.id}
          </div>

          <div className='border-b border-[var(--color-border-subtle)] pb-3'>
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 w-full'>
              <div className='space-y-0.5'>
                <h3 className='text-base sm:text-lg font-bold text-[var(--color-text-main)] uppercase tracking-wide leading-tight'>
                  {activeProject.title}
                </h3>
                <p className='text-[11px] sm:text-xs text-[var(--color-text-dim)] uppercase'>
                  {activeProject.subtitle}
                </p>
              </div>
              <span
                className={`self-start sm:self-auto text-[8px] px-1.5 py-0.5 border tracking-widest rounded-xs font-bold whitespace-nowrap ${
                  vaultStatusStyles[activeProject.meta?.statusTag || ''] ||
                  'text-cyan-500 border-cyan-800/40 bg-cyan-950/20'
                }`}
              >
                {activeProject.meta?.statusTag}
              </span>
            </div>
          </div>

          {/* TECH STACK CHIPS */}
          <div className='flex flex-wrap gap-1.5'>
            {activeProject.meta?.stack?.map((tech) => (
              <span
                key={tech}
                className='text-[9px] sm:text-[10px] border border-[var(--color-border-subtle)] bg-zinc-900 px-2 py-0.5 text-zinc-400 rounded-xs'
              >
                {tech}
              </span>
            ))}
          </div>

          {/* MEDIA VIEWER */}
          <div className='space-y-1 w-full'>
            <div className='text-[9px] text-[var(--color-text-dim)] uppercase tracking-widest flex items-center gap-1.5'>
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  activeProject.meta?.hasVideo || activeProject.meta?.isSelf
                    ? 'bg-[var(--color-accent-action)] animate-pulse'
                    : 'bg-zinc-800'
                }`}
              />
              {activeProject.meta?.hasVideo
                ? 'LIVE_TELEMETRY_FEED // STREAM_ACTIVE'
                : activeProject.meta?.isSelf
                  ? 'HOST_KERNEL_MATRIX // SELF_LOOP'
                  : 'VIDEO_LINK // LINK_INACTIVE'}
            </div>

            <div className='border border-[var(--color-border-subtle)] bg-black relative overflow-hidden aspect-video group rounded-xs w-full'>
              <div className='absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/10 to-zinc-950/20 pointer-events-none z-10 mix-blend-overlay' />

              {activeProject.meta?.hasVideo && activeProject.meta?.videoSrc ? (
                <img
                  src={activeProject.meta.videoSrc}
                  alt={`${activeProject.title} visual feed`}
                  className='w-full h-full object-fill opacity-85 filter brightness-95 contrast-110 group-hover:scale-101 transition-transform duration-500'
                />
              ) : activeProject.meta?.isSelf ? (
                <div className='w-full h-full p-3 sm:p-4 text-[8px] sm:text-[9px] text-[var(--color-accent-action)] opacity-70 space-y-0.5 sm:space-y-1 overflow-hidden select-none flex flex-col justify-end bg-zinc-950/50 font-mono'>
                  <p className='animate-pulse text-[10px] sm:text-xs mb-auto text-center font-bold text-zinc-600'>
                    [ SYSTEM MONITORING ACTIVE PORTAL ]
                  </p>
                  <p className='font-bold text-zinc-500 truncate'>
                    &gt; core_compiler_initialized: true
                  </p>
                  <p className='truncate'>
                    &gt; client_render_vport:{' '}
                    {`{"layout": "split_matrix", "cols": 12}`}
                  </p>
                  <p className='text-emerald-500/80 truncate'>
                    &gt; hooks_active: useState(selectedId) =&gt; "
                    {activeProject.id}"
                  </p>
                  <p className='animate-pulse truncate'>
                    &gt; system_memory_loop: streaming telemetry...
                  </p>
                </div>
              ) : (
                <div className='w-full h-full flex flex-col items-center justify-center text-center p-4 text-[10px] text-zinc-600 uppercase tracking-widest'>
                  <span>[ MEDIA_STREAM_OFFLINE ]</span>
                </div>
              )}
            </div>
          </div>

          {/* PARAMETERS / DESCRIPTION */}
          <div className='space-y-1.5 w-full'>
            <div className='text-[9px] sm:text-[10px] text-[var(--color-text-dim)] uppercase tracking-widest'>
              /operational_parameters
            </div>
            <div className='text-[11px] sm:text-xs text-zinc-400 leading-relaxed space-y-2 text-justify sm:text-left'>
              {activeProject.contentBlocks.map((paragraph, index) => (
                <p key={index} className='break-words'>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* ACTION INTERFACE LINKS */}
          <div className='pt-2 border-t border-[var(--color-border-subtle)] flex flex-wrap gap-4'>
            <a
              href={activeProject.meta?.liveUrl}
              target='_blank'
              rel='noreferrer'
              className='text-[11px] sm:text-xs text-[var(--color-accent-action)] hover:underline font-bold'
            >
              {activeProject.meta?.isSelf
                ? '> ACTIVE_SESSION_HOST'
                : '> INITIALIZE_LIVE_INTERFACE_PORTAL'}
            </a>
            <a
              href={activeProject.meta?.repoUrl}
              target='_blank'
              rel='noreferrer'
              className='text-[11px] sm:text-xs text-zinc-500 hover:text-[var(--color-text-main)] hover:underline'
            >
              &gt; VIEW_SOURCE_TREE
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
