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
    <div className="flex flex-col">
      <label
        className="mb-2 text-[14px] font-medium"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="border border-border py-[10px] px-[12px] rounded-lg bg-dark-bg"
        type={type}
        placeholder={placeholder}
        name={name}
        disabled={disabled}
        aria-invalid={isInvalid}
        value={value}
        onChange={onChange}
      />
      {!!errors && <p className="text-[12px] text-error font-bold">{errors}</p>}
    </div>
  )
}
