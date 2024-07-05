"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";
import classnames from "classnames";
import { MdPerson, MdMail, MdMenu, MdClose, MdArticle } from "react-icons/md";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaBriefcase, FaGithub, FaIdCard } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    setCurrentHash(window.location.hash);
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = (hash: string) => {
    setCurrentHash(hash);
    toggleNavbar();
  };

  return (
    <div className={classnames(styles.container, { [styles.open]: isOpen })}>
      <div
        className={classnames(styles.hamburger, {
          [styles.open]: isOpen,
          "text-white": true,
        })}
        onClick={toggleNavbar}
      >
        {isOpen ? <MdClose size="3em" /> : <MdMenu size="3em" />}
      </div>
      <div
        className={classnames(styles.navbarContainer, {
          [styles.open]: isOpen,
        })}
      >
        <nav className={styles.navbar}>
          <div
            className={classnames(styles.navbarSpace, {
              [styles.active]: currentHash === "#home",
              [styles.link]: true,
            })}
            onClick={() => handleNavLinkClick("#home")}
          >
            <div className="d-flex justify-content-center">
              <IoIosHome className="navbar-icon" size={"1.4em"} />
            </div>
            <strong>
              <small>HOME</small>
            </strong>
          </div>
          <div
            className={classnames(styles.navbarSpace, {
              [styles.active]: currentHash === "#about",
              [styles.link]: true,
            })}
            onClick={() => handleNavLinkClick("#about")}
          >
            <div className="d-flex justify-content-center">
              <MdPerson className="navbar-icon" size={"1.4em"} />
            </div>
            <strong>
              <small>ABOUT</small>
            </strong>
          </div>
          <div
            className={classnames(styles.navbarSpace, {
              [styles.active]: currentHash === "#resume",
              [styles.link]: true,
            })}
            onClick={() => handleNavLinkClick("#resume")}
          >
            <div className="d-flex justify-content-center">
              <FaIdCard className="navbar-icon" size={"1.4em"} />
            </div>
            <strong>
              <small>RESUME</small>
            </strong>
          </div>
          <div
            className={classnames(styles.navbarSpace, {
              [styles.active]: currentHash === "#portfolio",
              [styles.link]: true,
            })}
            onClick={() => handleNavLinkClick("#portfolio")}
          >
            <div className="d-flex justify-content-center">
              <FaBriefcase className="navbar-icon" size={"1.36em"} />
            </div>
            <strong>
              <small>PORTFOLIO</small>
            </strong>
          </div>
          <div
            className={classnames(styles.navbarSpace, {
              [styles.active]: currentHash === "#blog",
              [styles.link]: true,
            })}
            onClick={() => handleNavLinkClick("#blog")}
          >
            <div className="d-flex justify-content-center">
              <MdArticle className="navbar-icon" size={"1.4em"} />
            </div>
            <strong>
              <small>BLOG</small>
            </strong>
          </div>
          <div
            className={classnames(styles.navbarSpace, {
              [styles.active]: currentHash === "#contact",
              [styles.link]: true,
            })}
            onClick={() => handleNavLinkClick("#contact")}
          >
            <div className="d-flex justify-content-center">
              <MdMail className="navbar-icon" size={"1.4em"} />
            </div>
            <strong>
              <small>CONTACT</small>
            </strong>
          </div>
        </nav>
        <div
          className={classnames(styles.socialIcons, { [styles.open]: isOpen })}
        >
          <a href="https://github.com/bisesh7" target="_blank">
            <FaGithub className="social-icon me-4" size={"1.4em"} />
          </a>
          <a href="https://www.facebook.com/bieces.shakya7/" target="_blank">
            <FaFacebook className="social-icon me-4" size={"1.4em"} />
          </a>
          <a href="https://www.linkedin.com/in/bisesh-shakya/" target="_blank">
            <FaLinkedin className="social-icon me-4" size={"1.4em"} />
          </a>
          <a href="https://www.instagram.com/shakyabisesh7/" target="_blank">
            <FaInstagram className="social-icon me-4" size={"1.4em"} />
          </a>
        </div>
        <div className={styles.copyright}>
          Copyright &#169; 2024 Bisesh Shakya, All Rights Reserved.
        </div>
      </div>

      <div className={styles.boxTop}></div>
      <div className={styles.boxBottom}></div>

      <div className={classnames(styles.content, { [styles.shrink]: isOpen })}>
        <h1>Welcome to My Website</h1>
        <p>This is the homepage content.</p>
      </div>
    </div>
  );
};

export default Navbar;
