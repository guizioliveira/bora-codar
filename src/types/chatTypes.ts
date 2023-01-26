export interface contact {
  id: string
  name: string
  photo: string
  online: boolean
  last_update: Date
}

export interface message {
  id: string
  sender: string
  text: string
  send_at: Date
  send_by_me: boolean
}
