import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./component/HomePage/Footer";
import Home from "./pages/UserHomepage/Home";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import ConductTournament from "./pages/ConductTournament/ConductTournament";
import CommitteeHome from "./pages/CommitteHome/CommitteeHome";
import Team from "./component/Team";
import TeamStats from "./component/TeamStats";
import UserRouter from "./router/UserRouter";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<UserRouter />}></Route>
          </Routes>
      </BrowserRouter>
      {/* < Home /> */}
      {/* <Signup /> */}
      {/* <Login /> */}
      {/* <ConductTournament /> */}
      {/* <CommitteeHome /> */}
      {/* <Team /> */}
      {/* <TeamStats /> */}
    </div>
  );
}

export default App;
