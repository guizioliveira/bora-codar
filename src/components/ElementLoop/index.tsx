import React, { ReactElement } from "react"

interface ElementLoopProps {
  times?: number
  children: ReactElement
}

export default function ElementLoop({ times = 1, children }: ElementLoopProps) {
  const elements = []

  for (let i = 0; i < times; i++) {
    elements.push(React.cloneElement(children, { key: i }))
  }

  return <>{elements}</>
}
