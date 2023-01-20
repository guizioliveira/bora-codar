import { CircleNotch, List } from "phosphor-react"
import React from "react"

export function TableMobile() {
  return (
    <>
      <div className="m-auto mb-8 overflow-hidden">
        <h2 className="w-full font-inter text-2xl font-bold text-[#8257E5]">
          Default
        </h2>
        <div className="mt-2 flex items-center gap-6 overflow-x-scroll rounded-md bg-[#130F1E] px-4 py-5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-700">
          <div className="min-w-max rounded-3xl bg-[#8257E5] py-3 px-6 text-center">
            <span className="cursor-default font-inter text-sm uppercase text-white">
              Default Primary
            </span>
          </div>
          <div className="min-w-max rounded-3xl bg-[#3C3748] py-3 px-6">
            <span className="cursor-default font-inter text-sm uppercase text-white">
              Default Secondary
            </span>
          </div>
          <div className="min-w-max rounded-3xl bg-none py-3 px-6">
            <span className="cursor-default font-inter text-sm uppercase text-white">
              Default Tertiary
            </span>
          </div>
          <div className="w-12">
            <img
              className="mx-[18.2px]"
              src="./assets/buttonTable/cursor-default.png"
              alt="cursor-default"
            />
          </div>
        </div>
      </div>

      <div className="m-auto my-8 overflow-hidden">
        <h2 className="w-full font-inter text-2xl font-bold text-[#8257E5]">
          Hover
        </h2>
        <div className="mt-2 flex items-center gap-6 overflow-x-scroll rounded-md bg-[#130F1E] px-4 py-5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-700">
          <div className="min-w-max rounded-3xl bg-[#9674E5] py-3 px-6">
            <span className="cursor-default font-inter text-sm uppercase text-white">
              Hover Primary
            </span>
          </div>
          <div className="min-w-max rounded-3xl bg-[#6A617F] py-3 px-6">
            <span className="cursor-default font-inter text-sm uppercase text-white">
              Hover Secondary
            </span>
          </div>
          <div className="min-w-max rounded-3xl bg-none py-3 px-6">
            <span className="cursor-default font-inter text-sm uppercase text-white">
              Hover Tertiary
            </span>
          </div>
          <div className="w-12">
            <img
              className="mx-[18.2px]"
              src="./assets/buttonTable/cursor-default.png"
              alt="cursor-default"
            />
          </div>
        </div>
      </div>

      <div className="m-auto my-8 overflow-hidden">
        <h2 className="w-full font-inter text-2xl font-bold text-[#8257E5]">
          Focus
        </h2>
        <div className="mt-2 flex items-center gap-6 overflow-x-scroll rounded-md bg-[#130F1E] px-4 py-5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-700">
          <div className="min-w-max rounded-3xl border-2 border-[#D9CDF7] bg-[#8257E5] py-[10px] px-[22px]">
            <span className="cursor-default font-inter text-sm uppercase leading-6 text-white">
              Focus Primary
            </span>
          </div>
          <div className="min-w-max rounded-3xl border-2 border-[#D9CDF7] bg-[#3C3748] py-[10px] px-[22px]">
            <span className="cursor-default font-inter text-sm uppercase leading-6 text-white">
              Focus Secondary
            </span>
          </div>
          <div className="min-w-max rounded-3xl border-2 border-[#D9CDF7] bg-none py-[10px] px-[22px]">
            <span className="cursor-default font-inter text-sm uppercase text-white">
              Focus Tertiary
            </span>
          </div>
          <div className="w-12">
            <img
              className="mx-[18.2px]"
              src="./assets/buttonTable/cursor-default.png"
              alt="cursor-default"
            />
          </div>
        </div>
      </div>

      <div className="m-auto my-8 overflow-hidden">
        <h2 className="w-full font-inter text-2xl font-bold text-[#8257E5]">
          Disabled
        </h2>
        <div className="mt-2 flex items-center gap-6 overflow-x-scroll rounded-md bg-[#130F1E] px-4 py-5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-700">
          <div className="min-w-max cursor-not-allowed rounded-3xl bg-[#8257E5] py-3 px-6 opacity-[0.56]">
            <span className="font-inter text-sm uppercase text-white">
              Disabled Primary
            </span>
          </div>
          <div className="min-w-max cursor-not-allowed rounded-3xl bg-[#3C3748] py-3 px-6 opacity-[0.56]">
            <span className="font-inter text-sm uppercase text-white">
              Disabled Secondary
            </span>
          </div>
          <div className="min-w-max cursor-not-allowed rounded-3xl bg-none py-3 px-6 opacity-[0.56]">
            <span className="font-inter text-sm uppercase text-white">
              Disabled Tertiary
            </span>
          </div>
          <div className="w-12">
            <img
              className="mx-[16.74px]"
              src="./assets/buttonTable/cursor-not-allowed.png"
              alt="cursor-not-allowed"
            />
          </div>
        </div>
      </div>

      <div className="m-auto my-8 overflow-hidden">
        <h2 className="w-full font-inter text-2xl font-bold text-[#8257E5]">
          Loading
        </h2>
        <div className="mt-2 flex items-center gap-6 overflow-x-scroll rounded-md bg-[#130F1E] px-4 py-5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-700">
          <div className="flex min-w-max cursor-wait items-center justify-center gap-[6px] rounded-3xl bg-[#8257E5] py-3 px-6">
            <CircleNotch
              className="animate-spin"
              size={18}
              color={"#fff"}
              weight="bold"
            />
            <span className="font-inter text-sm uppercase text-white">
              Loading Primary
            </span>
          </div>
          <div className="flex min-w-max cursor-wait items-center justify-start gap-[6px] rounded-3xl bg-[#3C3748] py-3 px-6">
            <CircleNotch
              className="animate-spin"
              size={18}
              color={"#fff"}
              weight="bold"
            />
            <span className="font-inter text-sm uppercase text-white">
              Loading Secondary
            </span>
          </div>
          <div className="flex min-w-max cursor-wait items-center justify-start gap-[6px] rounded-3xl bg-none py-3 px-6">
            <CircleNotch
              className="animate-spin"
              size={18}
              color={"#fff"}
              weight="bold"
            />
            <span className="font-inter text-sm uppercase text-white">
              Loading Tertiary
            </span>
          </div>
          <div className="w-12">
            <img
              className="mx-[14.5px]"
              src="./assets/buttonTable/cursor-wait.png"
              alt="cursor-wait"
            />
          </div>
        </div>
      </div>

      <div className="m-auto my-8 overflow-hidden">
        <h2 className="w-full font-inter text-2xl font-bold text-[#8257E5]">
          Movable
        </h2>
        <div className="mt-2 flex items-center gap-6 overflow-x-scroll rounded-md bg-[#130F1E] px-4 py-5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-700">
          <div className="flex min-w-max cursor-move items-center justify-center gap-[6px] rounded-3xl bg-[#8257E5] py-3 px-6">
            <List size={18} color={"#fff"} weight="bold" />
            <span className="font-inter text-sm uppercase text-white">
              Movable Primary
            </span>
          </div>
          <div className="flex min-w-max cursor-move items-center justify-start gap-[6px] rounded-3xl bg-[#3C3748] py-3 px-6">
            <List size={18} color={"#fff"} weight="bold" />
            <span className="font-inter text-sm uppercase text-white">
              Movable Secondary
            </span>
          </div>
          <div className="mx-[6.5px] flex min-w-max cursor-move items-center justify-start gap-[6px] rounded-3xl bg-none py-3 px-6 text-center">
            <List size={18} color={"#fff"} weight="bold" />
            <span className="font-inter text-sm uppercase text-white">
              Movable Tertiary
            </span>
          </div>
          <div className="w-12">
            <img
              className="mx-[14.5px]"
              src="./assets/buttonTable/cursor-move.png"
              alt="cursor-move"
            />
          </div>
        </div>
      </div>
    </>
  )
}
