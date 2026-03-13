import React, { HTMLInputTypeAttribute } from 'react'

type TextFieldProps = {
  id: string
  name: string
  type: string
  label: React.ReactNode
  placeholder?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  isInvalid?: boolean
  errors: string
  value?: string
}

export default function TextField({
  id,
  name,
  type,
  label,
  placeholder,
  onChange,
  disabled = false,
  isInvalid = false,
  errors,
  value
}: TextFieldProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        disabled={disabled}
        aria-invalid={isInvalid}
        value={value}
        onChange={onChange}
      />
      {!!errors && <p>{errors}</p>}
    </div>
  )
}
