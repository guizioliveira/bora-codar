import { ReactNode } from "react"

interface BoxProps {
  children?: ReactNode
  className?: string
}

export function Box({ children, className }: BoxProps) {
  return (
    <div
      className={`${className} box-border w-full rounded-2xl bg-[#363447] px-8 py-7 font-inter text-white shadow-dashboard-box md:px-12`}
    >
      {children}
    </div>
  )
}
