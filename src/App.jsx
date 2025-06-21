import "./index.scss";
import Header from "./components/Header";
import Aboutme from "./components/Aboutme";
import { Routes, Route, Navigate } from "react-router-dom";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <>
        <Header />

        <div className="wrapper">
          <main>
            <NavBar />
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
