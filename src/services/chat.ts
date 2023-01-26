const chatHistory = [
  {
    id: "1",
    sender: "Guilherme de Oliveira",
    text: "Tive uma ideia incrível para um projeto! 😍",
    send_at: new Date("2023-01-25T11:30:00"),
    send_by_me: false,
  },
  {
    id: "2",
    sender: "Rocketseat",
    text: "Sério? Me conta mais.",
    send_at: new Date("2023-01-25T11:32:00"),
    send_by_me: true,
  },
  {
    id: "3",
    sender: "Guilherme de Oliveira",
    text: "E se a gente fizesse um chat moderno e responsivo em apenas uma semana?",
    send_at: new Date("2023-01-25T11:34:00"),
    send_by_me: false,
  },
  {
    id: "4",
    sender: "Rocketseat",
    text: "#boraCodar! 🚀",
    send_at: new Date("2023-01-25T11:36:00"),
    send_by_me: true,
  },
]

const contactList = [
  {
    id: "1",
    name: "Guilherme de Oliveira",
    photo: "https://avatars.githubusercontent.com/u/21250477?v=4",
    online: false,
    last_update: new Date("2023-01-25T16:23:00"),
  },
]

export function getChatHistory() {
  return chatHistory
}

export function getContactById(id: string) {
  return contactList.find((x) => x.id === id)
}
