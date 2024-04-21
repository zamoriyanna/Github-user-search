import { useSnackbar } from 'notistack'
import { VariantType, Void } from './useSnackbar.types'

const useSnackBar = (): Void => {
  const openSnackbar = useSnackbar()?.enqueueSnackbar

  return (message: string, type: VariantType) => {
    openSnackbar(message, { variant: type })
  }
}

export default useSnackBar
