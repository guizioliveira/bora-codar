import React, { FormEvent, useState } from "react"
import { MagnifyingGlass, MapPin } from "phosphor-react"

export default function SearchForm() {
  const [blockName, setBlockName] = useState<string>("")
  const [city, setCity] = useState<string>("")

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    console.log({ name: { blockName }, city: { city } })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-6 md:flex-row"
    >
      <label
        htmlFor="name"
        className="flex flex-1 items-center gap-3 rounded-md bg-[#F4F4FF] py-3 px-4"
      >
        <MagnifyingGlass size={20} color="#E45858" />
        <input
          className="bg-transparent text-[#7C7C8A] outline-none"
          type="text"
          name="name"
          value={blockName}
          onChange={(e) => setBlockName(e.target.value)}
          id="name"
          placeholder="Search by name"
        />
      </label>
      <label
        htmlFor="citySelect"
        className="flex flex-1 items-center gap-3 rounded-md bg-[#F4F4FF] py-3 px-4"
      >
        <MapPin size={20} color="#E45858" />
        <select
          className="peer relative flex w-full bg-transparent text-[#7C7C8A] outline-none"
          name="citySelect"
          id="citySelect"
          defaultValue={""}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="" disabled>
            Select a city
          </option>
          <option value="São Leopoldo">São Leopoldo</option>
        </select>
      </label>
      <button
        className="rounded-md bg-[#6246EA] px-8 py-3 text-sm font-bold uppercase text-white focus-within:outline focus-within:outline-1 focus-within:outline-white focus-within:ring-4 focus-within:ring-[#6246EA]"
        type="submit"
      >
        Search now
      </button>
    </form>
  )
}
