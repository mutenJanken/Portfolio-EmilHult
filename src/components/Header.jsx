import LinkedInLogo from "/assets/images/linkedin.png";
import GitHubLogo from "/assets/images/github.png";
import NavBar from "./NavBar";

function header() {
  return (
    <header>

      {/* HEADER NAME TITLE  */}
      <div className="header-fullname-mobile">
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

      {/* NAVLINKS */}
      <div className="horizontal-wrapper">
        <div className="align-navbar-header">
          <NavBar />
        </div>
      </div>

      {/* SOCIALS */}
      <div className="socials-wrapper">
        <a href="https://github.com/mutenJanken" className="github-button">
          <img className="socials-logo" src={GitHubLogo} alt="github-logo" />
        </a>
        <a href="https://www.linkedin.com/in/emil-hult-a47a87326/" className="linkedin-button">
          <img className="socials-logo" src={LinkedInLogo} alt="linkedin-logo" />
        </a>
      </div>
    </header>
  );
}

export default header;
