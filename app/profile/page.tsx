'use client'

import React from 'react'

export default function ProfilePage() {
  // Abstracting timeline data keeps the JSX layout trees completely pristine
  const operationalTimeline = [
    {
      role: 'Senior Full Stack Engineer',
      period: '2024 — PRESENT',
      facility: 'Ecosystem Architecture Lab',
      metrics:
        'Engineering high-performance web infrastructure, managing complex state lifecycles, and refactoring legacy applications into modern modular Next.js environments.',
      active: true,
    },
    {
      role: 'Software Engineer',
      period: '2022 — 2024',
      facility: 'Core Systems Corp',
      metrics:
        'Developed robust, secure RESTful APIs and interactive micro-frontends. Optimized database queries and streamlined state management architectures across decoupled client modules.',
      active: false,
    },
  ]

  return (
    <div className='space-y-8 max-w-4xl animate-scan p-4'>
      {/* HEADER LOG META */}
      <div className='border-b border-[var(--color-border-subtle)] pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4'>
        <div className='font-mono'>
          <p className='text-xs text-[var(--color-accent-action)] mb-1'>
            &gt; ACCESSING_OBJECT: SYSTEM_MANIFEST_v2.0.26
          </p>
          <h2 className='text-xl font-bold uppercase tracking-wider text-[var(--color-text-main)]'>
            System Manifest // Profile
          </h2>
        </div>

        {/* RECRUITER ACTION BUTTON */}
        <button
          onClick={() => window.print()} // Or swap with a real PDF download path links
          className='font-mono text-[10px] uppercase border border-[var(--color-accent-action)] text-[var(--color-accent-action)] px-3 py-1.5 bg-[var(--color-accent-action)]/5 hover:bg-[var(--color-accent-action)]/20 transition-all cursor-pointer rounded-sm tracking-wider w-fit self-start sm:self-auto'
        >
          [EXPORT_RESUME_RAW_DATA]
        </button>
      </div>

      {/* SECTION 1: CORE TELEMETRY METRICS */}
      <section className='space-y-3 font-mono'>
        <div className='text-[10px] text-[var(--color-text-dim)] uppercase tracking-widest'>
          [01] // SYSTEM_CORE_METRICS
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='border border-[var(--color-border-subtle)] bg-zinc-950/20 p-4 relative group hover:border-[var(--color-accent-action)]/40 transition-colors'>
            <div className='flex justify-between items-center mb-2'>
              <span className='text-xs text-[var(--color-text-dim)] uppercase'>
                /interface_layer
              </span>
              <span className='text-[9px] text-emerald-500 bg-emerald-950/30 px-1 border border-emerald-800/40'>
                READY
              </span>
            </div>
            <ul className='text-xs text-[var(--color-text-main)] space-y-1.5'>
              <li>• React / Next.js 15+</li>
              <li>• TypeScript (Strict)</li>
              <li>• Tailwind CSS v4</li>
              <li>• Micro-Frontends</li>
            </ul>
          </div>

          <div className='border border-[var(--color-border-subtle)] bg-zinc-950/20 p-4 relative group hover:border-[var(--color-accent-action)]/40 transition-colors'>
            <div className='flex justify-between items-center mb-2'>
              <span className='text-xs text-[var(--color-text-dim)] uppercase'>
                /infrastructure
              </span>
              <span className='text-[9px] text-emerald-500 bg-emerald-950/30 px-1 border border-emerald-800/40'>
                ONLINE
              </span>
            </div>
            <ul className='text-xs text-[var(--color-text-main)] space-y-1.5'>
              <li>• Node.js / Express</li>
              <li>• PostgreSQL / Prisma</li>
              <li>• REST / GraphQL APIs</li>
              <li>• Redis Caching</li>
            </ul>
          </div>

          <div className='border border-[var(--color-border-subtle)] bg-zinc-950/20 p-4 relative group hover:border-[var(--color-accent-action)]/40 transition-colors'>
            <div className='flex justify-between items-center mb-2'>
              <span className='text-xs text-[var(--color-text-dim)] uppercase'>
                /operations
              </span>
              <span className='text-[9px] text-cyan-500 bg-cyan-950/30 px-1 border border-cyan-800/40'>
                STABLE
              </span>
            </div>
            <ul className='text-xs text-[var(--color-text-main)] space-y-1.5'>
              <li>• Git / CI/CD Pipelines</li>
              <li>• Docker Containers</li>
              <li>• Vercel / AWS Deploy</li>
              <li>• Performance Opt.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 2: OPERATIONAL TIMELINE (EXPERIENCE) */}
      <section className='space-y-4 font-mono'>
        <div className='text-[10px] text-[var(--color-text-dim)] uppercase tracking-widest'>
          [02] // OPERATIONAL_TIMELINE
        </div>
        <div className='border-l border-[var(--color-border-subtle)] pl-4 ml-2 space-y-6'>
          {operationalTimeline.map((node, index) => (
            <div key={index} className='relative space-y-1'>
              {/* Node indicator changes depending on whether the job is current */}
              <div
                className={`absolute -left-[21px] top-1 w-2 h-2 rounded-full border border-black ${
                  node.active
                    ? 'bg-[var(--color-accent-action)] animate-pulse'
                    : 'bg-zinc-800'
                }`}
              />

              <div className='flex flex-wrap items-baseline justify-between text-xs gap-2'>
                <span className='font-bold text-[var(--color-text-main)] uppercase tracking-wide'>
                  {node.role}
                </span>
                <span className='text-[var(--color-text-dim)] text-[10px]'>
                  {node.period}
                </span>
              </div>

              <div
                className={`text-[11px] uppercase tracking-wider ${
                  node.active
                    ? 'text-[var(--color-accent-action)]'
                    : 'text-zinc-500'
                }`}
              >
                {node.facility}
              </div>

              <p
                className={`text-xs leading-relaxed max-w-2xl ${
                  node.active ? 'text-zinc-300' : 'text-zinc-500'
                }`}
              >
                {node.metrics}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: RUNTIME CAPABILITIES */}
      <section className='space-y-3 font-mono'>
        <div className='text-[10px] text-[var(--color-text-dim)] uppercase tracking-widest'>
          [03] // RUNTIME_CAPABILITIES
        </div>
        <div className='border border-[var(--color-border-subtle)] bg-zinc-950/10 p-4 text-xs text-zinc-400 leading-relaxed space-y-3 rounded-sm'>
          <p>
            <span className='text-[var(--color-text-main)] font-bold uppercase'>
              &gt; ZERO_WASTED_MOTION:
            </span>{' '}
            Programmatic user interfaces engineered without bloated third-party
            dependencies. Prioritizing pure CSS variables, semantic HTML layout
            trees, and high-speed viewport rendering cycles.
          </p>
          <p>
            <span className='text-[var(--color-text-main)] font-bold uppercase'>
              &gt; ARCHITECTURAL_REFACTORING:
            </span>{' '}
            Deconstructing monolith structures into responsive, SSR-optimized
            Next.js engines. Seamlessly connecting task runtimes with terminal
            aesthetic systems.
          </p>
        </div>
      </section>
    </div>
  )
}
