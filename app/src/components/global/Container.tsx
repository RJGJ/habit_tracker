export default function Container({
  children,
  maxwidth
}: {
  children: React.ReactNode
  maxwidth?: number
}) {
  const maxWidthClass = maxwidth ? `max-w-[${maxwidth}px]` : 'max-w-[1200px]'
  return (
    <div
      className="mx-auto"
      style={{ maxWidth: maxwidth ? `${maxwidth}px` : '1200px' }}
    >
      {children}
    </div>
  )
}
