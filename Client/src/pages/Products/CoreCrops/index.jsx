// import React from "react";
import styles from "./CoreCrops.module.scss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import tomato from "../../../assets/Tomato.png";
import pomegranate from "../../../assets/pomegranate.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const CoreCrops = () => {
  return (
    <div className={styles.coreCrops}>
      <div>
        <Swiper
          className={styles.headerProduct}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
      <h1 style={{ textAlign: "center" }}>Core Crops</h1>
      <div className={styles.coreCropsFruits}>
        <div className={styles.tomatoBox}>
          <img src={tomato} alt="tomato" className={styles.tomato} />
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
          <img src={tomato} alt="tomato" className={styles.tomato} />
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
          <img src={tomato} alt="tomato" className={styles.tomato} />
          <h4 className={styles.title}>Tomato</h4>
        </div>
      </div>
    </div>
  );
};

export default CoreCrops;
