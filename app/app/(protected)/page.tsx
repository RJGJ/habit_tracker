'use client'

import Container from '@/components/atoms/Container'
import MyLink from '@/components/atoms/MyLink'
import TopBar from '@/components/organisms/TopBar.'
import { signOut } from 'next-auth/react'

export default function Page() {
  const logout = async () => {
    await signOut({ redirect: false })
    window.location.href = '/login'
  }

  return (
    <div>
      <TopBar />
      <Container>
        <h1>Welcome!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam magni
          id maxime ad dignissimos incidunt, sequi ut sed deleniti labore
          repellendus ipsam iusto quis assumenda necessitatibus corrupti nisi ea
          nemo.
        </p>
        <MyLink href="/profile">Profile</MyLink>
        <button onClick={logout}>Logout</button>
      </Container>
    </div>
  )
}
