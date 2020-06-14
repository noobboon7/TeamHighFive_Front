import React from "react";
import styles from "./Hero.module.css";
import SearchBars from "../searchbars/SearchBars";

const Hero = ({ organizations_array }) => (
  <div id={styles.heroStyles} className="d-flex justify-content-center align-items-center">
    <SearchBars organizations_array={organizations_array}/>
  </div>
);

export default Hero;

/*
                            [orgArr]
app ----> home -> hero -> searchBars -> filter components 

                            Results
                            [filtered Array]
*/                  
