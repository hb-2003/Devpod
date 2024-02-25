import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./SignUpForm.module.scss";
import { Button, Form } from "react-bootstrap";

const SignUpForm = () => {
  const [validation, setValidation] = useState(false);

  const [signUp, setSignUp] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !(
        signUp.fname &&
        signUp.lname &&
        signUp.email &&
        signUp.mobile &&
        signUp.password &&
        signUp.cpassword
      )
    ) {
      setValidation(true);
      return false;
    } else {
      // Mobile number validation
      const isValidMobile = /^[0-9]{10}$/.test(signUp.mobile);
      if (!isValidMobile) {
        setValidation(true);
        return false;
      }

      // Reset validation state
      setValidation(false);

      // Proceed with form submission or further processing
      console.log("Form submitted successfully!");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSignUp((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className={styles.signUpForm}>
      <form
        className={styles.form}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className={styles.nameField}>
          {/* First Name Input */}
          <div>
            <Form.Control
              type="text"
              name="fname"
              placeholder="First Name"
              onChange={handleInputChange}
            />
            {validation && !signUp.fname && (
              <span className={styles.errorMsg}>
                Please enter the first name
              </span>
            )}
          </div>
          {/* Last Name Input */}
          <div>
            <Form.Control
              type="text"
              name="lname"
              placeholder="Last Name"
              onChange={handleInputChange}
            />
            {validation && !signUp.lname && (
              <span className={styles.errorMsg}>
                Please enter the last name
              </span>
            )}
          </div>
        </div>

        {/* Email Input */}
        <div>
          <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleInputChange}
            className={styles.inputField}
          />
          {validation && !signUp.email && (
            <span className={styles.errorMsg}>Please enter the Email</span>
          )}
        </div>

        {/* Mobile Number Input */}
        <div>
          <Form.Control
            type="number"
            name="mobile"
            placeholder="Phone Number"
            onChange={handleInputChange}
            className={styles.inputField}
          />
          {validation &&
            (!signUp.mobile || !/^[0-9]{10}$/.test(signUp.mobile)) && (
              <span className={styles.errorMsg}>
                Please enter a valid 10-Digit mobile number
              </span>
            )}
        </div>

        {/* Password Input */}
        <div>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleInputChange}
            className={styles.PasswordField}
          />
          {validation && !signUp.password && (
            <span className={styles.errorMsg}>Please enter the password</span>
          )}
        </div>

        {/* Confirm Password Input */}
        <div className={styles.cPasswordField}>
          <Form.Control
            type="password"
            name="cpassword"
            placeholder="Confirm Password"
            onChange={handleInputChange}
            className={styles.PasswordField}
          />
          {validation && !signUp.cpassword && (
            <span className={styles.errorMsg}>
              Please enter The Confirm Password
            </span>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <Button className={styles.signUpBtn} variant="primary" type="submit">
            Sign Up
          </Button>
        </div>
      </form>
      <div className={styles.NavigatingSignIn}>
        <p>
          Already have an account?&nbsp;
          <NavLink
            to="/login"
            className={styles.signIn}
            style={{ color: "#1972D2", fontWeight: "500" }}
          >
            Sign In
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
