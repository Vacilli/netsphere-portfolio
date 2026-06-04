'use client'

import React, { useState } from 'react'
import { broadcastPacket } from '@/app/actions/broadcast'
import InfoManifest from '@/app/components/info-manifest'

export default function SecureLinePage() {
  const [isTransmitting, setIsTransmitting] = useState(false)
  const [transmitted, setTransmitted] = useState(false)
  const [systemError, setSystemError] = useState<string | null>(null)

  const handleTransmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsTransmitting(true)
    setSystemError(null)

    const form = e.currentTarget
    const identityInput = form.elements.namedItem(
      'identity',
    ) as HTMLInputElement
    const payloadInput = form.elements.namedItem(
      'payload',
    ) as HTMLTextAreaElement

    const identity = identityInput?.value || ''
    const payload = payloadInput?.value || ''

    const result = await broadcastPacket({ identity, payload })

    setIsTransmitting(false)

    if (result && result.success === true) {
      setTransmitted(true)
    } else {
      setSystemError(result?.error || 'UNKNOWN_TRANSMISSION_DROP')
    }
  }

  return (
    <div className='space-y-8 max-w-2xl animate-scan font-mono text-xs p-4'>
      {/* MAIN HEADER NODE */}
      <div className='border-b border-[var(--color-border-subtle)] pb-4 flex items-center justify-between gap-4 relative'>
        <div>
          <p className='text-xs text-[var(--color-accent-action)] mb-1 animate-pulse tracking-wide font-bold'>
            &gt; EXECUTING: COMMS_LINK_LIVE // SECURE_EXTERNAL_ROUTE_ACTIVE...
          </p>
          <h2 className='text-xl font-bold uppercase tracking-wider text-[var(--color-text-main)]'>
            Secure Line // Comms Deck
          </h2>
        </div>
        <InfoManifest currentRoute='SECURE' />
      </div>

      {systemError && (
        <div className='border border-red-500/30 bg-red-500/5 p-3 text-red-400 font-bold uppercase tracking-wide animate-pulse'>
          &gt; CRITICAL_ERROR: {systemError}
        </div>
      )}

      {/* PROTOCOL [00]: WHATSAPP INSTANT LINK */}
      <div className='border border-emerald-500/20 bg-emerald-950/5 p-5 space-y-4 max-w-xl'>
        <div>
          <p className='text-[9px] text-emerald-400 font-bold uppercase tracking-widest mb-1'>
            [00] // RAPID_RELAY_CHANNEL
          </p>
          <h3 className='text-sm font-bold uppercase tracking-wider text-[var(--color-text-main)]'>
            Direct WhatsApp Uplink Session
          </h3>
        </div>

        <p className='text-zinc-400 text-[11px] leading-relaxed'>
          Preferred path for rapid recruitment agency coordination or contract
          offers. Establishes a direct communication socket to the
          developer&apos;s handset.
        </p>

        <div>
          <a
            href='https://wa.me/60715275?text=%3E%20NETSPHERE_UPLINK%3A%20Hello%20developer%2C%20I%20reviewed%2C%20your%20portfolio%20and%20want%20to%20discuss%20an%20opportunity...'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all text-[10px] px-4 py-2 uppercase font-bold tracking-wider cursor-pointer'
          >
            &gt; INITIALIZE_CHAT_SESSION
          </a>
        </div>
      </div>

      {/* SYSTEM DIVIDER LINE */}
      <div className='max-w-xl pr-2 flex items-center select-none'>
        <div className='h-[1px] w-full bg-[var(--color-border-subtle)]/40' />
      </div>

      {/* PROTOCOL [01]: ASYNCHRONOUS PACKET BROADCAST */}
      <div className='space-y-6 max-w-xl'>
        <div>
          <p className='text-[9px] text-[var(--color-accent-action)] font-bold uppercase tracking-widest mb-1'>
            [01] // ASYNCHRONOUS_PACKET_STREAM
          </p>
          <h3 className='text-sm font-bold uppercase tracking-wider text-[var(--color-text-main)]'>
            Email Telemetry Transmission
          </h3>
        </div>

        {!transmitted ? (
          /* LIVE TRANSMISSION FORM */
          <form onSubmit={handleTransmission} className='space-y-6'>
            <div className='space-y-2'>
              <label className='block text-[10px] text-[var(--color-text-dim)] uppercase tracking-widest'>
                SENDER_IDENTITY_MARKER (EMAIL)
              </label>
              <input
                type='email'
                name='identity'
                required
                disabled={isTransmitting}
                placeholder='IDENT_REQUIRED@DOMAIN.COM'
                className='w-full bg-zinc-950/40 border border-[var(--color-border-subtle)] focus:border-[var(--color-accent-action)] disabled:opacity-50 p-3 text-xs text-[var(--color-text-main)] focus:outline-none tracking-wide uppercase transition-all'
              />
            </div>

            <div className='space-y-2'>
              <label className='block text-[10px] text-[var(--color-text-dim)] uppercase tracking-widest'>
                PAYLOAD_DATA_STREAM (MESSAGE)
              </label>
              <textarea
                rows={5}
                name='payload'
                required
                disabled={isTransmitting}
                placeholder='ENTER TRANSMISSION PARAMETERS...'
                className='w-full bg-zinc-950/40 border border-[var(--color-border-subtle)] focus:border-[var(--color-accent-action)] disabled:opacity-50 p-3 text-xs text-[var(--color-text-main)] focus:outline-none tracking-wide uppercase resize-none custom-scrollbar transition-all'
              />
            </div>

            <button
              type='submit'
              disabled={isTransmitting}
              className='border border-[var(--color-accent-action)] text-[var(--color-accent-action)] hover:bg-[var(--color-accent-action)] hover:text-black disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-[var(--color-accent-action)] transition-all text-xs px-5 py-2.5 uppercase font-bold tracking-wider cursor-pointer'
            >
              {isTransmitting
                ? '== ENCRYPTING_PACKET_STREAM =='
                : '> BROADCAST_PACKET'}
            </button>
          </form>
        ) : (
          /* REAL SUCCESS RESPONSE MODULE */
          <div className='border border-[var(--color-accent-action)] bg-[var(--color-accent-action)]/5 p-6 space-y-3'>
            <p className='text-xs text-[var(--color-accent-action)] font-bold animate-pulse'>
              &gt; TRANSMISSION_SUCCESSFUL // GLOBAL_ROUTE_COMPLETED
            </p>
            <p className='text-zinc-400 leading-relaxed'>
              Your telemetry log stream has broken atmosphere and bypassed the
              cloud relay layer. The payload has successfully landed directly in
              the developer&apos;s master dashboard inbox.
            </p>
            <button
              onClick={() => setTransmitted(false)}
              className='text-[var(--color-text-main)] underline hover:text-[var(--color-accent-action)] block pt-1 cursor-pointer'
            >
              &gt; Reset Connection Sequence
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
