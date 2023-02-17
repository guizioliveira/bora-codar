import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { SlidersHorizontal } from "phosphor-react"
import { useMusicPlayer } from "@hooks"

export default function VariantWidget() {
  const { variant, setVariant } = useMusicPlayer()
  return (
    <Popover
      className={
        "absolute bottom-5 right-5 flex flex-col items-end md:bottom-16 md:right-20 "
      }
    >
      {({ open }) => (
        <>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-2"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-2"
          >
            <Popover.Panel className="mb-10 flex flex-col rounded-md rounded-br-none bg-[#8257E5] p-6 md:mb-4">
              <label className="flex items-center gap-2 text-white">
                <input
                  type="radio"
                  value="full"
                  name="full"
                  checked={variant === "full"}
                  onChange={(checked) => setVariant("full")}
                />
                Full
              </label>
              <label className="flex items-center gap-2 text-white">
                <input
                  type="radio"
                  value="short"
                  name="short"
                  checked={variant === "short"}
                  onChange={(checked) => setVariant("short")}
                />
                Short
              </label>
              <label className="flex items-center gap-2 text-white">
                <input
                  type="radio"
                  value="minimal"
                  name="minimal"
                  checked={variant === "minimal"}
                  onChange={(checked) => setVariant("minimal")}
                />
                Minimal
              </label>
            </Popover.Panel>
          </Transition>
          <Popover.Button
            className={`${
              open ? "-bottom-3 md:-bottom-10" : "bottom-0"
            } group absolute flex h-12 w-12 items-center justify-center rounded-full bg-[#8257E5] text-white transition-all duration-300`}
          >
            <SlidersHorizontal size={32} weight="fill" />
          </Popover.Button>
        </>
      )}
    </Popover>
  )
}
