import "./index.scss";
import Header from "./components/header";
import Aboutme from "./components/Aboutme";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import TestLink from "./components/TestLink";
import TestLink2 from "./components/TestLink2";

function App() {
  return (
    <>
      <Header />

      {/* NAV LINKS / TABS  */}
      <div className="navlinks-wrapper">
        <NavLink className="navlink-tab" to="/about">
          About me
        </NavLink>
        <NavLink className="navlink-tab" to="/testlink">
          Testlink1
        </NavLink>
        <NavLink className="navlink-tab" to="/testlink2">
          Testlink2
        </NavLink>
      </div>

      {/* ROUTES  */}
      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<Navigate to="/about" replace />} />

        <Route path="/about" element={<Aboutme />} />
        <Route path="/testlink" element={<TestLink />} />
        <Route path="/testlink2" element={<TestLink2 />} />
      </Routes>
    </>
  );
}

export default App;
