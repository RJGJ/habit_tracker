import { auth } from '../../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import Container from '@/components/atoms/Container'
import LoginForm from './LoginForm'

export default async function Page() {
  const session = await auth()

  if (session) {
    redirect('/')
  }

  return (
    <section>
      <Container>
        <h1>Login</h1>
        <LoginForm />
      </Container>
    </section>
  )
}
