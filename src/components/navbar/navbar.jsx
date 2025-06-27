import React, { useState, useEffect } from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from "motion/react";
import { NavLink, Link } from 'react-router-dom';

export const socials = [
        { key: "github", value: "https://github.com/bu-csc"},
        { key: "discord", value: "https://discord.gg/EqHXJNdF3Q"},
        { key: "instagram", value: "https://www.instagram.com/bucomputerscience/"},
        { key: "email", value: "mailto:bucsclub@bu.edu"}
    ];

export function Navbar() {
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
                    {socials.map((item) => (
                        <motion.li 
                            key={item.key} 
                            className={item.key} 
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.95 }}>
                            <a href={item.value} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={item.key === "github" ? faGithub : item.key === "discord" ? faDiscord : item.key ==="instagram" ? faInstagram : faEnvelope} className="icons"/>
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </div>
        );
    }

    return (
        <nav className="navbar">
            <Link to="/" onClick={() => setIsDropdownOpen(false)}>
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