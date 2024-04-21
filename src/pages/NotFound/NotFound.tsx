import React from 'react'
import { Typography } from '@mui/material'

import { useStyles } from './NotFound.styles'
import { NOT_FOUND_TITLE } from './NotFound.constants'

export const NotFound = () => {
  const classes = useStyles()

  return (
    <div className={classes.notFountContainer}>
      <Typography className={classes.title}>{NOT_FOUND_TITLE}</Typography>
    </div>
  )
}
