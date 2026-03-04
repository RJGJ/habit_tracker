import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { JWT } from 'next-auth/jwt'

// Extend the User type to include accessToken and refreshToken
declare module 'next-auth' {
  interface User {
    accessToken: string
    refreshToken: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string
    refreshToken: string
  }
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Django Login',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const res = await fetch(`${process.env.API_URL}/api/auth/login/`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password
          })
        })

        const data = await res.json()

        if (res.ok && data.access) {
          return {
            accessToken: data.access,
            refreshToken: data.refresh
          }
        }

        return null
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: any }) {
      if (user) {
        token.accessToken = user.accessToken
        token.refreshToken = user.refreshToken
      }
      return token
    },
    async session({ session, token }: { session: any; token: JWT }) {
      session.user = {
        ...session.user,
        accessToken: token.accessToken,
        refreshToken: token.refreshToken
      }
      return session
    }
  }
}

const { handlers, auth } = NextAuth(authOptions)
export const { GET, POST } = handlers
export { auth }
