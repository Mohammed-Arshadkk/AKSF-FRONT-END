import React from 'react'
import { Route,Routes } from 'react-router-dom'
import AdminHome from '../pages/AdminHome'

function AdminRouter() {
  return (
    <div>
        <Routes>
        <Route path='/adminHome' element={<AdminHome/>}></Route>
        </Routes>
    </div>
  )
}

export default AdminRouter
