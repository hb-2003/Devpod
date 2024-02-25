// import React from "react";
import styles from "./Services.module.scss";
import { Button } from "react-bootstrap";
import labourImg from "../../assets/labour.jpg";
import machineryImg from "../../assets/machinery.jpg";
import ownerImg from "../../assets/owner.jpg";

const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.servicesJobCenter}>
        <div className={styles.jobContent}>
          <div className={styles.title}>
            <h2>Job center</h2>
          </div>
          <div className={styles.description}>
            The Job Center promotes and encourages opportunities in the
            agronomic, crop, soil, and environmental sciences and serves as a
            clearinghouse for resumes and job listings.
          </div>
          <div className={styles.jobType}>
            <Button>Post Jobs </Button>
            <Button variant="success">Search jobs </Button>
            <Button variant="secondary">Machinery rent</Button>{" "}
          </div>
        </div>
      </div>
      <div className={styles.featureJob}>
        <div className={styles.featureContent}>
          <div className={styles.title}>
            <h1>Featured Jobs</h1>
          </div>
          <div className={styles.info}>
            <div className={styles.description}>
              <p className={styles.jobTitle}>cotton picker</p>
              <p className={styles.desc}>
                a person who picks ripe cotton fibre from the plants. The
                machine is also referred to as a cotton harvester.
              </p>
              <p className={styles.place}>Rajkot, Gujarat</p>
            </div>

            <div className={styles.description}>
              <p className={styles.jobTitle}>Pod Picker</p>
              <p className={styles.desc}>
                a person who takes parts from a pod and packs them into boxes
                based on orders
              </p>
              <p className={styles.place}>Mumbai,Maharastra</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.premierResource}>
        <div className={styles.title}>
          <h1>The premier career resource for our sciences</h1>
        </div>
        <div className={styles.innerContainer}>
          <div className={styles.resourceContainer}>
            <div className={styles.imageBox}>
              <img src={ownerImg} alt="owner image" />
            </div>
            <div className={styles.info}>
              <div className={styles.title}>
                <h2>Owner Work</h2>
              </div>
              <ul>
                <ul>
                  <li>Efficient Talent Acquisition Solutions</li>
                  <li>Economical and Strategic Recruitment</li>
                  <li>Access to a Diverse Talent Pool</li>
                  <li>Enhancing Brand Visibility through Recruitment</li>
                  <li>Tailored Presentations for Job Opportunities</li>
                  <li>Real-Time Communication for Faster Hiring</li>
                  <li>Utilizing Data Analytics for Informed Recruitment</li>
                  <li>Uninterrupted 24/7 Access to Job Opportunities</li>
                </ul>
              </ul>
            </div>
          </div>

          <div className={styles.resourceContainer}>
            <div className={styles.imageBox}>
              <img src={labourImg} alt="labour image" />
            </div>
            <div className={styles.info}>
              <div className={styles.title}>
                <h2>Labour Work</h2>
              </div>
              <ul>
                <li>Efficient Job Search</li>
                <li>Cost-Effective Employment</li>
                <li>Access to Diverse Opportunities</li>
                <li>Enhanced Brand Visibility</li>
                <li>Tailored Job Listings</li>
                <li>Instant Communication Hub</li>
                <li>Data-Driven Job Search</li>
                <li>24/7 Accessible Opportunities</li>
                <li>Time-Saving Job Hunt</li>
                <li>Optimized Candidate Experience</li>
              </ul>
            </div>
          </div>

          <div className={styles.resourceContainer}>
            <div className={styles.imageBox}>
              <img src={machineryImg} alt="machinery image" />
            </div>
            <div className={styles.info}>
              <div className={styles.title}>
                <h2>Book Machinery</h2>
              </div>
              <ul>
                <li>Sustainable Agricultural Solutions</li>
                <li>Cutting-Edge Farming Equipment</li>
                <li>Affordable Machinery Options</li>
                <li>Wide Range of Agricultural Tools</li>
                <li>Advanced Technology in Farm Machinery</li>
                <li>Customizable Solutions for Farmers</li>
                <li>Reliable and Durable Farm Equipment</li>
                <li>Precision Farming Machinery</li>
                <li>Innovative Agriculture Technology</li>
                <li>Expert Guidance on Machinery Selection</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
