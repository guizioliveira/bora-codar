import { useRef, useEffect } from "react"
import dayjs from "dayjs"
import { useChat } from "@hooks"
import { ChatBubble } from "./ChatBubble"
import { message } from "@type/chatTypes"

const dateFormat = {
  sameDay: "[Today] HH:mm",
  nextDay: "[Tomorrow] HH:mm",
  nextWeek: "dddd [at] HH:mm",
  lastDay: "[Yesterday] HH:mm",
  lastWeek: "[Last] dddd HH:mm",
  sameElse: "DD/MM/YYYY",
}

export function History() {
  const messagesEndRef = useRef(null)
  const { messages } = useChat()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  function checkIfIsSameDay(previousMessage: message, currentMessage: message) {
    if (previousMessage === undefined) return
    return dayjs(currentMessage.send_at).isSame(previousMessage.send_at, "day")
  }

  return (
    <div className="h-[calc(100vh-300px)] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-700 md:h-[400px]">
      <div className="flex w-full flex-col pr-4">
        <>
          {messages.map((message, index) => (
            <div key={index}>
              {!checkIfIsSameDay(messages[index - 1], message) && (
                <div className="mb-6 w-full text-center text-xs text-[#E1E1E6]">
                  {dayjs(messages[index].send_at).calendar(null, dateFormat)}
                </div>
              )}
              <ChatBubble message={message} />
            </div>
          ))}
        </>
        <div ref={messagesEndRef} />
      </div>
    </div>
  )
}
