import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import telephone from "../../assets/icons/telephone.svg";
import mailIcon from "../../assets/icons/envelope.svg";
import locationIcon from "../../assets/icons/geo-alt.svg";
import styles from "./ContactUs.module.scss";

const ContactUs = () => {
  const [validation, setValidation] = useState(false);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !(
        contactData.name &&
        contactData.message &&
        contactData.email &&
        contactData.mobile
      )
    ) {
      setValidation(true);
      return false;
    } else {
      const isValidMobile = /^[0-9]{10}$/.test(contactData.mobile);
      if (!isValidMobile) {
        setValidation(true);
        return false;
      }
      setValidation(false);
      console.log("Form submitted successfully!");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContactData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className={styles.contactUs}>
      <div className={styles.headContain}>
        <h1 className={styles.headLine}>Contact Us</h1>
      </div>
      <div className={styles.formContain}>
        {/* <div className={styles.form}> */}
        <Form className={styles.contactUsForm} onSubmit={handleSubmit}>
          <div className={styles.titleBox}>
            <h3 className={styles.title}>HAVE QUESTIONS?</h3>
            <h1 className={styles.SubTitle}>Send us a Massage</h1>
          </div>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control
              type="text"
              placeholder="name"
              className="border-0"
              name="name"
              style={{ height: "50px" }}
              onChange={handleInputChange}
            />
            {validation && !contactData.name && (
              <span className={styles.errorMsg}>Please enter the name</span>
            )}
          </Form.Group>

          <Form.Group className={styles.emailPhone} controlId="formBasicEmail">
            <div style={{ width: "100%" }}>
              <Form.Control
                type="email"
                placeholder="email"
                className="border-0"
                name="email"
                onChange={handleInputChange}
                style={{ height: "50px" }}
              />
              {validation && !contactData.email && (
                <span className={styles.errorMsg}>Please enter the email</span>
              )}
            </div>
            <div style={{ width: "100%" }}>
              <Form.Control
                type="number"
                placeholder="phone"
                name="mobile"
                className={styles.phone}
                onChange={handleInputChange}
              />{" "}
              {validation && !contactData.mobile && (
                <span className={styles.errorMsg}>
                  Please enter the phone number
                </span>
              )}
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              name="message"
              placeholder="Tell us about project"
              style={{ height: "100px", resize: "none" }}
              className="border-0 "
              onChange={handleInputChange}
            />
            {validation && !contactData.message && (
              <span className={styles.errorMsg}>Please enter ehe message</span>
            )}
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
