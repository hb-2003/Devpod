import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./SignInForm.module.scss";
import { Button, Form } from "react-bootstrap";

const SignInForm = () => {
  const [validation, setValidation] = useState(false);
  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!(signIn.email && signIn.password)) {
      setValidation(true);
      return false;
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSignIn((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className={styles.signInForm}>
      <div className={styles.form}>
        <div className={styles.inputField}>
          <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            className={styles.inputField}
            onChange={handleInputChange}
          />
          {validation && !signIn.email && (
            <span className={styles.errorMsg}>Please Enter The Email</span>
          )}
        </div>

        <div className={styles.PasswordField}>
          <Form.Control
            type="password"
            name="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            placeholder="Password"
            className={styles.PasswordField}
            onChange={handleInputChange}
          />
          {validation && !signIn.password && (
            <span className={styles.errorMsg}>Please Enter The Password</span>
          )}
        </div>

        <div className={styles.signInBtn}>
          <Button
            className={styles.signInBtn}
            variant="primary"
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </div>

        <div className={styles.NavigateSignUp}>
          <p>
            Not a Member yet?&nbsp;{" "}
            <NavLink
              to="/signUp"
              className={styles.signIn}
              style={{ color: "#1972D2", fontWeight: "500" }}
            >
              SignUp
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
