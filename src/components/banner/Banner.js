import React from "react";
import styles from "./Banner.module.css";

const Banner = (props) => {
  return (
    <div
      id={styles.bannerStyles}
      className="d-flex justify-content-center align-items-center"
    >
      <h1 className={styles.h1Styles}>{props.name}</h1>
    </div>
  );
};

export default Banner;
