import React from 'react'

export enum ButtonVariant {
  Primary
}

type ButtonProps = React.ComponentProps<'button'> & {
  variant: ButtonVariant
  children: React.ReactNode
  disabled: boolean
  onClick: () => void
}

export default function Button({
  variant,
  children,
  onClick,
  disabled = false,
  ...props
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
