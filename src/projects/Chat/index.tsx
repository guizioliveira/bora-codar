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
        <div className="max-h-[630px] w-[1024px] bg-[#1A1924] py-8 px-[72px]">
          <div className="mb-[14px] flex items-center justify-between">
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
