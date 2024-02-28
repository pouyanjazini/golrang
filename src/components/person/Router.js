import React from 'react'
import { Route, Routes } from 'react-router-dom'
import List from './List'
import Full from './Full'
import New from './New'
import Edit from './Edit'

export default function Router () {
  return (
    <Routes>
      <Route path='/' element={<List />} />
      <Route path='/:id' element={<Full />} />
      <Route path='/new' element={<New />} />
      <Route path='/:id/edit' element={<Edit />} />
    </Routes>
  )
}
