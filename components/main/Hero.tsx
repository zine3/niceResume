import React from "react";
import HeroContent from "../sub/HeroContent";
import styles from "../../app/styles/styles.module.css";

const Hero = () => {
  return (
    <div className={`relative ${styles.heroContainer}`} id="about-me">
      <video
        autoPlay
        muted
        loop
        className={`absolute ${styles.video}`}  // Apply styles for video
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
