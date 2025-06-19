import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {

    const links = [
        { key: "About Us", value: "/about"},
        { key: "Projects", value: "/projects"},
        { key: "Join", value: "/join"},
        { key: "FAQs", value: "/faq"}
    ]

  return (
    <nav className="navbar">
        <Link to="/"><img src="/icon/logo.png" alt="Club Logo" className="logo"/></Link>
        <ul className="nav-links">
            {links.map((item) => (
                <li key={item.key}>
                    <Link to={item.value} className="links">
                        {item.key}
                    </Link>
                </li>
            ))}
        </ul>
        <ul className="nav-socials">
            <li className="github">
                <a href="https://github.com/bu-csc" target="_blank" rel="noreferrer"><img className="icon" alt="Github logo" src="/socials/github.svg"/></a>
            </li>
            <li className="discord">
                <a href="https://discord.gg/EqHXJNdF3Q" target="_blank" rel="noreferrer"><img className="icon" alt="Discord logo" src="/socials/discord.svg"/></a>
            </li>
            <li className="instagram">
                <a href="https://www.instagram.com/bucomputerscience/" target="_blank" rel="noreferrer"><img className="icon" alt="Instagram logo" src="/socials/instagram.svg"/></a>
            </li>
            <li className="email">
                <a href="mailto:bucsclub@bu.edu" rel="noreferrer"><img className="icon" alt="Email logo" src="/socials/email.svg"/></a>
            </li>
        </ul>
    </nav>
  );
}

export default Navbar;