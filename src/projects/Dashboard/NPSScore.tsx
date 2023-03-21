import { useEffect, useState } from "react"
import { FaLaughBeam, FaSmileBeam, FaSadCry } from "react-icons/fa"
import { Box } from "./Box"
interface NPSScoreProps {
  score: number
}

type ScoreRate = {
  color: string
  text: string
  icon: React.ReactNode
}

const rateScore = (score: number): ScoreRate => {
  if (score >= 70) {
    return {
      color: "text-[#81FBB8]",
      text: "Excellent!",
      icon: <FaLaughBeam color="#81FBB8" size={54} />,
    }
  } else if (score >= 30) {
    return {
      color: "text-[#F1F7B5]",
      text: "Great!",
      icon: <FaSmileBeam color="#F1F7B5" size={54} />,
    }
  } else {
    return {
      color: "text-[#FD8A8A]",
      text: "Needs to Improvement!",
      icon: <FaSadCry color="#FD8A8A" size={54} />,
    }
  }
}

export default function NPSScore({ score }: NPSScoreProps) {
  const [scoreRate, setScoreRate] = useState<ScoreRate>(rateScore(score))

  useEffect(() => {
    setScoreRate(rateScore(score))
  }, [score])

  return (
    <Box className="flex flex-col items-center justify-between gap-8">
      <h3 className="text-2xl font-semibold">General NPS</h3>

      <div className="flex flex-col items-center justify-center gap-4">
        {scoreRate.icon}
        <span
          className={`text-center font-inter text-2xl font-semibold ${scoreRate.color}`}
        >
          {scoreRate.text}
        </span>
      </div>
      <p className="flex items-center gap-3 text-sm font-medium">
        NPS Score <span className="font-normal">{score}</span>
      </p>
    </Box>
  )
}
