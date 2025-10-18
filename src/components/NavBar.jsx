import { NavLink, Routes, Route, Navigate } from "react-router-dom";

function NavBar() {
  return (
    <div className="navlinks-wrapper">

      {/* ABOUT ME NAVLINK */}
      <NavLink className="navlink-tab left" to="/about">
        About me
      </NavLink>

      {/* HEADER NAME TITLE */}
      <div className="header-column">
      <div className="header-fullname-bigscreen">
        <div className="header-vertical">
          <div className="text-container">
            <small className="syntax-style">..\</small>
            <h1 className="portfolio-name-h1">Emil Hult</h1>
            <small className="syntax-style">{">"}</small>
            <small className="blinking-cursor"></small>
          </div>
          <div className="developer-type-wrapper">
            <small className="syntax-style text">.NET developer in training</small>
          </div>
        </div>
      </div>
          <div className="navlink-btn-center">

            {/* SKILLSET NAVLINK */}
            <NavLink className="navlink-tab btn skillset" to="/skills">
              Skillset
            </NavLink>
          </div>
      </div>

      {/* PORTFOLIO NAVLINK */}
      <NavLink className="navlink-tab right" to="/portfolio">
        Projects
      </NavLink>
    </div>
  );
}

export default NavBar;
