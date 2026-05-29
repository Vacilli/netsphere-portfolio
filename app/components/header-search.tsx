'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal } from '@fortawesome/free-solid-svg-icons'

export default function HeaderSearch() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <header className='h-16 flex items-center justify-between px-8 border-b border-[var(--color-border-subtle)] bg-zinc-950/40 font-mono'>
      <div className='w-full relative group flex items-center edge-status-focus'>
        <span className='absolute left-0 text-[var(--color-text-dim)] group-focus-within:text-[var(--color-text-main)] transition-colors'>
          <FontAwesomeIcon icon={faTerminal} className='text-xs' />
        </span>

        <input
          type='text'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder='EXECUTE_SEARCH_PROTOCOL...'
          className='w-full bg-transparent border-b border-[var(--color-border-subtle)] focus:border-[var(--color-text-main)] py-2 pl-7 pr-8 text-sm font-mono tracking-[0.1em] text-[var(--color-text-main)] focus:outline-none transition-all placeholder:text-[var(--color-text-dim)] uppercase custom-terminal-caret'
        />
      </div>
    </header>
  )
}
