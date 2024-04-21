import { VariantType } from 'notistack'

export interface IUser {
  id: string
  name: string
  email: string
  followers: number
  following: number
  avatar_url: string
  blog: string
  company: string
}

export interface IFetchUserData {
  (id: string, showMessage: (message: string, type: VariantType) => void): Promise<IUser>
}
