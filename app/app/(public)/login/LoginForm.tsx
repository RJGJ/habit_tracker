'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { loginSchema, type LoginInput } from '@/lib/validations/auth'
import { ZodError } from 'zod'
import Card from '@/components/atoms/card'
import Container from '@/components/global/Container'

export default function LoginForm() {
  const router = useRouter()
  const [formData, setFormData] = useState<LoginInput>({
    username: '',
    password: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [generalError, setGeneralError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev: LoginInput) => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setGeneralError('')
    setErrors({})

    try {
      // Validate form data with Zod
      const validatedData = loginSchema.parse(formData)

      // Call signIn with the validated credentials
      const result = await signIn('credentials', {
        username: validatedData.username,
        password: validatedData.password,
        redirect: false
      })

      if (result?.error) {
        setGeneralError('Invalid username or password')
      } else if (result?.ok) {
        router.push('/')
        router.refresh()
      }
    } catch (error) {
      if (error instanceof ZodError) {
        const fieldErrors: Record<string, string> = {}
        error.issues.forEach(issue => {
          const path = issue.path.join('.')
          fieldErrors[path] = issue.message
        })
        setErrors(fieldErrors)
      } else {
        setGeneralError('An unexpected error occurred')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <h2 className="text-center text-[24px] font-bold">Sign in</h2>
      <form onSubmit={handleSubmit}>
        {generalError && (
          <div style={{ color: 'red', marginBottom: '1rem' }}>
            {generalError}
          </div>
        )}
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            disabled={isLoading}
            aria-invalid={!!errors.username}
          />
          {errors.username && (
            <p style={{ color: 'red', fontSize: '0.875rem' }}>
              {errors.username}
            </p>
          )}
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            disabled={isLoading}
            aria-invalid={!!errors.password}
          />
          {errors.password && (
            <p style={{ color: 'red', fontSize: '0.875rem' }}>
              {errors.password}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </Card>
  )
}
