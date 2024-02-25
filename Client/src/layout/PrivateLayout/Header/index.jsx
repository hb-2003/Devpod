// import React from 'react';
import styles from "./Header.module.scss";
import argLogo from "../../../assets/logo.jpg";
import loginIcon from "../../../assets/icons/login.svg";

import { NavLink, useNavigate } from "react-router-dom";
// import { Button } from "react-bootstrap";

const Header = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <img src={argLogo} alt="agroLogo" />
      </h1>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={styles.nav__item}>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li className={styles.nav__item}>
            <NavLink to="/products/core-crops">Product</NavLink>
          </li>
          <li className={styles.nav__item}>
            <NavLink to="/blogs">resolution</NavLink>
          </li>
          <li className={styles.nav__item}>
            <NavLink to="/contactUs">Contact Us</NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.loginIcon} onClick={handleLogin}>
        <img src={loginIcon} alt="Login logo" />
      </div>
    </header>
  );
};

export default Header;
