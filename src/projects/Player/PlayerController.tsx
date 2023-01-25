import React from "react"
import { Play, Rewind, FastForward, Pause } from "phosphor-react"
import { useMusicPlayer } from "@hooks"

export default function PlayerController() {
  const { isPlaying, handlePlay, nextMusic, previousMusic } = useMusicPlayer()
  return (
    <>
      <div className="box-content flex justify-between">
        <button className="group">
          <Rewind
            className="text-[#E1E1E6] transition-colors duration-200 group-hover:text-[#b398ce]"
            size={28}
            weight="fill"
            onClick={previousMusic}
          />
        </button>
        <button className="group" onClick={handlePlay}>
          {!isPlaying ? (
            <Play
              className="text-[#E1E1E6] transition-colors duration-200 group-hover:text-[#b398ce]"
              size={28}
              weight="fill"
            />
          ) : (
            <Pause
              className="text-[#E1E1E6] transition-colors duration-200 group-hover:text-[#b398ce]"
              size={28}
              weight="fill"
            />
          )}
        </button>
        <button className="group">
          <FastForward
            className="text-[#E1E1E6] transition-colors duration-200 group-hover:text-[#b398ce]"
            size={28}
            weight="fill"
            onClick={nextMusic}
          />
        </button>
      </div>
    </>
  )
}
