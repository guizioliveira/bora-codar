import { contact } from "@type/chatTypes"
import dayjs from "dayjs"
import calendar from "dayjs/plugin/calendar"

interface ContactBarProps {
  person: contact
}

export function ContactBar({ person }: ContactBarProps) {
  dayjs.extend(calendar)

  return (
    <div className="flex items-center gap-4">
      <div className="h-12 w-12 rounded-full">
        <img className="h-12 w-12 rounded-full" src={person.photo} alt="" />
      </div>
      <div className="flex flex-col">
        <h6 className="font-bold text-[#E1E1E6]">{person.name}</h6>
        {person.online ? (
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 rounded-full bg-[#00B37E]" />
            <span className="text-xs text-[#00B37E]">Online</span>
          </div>
        ) : (
          <span className="text-xs lowercase text-[#E1E1E6] opacity-60">
            {`last seen ${dayjs(dayjs(person.last_update).format("")).calendar(
              null,
              {
                sameDay: "[Today at] HH:mm", // The same day ( Today at 2:30 AM )
                nextDay: "[Tomorrow at] HH:mm", // The next day ( Tomorrow at 2:30 AM )
                nextWeek: "dddd [at] HH:mm", // The next week ( Sunday at 2:30 AM )
                lastDay: "[Yesterday at] HH:mm", // The day before ( Yesterday at 2:30 AM )
                lastWeek: "[Last] dddd [at] HH:mm", // Last week ( Last Monday at 2:30 AM )
                sameElse: "DD/MM/YYYY", // Everything else ( 17/10/2011 )
              }
            )}`}
          </span>
        )}
      </div>
    </div>
  )
}
