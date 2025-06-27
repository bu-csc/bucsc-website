import React from 'react';
import './home.css';
import ImageSlider from '../../components/imageslider/imageslider.jsx';
import cds from "../../assets/bu-cds-building.png"
import { motion } from "motion/react";

const baseUrl = 'https://picsum.photos/900/400';
const numberOfImages = 5;

const images = Array.from({ length: numberOfImages }, (_, index) => {
  return { url: `${baseUrl}?random=${index}`, alt: "Dummy Image" };
});

function Home() {
  return (
    <main className="home">
      <section className="landing">
        <div className="heading">

        </div>
        <img className="cds" src={cds} alt="Boston Universty Center of Computing & Data Sciences" />
      </section>
      <section className="why-container">
        <h1>Why BU CSC?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
        <div className="slider-container ">
          <ImageSlider images={images} />
        </div>
      </section>
    </main>
  );
}

export default Home;