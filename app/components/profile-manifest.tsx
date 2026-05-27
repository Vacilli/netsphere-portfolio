import React from 'react'

export default function ProfileManifest() {
  return (
    <div className='space-y-8 max-w-4xl animate-scan'>
      {/* HEADER LOG META */}
      <div className='border-b border-[var(--color-border-subtle)] pb-4'>
        <p className='text-xs text-[var(--color-accent-action)] font-mono mb-1'>
          &gt; ACCESSING_OBJECT: SYSTEM_MANIFEST_v2.0.26
        </p>
        <h2 className='text-xl font-bold uppercase tracking-wider text-[var(--color-text-main)] font-mono'>
          System Manifest // Profile
        </h2>
      </div>

      {/* SECTION 1: CORE TELEMETRY METRICS */}
      <section className='space-y-3'>
        <div className='text-[10px] text-[var(--color-text-dim)] uppercase tracking-widest font-mono'>
          [01] // SYSTEM_CORE_METRICS
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 font-mono'>
          <div className='border border-[var(--color-border-subtle)] bg-zinc-950/20 p-4'>
            <div className='text-xs text-[var(--color-text-dim)] uppercase mb-2'>
              /interface_layer
            </div>
            <ul className='text-xs text-[var(--color-text-main)] space-y-1'>
              <li>• React / Next.js 15+</li>
              <li>• TypeScript (Strict)</li>
              <li>• Tailwind CSS v4</li>
              <li>• Micro-Frontends</li>
            </ul>
          </div>
          <div className='border border-[var(--color-border-subtle)] bg-zinc-950/20 p-4'>
            <div className='text-xs text-[var(--color-text-dim)] uppercase mb-2'>
              /infrastructure
            </div>
            <ul className='text-xs text-[var(--color-text-main)] space-y-1'>
              <li>• Node.js / Express</li>
              <li>• PostgreSQL / Prisma</li>
              <li>• REST / GraphQL APIs</li>
              <li>• Redis Caching</li>
            </ul>
          </div>
          <div className='border border-[var(--color-border-subtle)] bg-zinc-950/20 p-4'>
            <div className='text-xs text-[var(--color-text-dim)] uppercase mb-2'>
              /operations
            </div>
            <ul className='text-xs text-[var(--color-text-main)] space-y-1'>
              <li>• Git / CI/CD Pipelines</li>
              <li>• Docker Containers</li>
              <li>• Vercel / AWS Deploy</li>
              <li>• Performance Opt.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 2: OPERATIONAL TIMELINE (EXPERIENCE) */}
      <section className='space-y-4'>
        <div className='text-[10px] text-[var(--color-text-dim)] uppercase tracking-widest font-mono'>
          [02] // OPERATIONAL_TIMELINE
        </div>
        <div className='font-mono space-y-4 border-l border-[var(--color-border-subtle)] pl-4 ml-2'>
          {/* LOG NODE 1 */}
          <div className='relative space-y-1'>
            <div className='absolute -left-[21px] top-1 w-2 h-2 rounded-full bg-[var(--color-accent-action)]' />
            <div className='flex flex-wrap items-baseline justify-between text-xs'>
              <span className='font-bold text-[var(--color-text-main)] uppercase'>
                Senior Full Stack Engineer
              </span>
              <span className='text-[var(--color-text-dim)] text-[10px]'>
                2024 — PRESENT
              </span>
            </div>
            <div className='text-[11px] text-[var(--color-accent-action)] uppercase tracking-wider'>
              Ecosystem Architecture Lab
            </div>
            <p className='text-xs text-zinc-400 leading-relaxed max-w-2xl'>
              Engineering high-performance web infrastructure, managing complex
              state lifecycles, and refactoring legacy applications into modern
              modular Next.js environments.
            </p>
          </div>

          {/* LOG NODE 2 */}
          <div className='relative space-y-1'>
            <div className='absolute -left-[21px] top-1 w-2 h-2 rounded-full bg-zinc-700' />
            <div className='flex flex-wrap items-baseline justify-between text-xs'>
              <span className='font-bold text-[var(--color-text-main)] uppercase'>
                Software Engineer
              </span>
              <span className='text-[var(--color-text-dim)] text-[10px]'>
                2022 — 2024
              </span>
            </div>
            <div className='text-[11px] text-[var(--color-text-dim)] uppercase tracking-wider'>
              Core Systems Corp
            </div>
            <p className='text-xs text-zinc-500 leading-relaxed max-w-2xl'>
              Developed robust, secure RESTful APIs and interactive
              micro-frontends. Optimized database queries and streamlined state
              management architectures across decoupled client modules.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: RUNTIME CAPABILITIES */}
      <section className='space-y-3'>
        <div className='text-[10px] text-[var(--color-text-dim)] uppercase tracking-widest font-mono'>
          [03] // RUNTIME_CAPABILITIES
        </div>
        <div className='border border-[var(--color-border-subtle)] bg-zinc-950/10 p-4 font-mono text-xs text-zinc-400 leading-relaxed space-y-2'>
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
