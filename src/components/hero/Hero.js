import React from "react";
import styles from "./Hero.module.css";
import SearchBars from "../searchbars/SearchBars";

const Hero = () => (
  <div id={styles.heroStyles} className="d-flex align-items-center">
    <SearchBars />
  </div>
);

export default Hero;

/*
                          [prgArr]
app ----> home -> hero -> searchBars -> filter components

                            Results
                            [filtered Array]
*/
