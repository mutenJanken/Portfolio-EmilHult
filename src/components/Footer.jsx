import LinkedInLogo from "/src/assets/images/linkedin.png";
import GitHubLogo from "/src/assets/images/github.png";

function Footer() {
  return (
    <footer>
      <a href="mailto:emilhult@live.se" className="contact-btn">
        <div>Email</div>
      </a>
      <div className="footer-horizontal">
        <a href="https://github.com/mutenJanken" className="github-button">
          <img className="socials-footer-logo" src={GitHubLogo} alt="github-logo" />
        </a>
        <div className="contact-wrapper">
          <div className="get-in-touch-wrapper">
            <div className="get-in-touch-text">Get in Touch</div>
          </div>
          <div className="contact-horizontal">
            <p className="contact-description">
              Feel free to hit me up via email, LinkedIn, or checkout what I'm up to on GitHub.
            </p>
            <div className="horizontal-wrapper">
              <div className="socials-footer-wrapper"></div>
            </div>
          </div>
          {/* <div className="copyright">@ 2025 Emil Hult</div> */}
        </div>
          <a href="https://www.linkedin.com/in/emil-hult-a47a87326/" className="linkedin-button">
            <img className="socials-footer-logo" src={LinkedInLogo} alt="linkedin-logo" />
          </a>
      </div>
    </footer>
  );
}

export default Footer;
