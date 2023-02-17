import React, { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps {
  variant: "number" | "operator" | "operator-highlight"
  onClick?: () => void
  label?: ReactNode
}

export default function Button({
  label,
  variant = "number",
  onClick,
}: ButtonProps) {
  const variantStyle = {
    number: "text-[#EBEBEB]",
    operator: "text-[#EBEBEB] bg-[#462878] active:bg-[#462878][0.25]",
    "operator-highlight": "text-[#975DFA]",
  }

  return (
    <button
      onClick={onClick}
      className={`${variantStyle[variant]} flex h-16 w-16 items-center justify-center rounded-full bg-calculator-button font-rubik text-2xl leading-7 shadow-calculator-button active:bg-calculator-button-press active:shadow-calculator-button-press`}
    >
      {label}
    </button>
  )
}
