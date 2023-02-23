type challengeType = Array<{
  week: number
  title: string
  path: string
  figmaUrl: string
  imageSrc: string
}>

const ASSETS_PATH = "assets/challenges"

const challenges: challengeType = [
  {
    week: 1,
    title: "Music Player",
    path: `player`,
    figmaUrl: "https://www.figma.com/community/file/1195050524500542670",
    imageSrc: `${ASSETS_PATH}/week1.png`,
  },
  {
    week: 2,
    title: "Product Card",
    path: `product-card`,
    figmaUrl: "https://www.figma.com/community/file/1195050984449538256",
    imageSrc: `${ASSETS_PATH}/week2.png`,
  },
  {
    week: 3,
    title: "Design System - Buttons",
    path: `buttons`,
    figmaUrl: "https://www.figma.com/community/file/1197534710257750520",
    imageSrc: `${ASSETS_PATH}/week3.png`,
  },
  {
    week: 4,
    title: "Chat layout",
    path: `chat`,
    figmaUrl: "https://www.figma.com/community/file/1200070743637495660",
    imageSrc: `${ASSETS_PATH}/week4.png`,
  },
  {
    week: 5,
    title: "Calculator",
    path: `calculator`,
    figmaUrl: "https://www.figma.com/community/file/1202607074523509182",
    imageSrc: `${ASSETS_PATH}/week5.png`,
  },
  {
    week: 6,
    title: "Boarding Pass",
    path: `boarding-pass`,
    figmaUrl: "https://www.figma.com/community/file/1205146101173113980",
    imageSrc: `${ASSETS_PATH}/week6.png`,
  },
  {
    week: 7,
    title: "Dashboard",
    path: `dashboard`,
    figmaUrl: "https://www.figma.com/community/file/1210217615683203825",
    imageSrc: `${ASSETS_PATH}/week7.png`,
  },
]

export function getChallenges() {
  return challenges
}
