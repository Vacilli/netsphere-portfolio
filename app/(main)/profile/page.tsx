'use client'

import React, { useState } from 'react'
import { portfolioRegistry } from '../../data/portfolioData'

type SubView = 'RESUME' | 'DOSSIER'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<SubView>('RESUME')

  // Strategy 2 in action: Isolate data blocks cleanly by category
  const skillMetrics = portfolioRegistry.filter((item) =>
    item.id.startsWith('prof-'),
  )
  const timelineNodes = portfolioRegistry.filter((item) =>
    item.id.startsWith('exp-'),
  )

  return (
    <div className='space-y-6 max-w-4xl animate-scan p-4 font-mono'>
      {/* HEADER LOG META */}
      <div className='border-b border-[var(--color-border-subtle)] pb-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4'>
        <div>
          <p className='text-xs text-[var(--color-accent-action)] mb-1 animate-pulse'>
            &gt; ACCESSING_OBJECT: SYSTEM_MANIFEST_v2.0.26
          </p>
          <h2 className='text-xl font-bold uppercase tracking-wider text-[var(--color-text-main)]'>
            System Manifest // Profile
          </h2>
        </div>

        {/* TWO-PORT LAYOUT TOGGLES */}
        <div className='flex flex-wrap gap-2 text-[10px] tracking-wider md:mb-0.5'>
          <button
            onClick={() => setActiveTab('RESUME')}
            className={`px-3 py-1.5 border transition-all cursor-pointer rounded-xs uppercase ${
              activeTab === 'RESUME'
                ? 'border-[var(--color-accent-action)] text-[var(--color-accent-action)] bg-[var(--color-accent-action)]/5 font-bold'
                : 'border-zinc-800 text-zinc-500 hover:text-zinc-300 animate-pulse'
            }`}
          >
            [01 // TECH_RESUME]
          </button>
          <button
            onClick={() => setActiveTab('DOSSIER')}
            className={`px-3 py-1.5 border transition-all cursor-pointer rounded-xs uppercase ${
              activeTab === 'DOSSIER'
                ? 'border-[var(--color-accent-action)] text-[var(--color-accent-action)] bg-[var(--color-accent-action)]/5 font-bold'
                : 'border-zinc-800 text-zinc-500 hover:text-zinc-300 animate-pulse'
            }`}
          >
            [02 // OPERATOR_DOSSIER]
          </button>
        </div>
      </div>

      {/* VIEWPORT CHANNEL 01: SYSTEM RESUME DATA MATRIX */}
      {activeTab === 'RESUME' && (
        <div className='space-y-8 animate-fade-in'>
          {/* SECTION 1: CORE TELEMETRY METRICS */}
          <section className='space-y-3'>
            <div className='text-[10px] text-[var(--color-text-dim)] uppercase tracking-widest'>
              [01] // SYSTEM_CORE_METRICS
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              {skillMetrics.map((skill) => (
                <div
                  key={skill.id}
                  className='border border-[var(--color-border-subtle)] bg-zinc-950/20 p-4 relative group hover:border-[var(--color-accent-action)]/40 transition-colors'
                >
                  <div className='flex justify-between items-center mb-2'>
                    <span className='text-xs text-[var(--color-text-dim)] uppercase'>
                      {skill.title}
                    </span>
                    <span
                      className={`text-[9px] px-1 border ${
                        skill.meta?.statusTag === 'READY'
                          ? 'text-emerald-500 bg-emerald-950/30 border-emerald-800/40'
                          : skill.meta?.statusTag === 'ONLINE'
                            ? 'text-emerald-400 bg-emerald-950/30 border-emerald-700/40'
                            : 'text-cyan-500 bg-cyan-950/30 border-cyan-800/40'
                      }`}
                    >
                      {skill.meta?.statusTag}
                    </span>
                  </div>
                  <ul className='text-xs text-[var(--color-text-main)] space-y-1.5'>
                    {skill.contentBlocks.map((line, i) => (
                      <li key={i}>• {line}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 2: OPERATIONAL TIMELINE (EXPERIENCE) */}
          <section className='space-y-4'>
            <div className='text-[10px] text-[var(--color-text-dim)] uppercase tracking-widest'>
              [02] // OPERATIONAL_TIMELINE
            </div>
            <div className='border-l border-[var(--color-border-subtle)] pl-4 ml-2 space-y-6'>
              {timelineNodes.map((node) => (
                <div key={node.id} className='relative space-y-1'>
                  <div
                    className={`absolute -left-[21px] top-1 w-2 h-2 rounded-full border border-black ${
                      node.meta?.isCurrent
                        ? 'bg-[var(--color-accent-action)] animate-pulse'
                        : 'bg-zinc-800'
                    }`}
                  />

                  <div className='flex flex-wrap items-baseline justify-between text-xs gap-2'>
                    <span className='font-bold text-[var(--color-text-main)] uppercase tracking-wide'>
                      {node.title}
                    </span>
                    <span className='text-[var(--color-text-dim)] text-[10px]'>
                      {node.meta?.dateRange}
                    </span>
                  </div>

                  <div
                    className={`text-[11px] uppercase tracking-wider ${
                      node.meta?.isCurrent
                        ? 'text-[var(--color-accent-action)]'
                        : 'text-zinc-500'
                    }`}
                  >
                    {node.subtitle}
                  </div>

                  <div
                    className={`text-xs leading-relaxed max-w-2xl space-y-1 ${
                      node.meta?.isCurrent ? 'text-zinc-300' : 'text-zinc-500'
                    }`}
                  >
                    {node.contentBlocks.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 3: RUNTIME CAPABILITIES */}
          <section className='space-y-3'>
            <div className='text-[10px] text-[var(--color-text-dim)] uppercase tracking-widest'>
              [03] // RUNTIME_CAPABILITIES
            </div>
            <div className='border border-[var(--color-border-subtle)] bg-zinc-950/10 p-4 text-xs text-zinc-400 leading-relaxed space-y-3 rounded-sm'>
              <p>
                <span className='text-[var(--color-text-main)] font-bold uppercase'>
                  &gt; ZERO_WASTED_MOTION:
                </span>{' '}
                Programmatic user interfaces engineered without bloated
                third-party dependencies. Prioritizing pure CSS variables,
                semantic HTML layout trees, and high-speed viewport rendering
                cycles.
              </p>
              <p>
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
        <div className='animate-fade-in'>
          {/* SECTION 4: OPERATOR DOSSIER (PERSONAL) */}
          <section className='space-y-4'>
            <div className='text-[10px] text-[var(--color-text-dim)] uppercase tracking-widest'>
              [04] // OPERATOR_DOSSIER
            </div>

            <div className='border border-[var(--color-border-subtle)] bg-zinc-950/20 p-6 flex flex-col md:flex-row gap-6 items-center md:items-start rounded-sm'>
              {/* RETRO SECURITY BADGE PHOTO */}
              <div className='relative w-32 h-32 md:w-40 md:h-40 shrink-0 border border-zinc-800 bg-zinc-900 p-1.5 group overflow-hidden'>
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
              <div className='space-y-3 flex-1 text-center md:text-left'>
                <div>
                  <h3 className='text-sm font-bold text-[var(--color-text-main)] uppercase tracking-wider'>
                    Personal Subroutines // Beyond the Code
                  </h3>
                  <p className='text-[11px] text-[var(--color-text-dim)] uppercase mt-0.5'>
                    Loc: Costa Rica // Focus: Human-Centric UI & System
                    Optimization
                  </p>
                </div>

                <p className='text-xs text-zinc-400 leading-relaxed max-w-2xl'>
                  When I’m not optimizing layout lifecycles or stripping bloat
                  from codebases, I’m usually deep in things that challenge my
                  analytical brain in different ways. I love exploring complex
                  interfaces, dissecting sci-fi world-building, and chasing
                  clean, efficient designs in everyday digital and physical
                  systems.
                </p>

                <div className='flex flex-wrap justify-center md:justify-start gap-4 pt-1 text-[11px]'>
                  <div>
                    <span className='text-[var(--color-accent-action)]'>
                      &gt; INTERESTS:
                    </span>
                    <span className='text-zinc-500'>
                      {' '}
                      Minimalism, Audio Processing, Engineering Architecture,
                      Sci-Fi World-Building
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
