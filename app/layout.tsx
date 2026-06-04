import '@/app/globals.css'
import { Geist_Mono } from 'next/font/google'
import { Metadata } from 'next'

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  // 1. Browser Tab Configuration
  title: 'MAINFRAME // Giovanni Amighetti — Software Engineer',
  description:
    'Interactive terminal interface displaying the professional dossier, core technical competencies, and project vault of Giovanni Amighetti.',

  // 2. Favicons & System Icons
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png', // Fallback for iOS
  },

  // 3. OpenGraph / Rich Media Link Previews (LinkedIn, Discord, Slack)
  openGraph: {
    title: 'Giovanni Amighetti | Software Engineer & Systems Architect',
    description:
      'Explore an interactive terminal-style portfolio containing my professional engineering resume, full-stack projects, and technical skills.',
    url: 'https://yourportfolio.com', // ⚠️ Remember to update this with your final live domain name later!
    siteName: 'Mainframe Terminal OS',
    images: [
      {
        url: '/assets/opengraph-image.png', // FIXED: Removed "/public" and unified extension to .png
        width: 1200,
        height: 630,
        alt: 'Mainframe Terminal OS Interface Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // 4. X / Twitter Preview Format
  twitter: {
    card: 'summary_large_image',
    title: 'Giovanni Amighetti | Software Engineer Portfolio',
    description:
      'Interactive terminal-style portfolio and software engineering resume.',
    images: ['/assets/opengraph-image.png'], // FIXED: Linked to the exact same image matrix path
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${geistMono.variable}`}>
      <body className='bg-black text-white h-screen flex flex-col overflow-hidden select-none font-mono antialiased'>
        {children}
      </body>
    </html>
  )
}
