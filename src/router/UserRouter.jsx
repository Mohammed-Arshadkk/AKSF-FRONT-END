import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import ConductTournament from '../pages/ConductTournament'
import CommitteeHome from '../pages/CommitteeHome'
import CdLogin from '../pages/CdLogin'
import ForgotPassword from '../component/Forgot/ForgotPassword'
import ResetPasswordForm from '../component/Forgot/Resetpassword'
import TeamStats from '../component/TeamStats'
import UserProfile from '../pages/UserProfile'
import Team from '../component/Team'
import Score from '../component/Score'


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
        <Route path='/teamstats' element={<TeamStats />}></Route>
        <Route path='/teams' element={<Team />}></Route>
        <Route path='/scores' element={<Score />}></Route>
        <Route path='/userProfile' element={<UserProfile />}></Route>
        
        
      </Routes>
    </>
  )
}

export default UserRouter
