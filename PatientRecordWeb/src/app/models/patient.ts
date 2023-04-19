import { Gender } from "./gender"

export interface Patient {
    id: number
    firstName: string
    lastName: string
    birthday: string
    gender: Gender
  }