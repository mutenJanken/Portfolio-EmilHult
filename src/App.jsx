import "./index.scss";
import Header from "./components/header";
import Aboutme from "./components/Aboutme";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

function App() {
  const width = useWindowWidth();
  const isLargeScreen = width >= 1024;

  return (
    <>
      <Header />

      <div className="wrapper">
        {/* NAV LINKS / TABS */}
        <main>
          {/* <div className="navlinks-wrapper"> */}
          {/* <NavLink className="navlink-tab" to="/about">
              About me
            </NavLink>
            <NavLink className="navlink-tab" to="/skills">
              Skills
            </NavLink>
            <NavLink className="navlink-tab" to="/portfolio">
              Portfolio
            </NavLink> */}
          <NavBar />
          {/* </div> */}

          {/* ROUTES / CONTENT */}
          {!isLargeScreen ? (
            // SMALL SCREENS
            <Routes>
              <Route path="/" element={<Navigate to="/about" replace />} />
              <Route path="/about" element={<Aboutme />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          ) : (
            // BIG SCREENS
            <div className="large-screen-content">
              <div>
                <Aboutme />
              </div>
              <div>
                <Routes>
                  <Route path="/" element={<Navigate to="/skills" replace />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  {/* <Route path="*" element={<div>Choose tab</div>} /> */}
                </Routes>
              </div>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
