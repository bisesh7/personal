import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/Navbar.module.scss";
import classnames from "classnames";
import { MdPerson, MdMail, MdMenu, MdClose, MdArticle } from "react-icons/md";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaBriefcase, FaIdCard } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
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
          <Link href="/" passHref>
            <div
              className={classnames(styles.navbarSpace, {
                [styles.active]: pathname === "/",
                [styles.link]: true,
              })}
            >
              <div className="d-flex justify-content-center">
                <IoIosHome className="navbar-icon" size={"1.4em"} />
              </div>
              <strong>
                <small>HOME</small>
              </strong>
            </div>
          </Link>
          <Link href="/about" passHref>
            <div
              className={classnames(styles.navbarSpace, {
                [styles.active]: pathname === "/about",
                [styles.link]: true,
              })}
            >
              <div className="d-flex justify-content-center">
                <MdPerson className="navbar-icon" size={"1.4em"} />
              </div>
              <strong>
                <small>ABOUT</small>
              </strong>
            </div>
          </Link>
          <Link href="/resume" passHref>
            <div
              className={classnames(styles.navbarSpace, {
                [styles.active]: pathname === "/resume",
                [styles.link]: true,
              })}
            >
              <div className="d-flex justify-content-center">
                <FaIdCard className="navbar-icon" size={"1.4em"} />
              </div>
              <strong>
                <small>RESUME</small>
              </strong>
            </div>
          </Link>
          <Link href="/portfolio" passHref>
            <div
              className={classnames(styles.navbarSpace, {
                [styles.active]: pathname === "/portfolio",
                [styles.link]: true,
              })}
            >
              <div className="d-flex justify-content-center">
                <FaBriefcase className="navbar-icon" size={"1.36em"} />
              </div>
              <strong>
                <small>PORTFOLIO</small>
              </strong>
            </div>
          </Link>
          <Link href="/blog" passHref>
            <div
              className={classnames(styles.navbarSpace, {
                [styles.active]: pathname === "/blog",
                [styles.link]: true,
              })}
            >
              <div className="d-flex justify-content-center">
                <MdArticle className="navbar-icon" size={"1.4em"} />
              </div>
              <strong>
                <small>BLOG</small>
              </strong>
            </div>
          </Link>
          <Link href="/contact" passHref>
            <div
              className={classnames(styles.navbarSpace, {
                [styles.active]: pathname === "/contact",
                [styles.link]: true,
              })}
            >
              <div className="d-flex justify-content-center">
                <MdMail className="navbar-icon" size={"1.4em"} />
              </div>
              <strong>
                <small>CONTACT</small>
              </strong>
            </div>
          </Link>
        </nav>
        <div
          className={classnames(styles.socialIcons, { [styles.open]: isOpen })}
        >
          <a href="#">
            <AiFillGithub className="social-icon me-4" size={"1.4em"} />
          </a>
          <a href="#">
            <AiOutlineTwitter className="social-icon me-4" size={"1.4em"} />
          </a>
          <a href="#">
            <AiFillLinkedin className="social-icon me-4" size={"1.4em"} />
          </a>
          <a href="#">
            <AiOutlineInstagram className="social-icon me-4" size={"1.4em"} />
          </a>
        </div>
        <div className={styles.copyright}>
          Copyright &#169; 2024 Bisesh Shakya, All rights reserved
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
