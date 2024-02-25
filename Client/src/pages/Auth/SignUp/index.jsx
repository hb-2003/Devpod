// import * as React from "react";
import styles from "./SignUp.module.scss";
import SignUpForm from "./SignUpForm";
import AutoHero from "../Autohero";

const SignUp = () => {
  return (
    <div className={styles.signUp}>
      <div className={styles.signUpWrapper}>
        <div className={styles.signUpContent}>
          <h3 style={{ marginBottom: "20px", fontWeight: "700" }}>sign up</h3>
          <SignUpForm />
        </div>
      </div>

      <div className={styles.signUpPoster}>
        <AutoHero />
      </div>
    </div>
  );
};

export default SignUp;
