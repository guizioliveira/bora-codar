import React from "react"
import { ContactBar } from "./ContactBar"
import { History } from "./History"
import { ChatProvider, useDocumentTitle } from "@hooks"
import { getContactById } from "@services"
import { X } from "phosphor-react"
import { MessageForm } from "./MessageForm"

export default function Chat() {
  useDocumentTitle("Chat")

  return (
    <ChatProvider>
      <div className="relative flex h-[calc(100vh-80px)] w-screen flex-col bg-[#0b0911] md:items-center md:justify-center">
        <div className="h-screen w-full rounded-lg bg-[#1A1924] py-6 px-[32px] md:max-h-[630px] md:w-[1024px] md:py-8 md:px-[72px]">
          <div className="mb-[26px] flex items-center justify-between md:mb-[14px]">
            <ContactBar person={getContactById("1")} />
            <button>
              <X size={20} color={"#FFF"} />
            </button>
          </div>
          <History />
          <div className="absolute bottom-[32px] left-[32px] w-[85%] md:relative md:bottom-0 md:left-0 md:w-full">
            <MessageForm />
          </div>
        </div>
      </div>
    </ChatProvider>
  )
}
