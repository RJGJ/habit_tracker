import type { Metadata } from 'next'
import './global.scss'
import { ThemeProvider } from 'next-themes'

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
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
