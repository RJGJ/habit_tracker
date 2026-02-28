export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1200px] mx-auto border border-red-500 border-dashed">
      {children}
    </div>
  )
}
