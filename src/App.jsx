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
      <>
        <Header />

        <div className="wrapper">
          <main>
            <NavBar />

            {/* ROUTES – visar bara komponenter när de matchar */}
            <Routes>
              <Route path="/" element={<Navigate to="/about" replace />} />
              <Route path="/about" element={<Aboutme />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </>
    </>
  );
}

export default App;
