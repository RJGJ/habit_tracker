import Link from 'next/link'
import Container from '@/components/global/Container'

export default function Page() {
  return (
    <section>
      <Container>
        <h1>Login Page</h1>
        <Link href="/">Back to Home</Link>
      </Container>
    </section>
  )
}
