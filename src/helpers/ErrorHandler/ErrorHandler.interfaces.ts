import { VariantType } from 'notistack'

interface IJSONResponse {
  message: string
  errors?: Array<{ message: string }>
}

interface IResponse {
  status: number
  json: () => Promise<IJSONResponse>
}

export interface IHandleError {
  (response: IResponse, showMessage: (message: string, type: VariantType) => void): void
}
