import React, { useState } from "react"
import { Toggle, Select } from "../Ui"
import Button, { ButtonVariantType } from "../Ui/Button"

export function TestArea() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isMovable, setIsMovable] = useState<boolean>(false)
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const [variant, setVariant] = useState<ButtonVariantType>("primary")
  const options = ["primary", "secondary", "tertiary"]

  return (
    <div>
      <h2 className="font-inter text-[32px] font-bold leading-8 text-white antialiased">
        Teste os botões
      </h2>
      <p className="mt-2 font-sans text-[19px] leading-6 text-white antialiased opacity-[0.67]">
        Interaja com os botões e observe a mudança de aparência e de cursores
      </p>
      <div className="mt-[68px]">
        <Button
          label="interaja comigo"
          loading={isLoading}
          movable={isMovable}
          variant={variant}
          disabled={isDisabled}
        />
      </div>
      <div className="mt-14 flex flex-col gap-2">
        <div className="mb-7 h-[1px] w-full bg-[#323238]"></div>
        <label className="grid grid-cols-2 items-center font-inter text-white">
          loading
          <Toggle getter={isLoading} setter={setIsLoading} />
        </label>
        <label className="grid grid-cols-2 items-center font-inter text-white">
          movable
          <Toggle getter={isMovable} setter={setIsMovable} />
        </label>
        <label className="grid grid-cols-2 items-center font-inter text-white">
          disabled
          <Toggle getter={isDisabled} setter={setIsDisabled} />
        </label>
        <label className="grid grid-cols-2 items-center font-inter text-white">
          variant
          <Select options={options} setter={setVariant} getter={variant} />
        </label>
      </div>
    </div>
  )
}
