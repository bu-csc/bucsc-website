import React, { useState } from 'react';
import './join.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';  
import midUnderline from '../../assets/mid-underline.svg';
import { motion } from "motion/react";
import DottedLine from '../../components/dottedline';

const calendarInvite = "https://calendar.google.com/calendar/u/0?cid=anVsaWFua2Rhd3NvbkBnbWFpbC5jb20";

const GoogleCalendar = ({ calendarId }) => {
  const src = `https://calendar.google.com/calendar/embed?src=${calendarId}&ctz=America%2FNew_York`;
  
  return (
    <iframe 
      src={src}
      title="CSC Google Calendar"
      style={{ border: "10px solid var(--gibby-blue)" }}
      height="600"
      className="w-full"
    />
  );
};

function Join() {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setMessage("Thank you for subscribing!");
      setEmail("");
    } else {
      setMessage("Please enter a valid email!");
    }

    setShowPopup(true);
  }

  const closePopup = () => setShowPopup(false);

  return (
    <div className="join">

      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup">
            <button onClick={closePopup}><FontAwesomeIcon icon={faXmark} /></button>
            <img src="/icon/logo.png" alt="BU CSC Logo" className="popup-logo" />
            <p className="email-message">{message}</p>
          </div>
        </div>
      )}

       <header>
        <h1>Join the CSC Family</h1>
        <img src={midUnderline} alt="underline" />
      </header>
      <section className="mailing-list">
        <div className="mailbox">
          <h3>Mailing List</h3>
          <form onSubmit={handleSubmit}>
            <input 
              placeholder="Enter your email..."
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <motion.button type="submit" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>SUBSCRIBE</motion.button>
          </form>
          <div className="mailbox-background">
            <div className="top-line"></div>
            <div className="bottom-line"></div>
            <div className="mailbox-button"></div>
          </div>
          <h3 className="mail-tag">EXPRESS <br /> MAIL</h3>
          <div className="left-railing">
            <div className="mailbox-lines">
              <div className="outer-line"></div>
              <div className="inner-line"></div>
            </div>
            <div className="bolts">
              {[...Array(14)].map((_, i) => (<div key={i} />))}
            </div>
            <div className="mailbox-foot"></div>
          </div>
          <div className="right-railing">
            <div className="mailbox-lines">
              <div className="outer-line"></div>
              <div className="inner-line"></div>
            </div>
            <div className="bolts">
              {[...Array(14)].map((_, i) => (<div key={i} />))}
            </div>
            <div className="mailbox-foot"></div>
          </div>
          <div className="mail-bottom"></div>
        </div>
      </section>
      <section className="dates">
        <div className="dates-text">
          <header>
            <h1>Stay up to date</h1>
            <img src={midUnderline} alt="underline" />
          </header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href={calendarInvite} target="_blank" rel="noreferrer">Add Google Calendar</a>
          </motion.button>
        </div>
        <div className="calendar-container">
          <GoogleCalendar calendarId="juliankdawson@gmail.com" />
          <div className="calendar-dotted-line"><DottedLine gibby reverse /></div>
        </div>
      </section>
    </div>
  );
}

export default Join;