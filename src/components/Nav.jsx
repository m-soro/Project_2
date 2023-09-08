import { Route, Routes, NavLink, HashRouter } from "react-router-dom";
import { useState } from "react";
import Banner from "./Banner";
import Account from "../pages/Account";
import Favorites from "../pages/Favorites";
import About from "../pages/About";
import React from "react";

export default function Nav() {
  return (
    <HashRouter>
      <nav className="Nav container-fluid">
        <ul>
          <li>
            <NavLink to="/">Logo</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink
              to="/account"
              onClick={() =>
                console.log("going to account page and hiding banner")
              }
            >
              Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              onClick={() =>
                console.log("going to favorites page and hiding banner")
              }
            >
              Favorites
            </NavLink>
          </li>
          <NavLink
            to="/about"
            onClick={() => console.log("going to about page and hiding banner")}
          >
            About
          </NavLink>
        </ul>
      </nav>
      <Routes>
        <Route path="/account" element={<Account />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}
