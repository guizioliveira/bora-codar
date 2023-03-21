import React, { useEffect, useRef, useState } from "react"

import "./styles.css"

interface DonutChart {
  percent: number
  variant: string
}

export default function DonutChart({ percent, variant }: DonutChart) {
  const [percertAnimated, setPercertAnimated] = useState<number>(0)
  const interval = useRef(null)

  const variantColorMap = {
    primary: { color1: "#CE9FFC", color2: "#7367F0" },
    secondary: { color1: "#DF9780", color2: "#A66DE9" },
  }
  const dash = 618

  const isBiggerThan100 =
    percertAnimated > 100
      ? "0"
      : `calc(${dash} - (${dash} * ${percertAnimated}) / 100)`

  useEffect(() => {
    interval.current = window.setInterval(() => {
      setPercertAnimated((currentPercent) => {
        if (currentPercent < percent) {
          return currentPercent + 1
        } else if (currentPercent > percent) {
          return currentPercent - 1
        } else {
          return currentPercent
        }
      })
    }, 10)
    return () => window.clearInterval(interval.current)
  }, [percent])

  return (
    <div className="relative">
      <svg
        viewBox="0 0 233 233"
        style={{
          width: 197,
          height: 197,
          strokeDashoffset: 70,
          transform: "rotate(-90deg)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <circle
          cx="50%"
          cy="50%"
          r="98.5"
          stroke="#D9D9D9"
          opacity={"0.1"}
          style={{
            fill: "none",
            strokeDasharray: 618,
            strokeDashoffset: 0,
            strokeWidth: 35,
          }}
        />
        <circle
          cx="50%"
          cy="50%"
          r="98.5"
          stroke={`url(#paint0_linear_201_85_${variant})`}
          style={{
            fill: "none",
            strokeDasharray: `${dash}`,
            strokeWidth: 35,
            strokeDashoffset: isBiggerThan100,
            strokeLinecap: "round",
            animation: `progress 1s ease-in-out`,
          }}
        />

        <defs>
          <linearGradient
            id={`paint0_linear_201_85_${variant}`}
            x1="-9"
            y1="82"
            x2="145"
            y2="178"
            gradientUnits={"userSpaceOnUse"}
            gradientTransform={"rotate(85)"}
          >
            <stop offset={0.05} stopColor={variantColorMap[variant].color1} />
            <stop offset={0.6} stopColor={variantColorMap[variant].color2} />
          </linearGradient>
        </defs>
      </svg>
      <p className="absolute left-1/2 top-1/2 flex -translate-y-1/2 -translate-x-1/2 flex-col items-center text-[2.12rem] font-bold leading-[2.5rem]">
        {percertAnimated}%
        <span className="text-base font-normal">achieved</span>
      </p>
    </div>
  )
}
