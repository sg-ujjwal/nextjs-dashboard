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
