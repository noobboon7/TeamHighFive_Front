import React from "react";
import styles from "./Hero.module.css";
import SearchBars from "../searchbars/SearchBars";

const Hero = () => (
  <div className={styles.heroStyles}>
    <SearchBars />
  </div>
);

export default Hero;
