import { create } from 'zustand'

type User = {
  firstName: string
  lastName: string
  email: string
  avatarUrl: string
}

type AuthState = {
  user: User | null
  loggedIn: boolean
}

export const useAuthStore = create<AuthState>(set => ({
  user: {
    firstName: 'Juan',
    lastName: 'Dela Cruz',
    email: 'juan.dela.cruz@example.com',
    avatarUrl: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
  loggedIn: false,

  setUser: (user: User) => set({ user, loggedIn: true })
}))
