import React from 'react';
import './projects.css';
import midUnderline from '../../assets/mid-underline.svg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import DottedLine from '../../components/dottedline';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import ProjectCard from '../../components/projectcard/projectcard';
import ProjectCarosuel from '../../components/projectcarousel/projectcarousel';

function Projects() {
    return (
        <div className="projects">
            <header>
                <h1>Project Team</h1>
                <img src={midUnderline} alt="underline" />
            </header>
            <section className="project-landing">
                <article className="project-description">
                    <h2>Contribute</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim ven  iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                    <Link to="/join" className="join-button">
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            Join! <FontAwesomeIcon icon={faCircleChevronRight} />
                        </motion.button>
                    </Link>
                </article>
                <div className="project-landing-img">
                    <div className="prj-img"></div>
                    <div className="prj-polka-dots"></div>
                </div>
            </section>
            <section className="dev-timeline">
                <header>
                    <h1>Development Timeline</h1>
                    <img src={midUnderline} alt="underline" />
                </header>
                <div className="prj-card-container"><ProjectCarosuel /></div>
                <div className="dev-line"><DottedLine footer gibby/></div>
            </section>
            <section className="featured-projects">
                <h2 className="featured-projects-title">Featured Projects</h2>
                <ProjectCard
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    type="Full Stack Web App"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    sourceCode="http://github.com"
                    image="https://picsum.photos/400/300"
                />
                <ProjectCard
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    type="Full Stack Web App"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                    sourceCode="http://github.com"
                    image="https://picsum.photos/400/300"
                />
            </section>
        </div>
    );
}

export default Projects;