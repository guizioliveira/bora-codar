import React from "react"
import ChallengeCard from "../ChallengeCard"
import { getChallenges } from "@services"

export default function index() {
  const data = getChallenges()
  return (
    <div className="m-auto min-h-[calc(100vh-80px)] w-full p-4 md:container md:p-7">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {data?.challenges.map((challenge) => (
          <ChallengeCard key={challenge.path} challenge={challenge} />
        ))}
      </div>
    </div>
  )
}
