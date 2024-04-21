import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

import { IUsersList } from './UsersList.interfaces'
import { useStyles } from './UsersList.styles'

export const UsersList: FC<IUsersList> = ({ users }) => {
  const classes = useStyles()

  return (
    <List className={classes.list}>
      {users.map(({ id, login }) => (
        <ListItem key={id} className={classes.listItem} component={Link} to={`user/${login}`}>
          {login}
        </ListItem>
      ))}
    </List>
  )
}
