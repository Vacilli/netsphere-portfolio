'use client'

import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='h-full flex flex-col items-center justify-center font-mono text-center space-y-4 max-w-md mx-auto'>
      <div className='p-6 border border-dashed border-red-500/40 bg-red-950/10 rounded-sm w-full space-y-2 animate-pulse'>
        <h2 className='text-red-500 font-bold tracking-widest text-sm uppercase'>
          ✖ CRITICAL_EXCEPTION: BRKN_LINK
        </h2>
        <p className='text-xs text-zinc-400 leading-relaxed'>
          SEGMENTATION FAULT: The requested address directory does not map to an
          authenticated mainframe routing node.
        </p>
      </div>

      <Link
        href='/'
        className='text-[10px] tracking-widest uppercase border border-zinc-800 text-zinc-500 px-4 py-2 hover:border-[var(--color-accent-action)] hover:text-[var(--color-accent-action)] transition-all bg-zinc-950 rounded-xs'
      >
        [RETURN_TO_CORE_CONSOLE]
      </Link>
    </div>
  )
}
