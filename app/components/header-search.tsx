'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal } from '@fortawesome/free-solid-svg-icons'
import { portfolioRegistry } from '../data/portfolioData'
import { executeRegistrySearch } from './search-engine'

export default function HeaderSearch() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // 1. Unified Search Engine (Upgraded Strategy)
  const filteredResults = executeRegistrySearch(searchQuery)

  // Close dropdown if user clicks outside of the search wrapper
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // 2. Keyboard Control Interceptor
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || filteredResults.length === 0) return

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev + 1) % filteredResults.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(
        (prev) => (prev - 1 + filteredResults.length) % filteredResults.length,
      )
    } else if (e.key === 'Enter') {
      e.preventDefault()
      handleNavigate(filteredResults[selectedIndex].targetUrl)
    } else if (e.key === 'Escape') {
      setIsOpen(false)
    }
  }

  const handleNavigate = (url: string) => {
    router.push(url)
    setSearchQuery('') // Clear the query bar
    setSelectedIndex(0) // Safe reset on navigation closure
    setIsOpen(false) // Dismiss dropdown overlay
  }

  const hasTyped = searchQuery.trim().length > 0
  const noResultsFound = hasTyped && filteredResults.length === 0

  return (
    <header className='h-16 flex items-center justify-between px-8 border-b border-[var(--color-border-subtle)] bg-zinc-950/40 font-mono relative z-50'>
      <div
        ref={dropdownRef}
        className='w-full relative flex items-center edge-status-focus'
      >
        {/* TERMINAL PROMPT ICON */}
        <span className='absolute left-0 text-[var(--color-text-dim)] group-focus-within:text-[var(--color-text-main)] transition-colors'>
          <FontAwesomeIcon icon={faTerminal} className='text-xs' />
        </span>

        {/* LOOK-UP INPUT MATRIX */}
        <input
          type='text'
          value={searchQuery}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            setSearchQuery(e.target.value)
            setSelectedIndex(0) // Batched instantly right here to prevent cascading sub-renders
          }}
          placeholder='EXECUTE_SEARCH_PROTOCOL...'
          className='w-full bg-transparent border-b border-[var(--color-border-subtle)] focus:border-[var(--color-text-main)] py-2 pl-7 pr-8 text-sm font-mono tracking-[0.1em] text-[var(--color-text-main)] focus:outline-none transition-all placeholder:text-[var(--color-text-dim)] uppercase custom-terminal-caret'
        />

        {/* 3. DYNAMIC COMMAND DROP-DOWN OVERLAY */}
        {isOpen && hasTyped && (
          <div className='absolute top-full left-0 w-full mt-2 bg-zinc-950/95 backdrop-blur-md border border-[var(--color-border-subtle)] shadow-2xl p-2 rounded-sm max-h-96 overflow-y-auto z-50'>
            {/* RESULTS STATE FOUND */}
            {filteredResults.length > 0 && (
              <div className='space-y-1'>
                <div className='text-[9px] text-[var(--color-text-dim)] px-2 py-1 uppercase tracking-widest border-b border-zinc-900 mb-1 flex justify-between'>
                  <span>// SEARCH_RESULTS_INDEX</span>
                  <span>{filteredResults.length} RECORDS COMPARED</span>
                </div>

                {filteredResults.map((item, index) => {
                  const isSelected = index === selectedIndex
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleNavigate(item.targetUrl)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`p-2 cursor-pointer transition-colors text-left flex flex-col sm:flex-row sm:items-center justify-between gap-1 rounded-sm border ${
                        isSelected
                          ? 'bg-zinc-900/60 border-[var(--color-accent-action)]/40'
                          : 'bg-transparent border-transparent'
                      }`}
                    >
                      <div>
                        <div className='flex items-center gap-2'>
                          {isSelected && (
                            <span className='text-[var(--color-accent-action)] text-xs animate-pulse'>
                              &gt;
                            </span>
                          )}
                          <span className='text-xs font-bold text-[var(--color-text-main)] uppercase'>
                            {item.title}
                          </span>
                          <span className='text-[10px] text-zinc-500 font-normal normal-case hidden sm:inline'>
                            — {item.subtitle}
                          </span>
                        </div>
                        {/* Print out first content block as text context block snippet preview */}
                        <p className='text-[11px] text-[var(--color-text-dim)] pl-4 truncate max-w-xl mt-0.5'>
                          {item.contentBlocks[0]}
                        </p>
                      </div>

                      {/* CATEGORY TAG PINS */}
                      <span className='text-[9px] tracking-wider font-bold text-[var(--color-accent-action)] border border-[var(--color-accent-action)]/20 px-1.5 py-0.5 bg-[var(--color-accent-action)]/5 uppercase rounded-xs self-start sm:self-auto'>
                        {item.category}
                      </span>
                    </div>
                  )
                })}

                {/* LEGEND PROMPT HINT */}
                <div className='text-[9px] text-zinc-600 border-t border-zinc-900 pt-1 px-2 mt-2 flex justify-between tracking-wide'>
                  <span>↑↓ TO NAVIGATE MATRIX</span>
                  <span>↵ ENTER TO EXECUTE ROUTINE</span>
                </div>
              </div>
            )}

            {/* 4. EXCEPTION STATE: NO RECORDS CONVERGED */}
            {noResultsFound && (
              <div className='p-3 border border-dashed border-amber-500/30 bg-amber-950/5 text-left rounded-sm space-y-1.5 animate-pulse'>
                <p className='text-xs text-amber-500 font-semibold uppercase tracking-wider'>
                  ✖ QUERY_EXCEPTION: NO_RECORDS_KEYED
                </p>
                <p className='text-zinc-500 text-[11px] leading-relaxed'>
                  The mainframe registry could not resolve search criteria: "
                  {searchQuery}". Ensure correct framework spelling.
                </p>
                <div className='text-[9px] text-zinc-600 border-t border-zinc-900/60 pt-1.5 mt-1 tracking-wider uppercase'>
                  SUGGESTED_INDEX:{' '}
                  <span className='text-[var(--color-accent-action)]'>
                    Next.js, Tailwind, Interface, Ops, Terminal
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  )
}
