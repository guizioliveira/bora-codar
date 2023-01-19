import { Switch } from "@headlessui/react"
import React from "react"

interface ToogleProps {
  getter: boolean
  setter: React.Dispatch<boolean>
}

export function Toggle({ getter, setter }: ToogleProps) {
  return (
    <Switch
      checked={getter}
      onChange={setter}
      className={`${getter ? "bg-[#8257E5]" : "bg-[#3C3748]"}
          relative inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">{getter}</span>
      <span
        aria-hidden="true"
        className={`${getter ? "translate-x-7" : "translate-x-0"}
            pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </Switch>
  )
}
