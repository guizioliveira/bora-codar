import { useState } from "react"
import { useChat } from "@hooks"
import { PaperPlaneRight } from "phosphor-react"

export function MessageForm() {
  const [currentMessage, setCurrentMessage] = useState<string>("")

  const { sendMessage } = useChat()

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    if (currentMessage.trim().length !== 0) {
      sendMessage(currentMessage)
      setCurrentMessage("")
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="mt-14 w-full rounded-full bg-[#282843]"
    >
      <input
        className="inline-block w-4/5 rounded-full bg-[#282843] py-[19px] px-6 text-xs leading-[14px] text-[#E1E1E6] outline-none placeholder:text-[#E1E1E6] md:w-11/12"
        type="text"
        value={currentMessage}
        onChange={(event) => setCurrentMessage(event.target.value.toString())}
        placeholder="Text your message"
      />
      <button type="submit">
        <PaperPlaneRight
          weight="fill"
          size={24}
          color="#E1E1E6"
          className=" ml-[10px] inline-block"
        />
      </button>
    </form>
  )
}
