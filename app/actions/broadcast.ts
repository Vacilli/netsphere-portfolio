'use server'

export async function broadcastPacket(data: {
  identity: string
  payload: string
}) {
  const { identity, payload } = data

  if (!identity || !payload) {
    return { success: false, error: 'DATA_FIELDS_INCOMPLETE' }
  }

  // KEEP: Vital guardrail for catching missing deployment variables early
  if (!process.env.RESEND_API_KEY) {
    console.error(
      '❌ CONFIG_ERROR: RESEND_API_KEY is missing from environment.',
    )
    return { success: false, error: 'SERVER_ENV_MISSING_API_KEY' }
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
        'User-Agent': 'TerminalMainframe/1.0',
      },
      body: JSON.stringify({
        from: 'Netsphere Deck <onboarding@resend.dev>',
        to: 'vacilli.irl@gmail.com',
        subject: `[NETSPHERE_UPLINK] Packet from ${identity}`,
        text: `SENDER IDENTITY: ${identity}\n\nDATA PAYLOAD:\n${payload}`,
      }),
    })

    // KEEP: Safe parsing strategy prevents crashes if an API sends raw HTML
    const responseText = await response.text()

    let result
    try {
      result = JSON.parse(responseText)
    } catch (e) {
      // Log ONLY on failure (e.g., if Avast intercepts it again)
      console.error(
        `🚨 API_PARSE_ERROR [Status ${response.status}]:`,
        responseText,
      )
      return { success: false, error: 'API_RAW_RESPONSE_NOT_JSON' }
    }

    if (!response.ok || result.error) {
      console.error('❌ API_GATEWAY_REJECTION:', result.error || result)
      return {
        success: false,
        error:
          result.message || result.error?.message || 'API_GATEWAY_REJECTION',
      }
    }

    // Completely silent on success 🤫
    return { success: true, error: null }
  } catch (error) {
    // KEEP: Essential for tracking real network/server drops in production cloud logs
    console.error('🚨 CRITICAL TRANSMISSION EXCEPTION:', error)
    return { success: false, error: 'TRANSMISSION_FAILURE_SERVER_DROP' }
  }
}
