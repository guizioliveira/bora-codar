import React, { useState } from "react"
import { PlayerContainer, PlayerVariant } from "./PlayerContainer"

function Player() {
  document.title = "Music Player - #boraCodar"
  const [currentVariant, setCurrentVariant] = useState<PlayerVariant>("full")

  return (
    <div className="flex h-[calc(100vh-80px)] flex-col items-center justify-center bg-brand-dark">
      <div className="mt-[-80px]">
        <PlayerContainer variant={currentVariant} />
      </div>

      <div className="absolute bottom-0 flex h-3 w-96 justify-between rounded-t-[9.6px] bg-brand-player-bg py-8 px-8">
        <label className="flex items-center gap-2 text-white">
          <input
            type="radio"
            value="full"
            name="full"
            checked={currentVariant === "full"}
            onChange={(checked) => setCurrentVariant("full")}
          />
          Full
        </label>
        <label className="flex items-center gap-2 text-white">
          <input
            type="radio"
            value="short"
            name="short"
            checked={currentVariant === "short"}
            onChange={(checked) => setCurrentVariant("short")}
          />
          Short
        </label>
        <label className="flex items-center gap-2 text-white">
          <input
            type="radio"
            value="minimal"
            name="minimal"
            checked={currentVariant === "minimal"}
            onChange={(checked) => setCurrentVariant("minimal")}
          />
          Minimal
        </label>
      </div>
    </div>
  )
}

export default Player
