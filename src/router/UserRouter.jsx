import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/UserHomepage/Home'
import Signup from '../pages/Signup/Signup'
import Login from '../pages/Login/Login'
import ConductTournament from '../pages/ConductTournament/ConductTournament'
import CommitteeHome from '../pages/CommitteHome/CommitteeHome'
import CdLogin from '../pages/Login/CdLogin'
import ForgotPassword from '../component/Forgot/ForgotPassword'
import ResetPasswordForm from '../component/Forgot/Resetpassword'

function UserRouter() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/conduct-tournament' element={<ConductTournament />}></Route>
        <Route path='/committeeHome' element={<CommitteeHome />}></Route>
        <Route path='/Cdlogin' element={<CdLogin />}></Route>
        <Route path='/forgotPassword' element={<ForgotPassword />}></Route>
        <Route path='/ResetPassword' element={<ResetPasswordForm />}></Route>

      </Routes>
    </>
  )
}

export default UserRouter
