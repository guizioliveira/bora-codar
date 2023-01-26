import React, { createContext, ReactNode, useContext, useState } from "react"
import { message } from "@type/chatTypes"
import { getChatHistory } from "@services"
import uuid from "react-uuid"

interface ChatContextData {
  messages: message[]
  sendMessage: (message: string) => void
}

interface ChatProviderProps {
  children: ReactNode
}

const ChatContext = createContext<ChatContextData>({} as ChatContextData)

export function ChatProvider({ children }: ChatProviderProps) {
  const [messages, setMessages] = useState<message[]>(getChatHistory())

  function sendMessage(text: string) {
    const newMessage = {
      text,
      id: uuid(),
      send_at: new Date(),
      send_by_me: true,
      sender: "Rocketseat",
    } as message

    setMessages([...messages, newMessage])
  }

  return (
    <ChatContext.Provider
      value={{
        messages,
        sendMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export function useChat() {
  const context = useContext(ChatContext)
  return context
}
