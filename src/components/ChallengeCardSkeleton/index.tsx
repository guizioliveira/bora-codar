import { useEffect, useState } from "react"

interface ChallengeCardSkeleton {
  numberOfCards?: number
}

export default function ChallengeCardSkeleton({
  numberOfCards = 1,
}: ChallengeCardSkeleton) {
  const [cards, setCards] = useState<number[]>([])

  function populateCards(numberOfCards: number) {
    const newCard = []
    for (let i = 0; i < numberOfCards; i++) {
      newCard.push(i)
    }
    return newCard
  }

  useEffect(() => {
    setCards(populateCards(numberOfCards))
  }, [numberOfCards])

  return (
    <>
      {cards.map((index) => (
        <div
          key={index}
          className="group relative flex h-56 animate-pulse flex-col rounded-md bg-[#202024] shadow-lg shadow-[#00000067] duration-300 md:h-44 xl:h-64"
        />
      ))}
    </>
  )
}
