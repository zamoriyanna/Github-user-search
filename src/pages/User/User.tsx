import React, { FC, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { Button } from '@mui/material'

import { UserCard } from 'components/UserCard/UserCard'
import useSnackBar from 'hooks/useSnackbar/useSnackbar'
import { ROUTE_USER_SEARCH } from 'routes/Route.constants'

import { IUser } from './User.interfaces'
import { fetchUserData } from './User.services'
import { GO_BACK_BUTTON } from './User.constants'
import { useStyles } from './User.styles'

export const User: FC = () => {
  const classes = useStyles()
  const showMessage = useSnackBar()
  const { login } = useParams()
  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {
    void (async () => {
      const result = await fetchUserData(login as string, showMessage)
      setUser(result)
    })()
  }, [login])

  return (
    <div className={classes.userContainer}>
      <Button className={classes.button} component={Link} to={ROUTE_USER_SEARCH}>
        {GO_BACK_BUTTON}
      </Button>
      {user && <UserCard user={user} />}
    </div>
  )
}
