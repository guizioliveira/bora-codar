import { MapTrifold } from "phosphor-react"
import React, { useState } from "react"
import CarnavalCard from "./CarnavalCard"
import SearchForm from "./SearchForm"

export default function Carnaval() {
  const [showList, setShowList] = useState<boolean>(true)

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="relative flex h-auto w-full flex-col items-center justify-center gap-10 bg-[#F8F8FF] py-12 md:h-[532px] md:py-0">
        <img
          className="absolute left-0 top-0 w-52 md:w-[407px]"
          src="./assets/carnaval/ilustra-01.svg"
        />
        <img
          className="absolute bottom-0 right-0 w-52 md:w-[453px]"
          src="./assets/carnaval/ilustra-02.svg"
        />
        <div className="z-10 text-center font-sans">
          <span className="font-medium uppercase tracking-widest text-[#E45858]">
            Find your block
          </span>
          <h2 className="mt-4 text-5xl font-bold leading-[125%] text-[#121214]">
            Come find the <span className="text-[#6246EA]">best carnival</span>
            <br /> blocks of 2023
          </h2>
        </div>
        <div className="z-10 w-[90%] rounded-xl border border-[#EAEAEA] bg-white p-10 lg:w-[993px]">
          <SearchForm />
        </div>
      </div>
      <main className="container m-auto mt-14 w-[90%] md:mt-[100px] lg:max-w-[1215px]">
        <div className="mb-10 flex w-full items-center justify-between">
          <h2 className="text-xl font-bold text-[#121214] md:text-3xl">
            Recommended blocks
          </h2>
          <div className="bottom-[#EAEAEA] flex rounded-md border p-2">
            <button
              className={`rounded-md px-6 py-1 text-sm font-bold uppercase leading-6 focus-within:outline focus-within:outline-1 focus-within:outline-white focus-within:ring-4 focus-within:ring-[#6246EA] ${
                showList ? "bg-[#6246EA] text-white" : "text-[#6246EA]"
              } `}
              onClick={() => setShowList(true)}
            >
              List
            </button>
            <button
              className={`rounded-md px-6 py-1 text-sm font-bold uppercase leading-6 focus-within:outline focus-within:outline-1 focus-within:outline-white focus-within:ring-4 focus-within:ring-[#6246EA] ${
                !showList ? "bg-[#6246EA] text-white" : "text-[#6246EA]"
              } `}
              onClick={() => setShowList(false)}
            >
              Map
            </button>
          </div>
        </div>
        {showList ? (
          <div className="grid grid-cols-1 gap-8 pb-8 md:grid-cols-2 lg:grid-cols-3">
            <CarnavalCard />
            <CarnavalCard />
            <CarnavalCard />
            <CarnavalCard />
            <CarnavalCard />
            <CarnavalCard />
            <CarnavalCard />
            <CarnavalCard />
            <CarnavalCard />
          </div>
        ) : (
          <Unavailable />
        )}
      </main>
    </div>
  )
}

export function Unavailable() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 pb-96">
      <MapTrifold size={220} color="#eaeaea" />
      <h3 className="text-center text-2xl font-bold text-black/30">
        This feature is currently unavailable...
      </h3>
    </div>
  )
}
