import React from "react"
import { CircleNotch, List } from "phosphor-react"

export type ButtonVariantType = "primary" | "secondary" | "tertiary"

interface ButtonProps {
  variant?: ButtonVariantType
  label: string
  disabled?: boolean
  loading?: boolean
  movable?: boolean
  onClick?: React.MouseEventHandler<HTMLInputElement>
  className?: string
}

export default function Button(props: ButtonProps) {
  const variantColor = {
    primary: "bg-[#8257E5] hover:bg-[#9674E6]",
    secondary: "bg-[#3C3748] hover:bg-[#6A617F]",
    tertiary: "bg-none",
  }

  function handleCurson(movable: boolean, loading: boolean) {
    if (!movable && !loading) return "cursor-default"

    if (movable) return "cursor-move"
    if (loading) return "cursor-wait"
  }

  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={`${props.className} ${
        variantColor[props.variant]
      }  ${handleCurson(
        props.movable,
        props.loading
      )} flex w-full items-center justify-center gap-2 rounded-3xl px-6 py-3 font-inter text-sm font-medium uppercase leading-6 text-white transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-[#D9CDF7] disabled:cursor-not-allowed disabled:opacity-[0.56]`}
    >
      <>
        {!props.movable ? (
          props.loading && (
            <span className="animate-spin">
              <CircleNotch size={18} color={"#fff"} weight="bold" />
            </span>
          )
        ) : (
          <span>
            <List size={18} color={"#fff"} weight="bold" />
          </span>
        )}
        {props.label}
      </>
    </button>
  )
}

Button.defaultProps = {
  label: "Button",
  variant: "primary",
  disabled: false,
  loading: false,
  movable: false,
}
