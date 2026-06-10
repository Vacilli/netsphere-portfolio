'use client'

import React, { useState } from 'react'
import { portfolioRegistry } from '../../data/portfolioData'
import InfoManifest from '@/app/components/info-manifest'

type SubView = 'RESUME' | 'DOSSIER'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<SubView>('RESUME')

  // Strategy 2 in action: Isolate data blocks cleanly by category
  const timelineNodes = portfolioRegistry.filter((item) =>
    item.id.startsWith('exp-'),
  )
  const skillMetrics = portfolioRegistry.filter((item) =>
    item.id.startsWith('prof-'),
  )

  // Put this inside your component function, right before the return statement
  const statusStyles: Record<string, string> = {
    READY: 'text-emerald-500 bg-emerald-950/30 border-emerald-800/40',
    ONLINE: 'text-emerald-400 bg-emerald-950/30 border-emerald-700/40',
    STAGING: 'text-amber-500 bg-amber-950/30 border-amber-800/40 animate-pulse',
    INITIALIZING:
      'text-amber-500 bg-amber-950/30 border-amber-800/40 animate-pulse',
    PENDING: 'text-zinc-500 bg-zinc-950/40 border-zinc-800/50',
  }

  return (
    /* RESPONSIVE UPGRADE: Shifted padding safely using p-1 sm:p-4 to ensure no outer edge clipping occurs */
    <div className='space-y-6 max-w-4xl animate-scan p-1 sm:p-4 font-mono w-full overflow-hidden'>
      {/* HEADER LOG META */}
      <div className='border-b border-[var(--color-border-subtle)] pb-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4 relative'>
        {/* LEFT BLOCK: TITLE MODULE + INTEGRATED INFO DROPDOWN */}
        <div className='flex items-center justify-between md:justify-start md:gap-4 w-full md:w-auto'>
          <div>
            <p className='text-[10px] sm:text-xs text-[var(--color-accent-action)] mb-1 animate-pulse'>
              &gt; ACCESSING_OBJECT: SYSTEM_MANIFEST_v2.0.26
            </p>
            {/* RESPONSIVE UPGRADE: Adjusted base text sizes down on small viewports */}
            <h2 className='text-base sm:text-xl font-bold uppercase tracking-wider text-[var(--color-text-main)] leading-tight'>
              System Manifest // Profile
            </h2>
            <p className='text-[10px] text-[var(--color-text-dim)] uppercase tracking-widest mt-1 font-semibold'>
              // PROFESSIONAL_EXPERIENCE & TECHNICAL_RESUME
            </p>
          </div>

          {/* MOVED: Injected inline next to the title text */}
          <InfoManifest currentRoute='PROFILE' />
        </div>

        {/* RIGHT BLOCK: TWO-PORT LAYOUT TOGGLES */}
        {/* RESPONSIVE UPGRADE: Swapped text scaling parameters to make touch areas easy to tap on devices */}
        <div className='flex flex-row flex-wrap gap-2 text-[9px] sm:text-[10px] tracking-wider md:mb-0.5 w-full md:w-auto'>
          <button
            type='button'
            onClick={() => setActiveTab('RESUME')}
            className={`flex-1 md:flex-none text-center px-2.5 sm:px-3 py-1.5 border transition-all cursor-pointer rounded-xs uppercase ${
              activeTab === 'RESUME'
                ? 'border-[var(--color-accent-action)] text-[var(--color-accent-action)] bg-[var(--color-accent-action)]/5 font-bold'
                : 'border-zinc-800 text-zinc-500 hover:text-zinc-300'
            }`}
          >
            [01 // TECH_RESUME]
          </button>
          <button
            type='button'
            onClick={() => setActiveTab('DOSSIER')}
            className={`flex-1 md:flex-none text-center px-2.5 sm:px-3 py-1.5 border transition-all cursor-pointer rounded-xs uppercase ${
              activeTab === 'DOSSIER'
                ? 'border-[var(--color-accent-action)] text-[var(--color-accent-action)] bg-[var(--color-accent-action)]/5 font-bold'
                : 'border-zinc-800 text-zinc-500 hover:text-zinc-300'
            }`}
          >
            [02 // DOSSIER]
          </button>
        </div>
      </div>

      {/* VIEWPORT CHANNEL 01: SYSTEM RESUME DATA MATRIX */}
      {activeTab === 'RESUME' && (
        <div className='space-y-8 animate-fade-in'>
          {/* SECTION 1: CORE TELEMETRY METRICS */}
          <section className='space-y-3'>
            <div className='text-[9px] sm:text-[10px] text-[var(--color-text-dim)] uppercase tracking-widest'>
              [01] // SYSTEM_CORE_METRICS
            </div>
            {/* RESPONSIVE UPGRADE: Falls to grid-cols-1 automatically on standard phones */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 sm:gap-4'>
              {skillMetrics.map((skill) => (
                <div
                  key={skill.id}
                  className='border border-[var(--color-border-subtle)] bg-zinc-950/20 p-4 relative group hover:border-[var(--color-accent-action)]/40 transition-colors'
                >
                  <div className='flex justify-between items-center mb-2 gap-2'>
                    <span className='text-xs text-[var(--color-text-dim)] uppercase tracking-wide truncate'>
                      {skill.title}
                    </span>
                    <span
                      className={`text-[8px] sm:text-[9px] px-1 border tracking-wider shrink-0 ${
                        statusStyles[skill.meta?.statusTag || ''] ||
                        'text-cyan-500 bg-cyan-950/30 border-cyan-800/40'
                      }`}
                    >
                      {skill.meta?.statusTag}
                    </span>
                  </div>
                  <ul className='text-[11px] sm:text-xs text-[var(--color-text-main)] space-y-1.5'>
                    {skill.contentBlocks.map((line, i) => (
                      <li key={i} className='break-words'>
                        • {line}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 2: OPERATIONAL TIMELINE (EXPERIENCE) */}
          <section className='space-y-4'>
            <div className='text-[9px] sm:text-[10px] text-[var(--color-text-dim)] uppercase tracking-widest'>
              [02] // OPERATIONAL_TIMELINE
            </div>
            {/* RESPONSIVE UPGRADE: Shifted margins inward (pl-5 ml-1) to protect tracking line positions */}
            <div className='border-l border-[var(--color-border-subtle)] pl-5 ml-1 sm:ml-2 space-y-6'>
              {timelineNodes.map((node) => (
                <div key={node.id} className='relative space-y-1 w-full'>
                  {/* RESPONSIVE UPGRADE: Recalculated absolute left-line tracking dots */}
                  <div
                    className={`absolute -left-[25px] top-1 w-2 h-2 rounded-full border border-black ${
                      node.meta?.isCurrent
                        ? 'bg-[var(--color-accent-action)] animate-pulse'
                        : 'bg-zinc-800'
                    }`}
                  />

                  <div className='flex flex-col sm:flex-row sm:items-baseline sm:justify-between text-xs gap-0.5 sm:gap-2'>
                    <span className='font-bold text-[var(--color-text-main)] uppercase tracking-wide text-[12px] sm:text-xs'>
                      {node.title}
                    </span>
                    <span className='text-[var(--color-text-dim)] text-[9px] sm:text-[10px] font-medium'>
                      {node.meta?.dateRange}
                    </span>
                  </div>

                  <div
                    className={`text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold ${
                      node.meta?.isCurrent
                        ? 'text-[var(--color-accent-action)]'
                        : 'text-zinc-500'
                    }`}
                  >
                    {node.subtitle}
                  </div>

                  <div
                    className={`text-[11px] sm:text-xs leading-relaxed max-w-2xl space-y-1 ${
                      node.meta?.isCurrent ? 'text-zinc-300' : 'text-zinc-500'
                    }`}
                  >
                    {node.contentBlocks.map((paragraph, i) => (
                      <p key={i} className='break-words'>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 3: RUNTIME CAPABILITIES */}
          <section className='space-y-3'>
            <div className='text-[9px] sm:text-[10px] text-[var(--color-text-dim)] uppercase tracking-widest'>
              [03] // RUNTIME_CAPABILITIES
            </div>
            <div className='border border-[var(--color-border-subtle)] bg-zinc-950/10 p-4 text-[11px] sm:text-xs text-zinc-400 leading-relaxed space-y-3 rounded-sm'>
              <p className='break-words'>
                <span className='text-[var(--color-text-main)] font-bold uppercase'>
                  &gt; ZERO_WASTED_MOTION:
                </span>{' '}
                Programmatic user interfaces engineered without bloated
                third-party dependencies. Prioritizing pure CSS variables,
                semantic HTML layout trees, and high-speed viewport rendering
                cycles.
              </p>
              <p className='break-words'>
                <span className='text-[var(--color-text-main)] font-bold uppercase'>
                  &gt; ARCHITECTURAL_REFACTORING:
                </span>{' '}
                Deconstructing monolith structures into responsive,
                SSR-optimized Next.js engines. Seamlessly connecting task
                runtimes with terminal aesthetic systems.
              </p>
            </div>
          </section>
        </div>
      )}

      {/* VIEWPORT CHANNEL 02: OPERATOR DOSSIER PANEL */}
      {activeTab === 'DOSSIER' && (
        <div className='animate-fade-in w-full'>
          {/* SECTION 4: OPERATOR DOSSIER (PERSONAL) */}
          <section className='space-y-4 w-full'>
            <div className='text-[9px] sm:text-[10px] text-[var(--color-text-dim)] uppercase tracking-widest'>
              [04] // OPERATOR_DOSSIER
            </div>

            <div className='border border-[var(--color-border-subtle)] bg-zinc-950/20 p-4 sm:p-6 flex flex-col md:flex-row gap-6 items-center md:items-start rounded-sm w-full'>
              {/* RETRO SECURITY BADGE PHOTO */}
              {/* RESPONSIVE UPGRADE: Stretches full-width up to max-w-sm with a landscape aspect ratio on mobile, then falls back to desktop size */}
              <div className='relative w-full max-w-sm h-48 md:w-40 md:h-40 shrink-0 border border-zinc-800 bg-zinc-900 p-1.5 group overflow-hidden rounded-xs'>
                <div className='absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-accent-action)] z-10' />
                <div className='absolute top-0 right-0 w-2 h-2 border-t border-r border-[var(--color-accent-action)] z-10' />
                <div className='absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[var(--color-accent-action)] z-10' />
                <div className='absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-accent-action)] z-10' />

                <img
                  src='/assets/personal-picture.jpg'
                  alt='Operator Headshot'
                  className='w-full h-full object-cover grayscale contrast-135 brightness-95 filter mix-blend-luminosity group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500 scale-105 group-hover:scale-100'
                />

                <div className='absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/80 px-2 py-0.5 border border-zinc-700 text-[8px] text-zinc-400 tracking-widest uppercase whitespace-nowrap z-10'>
                  ID_IDEN_PRTCL
                </div>
              </div>

              {/* DOSSIER TEXT LAYOUT */}
              <div className='space-y-3 flex-1 text-center md:text-left w-full'>
                <div>
                  <h3 className='text-[13px] sm:text-sm font-bold text-[var(--color-text-main)] uppercase tracking-wider'>
                    Personal Subroutines // Beyond the Code
                  </h3>
                  <p className='text-[10px] sm:text-[11px] text-[var(--color-text-dim)] uppercase mt-0.5 leading-normal'>
                    Loc: Costa Rica // Focus: Human-Centric UI & System
                    Optimization
                  </p>
                </div>

                <p className='text-[11px] sm:text-xs text-zinc-400 leading-relaxed max-w-2xl text-justify md:text-left break-words'>
                  When I’m not optimizing layout lifecycles or stripping bloat
                  from codebases, I’m usually deep in things that challenge my
                  analytical brain in different ways. I love exploring complex
                  interfaces, dissecting sci-fi world-building, and chasing
                  clean, efficient designs in everyday digital and physical
                  systems.
                </p>

                <div className='flex flex-wrap justify-center md:justify-start gap-4 pt-1 text-[11px]'>
                  <div className='text-left md:text-left'>
                    <span className='text-[var(--color-accent-action)] font-bold block sm:inline mr-1'>
                      &gt; INTERESTS:
                    </span>
                    <span className='text-zinc-500 break-words'>
                      Minimalism, Technology, Engineering Architecture, Sci-Fi
                      World-Building, Video Games
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}
