import React from "react"
import { Header } from "@components/Header"
import ChallengeCard from "@components/ChallengeCard"
import { getChallenges } from "@services"

export default function App() {
  const { data, loading } = getChallenges()
  return (
    <>
      <Header />
      <div className="m-auto w-full p-4 md:container md:p-7">
        {loading ? (
          <div className="animate-pulse text-center text-3xl font-bold text-white">
            Loading...
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {data.challenges.map((challenge) => (
              <ChallengeCard key={challenge.path} challenge={challenge} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}
