import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Admin from '../pages/Admin/Admin'

function AdminRouter() {
  return (
    <div>
        <Routes>
        <Route path='/admin' element={<Admin/>}></Route>
        </Routes>
    </div>
  )
}

export default AdminRouter
