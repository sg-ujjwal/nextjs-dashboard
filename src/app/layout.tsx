import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import './globals.css'
import MuiProviders from './mui-providers'

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ubuntu',
})

export const metadata: Metadata = {
  title: 'Aqua Intel — Executive Control Room',
  description: 'Real-time executive intelligence dashboard for global operations',
  keywords: ['dashboard', 'analytics', 'executive', 'intelligence'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={ubuntu.variable}>
      <body className={ubuntu.className}>
        <MuiProviders>{children}</MuiProviders>
      </body>
    </html>
  )
}
