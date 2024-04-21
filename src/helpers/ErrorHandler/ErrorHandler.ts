import { IHandleError } from './ErrorHandler.interfaces'

export const handleError: IHandleError = async (response, showMessage) => {
  if (response.status === 422) {
    const errorData = await response.json()
    showMessage(errorData.message, 'error')

    errorData?.errors?.forEach((error: { message: string }) => {
      showMessage(error.message, 'error')
    })

    return null
  }

  if (response.status >= 400 && response.status < 500) {
    const errorData = await response.json()
    showMessage(errorData.message, 'error')
    return null
  }
}
