// import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import telephone from "../../assets/icons/telephone.svg";
import mailIcon from "../../assets/icons/envelope.svg";
import locationIcon from "../../assets/icons/geo-alt.svg";

import styles from "./ContactUs.module.scss";

const ContactUs = () => {
  return (
    <div className={styles.contactUs}>
      <div className={styles.headContain}>
        <h1 className={styles.headLine}>Contact Us</h1>
      </div>
      <div className={styles.formContain}>
        {/* <div className={styles.form}> */}
        <Form className={styles.contactUsForm}>
          <div className={styles.titleBox}>
            <h3 className={styles.title}>HAVE QUESTIONS?</h3>
            <h1 className={styles.SubTitle}>Send us a Massage</h1>
          </div>
          <Form.Group className="mb-3" controlId="formBasicName">
            {/* <Form.Label>Name</Form.Label> */}
            <Form.Control
              type="text"
              placeholder="name"
              className="border-0"
              style={{ height: "50px" }}
            />
          </Form.Group>

          <Form.Group
            className={`${styles.emailPhone} ${"mb - 3"} `}
            controlId="formBasicEmail"
          >
            <Form.Control
              type="email"
              placeholder="email"
              className="border-0 w-100"
              style={{ height: "50px" }}
            />
            <Form.Control
              type="text"
              placeholder="phone"
              className="border-0 w-100"
              style={{ height: "50px" }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              placeholder="Tell us about project"
              style={{ height: "100px", resize: "none" }}
              className="border-0 "
            />
          </Form.Group>
          <Button variant="primary" type="submit" className={styles.submitBin}>
            Get in Touch
          </Button>
        </Form>
        {/* </div> */}

        <div className={styles.contactInfo}>
          <div className={styles.address}>
            <div className={`${styles.iconContainer} ${styles.tele} `}>
              <img src={telephone} alt="telephone" className={styles.icon} />
            </div>
            <div className={styles.description}>
              <h3 className={styles.title}>Help Line</h3>
              <p className={styles.value}>+91 9712147545</p>
            </div>
          </div>

          <div className={styles.location}>
            <div className={`${styles.iconContainer} ${styles.locationBox} `}>
              <img src={locationIcon} alt="location" className={styles.icon} />
            </div>
            <div className={styles.description}>
              <h3 className={styles.title}>Our Location</h3>
              <p className={styles.value}>
                55 Main Street, The Grand Avenue 2nd Block, New York City
              </p>
            </div>
          </div>

          <div className={styles.email}>
            <div className={`${styles.iconContainer} ${styles.mail} `}>
              <img src={mailIcon} alt="email" className={styles.icon} />
            </div>
            <div className={styles.description}>
              <h3 className={styles.title}>Official Email</h3>
              <p className={styles.value}>info@agrul.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
