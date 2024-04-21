import { handleError } from 'helpers/ErrorHandler/ErrorHandler'
import { IFetchUserData } from './User.interfaces'
import { BASE_URL } from '../../App.config'

export const fetchUserData: IFetchUserData = async (login, showMessage) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${login}`)

    handleError(response, showMessage)

    return response.ok ? await response.json() : null
  } catch (e) {
    if (e instanceof Error) {
      showMessage(e.message, 'error')
    }
    console.error(e)
  }
}
