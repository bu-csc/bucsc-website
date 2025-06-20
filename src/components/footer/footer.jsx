import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
function Footer() {

    const LineDot = ({reverse = false}) => {
        return (
            <div className={`linedot ${reverse ? 'reverse' : ''}`}>
                <div className="rectangle"></div>
                <div className="circle-container">
                    {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="circle"></div>
                    ))}
                </div>
            </div>
        );
    };

  const leftLinks = [
    { key: "Home", value: "/" },
    { key: "Projects", value: "/projects" },
    { key: "Join", value: "/join" },
  ];

  const rightLinks = [
    { key: "FAQ", value: "/faq" },
    { key: "Team", value: "/about" },
    { key: "Contact Us", value: "mailto:bucsclub@bu.edu" },
  ];

  return (
    <footer>
      <LineDot />
      <div className="content">
        <div className="footer-links-container">
          <ul className="footer-links-left">
            {leftLinks.map((item) => (
              <li key={item.key}>
                <Link to={item.value} className="footer-links">
                  {item.key}
                </Link>
              </li>
            ))}
          </ul>

          <img src="/icon/logo.png" alt="Club Logo" className="footer-logo"/>

          <ul className="footer-links-right">
            {rightLinks.map((item) => (
              <li key={item.key}>
                <Link to={item.value} className="footer-links">
                  {item.key}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <span>Made with<img src="/icon/heart.svg" alt="heart" className="heart"/>by the BU CSC team</span>
        <ul className="footer-nav-socials">
            <li className="github">
                <a href="https://github.com/bu-csc" target="_blank" rel="noreferrer"><img className="footer-icon" alt="Github logo" src="/socials/github.svg"/></a>
            </li>
            <li className="discord">
                <a href="https://discord.gg/EqHXJNdF3Q" target="_blank" rel="noreferrer"><img className="footer-icon" alt="Discord logo" src="/socials/discord.svg"/></a>
            </li>
            <li className="instagram">
                <a href="https://www.instagram.com/bucomputerscience/" target="_blank" rel="noreferrer"><img className="footer-icon" alt="Instagram logo" src="/socials/instagram.svg"/></a>
            </li>
            <li className="email">
                <a href="mailto:bucsclub@bu.edu" rel="noreferrer"><img className="footer-icon" alt="Email logo" src="/socials/email.svg"/></a>
            </li>
        </ul>
      </div>
      <LineDot reverse />
    </footer>
  );
}

export default Footer;