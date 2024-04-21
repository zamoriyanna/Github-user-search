import { handleError } from 'helpers/ErrorHandler/ErrorHandler'
import { IFetchUsers } from './SearchTool.interfaces'
import { BASE_URL, PER_PAGE } from '../../App.config'

export const fetchUsers: IFetchUsers = async (query, page, showMessage, setIsLoading, perPage) => {
  try {
    const encodeQuery = encodeURIComponent(query)
    perPage = perPage ?? PER_PAGE
    setIsLoading(true)
    const response = await fetch(`${BASE_URL}/search/users?q=${encodeQuery}&per_page=${perPage}&page=${page}`)

    handleError(response, showMessage)

    return await response.json()
  } catch (e) {
    if (e instanceof Error) {
      showMessage(e.message, 'error')
    }
    console.error(e)
  } finally {
    setIsLoading(false)
  }
}
