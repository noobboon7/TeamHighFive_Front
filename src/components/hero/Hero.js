import React from "react";
import styles from "./Hero.module.css";
import SearchBars from "../searchbars/SearchBars";

const Hero = ({
  organizations_array
}) => ( <
  div className = {
    styles.heroStyles
  } >
  <
  SearchBars organizations_array = {
    organizations_array
  }
  /> < /
  div >
);

export default Hero;

/*
app -> home -> hero -> searchBars
\
Results
*/
