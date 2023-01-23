import { useMusicPlayer } from "@hooks"

export default function VariantOptions() {
  const { variant, setVariant } = useMusicPlayer()
  return (
    <div className="flex h-3 w-full justify-between bg-brand-player-bg py-8 px-8 md:w-96 md:rounded-t-[9.6px]">
      <label className="flex items-center gap-2 text-white">
        <input
          type="radio"
          value="full"
          name="full"
          checked={variant === "full"}
          onChange={(checked) => setVariant("full")}
        />
        Full
      </label>
      <label className="flex items-center gap-2 text-white">
        <input
          type="radio"
          value="short"
          name="short"
          checked={variant === "short"}
          onChange={(checked) => setVariant("short")}
        />
        Short
      </label>
      <label className="flex items-center gap-2 text-white">
        <input
          type="radio"
          value="minimal"
          name="minimal"
          checked={variant === "minimal"}
          onChange={(checked) => setVariant("minimal")}
        />
        Minimal
      </label>
    </div>
  )
}
