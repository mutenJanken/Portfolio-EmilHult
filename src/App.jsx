import "./index.scss";
import Header from "./components/header";
import Aboutme from "./components/Aboutme";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <Header />

      <div className="container">
        {/* NAV LINKS / TABS  */}
        <div className="navlinks-wrapper">
          <NavLink className="navlink-tab" to="/about">
            About me
          </NavLink>
          <NavLink className="navlink-tab" to="/skills">
            Skills
          </NavLink>
          <NavLink className="navlink-tab" to="/portfolio">
            Portfolio
          </NavLink>
        </div>

        {/* ROUTES  */}
        <Routes>
          {/* HOME PAGE */}
          <Route path="/" element={<Navigate to="/about" replace />} />

          <Route path="/about" element={<Aboutme />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
