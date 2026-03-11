import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './global.scss'
import './tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Habit Tracker',
  description: 'Track your daily habits'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={inter.variable}
    >
      <body className="font-sans bg-dark-bg text-foreground">{children}</body>
    </html>
  )
}
