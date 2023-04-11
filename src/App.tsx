import React from "react"
import { Header } from "@components/Header"
import ChallengeCard from "@components/ChallengeCard"
import { getChallenges } from "@services"
import ChallengeCardSkeleton from "@components/ChallengeCardSkeleton"

export default function App() {
  const { data, loading } = getChallenges()
  return (
    <>
      <Header />
      <div className="m-auto w-full p-4 md:container md:p-7">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {loading ? (
            <ChallengeCardSkeleton numberOfCards={6} />
          ) : (
            <>
              {data.challenges.map((challenge) => (
                <ChallengeCard key={challenge.path} challenge={challenge} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  )
}
