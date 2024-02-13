import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/UserHomepage/Home'
import Signup from '../pages/Signup/Signup'
import Login from '../pages/Login/Login'
import ConductTournament from '../pages/ConductTournament/ConductTournament'
import Otp from '../component/UserOTP/Otp'
import CommitteeHome from '../pages/CommitteHome/CommitteeHome'

function UserRouter() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/conduct-tournament' element={<ConductTournament />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/userotp' element={<Otp />}></Route>
        <Route path='/committeeHome' element={<CommitteeHome />}></Route>
      </Routes>
    </>
  )
}

export default UserRouter
