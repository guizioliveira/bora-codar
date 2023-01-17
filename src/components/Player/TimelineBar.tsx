import React, { useEffect, useState } from "react"
import { useMusicPlayer } from "../../hooks/useMusicPlayer"

export function TimelineBar() {
  const { currentTime, secondsToMinutes, currentMusic } = useMusicPlayer()

  return (
    <>
      <div className="h-[6px] w-full rounded-[9.6px] bg-[#5e586f]">
        <div
          className={`h-full rounded-[9.6px] bg-[#c1c0c4] transition-all duration-200`}
          style={{ width: `${(currentTime * 100) / currentMusic.duration}%` }}
        ></div>
      </div>
      <div className="mt-[9.6px] flex justify-between">
        <span className="text-sm leading-[160%] text-[#C4C4CC] opacity-70">
          {secondsToMinutes(currentTime)}
        </span>
        <span className="text-sm leading-[160%] text-[#C4C4CC] opacity-70">
          {secondsToMinutes(currentMusic.duration)}
        </span>
      </div>
    </>
  )
}
