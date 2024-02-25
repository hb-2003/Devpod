import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import mainVideo from "../../assets/Video/final video.mp4";
import styles from "./Home.module.scss";
import RegisteredFarmers from "../../assets/Image/Registered farmers.png";
// import { useNavigate } from "react-router-dom";
import AcresOfLand from "../../assets/Image/Acres of land.jpg";
import CountriesServed from "../../assets/Image/Countries served.jpg";
import Frame from "../../assets/Image/Frame.jpg";
import VillagesCovered from "../../assets/Image/Villages covered.jpg";
import YearsInTheIndustry from "../../assets/Image/Years in the industry.jpg";
import aboveBanner from "../../assets/university.jpg";
import techBanner from "../../assets/technology.jpg";
import irqa from "../../assets/Image/lrqa.png";
import ra from "../../assets/Image/ra.jpg";
import fassi from "../../assets/Image/fassi.jpg";
import apeda from "../../assets/Image/apeda.jpg";
import bros from "../../assets/Image/bros.jpg";

import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div className={styles.homepage}>
        <div className={styles.banner}>
          <video autoPlay muted loop className={styles.videoBanner}>
            <source src={mainVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.welcomes}>
          <h2 className={styles.welcomeTitle}>
            Welcome to <span> Ideal Argo</span>
          </h2>
          <div className={styles.welcomeContent}>
            <div className={styles.innerWelcomeContain}>
              <div className={styles.welcomeBox}>
                <div className={styles.imgBox}>
                  <img src={RegisteredFarmers} alt="" />
                </div>
                <h2 className={styles.count}>18,000+</h2>
                <h2 className={styles.title}>Registered farmers</h2>
              </div>

              <div className={styles.welcomeBox}>
                <div className={styles.imgBox}>
                  <img src={AcresOfLand} alt="" />
                </div>
                <h2 className={styles.count}>30,000+</h2>
                <h2 className={styles.title}>Acres of land</h2>
              </div>

              <div className={styles.welcomeBox}>
                <div className={styles.imgBox}>
                  <img src={VillagesCovered} alt="" />
                </div>
                <h2 className={styles.count}>252+</h2>
                <h2 className={styles.title}>Villages covered</h2>
              </div>
              <div className={styles.welcomeBox}>
                <div className={styles.imgBox}>
                  <img src={CountriesServed} alt="" />
                </div>
                <h2 className={styles.count}>18,000+</h2>
                <h2 className={styles.title}>Registered farmers</h2>
              </div>

              <div className={styles.welcomeBox}>
                <div className={styles.imgBox}>
                  <img src={Frame} alt="" />
                </div>
                <h2 className={styles.count}>30,000+</h2>
                <h2 className={styles.title}>Acres of land</h2>
              </div>

              <div className={styles.welcomeBox}>
                <div className={styles.imgBox}>
                  <img src={YearsInTheIndustry} alt="" />
                </div>
                <h2 className={styles.count}>252+</h2>
                <h2 className={styles.title}>Villages covered</h2>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.aboutIdealAgro}>
          <div className={styles.innerContainer}>
            <div className={styles.infoContent}>
              <h2 className={styles.title}>About IdealAgro Farms</h2>
              <p>
                Sahyadri is India’s largest integrated platform for fruits and
                vegetables. Company via its unique inclusive partnership with
                farmers has built a strong capability over the years in areas of
                primary processing of F&V, semi-processed products like frozen &
                aseptic; processed products like fruit jams; tomato ketchup;
                fruit beverages and F&V waste processing under an integrated
                zero discharge processing facility. <br />
                <br /> Sahyadri Farms began with the mission to ensure that the
                small-landholding farmers of India are given fair compensation
                for their produce and labour. This was to be achieved while
                ensuring that we adhere to global standards of agricultural
                practices, world-class infrastructure, international food safety
                standards, and the will to deliver safe, hygienic, and healthy
                food to our consumers.
              </p>
              <div>
                <Button type="submit" variant="primary">
                  Our Story
                </Button>
              </div>
            </div>
            <div className={styles.aboutBanner}>
              <img src={aboveBanner} alt="aboveBanner" />
            </div>
          </div>
        </div>

        <div className={styles.technology}>
          <div className={styles.innerContainer}>
            <div className={styles.technologyBanner}>
              <img src={techBanner} alt="techBanner" />
            </div>
            <div className={styles.infoContent}>
              <h2 className={styles.title}>Infrastructure and Technology</h2>
              <h3>Infrastructure</h3>
              <p>
                We invite you to visit our world-class infrastructure at Mohadi,
                Nashik, where we have installed state-of-the-art facilities to
                ensure that we work at necessary scales and guarantee safety and
                quality to our customers.
              </p>
              <h3>Technology</h3>
              <p>
                Right from ensuring that our farmers receive complete monitoring
                of growing practices to implementation of SAP, right from using
                100% real-time traceable supply chain software to give
                transparency to our farmers and consumers, we have ensured that
                technology is encoded in our DNA.
              </p>
              <div>
                <Button type="submit" variant="primary">
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.licenceCertificate}>
          <h2 className={styles.title}>
            Our Licences and <span> Certifications</span>
          </h2>
          <div className={styles.licenceCertificateContent}>
            <div className={styles.innerContain}>
              {/* <div className={styles.certificationsContain}> */}
              <div className={styles.imgBox}>
                <img src={bros} alt="bros" />
              </div>
              <div className={styles.imgBox}>
                <img src={irqa} alt="irqa" />
              </div>
              <div className={styles.imgBox}>
                <img src={ra} alt="ra" />
              </div>
              <div className={styles.imgBox}>
                <img src={fassi} alt="fassi" />
              </div>
              <div className={styles.imgBox}>
                <img src={apeda} alt="apeda" />
              </div>

              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
