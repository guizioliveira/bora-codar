import { message } from "@type/chatTypes"
import dayjs from "dayjs"

interface ChatBubbleProps {
  message: message
}

export function ChatBubble({ message }: ChatBubbleProps) {
  const formatDate = dayjs(message.send_at).format("HH:mm")
  const senderNameSplited = message.sender.split(" ")

  return (
    <div
      className={`${
        message.send_by_me
          ? "items-end justify-end"
          : "items-start justify-start"
      } mb-6 flex w-full flex-col gap-[10px]`}
    >
      <span className="text-xs leading-[14px] text-[#E1E1E6]">
        {`${message.send_by_me ? "You" : senderNameSplited[0]} - ${formatDate}`}
      </span>

      <div
        className={`${
          message.send_by_me
            ? "rounded-br-none bg-[#07847E]"
            : "rounded-tl-none bg-[#633BBC]"
        } max-w-[75%] rounded-lg p-[14px] text-xs leading-[14px] text-[#E1E1E6]`}
      >
        {message.text}
      </div>
    </div>
  )
}
