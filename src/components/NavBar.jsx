import React from "react";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";


function NavBar() {
  return (
    <div className="navlinks-wrapper">
      <NavLink className="navlink-tab" to="/about">
        About me
      </NavLink>
      <NavLink className="navlink-tab" to="/skills">
        Skillset
      </NavLink>
      <NavLink className="navlink-tab" to="/portfolio">
        Portfolio
      </NavLink>
    </div>
  );
}

export default NavBar;
