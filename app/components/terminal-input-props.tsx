// app/components/TerminalInput.tsx
'use client'

import React, { useEffect } from 'react'

interface TerminalInputProps {
  inputCommand: string
  setInputCommand: (val: string) => void
  isAwaitingPassword: boolean
  setIsAwaitingPassword: (val: boolean) => void
  onSubmit: (e: React.FormEvent) => void
}

export default function TerminalInput({
  inputCommand,
  setInputCommand,
  isAwaitingPassword,
  setIsAwaitingPassword,
  onSubmit,
}: TerminalInputProps) {
  // ESCKEY ESCAPE INTERCEPTOR ROUTINE
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isAwaitingPassword) {
        setIsAwaitingPassword(false)
        setInputCommand('')
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isAwaitingPassword, setInputCommand, setIsAwaitingPassword])

  const handleCancel = () => {
    setIsAwaitingPassword(false)
    setInputCommand('')
  }

  return (
    <form onSubmit={onSubmit} className='space-y-2'>
      <label
        htmlFor='terminal-input'
        className='block text-[10px] text-[var(--color-text-dim)] uppercase tracking-widest'
      >
        {isAwaitingPassword
          ? 'SECURE_ACCESS_KEY_REQUIRED // [ESC] TO CANCEL'
          : 'EXECUTE_ROUTINE_PROMPT'}
      </label>
      <div
        className={`flex items-center gap-2 border p-3 transition-all rounded-sm relative ${isAwaitingPassword ? 'border-amber-500/60 bg-amber-950/5 focus-within:border-amber-500' : 'border-[var(--color-border-subtle)] focus-within:border-[var(--color-accent-action)] bg-zinc-950/40'}`}
      >
        <span
          className={`font-bold select-none ${isAwaitingPassword ? 'text-amber-500 animate-pulse' : 'text-[var(--color-accent-action)]'}`}
        >
          {isAwaitingPassword ? '?' : '$'}
        </span>

        <div className='relative flex-1 flex items-center'>
          {isAwaitingPassword && (
            <div className='absolute inset-y-0 left-0 flex items-center text-xs tracking-wide text-amber-500 pointer-events-none uppercase font-bold select-none'>
              {inputCommand.replace(/./g, '█')}
              <span className='w-1.5 h-3.5 bg-amber-500 ml-0.5 animate-pulse' />
            </div>
          )}

          <input
            id='terminal-input'
            type='text'
            autoComplete='off'
            value={inputCommand}
            onChange={(e) => setInputCommand(e.target.value)}
            placeholder={
              isAwaitingPassword
                ? ''
                : 'TYPE help, about, profile, demo or contact...'
            }
            className={`w-full bg-transparent border-none outline-none text-xs uppercase tracking-wide focus:ring-0 p-0 ${
              isAwaitingPassword
                ? 'text-transparent select-none caret-transparent'
                : 'text-[var(--color-text-main)]'
            }`}
          />
        </div>

        {/* CLICKABLE INTERFACE ABORT TARGET */}
        {isAwaitingPassword && (
          <button
            type='button'
            onClick={handleCancel}
            className='text-[9px] text-amber-600 hover:text-amber-400 border border-amber-800/40 px-1 font-bold rounded-xs cursor-pointer bg-amber-950/20'
            title='Cancel Secure Input Loop'
          >
            [X] ABORT
          </button>
        )}
      </div>
    </form>
  )
}
