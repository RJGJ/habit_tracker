import { cookies } from 'next/headers'
import '../global.scss'
import { ThemeProvider } from 'next-themes'
import { redirect } from 'next/navigation'

const secret = new TextEncoder().encode(process.env.JWT_SECRET)

export default async function ProtectedLayout({
  children
}: {
  children: React.ReactNode
}) {
  const token = (await cookies()).get('access_token')?.value

  if (!token) redirect('/login')

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
