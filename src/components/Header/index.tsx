import { LinkedinLogo, GithubLogo } from "phosphor-react"

export function Header() {
  return (
    <div className="h-20 w-full border-b-[1px] border-b-[#323238] bg-[#121214]">
      <div className="m-auto flex h-full items-center justify-between px-7 md:container">
        <a
          href="/bora-codar/"
          className="font-firaCode text-xl text-[#9b6cfd] transition-colors duration-300 hover:text-[#c3a7fd]"
        >
          {`\\> boraCodar_`}
        </a>

        <div className="flex gap-3">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/guilherme-de-oliveira/"
          >
            <LinkedinLogo
              className="text-[#9b6cfd] transition-colors duration-300 hover:text-[#c3a7fd]"
              weight="fill"
              size={30}
            />
          </a>
          <a target="_blank" href="https://github.com/guizioliveira/bora-codar">
            <GithubLogo
              className="text-[#9b6cfd] transition-colors duration-300 hover:text-[#c3a7fd]"
              weight="fill"
              size={30}
            />
          </a>
        </div>
      </div>
    </div>
  )
}
