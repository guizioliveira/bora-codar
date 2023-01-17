import React, { useEffect, useState } from "react"
import { SecondsToMinutes } from "./TimeConverter"

interface TimelineProps {
  isPlaying: boolean
  duration: number
}

export function TimelineBar({ isPlaying, duration }: TimelineProps) {
  const [currentTime, setCurrentTime] = useState<number>(0)

  useEffect(() => {
    if (isPlaying && currentTime < duration) {
      setTimeout(() => {
        setCurrentTime((state) => state + 1)
      }, 1000)
    }
  }, [isPlaying, currentTime])

  return (
    <>
      <div className="h-[6px] w-full rounded-[9.6px] bg-[#5e586f]">
        <div
          className={`h-full rounded-[9.6px] bg-[#c1c0c4] transition-all duration-200`}
          style={{ width: `${(currentTime * 100) / duration}%` }}
        ></div>
      </div>
      <div className="mt-[9.6px] flex justify-between">
        <span className="text-sm leading-[160%] text-[#C4C4CC] opacity-70">
          {SecondsToMinutes(currentTime)}
        </span>
        <span className="text-sm leading-[160%] text-[#C4C4CC] opacity-70">
          {SecondsToMinutes(duration)}
        </span>
      </div>
    </>
  )
}
