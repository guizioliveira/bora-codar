import { ChatBubble } from "./ChatBubble"
import dayjs from "dayjs"
import { useChat } from "@hooks"
import { useRef, useEffect } from "react"

export function History() {
  const messagesEndRef = useRef(null)
  const { messages } = useChat()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <div className="max-h-[calc(100vh-300px)] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-700 md:max-h-[400px]">
      <div className="mb-6 w-full text-center text-xs text-[#E1E1E6]">
        {dayjs(messages[0].send_at).calendar(null, {
          sameDay: "[Today] HH:mm",
          nextDay: "[Tomorrow] HH:mm",
          nextWeek: "dddd [at] HH:mm",
          lastDay: "[Yesterday] HH:mm",
          lastWeek: "[Last] dddd HH:mm",
          sameElse: "DD/MM/YYYY",
        })}
      </div>
      <div className="flex w-full flex-col pr-4">
        {messages.map((message) => (
          <ChatBubble key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  )
}
