import React from "react";
import styles from "./Hero.module.css";
import SearchBars from "../searchbars/SearchBars";

const Hero = ({ prgArr }) => (
  <div id={styles.heroStyles} className="heroStyles d-flex justify-content-center align-items-center">
    <SearchBars prgArr={prgArr}/>
  </div>
);

export default Hero;

/*
                          [prgArr]
app ----> home -> hero -> searchBars -> filter components

                            Results
                            [filtered Array]
*/
