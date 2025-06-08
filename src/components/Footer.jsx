import React from "react";
import LinkedInLogo from "/src/assets/images/linkedin.png";
import GitHubLogo from "/src/assets/images/github.png";

function Footer() {
  return (
    <footer>
      <div className="contact-wrapper">
        <div className="get-in-touch-text">Get in Touch</div>
        <p className="contact-description">
          Feel free to hit me up via email, LinkedIn, or checkout what im up to on GitHub.
        </p>
        <div className="horizontal-wrapper">
          <div className="socials-footer-wrapper">
            <a href="https://github.com/mutenJanken" className="github-button">
              <img className="socials-footer-logo" src={GitHubLogo} alt="github-logo" />
            </a>
            <a href="https://www.linkedin.com/in/emil-hult-a47a87326/" className="linkedin-button">
              <img className="socials-footer-logo" src={LinkedInLogo} alt="linkedin-logo" />
            </a>
          </div>

          <a href="mailto:emilhult@live.se" className="contact-btn">
            <div>Contact Me</div>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
