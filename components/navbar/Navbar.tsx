import styles from "./Navbar.module.scss";

import Link from "next/link";

import { HiArrowTopRightOnSquare, HiBars3 } from "react-icons/hi2";
import { RiCloseFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";

// import Image from "next/image";

export default function Navbar() {
  return (
    <div className={`container ${styles.navbar}`}>
      <div className={`container ${styles.container}`}>
        <a href="/" className={`${styles.homeLink}`}>
          <abbr title="Joshua Saunders">JS</abbr>
          <span className="sr-only">Portfolio Home Page</span>
        </a>

        <nav
          id="primary-nav"
          className={`${styles.primaryNav}`}
          data-mobile-visible="false"
        >
          <ul>
            <li>
              <Link href="#about">About</Link>
              <span className="sr-only">Link To About Section</span>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
              <span className="sr-only">Link To Projects Section</span>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
              <span className="sr-only">Link To Blog Section</span>
            </li>
            <li>
              <a href="#" className={`btn btn--small`}>
                <HiArrowTopRightOnSquare />
                Resume
                <span className="sr-only">Link To Resume</span>
              </a>
            </li>
          </ul>
        </nav>

        <button className="" type="button" aria-controls="primary-nav">
          <HiBars3 id="openBtn" className={`${styles.icon}`} />
          <RiCloseFill id="closeBtn" className={`hidden ${styles.icon}`} />
          <span className="sr-only">Toggle Navigation Menu</span>
        </button>
      </div>
    </div>
  );
}

export const BlogNavbar = () => {
  return (
    <header className={styles.blogHeader}>
      <div className={styles.top}>
        <a href="/" className={`${styles.homeLink}`}>
          <abbr title="Joshua Saunders">JS</abbr>
          <span className="sr-only">Portfolio Home Page</span>
        </a>
        <Link href="#" className="btn btn--small">
          Sign-up for my Newsletter
        </Link>
      </div>
    </header>
  );
};
export const ProjectNavbar = () => {
  return (
    <header className={styles.blogHeader}>
      <div className={styles.top}>
        <a href="/" className={`${styles.homeLink}`}>
          <abbr title="Joshua Saunders">JS</abbr>
          <span className="sr-only">Portfolio Home Page</span>
        </a>
        <Link href="#" className="btn btn--small">
          <AiFillGithub />
          Repo
        </Link>
      </div>
    </header>
  );
};
