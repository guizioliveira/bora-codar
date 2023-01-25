import { useState } from "react"
import { PlayerContainer } from "./PlayerContainer"
import VariantOptions from "./VariantOptions"
import { MusicPlayerProvider, useDocumentTitle } from "@hooks"
import { CaretUp } from "phosphor-react"

export default function Player() {
  const [showVariantOptions, setShowVariantOptions] = useState<boolean>(false)
  useDocumentTitle("Music Player")

  return (
    <MusicPlayerProvider>
      <div className="relative flex h-[calc(100vh-80px)] flex-col items-center justify-center overflow-hidden bg-brand-dark">
        <div className="mt-[-80px]">
          <PlayerContainer />
        </div>
        <div
          className={`${
            showVariantOptions ? "bottom-0" : "-bottom-16"
          } absolute flex w-full flex-col items-center overflow-hidden transition-all duration-200 md:w-96`}
        >
          <button
            onClick={() => setShowVariantOptions(!showVariantOptions)}
            className="flex items-center gap-2 rounded-t-md bg-brand-player-bg px-4 py-2 text-white"
          >
            Variant options
            <CaretUp
              className={`${
                showVariantOptions && "rotate-180"
              } transition-all duration-300`}
            />
          </button>
          <VariantOptions />
        </div>
      </div>
    </MusicPlayerProvider>
  )
}
