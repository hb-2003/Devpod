// import React from "react";
import banner from "../../../assets/loginPage.png";

import styles from "./Autohero.module.scss";

const AutoHero = () => {
  return (
    <div className={styles.PosterContainer}>
      <div className={styles.brandLogo}>
        <h1>Agriculture</h1>
      </div>
      <div className={styles.bannerImg}>
        <img src={banner} alt="Banner" />
      </div>
    </div>
  );
};

export default AutoHero;
