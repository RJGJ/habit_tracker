import Link from 'next/link'
import { ComponentProps } from 'react'

type LinkProps = ComponentProps<typeof Link>

export default function MyLink({ className, ...props }: LinkProps) {
  return (
    <Link
      className={`text-primary cursor-pointer ${className || ''}`}
      {...props}
    />
  )
}
