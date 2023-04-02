import { useDocumentTitle } from "@hooks"
import { Airplane } from "phosphor-react"

export default function BoardingPass() {
  useDocumentTitle("Boarding Pass")
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-b from-[#8257E5] to-[#271A45]">
      <div className="flex w-[20.5rem] flex-col font-rubik">
        <div className="flex w-full flex-col gap-6 rounded-3xl bg-white py-6 px-8">
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="text-sm leading-4 opacity-60">Flight</p>
              <p className="text-base font-medium leading-5 opacity-80">
                RS995
              </p>
            </div>
            <div>
              <p className="text-end text-sm leading-4 opacity-60">Date</p>
              <p className="text-base font-medium leading-5 opacity-80">
                05/23/2023
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between gap-1 text-sm leading-4 opacity-60">
              <p>São Paulo, Brazil</p>
              <p className="text-end">San Francisco, USA</p>
            </div>
            <div className="flex items-center justify-between text-[2.5rem] font-medium leading-[2.9rem] opacity-80">
              <p>GRU</p>
              <Airplane size={24} weight="fill" className="rotate-90" />
              <p>SFO</p>
            </div>
            <div className="flex justify-between leading-5 opacity-80">
              <p>05:00 PM</p>
              <p className="flex items-start">
                04:48<span className="text-[0.6rem] leading-3">+1</span>AM
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col rounded-3xl border border-dashed border-transparent border-t-black/30 bg-white py-6 px-8">
          <div className="flex items-center justify-between text-sm leading-4 opacity-60">
            <p>Passenger</p>
            <p>Seat</p>
          </div>
          <div className="flex justify-between gap-2 text-base font-medium">
            <p>Guilherme de Oliveira</p>
            <p className="text-end">28A</p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-6 rounded-3xl border border-dashed border-transparent border-t-black/30 bg-white py-6 px-8 font-rubik">
          <div className="flex w-full flex-row items-center justify-between">
            <div className="flex flex-col gap-4 text-sm">
              <div>
                <p className="opacity-60">Boarding</p>
                <p className="w-14 rounded-lg bg-[#633BBC] px-2 py-1 text-center text-base font-medium text-white">
                  16:15
                </p>
              </div>
              <div>
                <p className="opacity-60">Terminal</p>
                <p className="font-base font-medium">2</p>
              </div>
              <div>
                <p className="opacity-60">Gate</p>
                <p className="font-base font-medium">15</p>
              </div>
            </div>
            <div className=" w-[160px]">
              <img src="assets/boardingPass/qrcode.svg" alt="QR code image" />
              <p className="text-center text-sm opacity-60">
                Boarding group: 3
              </p>
            </div>
          </div>
          <p className="text-center opacity-80">
            <span className="font-medium">Attention:</span> the gate closes 4:45
            PM
          </p>
        </div>
        <p className="mt-5 text-center text-white opacity-60">
          If you have any problems, contact your airline's service desk.
        </p>
      </div>
    </div>
  )
}
