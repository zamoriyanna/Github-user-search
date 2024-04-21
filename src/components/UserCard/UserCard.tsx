import React, { FC } from 'react'

import { Divider, Link, Paper, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'

import { isValidUrl } from 'helpers/Validation/Validation'
import { NO_COMPANY_PROVIDED, NO_EMAIL_PROVIDED, NO_NAME_PROVIDED } from './UserCard.constants'
import { IUserCard } from './UserCard.interfaces'
import { useStyles } from './UserCard.styles'

export const UserCard: FC<IUserCard> = ({ user }) => {
  const classes = useStyles()
  const { avatar_url, name, company, email, followers, following, blog } = user

  return (
    <Paper className={classes.userCardContainer}>
      <div className={classes.avatar}>
        <Avatar alt="user-avatar" src={avatar_url} sx={{ width: 150, height: 150 }} />
      </div>
      <Typography className={classes.name}>{name || NO_NAME_PROVIDED}</Typography>
      <Typography className={classes.company}>{company || NO_COMPANY_PROVIDED}</Typography>
      <Divider className={classes.divider} />
      <Typography className={classes.email}>{email || NO_EMAIL_PROVIDED}</Typography>
      {isValidUrl(blog) && (
        <Link className={classes.blogLink} href={blog} target="_blank" rel="noopener noreferrer" underline="none">
          {blog}
        </Link>
      )}
      <div className={classes.followers}>
        <div>
          <Typography className={classes.total}>{followers}</Typography>
          <Typography className={classes.caption}>followers</Typography>
        </div>
        <div>
          <Typography className={classes.total}>{following}</Typography>
          <Typography className={classes.caption}>following</Typography>
        </div>
      </div>
    </Paper>
  )
}
