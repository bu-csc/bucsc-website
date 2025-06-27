import React, { useState } from 'react';
import './teamcard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "motion/react";

function TeamCard({officer, squared}) {
    const [showModal, setShowModal] = useState(false);

    const handleOpen = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    
    const classNames = ['avatar'];
    if (squared) classNames.push('squared');

    return (
        <>
            <motion.div 
                className="team-card"
                onClick={handleOpen}
                whileHover={{scale: 1.1}}
            >
                <div className={squared ? "avatar-wrapper squared" : "avatar-wrapper"}>
                    <img className="avatar" src={officer.image} alt={officer.name} />
                </div>
                <div className="card-link"></div>
                <div className="card-title">
                    <h3>{officer.name}</h3>
                    <p>{officer.title}</p>
                </div>
            </motion.div>

            {showModal && (
                <>
                    <div className="modal-background" onClick={handleClose}></div>
                    <div className="modal">
                        <button onClick={handleClose}><FontAwesomeIcon icon={faXmark} /></button>
                        <img className="avatar" src={officer.image} alt={officer.name} />
                        <div className="modal-content">
                            <h2>{officer.name}</h2>
                            <p>{officer.title}</p>
                            <p>{officer.bio}</p>
                            <div className="modal-links">
                                <motion.a 
                                    href={officer.linkedIn}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ scale: 1.1 }} 
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </motion.a>
                                <motion.a 
                                    href={`mailto:${officer.email}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ scale: 1.1 }} 
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default TeamCard;