import React, { useState } from 'react';
import './faq.css';
import longUnderline from '../../assets/long-underline.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretDown, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

const freqQuestions = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    "Gibby Question?"
]

const freqAnswers = [
    "Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi.",
    "Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi."
]

function Faq() {
    const [openStates, setOpenStates] = useState(Array(freqQuestions.length).fill(false));

    const toggleDropdown = (index) => {
        setOpenStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index];
            return newStates;
        });
    };

    return (
        <div className="faq">
            <header>
                <h1>Frequently Asked Questions</h1>
                <img className="long-underline" src={longUnderline} alt="underline"/>
            </header>
            <ul className="questions">
                {freqQuestions.map((question, index) => (
                    <li key={index} className="question">
                        <FontAwesomeIcon icon={faCircleQuestion} className="question-icon"/>
                        <div className="question-content">
                            {question}
                            <button className="answer-btn" onClick={() => toggleDropdown(index)}>
                                Answer <FontAwesomeIcon icon={openStates[index] === true ? faCaretDown : faCaretRight} />
                            </button>
                            {openStates[index] && (
                                <div className="answer">
                                    {freqAnswers[index]}
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Faq;