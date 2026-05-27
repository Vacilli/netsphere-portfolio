'use server'

export async function broadcastPacket(data: {
  identity: string
  payload: string
}) {
  const { identity, payload } = data

  if (!identity || !payload) {
    return { success: false, error: 'DATA_FIELDS_INCOMPLETE' }
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        // Re-link securely to your local saved .env matrix string
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Netsphere Deck <onboarding@resend.dev>',
        to: 'vacilli.irl@gmail.com',
        subject: `[NETSPHERE_UPLINK] Packet from ${identity}`,
        text: `SENDER IDENTITY: ${identity}\n\nDATA PAYLOAD:\n${payload}`,
      }),
    })

    const result = await response.json()

    if (!response.ok || result.error) {
      return {
        success: false,
        error: result.error?.message || 'API_GATEWAY_REJECTION',
      }
    }

    return { success: true, error: null }
  } catch (error) {
    return { success: false, error: 'TRANSMISSION_FAILURE_SERVER_DROP' }
  }
}
