import { auth } from '../../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import Container from '@/components/global/Container'
import LoginForm from './LoginForm'
import Image from 'next/image'
import Card from '@/components/atoms/card'
import MyLink from '@/components/atoms/MyLink'

export default async function Page() {
  const session = await auth()

  if (session) {
    redirect('/')
  }

  return (
    <section className="py-[80px]">
      <Container maxwidth={360}>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center">
            <Image
              src="/icons/logo.svg"
              alt="Logo"
              width={60}
              height={60}
              className="mb-[16px]"
            />
            <h1 className="font-bold">Habit Pulse</h1>
          </div>
          <LoginForm />
          <Card>
            <div className="flex justify-center gap-2">
              <p>New to HabitPulse?</p>
              <MyLink href="/register">Create an account</MyLink>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}
