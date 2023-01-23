import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"
import { PlayerVariant, Music } from "@type/playerTypes"
import { getMusics } from "@services"
interface MusicPlayerContextData {
  isPlaying: boolean
  handlePlay: () => void
  nextMusic: () => void
  previousMusic: () => void
  currentTime: number
  variant: PlayerVariant
  setVariant: React.Dispatch<PlayerVariant>
  secondsToMinutes: (timeAmount: number) => string
  currentMusic: Music
}

interface MusicPlayerProviderProps {
  children: ReactNode
}

const MusicPlayerContext = createContext<MusicPlayerContextData>(
  {} as MusicPlayerContextData
)

export function MusicPlayerProvider({ children }: MusicPlayerProviderProps) {
  const musics = getMusics()

  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [musicIndex, setMusicIndex] = useState<number>(0)
  const [currentMusic, setCurrentMusic] = useState<Music>(musics[musicIndex])
  const [variant, setVariant] = useState<PlayerVariant>("full")

  function secondsToMinutes(timeAmount: number) {
    const minutes = Math.floor(timeAmount / 60)
    let seconds = Math.floor(timeAmount % 60)

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`
  }

  function handlePlay() {
    setIsPlaying(!isPlaying)
  }

  function nextMusic() {
    if (musicIndex < musics.length - 1) setMusicIndex((state) => state + 1)
  }

  function previousMusic() {
    if (musicIndex > 0) setMusicIndex((state) => state - 1)
    setCurrentTime(0)
  }

  useEffect(() => {
    setCurrentMusic(musics[musicIndex])
    setIsPlaying(false)
    setCurrentTime(0)
  }, [musicIndex])

  useEffect(() => {
    if (isPlaying && currentTime < currentMusic.duration) {
      setTimeout(() => {
        setCurrentTime((state) => state + 1)
      }, 1000)
    }
  }, [isPlaying, currentTime])

  return (
    <MusicPlayerContext.Provider
      value={{
        isPlaying,
        handlePlay,
        nextMusic,
        previousMusic,
        currentTime,
        variant,
        setVariant,
        secondsToMinutes,
        currentMusic,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  )
}

export function useMusicPlayer() {
  const context = useContext(MusicPlayerContext)
  return context
}
