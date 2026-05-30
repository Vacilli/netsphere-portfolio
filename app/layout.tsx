import '@/app/globals.css'
import { Geist_Mono } from 'next/font/google'
import { Metadata } from 'next'

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  // 1. What shows up on the browser tab
  title: 'MAINFRAME // [Your Name] — Software Engineer',
  description:
    'Interactive terminal interface displaying the professional dossier, core technical competencies, and project vault of [Your Name].',

  // 2. What shows up when you share the link on LinkedIn, Discord, or Slack
  openGraph: {
    title: '[Your Name] | Software Engineer & Systems Architect',
    description:
      'Explore an interactive terminal-style portfolio containing my professional engineering resume, full-stack projects, and technical skills.',
    url: 'https://yourportfolio.com', // Replace with your live URL later
    siteName: 'Mainframe Terminal OS',
    images: [
      {
        url: '/opengraph-image.png', // Points to your custom preview image
        width: 1200,
        height: 630,
        alt: 'Mainframe Terminal OS Interface Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // 3. What shows up when shared on X/Twitter
  twitter: {
    card: 'summary_large_image',
    title: '[Your Name] | Software Engineer Portfolio',
    description:
      'Interactive terminal-style portfolio and software engineering resume.',
    images: ['/opengraph-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${geistMono.variable}`}>
      {/* Your exact body classes stay right here */}
      <body className='bg-black text-white h-screen flex flex-col overflow-hidden select-none font-mono antialiased'>
        {children}
      </body>
    </html>
  )
}
