import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import MuiProviders from './mui-providers'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Aqua Intel — Executive Control Room',
  description: 'Real-time executive intelligence dashboard for global operations',
  keywords: ['dashboard', 'analytics', 'executive', 'intelligence'],
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', type: 'image/png' }],
  },
  appleWebApp: {
    capable: true,
    title: 'Aqua Intel',
    statusBarStyle: 'default',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className={roboto.className}>
        <MuiProviders>{children}</MuiProviders>
      </body>
    </html>
  )
}
