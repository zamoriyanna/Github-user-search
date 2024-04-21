import { VariantType } from 'notistack'
import { Dispatch, SetStateAction } from 'react'

export interface IFetchUsers {
  (
    query: string,
    page: number,
    showMessage: (message: string, type: VariantType) => void,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    perPage?: number,
  ): Promise<IUserItems>
}

interface IUserItems {
  items: IUsers[]
}

export interface IUsers {
  id: string
  login: string
  url: string
}
