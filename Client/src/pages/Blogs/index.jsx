// import React from "react";
import Button from "react-bootstrap/Button";
import calendarIcon from "../../assets/icons/calendar.svg";
import eyeIcon from "../../assets/icons/eye.svg";
import personIcon from "../../assets/icons/person-circle.svg";
import blog1 from "../../assets/blog_1.jpg";
import blog2 from "../../assets/blog_2.jpg";
import blog3 from "../../assets/blog_3.jpg";
import blog4 from "../../assets/blog_4.jpg";
import blog5 from "../../assets/blog_5.jpg";

import styles from "./Blogs.module.scss";

const Blogs = () => {
  return (
    <div className={styles.blogs}>
      <div className={styles.headContain}>
        <h1 className={styles.headLine}>Blogs</h1>
      </div>
      <div className={styles.blogContain}>
        <div className={styles.blogInfo}>
          <div className={styles.blogBox}>
            <img src={blog1} alt="blog_1" className={styles.blogImg} />
          </div>
          <div className={styles.content}>
            <div className={styles.meta}>
              <div className={styles.calendar}>
                <img src={calendarIcon} alt="calendar" />
                <span> April 14, 2023</span>
              </div>
              <div className={styles.person}>
                <img src={personIcon} alt="person" />
                <span> Agrul</span>
              </div>
              <div className={styles.eye}>
                <img src={eyeIcon} alt="eye" />
                <span> 487 Views</span>
              </div>
            </div>
            <div className={styles.info}>
              <h2 className={styles.title}>
                Announcing if the resolution sentiments Possession ye no mr
                unaffected remarkably
              </h2>
              <p className={styles.description}>
                Give lady of they such they sure it. Me contained explained my
                education. Vulgar as hearts by garret. Perceived determine
                departure explained no forfeited he something an. Contrasted
                dissimilar get joy you instrument out reasonably. Again keeps at
                no meant stuff. To perpetual do existence northward
              </p>
              <Button
                variant="primary"
                type="submit"
                className={styles.readMore}
              >
                Read More
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.blogInfo}>
          <div className={styles.blogBox}>
            <img src={blog2} alt="blog_2" className={styles.blogImg} />
          </div>
          <div className={styles.content}>
            <div className={styles.meta}>
              <div className={styles.calendar}>
                <img src={calendarIcon} alt="calendar" />
                <span> April 14, 2023</span>
              </div>
              <div className={styles.person}>
                <img src={personIcon} alt="person" />
                <span> Agrul</span>
              </div>
              <div className={styles.eye}>
                <img src={eyeIcon} alt="eye" />
                <span> 366 Views</span>
              </div>
            </div>
            <div className={styles.info}>
              <h2 className={styles.title}>
                The Super Soil Organic Farming Strong plants
              </h2>
              <p className={styles.description}>
                Give lady of they such they sure it. Me contained explained my
                education. Vulgar as hearts by garret. Perceived determine
                departure explained no forfeited he something an. Contrasted
                dissimilar get joy you instrument out reasonably. Again keeps at
                no meant stuff. To perpetual do existence northward
              </p>
              <Button
                variant="primary"
                type="submit"
                className={styles.readMore}
              >
                Read More
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.blogInfo}>
          <div className={styles.blogBox}>
            <img src={blog3} alt="blog_3" className={styles.blogImg} />
          </div>
          <div className={styles.content}>
            <div className={styles.meta}>
              <div className={styles.calendar}>
                <img src={calendarIcon} alt="calendar" />
                <span> November 20, 2022</span>
              </div>
              <div className={styles.person}>
                <img src={personIcon} alt="person" />
                <span> Agrul</span>
              </div>
              <div className={styles.eye}>
                <img src={eyeIcon} alt="eye" />
                <span> 715 Views</span>
              </div>
            </div>
            <div className={styles.info}>
              <h2 className={styles.title}>
                Overcame breeding or concerns removing past
              </h2>
              <p className={styles.description}>
                Give lady of they such they sure it. Me contained explained my
                education. Vulgar as hearts by garret. Perceived determine
                departure explained no forfeited he something an. Contrasted
                dissimilar get joy you instrument out reasonably. Again keeps at
                no meant stuff. To perpetual do existence northward
              </p>
              <Button
                variant="primary"
                type="submit"
                className={styles.readMore}
              >
                Read More
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.blogInfo}>
          <div className={styles.blogBox}>
            <img src={blog4} alt="blog_4" className={styles.blogImg} />
          </div>
          <div className={styles.content}>
            <div className={styles.meta}>
              <div className={styles.calendar}>
                <img src={calendarIcon} alt="calendar" />
                <span> November 2, 2022</span>
              </div>
              <div className={styles.person}>
                <img src={personIcon} alt="person" />
                <span> Agrul</span>
              </div>
              <div className={styles.eye}>
                <img src={eyeIcon} alt="eye" />
                <span> 239 Views</span>
              </div>
            </div>
            <div className={styles.info}>
              <h2 className={styles.title}>
                Meant widow equal an share least part.
              </h2>
              <p className={styles.description}>
                Give lady of they such they sure it. Me contained explained my
                education. Vulgar as hearts by garret. Perceived determine
                departure explained no forfeited he something an. Contrasted
                dissimilar get joy you instrument out reasonably. Again keeps at
                no meant stuff. To perpetual do existence northward
              </p>
              <Button
                variant="primary"
                type="submit"
                className={styles.readMore}
              >
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
