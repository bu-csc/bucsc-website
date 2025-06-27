import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import './imageslider.css';

function ImageSlider({ images }) {
    const [imageIndex, setImageIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const timeout = useRef(null);
    const autoScrollInterval = useRef(null);

    const handleInteraction = () => {
        setPaused(true);
        clearTimeout(timeout.current);
        timeout.current = setTimeout(() => setPaused(false), 5000);
    };

    useEffect(() => {
        if (!paused) {
            autoScrollInterval.current = setInterval(showNextImage, 3000);
            return () => clearInterval(autoScrollInterval.current);
        }
    }, [paused]);

    useEffect(() => {
        return () => clearTimeout(timeout.current);
    }, []);

    function showNextImage() {
        setImageIndex(index => {
            if (index === images.length - 1) return 0
            return index + 1
        })
    }

    return (
        <section className="img-slider">
            <div className="img-slider-images">
                {images.map(({url, alt}, index) => (
                    <img 
                        key={url}
                        src={url} alt={alt}
                        className={`img-slider-img ${imageIndex === index ? 'active' : ''}`} 
                    />
                ))}
            </div>
            <div className="indicator">
                {images.map((__, index) => (
                    <button key={index} className="img-slider-dot-btn" onClick={() => { setImageIndex(index); handleInteraction(); }} >
                        {index === imageIndex ? <FontAwesomeIcon icon={faCircle} style={{color: "var(--gibby-blue)" }} /> : <FontAwesomeIcon icon={faCircle} />}
                    </button>
                ))}
            </div>
        </section>
    );
}

export default ImageSlider;