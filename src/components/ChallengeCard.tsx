import { Link, FigmaLogo } from "phosphor-react"

interface ChallengeCardProps {
  challenge: {
    week: number
    title: string
    path: string
    imageSrc: string
    figmaUrl: string
  }
}

export default function ChallengeCard({ challenge }: ChallengeCardProps) {
  return (
    <div
      key={challenge.week}
      className="group relative flex h-56 flex-col rounded-md bg-[#202024] md:h-44 xl:h-64"
    >
      <div className="flex h-full overflow-hidden rounded-md">
        <img
          className="w-full object-cover transition-transform duration-300 md:group-hover:scale-125"
          src={challenge.imageSrc}
          alt={`Image of ${challenge.title}`}
        />
      </div>
      <div className="absolute flex h-full w-full flex-col justify-between rounded-md bg-black bg-opacity-70 p-7 transition-opacity duration-300 group-hover:opacity-100 md:opacity-0">
        <div>
          <span className="text-sm font-bold text-[#9b6cfd]">
            WEEK {challenge.week}
          </span>
          <h2 className="text-2xl font-bold leading-6 text-white">
            {challenge.title}
          </h2>
        </div>
        <div className="flex gap-5">
          <a
            className="flex w-full items-center justify-center gap-1 rounded-md bg-[#9b6cfd] px-4 py-2 text-center font-bold text-white"
            href={challenge.path}
          >
            Project
            <Link size={20} weight="bold" color="#fff" />
          </a>
          <a
            className="flex w-full items-center justify-center gap-1 rounded-md bg-[#9b6cfd] px-4 py-2 text-center font-bold text-white"
            href={challenge.figmaUrl}
          >
            Figma
            <FigmaLogo size={20} weight="bold" color="#fff" />
          </a>
        </div>
      </div>
    </div>
  )
}
