import React from "react";
import styles from "./DryFruits.module.scss";
import pomegranate from "../../../assets/dryProductBG.png";
const DryFruits = () => {
  return (
    <div className={styles.dryFruits}>
      <div className={styles.container}>
        <div className={styles.dryFruitsBanner}>
          <img src={pomegranate} alt="tomato" className={styles.tomato} />
        </div>
      </div>
      <h1 style={{ textAlign: "center" }}>Core Crops</h1>
      <div className={styles.coreCropsFruits}>
        <div className={styles.tomatoBox}>
          <img src={pomegranate} alt="tomato" className={styles.tomato} />
          <h4 className={styles.title}>Tomato</h4>
        </div>

        <div className={styles.pomegranateBox}>
          <img
            src={pomegranate}
            alt="pomegranate"
            className={styles.pomegranate}
          />
          <h4 className={styles.title}>Pomegranate</h4>
        </div>
        <div className={styles.tomatoBox}>
          <img src={pomegranate} alt="tomato" className={styles.tomato} />
          <h4 className={styles.title}>Tomato</h4>
        </div>

        <div className={styles.pomegranateBox}>
          <img
            src={pomegranate}
            alt="pomegranate"
            className={styles.pomegranate}
          />
          <h4 className={styles.title}>Pomegranate</h4>
        </div>
        <div className={styles.pomegranateBox}>
          <img
            src={pomegranate}
            alt="pomegranate"
            className={styles.pomegranate}
          />
          <h4 className={styles.title}>Pomegranate</h4>
        </div>
        <div className={styles.tomatoBox}>
          <img src={pomegranate} alt="tomato" className={styles.tomato} />
          <h4 className={styles.title}>Tomato</h4>
        </div>
      </div>
    </div>
  );
};

export default DryFruits;
