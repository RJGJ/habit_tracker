import Link from 'next/link'

export default function Page() {
  return (
    <section>
      <div className="container card">
        <h1>Hello World!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam magni
          id maxime ad dignissimos incidunt, sequi ut sed deleniti labore
          repellendus ipsam iusto quis assumenda necessitatibus corrupti nisi ea
          nemo.
        </p>
        <Link href="/auth/login">Login</Link>
      </div>
    </section>
  )
}
