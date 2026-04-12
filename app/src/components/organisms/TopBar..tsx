import Image from 'next/image'
import Container from '@/components/atoms/Container'
import Link from 'next/link'
import Bell from '../atoms/icons/Bell'
import { useAuthStore } from '@/store/authStore'

export default function TopBar() {
  const user = useAuthStore(state => state.user)

  return (
    <div className="border-b border-[#1E293B]">
      <Container className="py-4 flex justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/icons/logo.svg"
            alt="Logo"
            width={28}
            height={28}
          />
          <Link
            href="/"
            className="text-lg font-bold"
          >
            HabitPulse
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <div className="p-2">
            <Bell />
          </div>
          {user && (
            <img
              className="size-8 rounded-4xl"
              src={user.avatarUrl}
              alt={`${user.firstName}'s avatar`}
            />
          )}
        </div>
      </Container>
    </div>
  )
}
