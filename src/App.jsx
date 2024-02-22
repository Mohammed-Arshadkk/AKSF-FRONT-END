import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRouter from "./router/UserRouter";
import AdminRouter from "./router/AdminRouter";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<UserRouter />}></Route>
          <Route path="/*" element={<AdminRouter />}></Route>
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
