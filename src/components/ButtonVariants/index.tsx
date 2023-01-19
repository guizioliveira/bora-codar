import React, { useState } from "react"
import { TestArea } from "./TestArea"
import { CaretLeft, CaretRight, X } from "phosphor-react"
import ButtonTable from "./ButtonTable"

export function ButtonStylePage() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className="relative h-[calc(100vh-80px)] w-full overflow-hidden bg-[#0b0911] pt-24">
      <div className="m-auto flex w-[958px] flex-col">
        <h1 className="mb-2 w-full text-left font-inter text-[32px] font-bold leading-[32px] text-white">
          Tipos de botão
        </h1>
        <p className="mb-14 font-sans text-xl leading-[23px] text-white opacity-[0.67]">
          Dentro de um layout, botões servem para destacar ações importantes a
          serem tomadas. <br />
          Acompanhe abaixo um exemplo de tipos e propriedades.
        </p>
        <ButtonTable />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            isOpen ? "right-[406px]" : "right-0"
          } absolute top-1/2 flex h-16 w-8 items-center justify-center gap-2 rounded-l-md bg-[#130F1E] transition-all duration-300`}
        >
          {isOpen ? (
            <CaretRight weight="bold" size={24} color={"#fff"} />
          ) : (
            <CaretLeft weight="bold" size={24} color={"#fff"} />
          )}
        </button>
        <div
          className={`${
            isOpen ? "translate-x-0" : "translate-x-full"
          } absolute top-0 right-0 h-[calc(100vh-80px)] w-full bg-[#130F1E] px-11 pt-[107px] transition-all duration-300 md:w-[406px]`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-8 top-5 block text-white md:hidden"
          >
            <X size={32} />
          </button>
          <TestArea />
        </div>
      </div>
    </div>
  )
}
