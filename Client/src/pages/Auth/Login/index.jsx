import styles from "./Login.module.scss";
import SignInForm from "./SignInForm";
import AutoHero from "../Autohero";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  return (
    <div className={styles.signIn}>
      <div className={styles.signInWrapper}>
        <div className={styles.signInContent}>
          <h3 style={{ marginBottom: "20px", fontWeight: "700" }}>sign In</h3>
          <SignInForm />
        </div>
      </div>

      <div className={styles.signInPoster}>
        <AutoHero />
      </div>
    </div>
  );
};

export default Login;
