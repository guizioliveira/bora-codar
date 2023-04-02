import React from "react"
import { MapPin } from "phosphor-react"

export default function CarnavalCard() {
  return (
    <div className="overflow-hidden rounded-xl border border-[#EAEAEA]">
      <div className="relative h-40">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1584477712087-69fa7e911b86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1151&q=80"
        />
        <div className="absolute top-0 h-full w-full bg-[#6246EA]/20" />
      </div>
      <div className="bg-white p-4 font-sans">
        <h3 className="text-xl font-bold text-[#121214]">
          O Python do vovô não sobe mais
        </h3>
        <p className="my-4 text-black/75">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
        <div className="flex items-center gap-2">
          <MapPin size={24} color="#E45858" />
          <span className="text-black/75">São Paulo - SP</span>
        </div>
      </div>
    </div>
  )
}
