import React, { useState } from 'react';
import { timeline } from '../../components/data';
import './projectcarousel.css';
import cord from '../../assets/cord.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function ProjectCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => {
    const maxIndex = Math.min(timeline.length - 1, 4);
    return i >= maxIndex ? 0 : i + 1;
  });
  
  const prev = () => setIndex((i) => {
    const maxIndex = Math.min(timeline.length - 1, 4); 
    return i <= 0 ? maxIndex : i - 1;
  });

  const getSemester = (idx) => {
    const month = new Date().getMonth();
    let semester = [];
    
    if (month >= 0 && month <= 4) {
      semester = ['January', 'February', 'March', 'April'];
    } else {
      semester = ['September', 'October', 'November', 'December'];
    }
    
    return semester[idx % semester.length];
  };

  const openCard = (item, idx) => (
    <div className="open-card" key={idx}>
      <div className="card-header">
        <div className="card-header-nav">
          <FontAwesomeIcon icon={faArrowLeft} onClick={prev} />
          <h2>{`${idx + 1}`}</h2>
          <FontAwesomeIcon icon={faArrowRight} onClick={next} />
        </div>
        <h2 className="card-date">{getSemester(idx)}</h2>
      </div>
      <p>{item.description}</p>
    </div>
  );

  const closedCard = (item, idx) => (
    <div className="closed-card" key={idx} onClick={() => setIndex(idx)}>
      <h3 style={{"padding-left": "1rem"}}>{`${idx + 1}. `}</h3>
      <h3>{getSemester(idx)}</h3>
      <div className="card-dot"></div>
      <div className="card-point"></div>
    </div>
  );

  return (
    <div className="project-carousel">
      {timeline.map((item, idx) =>
        idx === index ? openCard(item, idx) : closedCard(item, idx)
      )}
      <img className="cord" src={cord} alt="cord" />
    </div>
  );
}

export default ProjectCarousel;