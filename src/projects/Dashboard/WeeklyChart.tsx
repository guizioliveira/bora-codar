import React, { useEffect, useRef, useState } from "react"

type DaySales = {
  day: string
  sales: number
}

const weekdays: DaySales[] = [
  { day: "sunday", sales: 39 },
  { day: "monday", sales: 115 },
  { day: "tuensday", sales: 76 },
  { day: "wednesday", sales: 159 },
  { day: "thursday", sales: 129 },
  { day: "friday", sales: 120 },
  { day: "saturday", sales: 69 },
]

interface ChartLineProps {
  sales: number
}

const ChartLine = ({ sales }: ChartLineProps) => {
  const [currentSale, setCurrentSale] = useState<number>(0)
  const interval = useRef(null)

  useEffect(() => {
    interval.current = window.setInterval(() => {
      setCurrentSale((currentSale) =>
        currentSale < sales ? currentSale + 1 : currentSale
      )
    }, 5)
    return () => window.clearInterval(interval.current)
  }, [sales])

  return (
    <div
      className={`group relative w-[15px] rounded-full bg-gradient-to-t from-[#32CCBC] to-[#90F7EC] transition-transform duration-300 md:hover:scale-110`}
      style={{ height: `${currentSale}px` }}
    >
      <div className="absolute left-5 top-1/3 rounded-xl bg-gray-500 py-1 px-2 text-sm font-semibold text-gray-200 opacity-0 transition-opacity duration-300 md:group-hover:opacity-100">
        {sales}
      </div>
    </div>
  )
}

export default function WeeklyChart() {
  return (
    <div>
      <div className="relative h-[186px] w-full">
        <div className="absolute top-1/2 h-1 w-full rounded-full bg-[#4A4556]" />
        <div className="grid h-full w-full grid-flow-col grid-cols-7 items-end md:gap-14">
          {weekdays.map((statistics) => (
            <div
              key={statistics.day}
              className="z-10 flex w-7 flex-col items-center"
            >
              <ChartLine sales={statistics.sales} />
              <div className="mt-[5px] text-sm font-medium text-white">
                {statistics.day.substring(0, 3)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
