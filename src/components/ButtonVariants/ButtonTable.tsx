import { CircleNotch, List } from "phosphor-react"
import React from "react"

export default function ButtonTable() {
  return (
    <div className="flex flex-col">
      <div className="flex w-full items-center rounded-t-lg bg-[#1C162C] px-4">
        <div className="h-16 w-[94px]"></div>
        <span className="mx-4 w-[230px] text-center font-sans text-[11px] uppercase text-white">
          Botão primário
        </span>
        <span className="mx-4 w-[233px] text-center font-sans text-[11px] uppercase text-white">
          Botão secundário
        </span>
        <span className="mx-4 w-[203px] text-center font-sans text-[11px] uppercase text-white">
          Botão terciário
        </span>
        <span className="mx-4 w-[84px] text-center font-sans text-[11px] uppercase text-white">
          Cursor
        </span>
      </div>

      <div className="h-[17.5px] w-full border-r-[6px] border-[#1C162C] bg-[#0b0911]">
        <div className="h-full w-[94px] bg-[#1C162C]"></div>
      </div>
      <div className="flex items-center gap-8 border-r-[6px] border-[#1C162C] bg-[#0b0911]">
        <div className="w-[94px] bg-[#1C162C] py-[32px] px-[10px] text-center font-sans text-[11px] uppercase leading-3 text-white">
          Default
        </div>
        <div className="mx-[18.5px]  w-[176px] rounded-3xl bg-[#8257E5] py-3 px-6">
          <span className="cursor-default font-inter text-sm uppercase text-white">
            Default Primary
          </span>
        </div>
        <div className="mx-[19px]  w-[200px] rounded-3xl bg-[#3C3748] py-3 px-6">
          <span className="cursor-default font-inter text-sm uppercase text-white">
            Default Secondary
          </span>
        </div>
        <div className="mx-[19px]  w-[181px] rounded-3xl bg-none py-3 px-6">
          <span className="cursor-default font-inter text-sm uppercase text-white">
            Default Tertiary
          </span>
        </div>
        <div className=" w-12">
          <img
            className="mx-[18.2px]"
            src="./assets/buttonTable/cursor-default.png"
            alt="cursor-default"
          />
        </div>
      </div>

      <div className="flex items-center gap-8 border-r-[6px] border-[#1C162C] bg-[#0b0911]">
        <div className="w-[94px] bg-[#1C162C] py-[32px] px-[10px] text-center font-sans text-[11px] uppercase leading-3 text-white">
          Hover
        </div>
        <div className="mx-[25.5px] w-[162px] rounded-3xl bg-[#9674E5] py-3 px-6">
          <span className="cursor-default font-inter text-sm uppercase text-white">
            Hover Primary
          </span>
        </div>
        <div className="mx-[25.5px] w-[187px] rounded-3xl bg-[#6A617F] py-3 px-6">
          <span className="cursor-default font-inter text-sm uppercase text-white">
            Hover Secondary
          </span>
        </div>
        <div className="mx-[25.5px] w-[168px] rounded-3xl bg-none py-3 px-6">
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

      <div className=" flex items-center gap-8 border-r-[6px] border-[#1C162C] bg-[#0b0911] ">
        <div className="w-[94px] bg-[#1C162C] py-[32px] px-[10px] text-center font-sans text-[11px] uppercase leading-3 text-white">
          Focus
        </div>
        <div className="mx-[25px] w-[163px] rounded-3xl border-2 border-[#D9CDF7] bg-[#8257E5] py-[10px] px-[22px]">
          <span className="cursor-default font-inter text-sm uppercase leading-6 text-white">
            Focus Primary
          </span>
        </div>
        <div className="mx-[25.5px] w-[187px] rounded-3xl border-2 border-[#D9CDF7] bg-[#3C3748] py-[10px] px-[22px]">
          <span className="cursor-default font-inter text-sm uppercase leading-6 text-white">
            Focus Secondary
          </span>
        </div>
        <div className="mx-[25.5px] w-[168px] rounded-3xl border-2 border-[#D9CDF7] bg-none py-[10px] px-[22px]">
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

      <div className="flex items-center gap-8 border-r-[6px] border-[#1C162C] bg-[#0b0911]">
        <div className="w-[94px] bg-[#1C162C] py-[32px] px-[10px] text-center font-sans text-[11px] uppercase leading-3 text-white">
          Disabled
        </div>
        <div className="mx-[15px] w-[183px] cursor-not-allowed rounded-3xl bg-[#8257E5] py-3 px-6 opacity-[0.56]">
          <span className="font-inter text-sm uppercase text-white">
            Disabled Primary
          </span>
        </div>
        <div className="mx-[15.5px] w-[207px] cursor-not-allowed rounded-3xl bg-[#3C3748] py-3 px-6 opacity-[0.56]">
          <span className="font-inter text-sm uppercase text-white">
            Disabled Secondary
          </span>
        </div>
        <div className="mx-[15.5px] w-[188px] cursor-not-allowed rounded-3xl bg-none py-3 px-6 opacity-[0.56]">
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

      <div className="flex items-center gap-8 border-r-[6px] border-[#1C162C] bg-[#0b0911]">
        <div className="w-[94px] bg-[#1C162C] py-[32px] px-[10px] text-center font-sans text-[11px] uppercase leading-3 text-white">
          Loading
        </div>
        <div className="mx-[6px] flex w-[201px] cursor-wait items-center justify-center gap-[6px] rounded-3xl bg-[#8257E5] py-3 px-6">
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
        <div className="mx-[6.5px] flex w-[225px] cursor-wait items-center justify-start gap-[6px] rounded-3xl bg-[#3C3748] py-3 px-6">
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
        <div className="mx-[6.5px] flex w-[206px] cursor-wait items-center justify-start gap-[6px] rounded-3xl bg-none py-3 px-6">
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

      <div className="flex items-center gap-8 border-r-[6px] border-[#1C162C] bg-[#0b0911]">
        <div className="w-[94px] bg-[#1C162C] py-[32px] px-[10px] text-center font-sans text-[11px] uppercase leading-3 text-white">
          Movable
        </div>
        <div className="flex w-[213px] cursor-move items-center justify-center gap-[6px] rounded-3xl bg-[#8257E5] py-3 px-6">
          <List size={18} color={"#fff"} weight="bold" />
          <span className="font-inter text-sm uppercase text-white">
            Movable Primary
          </span>
        </div>
        <div className="flex w-[238px] cursor-move items-center justify-start gap-[6px] rounded-3xl bg-[#3C3748] py-3 px-6">
          <List size={18} color={"#fff"} weight="bold" />
          <span className="font-inter text-sm uppercase text-white">
            Movable Secondary
          </span>
        </div>
        <div className="mx-[6.5px] flex w-[219px] cursor-move items-center justify-start gap-[6px] rounded-3xl bg-none py-3 px-6 text-center">
          <List size={18} color={"#fff"} weight="bold" />
          <span className="font-inter text-sm uppercase text-white">
            Movable Tertiary
          </span>
        </div>
        <div className="w-12">
          <img src="./assets/buttonTable/cursor-move.png" alt="cursor-move" />
        </div>
      </div>
      <div className="h-4 w-full rounded-b-lg border-r-[6px] border-b-[6px] border-[#1C162C] bg-[#0b0911]">
        <div className="h-full w-[94px] bg-[#1C162C]"></div>
      </div>
    </div>
  )
}
