'use client'

import { signOut } from 'next-auth/react'

export default function Page() {
  const logout = async () => {
    await signOut({ redirect: false })
    window.location.href = '/login'
  }

  return (
    <section>
      <div className="container card">
        <h1>Welcome!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam magni
          id maxime ad dignissimos incidunt, sequi ut sed deleniti labore
          repellendus ipsam iusto quis assumenda necessitatibus corrupti nisi ea
          nemo.
        </p>
        <button onClick={logout}>Logout</button>
      </div>
    </section>
  )
}
