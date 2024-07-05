"use client";

import { useState } from "react";
import styles from "../styles/Navbar.module.scss";
import {
  BiHome,
  BiUser,
  BiBook,
  BiBriefcase,
  BiLogoBlogger,
  BiMailSend,
} from "react-icons/bi";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.container} ${isOpen ? styles.open : ""}`}>
      <div
        className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
        onClick={toggleNavbar}
      >
        <i className={`bi ${isOpen ? "bi-x" : "bi-list"}`}></i>
      </div>
      <nav className={`${styles.navbar} ${isOpen ? styles.open : ""}`}>
        <a href="#">
          <div className="d-flex justify-content-center">
            <BiHome className="navbar-icon" size={"1.4em"} />
          </div>
          Home
        </a>
        <a href="#">
          <div className="d-flex justify-content-center">
            <BiUser className="navbar-icon" size={"1.4em"} />
          </div>
          About
        </a>
        <a href="#">
          <div className="d-flex justify-content-center">
            <BiBook className="navbar-icon" size={"1.4em"} />
          </div>
          Resume
        </a>
        <a href="#">
          <div className="d-flex justify-content-center">
            <BiBriefcase className="navbar-icon" size={"1.4em"} />
          </div>
          Portfolio
        </a>
        <a href="#">
          <div className="d-flex justify-content-center">
            <BiLogoBlogger className="navbar-icon" size={"1.4em"} />
          </div>
          Blog
        </a>
        <a href="#">
          <div className="d-flex justify-content-center">
            <BiMailSend className="navbar-icon" size={"1.4em"} />
          </div>
          Contact
        </a>
      </nav>
      <div className={`${styles.content} ${isOpen ? styles.shrink : ""}`}>
        <h1>Welcome to My Website</h1>
        <p>This is the homepage content.</p>
      </div>
    </div>
  );
};

export default Navbar;
