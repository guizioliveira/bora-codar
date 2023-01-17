import React, { useState } from "react"
import PlayerController from "./PlayerController"
import { TimelineBar } from "./TimelineBar"

export type PlayerVariant = "full" | "short" | "minimal"

interface PlayerProps {
  variant: PlayerVariant
}

export function PlayerContainer(props: PlayerProps) {
  const isVariantFull = props.variant === "full"
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  return (
    <div
      className={`${
        isVariantFull
          ? `min-w-[266px] px-[38.41px] py-[51px]`
          : `min-w-[357px] p-[29px]`
      } rounded-[9.6px] bg-brand-player-bg`}
    >
      <div
        className={`flex gap-[29px] ${
          isVariantFull ? "flex-col items-start" : "items-center"
        }`}
      >
        <div
          className={`${
            isVariantFull
              ? "h-[189.66px] w-[189.66px]"
              : "h-[84.03px] w-[84.03px]"
          } rounded-md bg-[#b398ce]`}
        >
          <img src="assets/album-photo.png" alt="Album photo" />
        </div>
        <div className="flex flex-col gap-[9px]">
          <h2 className="text-2xl font-bold leading-[100%] text-[#E1E1E6]">
            Acorda Devinho
          </h2>
          <span className="text-[19px] font-normal leading-[100%] text-[#E1E1E6] opacity-70">
            Banda Rocketseat
          </span>
        </div>
      </div>
      <div className={`mt-[29px] ${!isVariantFull && "px-[54.5px]"}`}>
        <PlayerController isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      </div>

      {props.variant !== "minimal" && (
        <div className="mt-[29px]">
          <TimelineBar duration={20} isPlaying={isPlaying} />
        </div>
      )}
    </div>
  )
}
