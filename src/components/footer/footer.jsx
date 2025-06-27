import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { socials } from '../navbar/navbar.jsx';
import DottedLine from '../dottedline.jsx';
import { Link } from 'react-router-dom';

function Footer() {

  const leftLinks = [
    { key: "Home", value: "/" },
    { key: "Projects", value: "/projects" },
    { key: "Join", value: "/join" },
  ];

  const rightLinks = [
    { key: "FAQ", value: "/faq" },
    { key: "Team", value: "/about" },
    { key: "Contact", value: "mailto:bucsclub@bu.edu" },
  ];

  const FooterLinks = ({links, className}) => {
    const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <ul className={className}>
        {links.map((item) => (
          <li key={item.key}>
            <Link to={item.value} onClick={handleClick}>
              {item.key}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <footer>
      <DottedLine footer/>
      <div className="container">
        <div className="footer-links">
          <FooterLinks links={leftLinks} className="left" />
          <img src="/icon/logo.png" className="footer-logo" alt="Club logo"/>
          <FooterLinks links={rightLinks} className="right" />
        </div>
        <div className="footer-socials">
          <span>Made with ❤️ by the BU CSC team</span>
          <ul className="footer-icons">
            {socials.map((item) => (
              <li key={item.key}>
                <a href={item.value} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={item.key === "github" ? faGithub : item.key === "discord" ? faDiscord : item.key ==="instagram" ? faInstagram : faEnvelope} className="footer-icon"/>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <DottedLine reverse footer />
    </footer>
  );
}

export default Footer;