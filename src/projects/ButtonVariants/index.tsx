import React, { useState } from "react"
import { TestArea } from "./TestArea"
import { Table, TableMobile } from "./ButtonTables"
import { Button } from "@ui"
import { useWindowSize, useDocumentTitle } from "@hooks"
import { X } from "phosphor-react"

export default function ButtonStylePage() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { width } = useWindowSize()
  useDocumentTitle("Design system - Buttons")

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0b0911] pt-12 md:pt-24">
      <div className="m-auto flex w-full flex-col px-5 md:w-[958px] md:p-0">
        <h1 className="mb-8 w-full text-left font-inter text-[32px] font-bold leading-[32px] text-white md:mb-2">
          Button types
        </h1>
        <p className="font-sans text-xl text-white opacity-[0.67] md:leading-[23px]">
          Within a layout, buttons serve to highlight important actions to be
          taken.
        </p>
        <p className="font-sans text-xl text-white opacity-[0.67] md:leading-[23px]">
          Below is an example of types and properties.
        </p>
        <Button
          className="my-7 w-2/3  md:w-1/3"
          variant="primary"
          label="Let's try it!"
          onClick={() => {
            setIsOpen(true)
          }}
        />
        <div className="mb-8">{width > 767 ? <Table /> : <TableMobile />}</div>
        <div
          className={`${
            isOpen ? "translate-x-0" : "translate-x-full"
          } fixed top-0 right-0 h-screen w-full bg-[#130F1E] px-11 pt-[107px] transition-all duration-300 md:w-[406px]`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-8 top-10 text-white"
          >
            <X size={32} />
          </button>
          <TestArea />
        </div>
      </div>
    </div>
  )
}
