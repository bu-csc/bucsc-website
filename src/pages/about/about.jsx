import React from 'react';
import './about.css';
import shortUnderline from '../../assets/short-underline.svg';
import midUnderline from '../../assets/mid-underline.svg';
import DottedLine from '../../components/dottedline';
import { motion } from "motion/react";
import TeamCard from '../../components/teamcard/teamcard';
import { officerList } from '../../components/data';
import Connector from '../../components/connector/connector';

function About() {
    return (
        <div className="about">
            <header>
                <h1>About</h1>
                <img className="about-short-underline" src={shortUnderline} alt="underline"/>
            </header>
            <section className="about-landing">
                <div className="left-img-container">
                    <div className="left-img"></div>
                    <div className="polka-dots"></div>
                </div>
                <img className="right-img" src="/photos/clubfair.png" alt="Club fair"/>
                <article className="mission">
                    <h2 className="sub-heading">Our Mission</h2>
                    <p className="about-description">
                        BUCSC is an undergraduate club that provides a platform for students to enhance their coding and problem-solving skills through speakers, networking events, and guidance.
                        We create an environment for students who are CS majors or are interested in programming to create camaraderie with each other and foster their computer science journey. 
                    </p>
                </article>
                <div className="about-design">
                    <div className="design-1"></div>
                    <div className="design-2"></div>
                    <div className="design-3"></div>
                    <div className="design-4"></div>
                </div>
            </section>
            <section className="about-middle">
                <article className="middle-text">
                    <h2 className="about-subheading">Lorem ipsum dolor</h2>
                    <img src={midUnderline} alt="underline" className="mid-underline"/>
                    <p className="middle-subtext">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        <br />
                        <br />
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  
                    </p>
                    <motion.button className="light-blue-btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>Text</motion.button>
                </article>
                <section className="middle-img-container">
                    <img src="https://picsum.photos/600/400" alt="" className="middle-img"/>
                    <DottedLine gibby/>
                </section>
            </section>
            <section className="about-team">
                <header className="team-header">
                    <h1>Our Team</h1>
                    <img className="short-underline" src={shortUnderline} alt="underline"/>
                </header>
                <div className="left-connector">
                    <div className="left-connector-line"></div>
                    <div className="left-connector-dots">
                        <div className="left-connector-dot"></div>
                        <div className="left-connector-dot"></div>
                        <div className="left-connector-dot"></div>
                    </div>
                </div>
                <div className="right-connector">
                    <div className="right-connector-line"></div>
                    <div className="right-connector-board">
                        <div className="right-connector-lines"></div>
                        <div className="right-connector-lines"></div>
                        <div className="right-connector-lines"></div>
                        <div className="right-connector-lines"></div>
                        <div className="right-connector-lines"></div>
                    </div>
                </div>
                <div className="officer-chart">
                    <div className="column">
                        <TeamCard officer={officerList[0]} squared />
                        <div className="connector-1"><Connector type="rectangle-right" /></div>
                        <div className="card-3"><TeamCard officer={officerList[3]} /></div>
                        <div className="connector-2"><Connector type="triangle-left" /></div>
                        <div className="card-6"><TeamCard officer={officerList[6]} /></div>
                        <div className="connector-3"><Connector type="line" /></div>
                        <div className="card-9"><TeamCard officer={officerList[9]} squared /></div>
                    </div>
                    <div className="column">
                        <TeamCard officer={officerList[1]} />
                        <div className="connector-4"><Connector type="long-triangle" /></div>
                        <div className="card-4"><TeamCard officer={officerList[4]} squared /></div>
                        <div className="connector-5"><Connector type="rectangle-right" /></div>
                        <div className="card-7"><TeamCard officer={officerList[7]} squared /></div>
                    </div>
                    <div className="column">
                        <TeamCard officer={officerList[2]} squared />
                        <div className="connector-6"><Connector type="triangle-left" /></div>
                        <div className="card-5"><TeamCard officer={officerList[5]} /></div>
                        <div className="connector-7"><Connector type="triangle-right" /></div>
                        <div className="card-8"><TeamCard officer={officerList[8]} /></div>
                        <div className="connector-8"><Connector type="line" /></div>
                        <div className="card-9"><TeamCard officer={officerList[10]} squared /></div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;