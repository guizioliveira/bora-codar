import React, { useEffect, useState } from "react"
import DonutChart from "./DonutChart"

interface ChartProps {
  variant?: "primary" | "secondary"
  total: number
  value: number
  color?: string
  isAmount?: boolean
}

export default function Chart({
  variant = "primary",
  value,
  total,
  isAmount = false,
}: ChartProps) {
  const [percent, setPercent] = useState<number>(0)

  const variantMap = {
    primary: "from-[#CE9FFC] to-[#7367F0]",
    secondary: "from-[#DF9780] to-[#A66DE9]",
  }

  useEffect(() => {
    setPercent(Math.ceil((value * 100) / total))
  }, [value, total])

  function transformToCurrent(value: number) {
    if (isAmount) {
      return Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        notation: "compact",
      }).format(value)
    }
    return value
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <DonutChart percent={percent} variant={variant} />

      <div className="flex flex-col gap-2 md:flex-row md:gap-5">
        <div className="flex items-center gap-1">
          <div className="h-4 w-4 rounded-full bg-[#D9D9D9]/10" />
          <p className="text-sm font-medium">
            Expected
            <span className="ml-2 font-normal">
              {transformToCurrent(total)}
            </span>
          </p>
        </div>
        <div className="flex items-center gap-1">
          <div
            className={`h-4 w-4 rounded-full bg-gradient-to-tr ${variantMap[variant]} `}
          />
          <p className="text-sm font-medium">
            Achieved
            <span className="ml-2 font-normal">
              {transformToCurrent(value)}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
