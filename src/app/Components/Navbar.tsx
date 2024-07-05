// components/Navbar.tsx

import { useState } from "react";
import styles from "../styles/Navbar.module.scss";
import {
  BiHome,
  BiUser,
  BiBook,
  BiBriefcase,
  BiLogOut,
  BiMailSend,
  BiMenu,
  BiX,
} from "react-icons/bi";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.container} ${isOpen ? styles.open : ""}`}>
      <div
        className={`${styles.hamburger} ${
          isOpen ? styles.open : ""
        } text-white`}
        onClick={toggleNavbar}
      >
        {isOpen ? (
          <BiX className="bi" size="2em" />
        ) : (
          <BiMenu className="bi" size="2em" />
        )}
      </div>
      <div className={`${styles.navbarContainer} ${isOpen ? styles.open : ""}`}>
        <nav className={styles.navbar}>
          <a href="#" className="me-5">
            <div className="d-flex justify-content-center">
              <BiHome className="navbar-icon" size={"1.4em"} />
            </div>
            <strong>
              <small>HOME</small>
            </strong>
          </a>
          <a href="#" className="me-5">
            <div className="d-flex justify-content-center">
              <BiUser className="navbar-icon" size={"1.4em"} />
            </div>
            <strong>
              <small>ABOUT</small>
            </strong>
          </a>
          <a href="#" className="me-5">
            <div className="d-flex justify-content-center">
              <BiBook className="navbar-icon" size={"1.4em"} />
            </div>
            <strong>
              <small>RESUME</small>
            </strong>
          </a>
          <a href="#" className="me-5">
            <div className="d-flex justify-content-center">
              <BiBriefcase className="navbar-icon" size={"1.4em"} />
            </div>
            <strong>
              <small>PORTFOLIO</small>
            </strong>
          </a>
          <a href="#" className="me-5">
            <div className="d-flex justify-content-center">
              <BiLogOut className="navbar-icon" size={"1.4em"} />
            </div>
            <strong>
              <small>BLOG</small>
            </strong>
          </a>
          <a href="#" className="me-5">
            <div className="d-flex justify-content-center">
              <BiMailSend className="navbar-icon" size={"1.4em"} />
            </div>
            <strong>
              <small>CONTACT</small>
            </strong>
          </a>
        </nav>
        <div className={`${styles.socialIcons} ${isOpen ? styles.open : ""}`}>
          <a href="#">
            <AiFillGithub className="social-icon" size={"1.4em"} />
          </a>
          <a href="#">
            <AiOutlineTwitter className="social-icon" size={"1.4em"} />
          </a>
          <a href="#">
            <AiFillLinkedin className="social-icon" size={"1.4em"} />
          </a>
          <a href="#">
            <AiOutlineInstagram className="social-icon" size={"1.4em"} />
          </a>
        </div>
        <div className={styles.copyright}>
          Copyright &#169; 2024 Bisesh Shakya, All rights reserved
        </div>
      </div>

      <div className={`${styles.content} ${isOpen ? styles.shrink : ""}`}>
        <h1>Welcome to My Website</h1>
        <p>This is the homepage content.</p>
      </div>
    </div>
  );
};

export default Navbar;
