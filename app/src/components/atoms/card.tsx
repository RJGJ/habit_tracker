export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="border rounded-[12px] border-primary p-[30px] bg-[#1D2F2A]">
      {children}
    </div>
  )
}
