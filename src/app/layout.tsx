import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aqua Intel — Executive Control Room',
  description: 'Real-time executive intelligence dashboard for global operations',
  keywords: ['dashboard', 'analytics', 'executive', 'intelligence'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased" style={{ backgroundColor: '#f0f2f5', color: '#1e293b' }}>
        {children}
      </body>
    </html>
  )
}
