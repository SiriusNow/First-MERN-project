import React from 'react';
import { Outlet, Link } from "react-router-dom";
import css from "./style.module.css";

function Layout() {
  return (
    <div className={css.banner}>
      <div className={css.navbar}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Form bugluh</Link>
          </li>
          <li>
            <Link to="/staff">Formuudiig harah</Link>
          </li>
          <li>
            <Link to="/addstaff">Ajiltan nemeh</Link>
          </li>
          <li>
            <Link to="/seestaff">Ajiltan harah</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  )
};

export default Layout;