import React, { Dispatch, Fragment, useState, useEffect } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { CaretDown, Check } from "phosphor-react"

interface SelectProps {
  options: Array<string>
  setter: Dispatch<unknown>
  getter: unknown
}

export function Select({ options, getter, setter }: SelectProps) {
  return (
    <Listbox value={getter} onChange={setter}>
      <div className="relative">
        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-[#3C3748] py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-[#8257E5] sm:text-sm">
          <span className="block truncate font-inter text-white">
            {getter as string}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <CaretDown className="h-5 w-5 text-[#9674E6]" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#3C3748] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options.map((option, optionIdx) => (
              <Listbox.Option
                key={optionIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-[#9674E6] text-white" : "text-white"
                  }`
                }
                value={option}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-bold" : "font-normal"
                      }`}
                    >
                      {option}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                        <Check className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}
