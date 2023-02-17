import { PlayerContainer } from "./PlayerContainer"
import VariantWidget from "./VariantWidget"
import { MusicPlayerProvider, useDocumentTitle } from "@hooks"

export default function Player() {
  useDocumentTitle("Music Player")

  return (
    <MusicPlayerProvider>
      <div className="relative flex h-[calc(100vh-80px)] w-full flex-col items-center justify-center overflow-hidden bg-brand-dark">
        <div className="mt-[-80px]">
          <PlayerContainer />
        </div>
        <VariantWidget />
      </div>
    </MusicPlayerProvider>
  )
}
