import React, { Component,useState, useEffect }  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Staff from "./Pages/Staff";
import NoPage from "./Pages/NoPage";
import AddStaff from "./Pages/AddStaff";
import SeeStaff from "./Pages/SeeStaff";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="staff" element={<Staff />} />
            <Route path="addstaff" element={<AddStaff />} />
            <Route path="seestaff" element={<SeeStaff />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
