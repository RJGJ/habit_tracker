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
      className="bg-primary/5 hover:bg-primary border-2 border-primary text-primary hover:text-foreground transition ease-in-out duration-200 rounded-lg font-bold text-base p-[10px] cursor-pointer"
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
