import { ComponentProps } from 'react'

type ContainerProps = {
  children: React.ReactNode
  maxwidth?: number
} & ComponentProps<'div'>

export default function Container({
  children,
  maxwidth,
  ...props
}: ContainerProps) {
  const maxWidthClass = maxwidth ? `max-w-[${maxwidth}px]` : 'max-w-[1200px]'
  return (
    <div
      {...props}
      className={['mx-auto', props.className || ''].join(' ')}
      style={{ maxWidth: maxwidth ? `${maxwidth}px` : '1200px' }}
    >
      {children}
    </div>
  )
}
