import React from "react"
import { ContactBar } from "./ContactBar"
import { History } from "./History"
import { ChatProvider } from "@hooks"
import { getContactById } from "@services"
import { X } from "phosphor-react"
import { MessageForm } from "./MessageForm"

export default function Chat() {
  return (
    <ChatProvider>
      <div className="flex h-[calc(100vh-80px)] w-screen flex-col items-center justify-center">
        <div className="max-h-[693px] w-[95%] rounded-lg bg-[#1A1924] py-6 px-[32px] md:max-h-[630px] md:w-[1024px] md:py-8 md:px-[72px]">
          <div className="mb-[26px] flex items-center justify-between md:mb-[14px]">
            <ContactBar person={getContactById("1")} />
            <button>
              <X size={20} color={"#FFF"} />
            </button>
          </div>
          <History />
          <MessageForm />
        </div>
      </div>
    </ChatProvider>
  )
}
