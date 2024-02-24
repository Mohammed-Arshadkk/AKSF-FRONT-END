import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRouter from "./router/UserRouter";
import AdminRouter from "./router/AdminRouter";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/user/*" element={<UserRouter />} />
          <Route path="/admin/*" element={<AdminRouter />} />
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
