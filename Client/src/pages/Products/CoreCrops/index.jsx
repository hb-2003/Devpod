// import React from "react";
import styles from "./CoreCrops.module.scss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import tomato from "../../../assets/Tomato.png";
import pomegranate from "../../../assets/pomegranate.png";
import core1 from "../../../assets/slider_1.jpg";
import core2 from "../../../assets/slider_2.jpg";
import core3 from "../../../assets/slider_3.jpg";
import core4 from "../../../assets/slider_4.jpg";

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
          spaceBetween={30}
          loop={true}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img src={core1} alt="core1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={core2} alt="core2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={core3} alt="core3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={core4} alt="core4" />
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
