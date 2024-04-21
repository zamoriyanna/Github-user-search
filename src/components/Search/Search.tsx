import React, { FC } from 'react'

import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase'

import { useStyles } from './Search.styles'
import { ISearch } from './Search.interfaces'
import { SEARCH_PLACEHOLDER } from './Search.constants'

export const Search: FC<ISearch> = ({ value, onChange }) => {
  const classes = useStyles()

  return (
    <div className={classes.searchContainer}>
      <InputBase
        value={value}
        onChange={onChange}
        placeholder={SEARCH_PLACEHOLDER}
        inputProps={{ 'aria-label': 'search' }}
        className={classes.input}
      />
      <IconButton aria-label="search" type="submit">
        <SearchIcon className={classes.icon} />
      </IconButton>
    </div>
  )
}
