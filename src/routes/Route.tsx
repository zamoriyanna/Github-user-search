import React from 'react'
import { Route, Routes } from 'react-router-dom'

import SearchTool from 'pages/SearchTool/SearchTool'
import { User } from 'pages/User/User'
import { NotFound } from 'pages/NotFound/NotFound'
import { ROUTE_USER, ROUTE_USER_SEARCH } from './Route.constants'

const AppRoutes: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path={ROUTE_USER_SEARCH} element={<SearchTool />} />
      <Route path={ROUTE_USER} element={<User />} />
    </Routes>
  )
}

export default AppRoutes
