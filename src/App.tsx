import React from "react"
import { BrowserRouter } from "react-router-dom"
import ChallengeCard from "./components/ChallengeCard"
import { challenges } from "./data/challengesData"

export default function App() {
  return (
    <div className=" bg-[#121214]">
      <div className="m-auto h-[calc(100vh-80px)] w-full p-7 md:container">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {challenges.map((challenge) => (
            <ChallengeCard key={challenge.path} challenge={challenge} />
          ))}
        </div>
      </div>
    </div>
  )
}
