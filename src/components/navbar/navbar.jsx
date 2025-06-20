import React, { useState, useEffect } from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { motion } from "motion/react"
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
    const [isBars, setIsBars] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const links = [
        { key: "About Us", value: "/about"},
        { key: "Projects", value: "/projects"},
        { key: "Join", value: "/join"},
        { key: "FAQs", value: "/faq"}
    ]

    useEffect(() => {
        const handleResize = () => {
            setIsBars(window.innerWidth < 940);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    function NavLinks() {
        return (
            <div className="nav-links-container">
                <ul className="nav-links">
                    {links.map((item) => (
                        <li key={item.key}>
                            <NavLink 
                            to={item.value} 
                            onClick={() => setIsDropdownOpen(false)}
                            className={({ isActive }) => isActive ? "links active-link" : "links"}>
                                {item.key}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <ul className="nav-socials">
                    <motion.li className="github" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <a href="https://github.com/bu-csc" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="icons" bounce/>
                        </a>
                    </motion.li>
                    <motion.li className="discord" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <a href="https://discord.gg/EqHXJNdF3Q" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faDiscord} className="icons"/>
                        </a>
                    </motion.li>
                    <motion.li className="instagram" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <a href="https://www.instagram.com/bucomputerscience/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="icons"/>
                        </a>
                    </motion.li>
                    <motion.li className="email" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <a href="mailto:bucsclub@bu.edu" rel="noreferrer">
                            <img className="icons" alt="Email logo" src="/socials/email.svg"/>
                        </a>
                    </motion.li>
                </ul>
            </div>
        );
    }

    return (
        <nav className="navbar">
            <Link to="/">
                <img src="/icon/logo.png" alt="Club Logo" className="logo"/>
            </Link>
            {isBars ? (
                <div className="dropdown-container">
                    <button onClick={toggleDropdown} className="bars-button"><FontAwesomeIcon icon={isDropdownOpen ? faXmark : faBars} /></button>
                    {isDropdownOpen && <NavLinks />}
                </div>
            ) : (
                <NavLinks />
            )}
        </nav>
    );
}

export default Navbar;