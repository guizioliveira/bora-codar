import { Triangle } from "phosphor-react"
import { useState } from "react"
import { Box } from "./Box"
import Chart from "./Chart"
import NPSScore from "./NPSScore"
import WeeklyChart from "./WeeklyChart"

export default function Dashboard() {
  const [nps, setNps] = useState<number>(75)

  return (
    <div className="flex w-full bg-[#292738] md:h-[calc(100vh-80px)] md:items-center md:justify-center">
      <div className="mx-auto mt-8 mb-8 flex w-[85%] flex-col gap-8 md:m-0 md:w-[1120px] md:gap-14 md:px-4">
        <div className="flex flex-col gap-8 md:flex-row">
          <NPSScore score={nps} />
          <Box className="flex flex-1 flex-col items-center gap-8">
            <h3 className="text-center text-2xl font-semibold">Closed sales</h3>
            <Chart total={1000} value={707} />
          </Box>
          <Box className="flex flex-1 flex-col items-center gap-8">
            <h3 className="text-center text-2xl font-semibold">Monthly goal</h3>
            <Chart total={70000} value={63000} variant="secondary" isAmount />
          </Box>
        </div>
        <Box>
          <h3 className="mb-8 text-center text-2xl font-semibold md:text-left">
            Sales by week day
          </h3>
          <div className="flex flex-col justify-between md:flex-row md:items-center">
            <div className="mb-8 md:m-0">
              <div className="mb-8">
                <div className="flex items-center gap-1">
                  <Triangle size={15} color={"#81FBB8"} weight="fill" />
                  <p className="text-sm font-medium">Day with more sales</p>
                </div>
                <p className="mt-2 text-2xl font-medium leading-9">Wednesday</p>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <Triangle
                    size={15}
                    color={"#EA5455"}
                    weight="fill"
                    className="rotate-180"
                  />
                  <p className="text-sm font-medium">Day with less sales</p>
                </div>
                <p className="mt-2 text-2xl font-medium leading-9">Sunday</p>
              </div>
            </div>
            <WeeklyChart />
          </div>
        </Box>
      </div>
    </div>
  )
}
