import React, { useEffect, useState } from 'react'
import { LinearProgress, Typography } from '@mui/material'

import { UsersList } from 'components/UsersList/UsersList'
import { Search } from 'components/Search/Search'
import useSnackBar from 'hooks/useSnackbar/useSnackbar'

import { IUsers } from './SearchTool.interfaces'
import { fetchUsers } from './SearchTool.services'
import { SEARCH_TITLE } from './SearchTool.constants'
import { useStyles } from './SearchTool.styles'

function SearchTool() {
  const classes = useStyles()
  const showMessage = useSnackBar()

  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [users, setUsers] = useState<IUsers[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const handleSearchUsers = async () => {
    if (!hasMore) return

    const result = await fetchUsers(query, page, showMessage, setIsLoading)
    if (result?.items?.length > 0) {
      setUsers((prevUsers) => [...prevUsers, ...result.items])
      setPage((prevPage) => prevPage + 1)
    } else {
      setHasMore(false)
    }
  }

  useEffect(() => {
    const handleScroll = async () => {
      const { scrollTop, offsetHeight } = document.documentElement
      if (window.innerHeight + scrollTop !== offsetHeight || isLoading) {
        return
      }
      await handleSearchUsers()
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isLoading, hasMore])

  const handleChange = (event: { target: { value: string } }) => {
    setQuery(event.target.value)
    setPage(1)
  }

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setUsers([])
    setHasMore(true)
    await handleSearchUsers()
  }

  return (
    <div className={classes.searchContainer}>
      <div className={classes.content}>
        <Typography className={classes.title}>{SEARCH_TITLE}</Typography>
        <form onSubmit={handleSubmit}>
          <Search value={query} onChange={handleChange} />
        </form>
        {users.length > 0 && <UsersList users={users} />}
        {isLoading && <LinearProgress className={classes.progress} />}
      </div>
    </div>
  )
}

export default SearchTool
