import LinkedInLogo from "/src/assets/images/linkedin.png";
import GitHubLogo from "/src/assets/images/github.png";
import NavBar from "./NavBar";

function header() {
  return (
    <header>
      <div className="header-fullname">
        <div className="header-vertical">
        <div className="text-container">
          <small className="syntax-style">..\</small>
          <h1>Emil Hult</h1>
          <small className="syntax-style">{">"}</small>
          <small className="blinking-cursor"></small>
        </div>
        <div className="developer-type-wrapper">
          {/* <small className="syntax-style small">{" > "} </small> */}
          <small className="syntax-style text">.NET developer in training</small>
        </div>
        </div>
      </div>

      {/* NAVLINKS */}

      <div className="horizontal-wrapper">
        <div className="align-navbar-header">
          <NavBar />
        </div>
        <div className="socials-wrapper">
          <a href="https://github.com/mutenJanken" className="github-button">
            <img className="socials-logo" src={GitHubLogo} alt="github-logo" />
          </a>
          <a href="https://www.linkedin.com/in/emil-hult-a47a87326/" className="linkedin-button">
            <img className="socials-logo" src={LinkedInLogo} alt="linkedin-logo" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default header;
