import Link from "next/link";
import styles from "./Navbar.module.scss";
import { HiArrowTopRightOnSquare, HiBars3 } from "react-icons/hi2";
import { RiCloseFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";

// import Image from "next/image";

export default function Navbar() {
  return (
    <div className={`container ${styles.navbar}`}>
      <div className={`container ${styles.container}`}>
        {/* <ReactSVG src="test5.svg" /> */}
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
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              {/* <a href="#" className={`btn btn--small`}> */}
              {/* <ArrowUpRightSVG className={`btn btn--small ${styles.icon}`} /> */}

              <a href="#" className={`btn btn--small`}>
                <HiArrowTopRightOnSquare />
                Resume
                {/* </a> */}
              </a>
            </li>
          </ul>
        </nav>

        <button className="" type="button" aria-controls="primary-nav">
          <HiBars3 className={`${styles.icon}`} />
          <RiCloseFill className={`${styles.icon}`} />
          {/* <BarsSolidSVG className={`${styles.icon}`} /> */}
          <span className="sr-only">Toggle Navigation Menu</span>
        </button>
      </div>
    </div>
  );
}

export const BlogNavbar = () => {
  return (
    <header className={styles.blogHeader}>
      {/* <div className="container"> */}
      <div className={styles.top}>
        <a href="/" className={styles.homeLink}>
          <div>Logo link home</div>
        </a>
        <Link href="#" className="btn btn--small">
          Sign-up for my Newsletter
        </Link>
      </div>
      {/* </div> */}
    </header>
  );
};
export const ProjectNavbar = () => {
  return (
    <header className={styles.blogHeader}>
      {/* <div className="container"> */}
      <div className={styles.top}>
        <a href="/" className={styles.homeLink}>
          <div>Logo link home</div>
        </a>
        <Link href="#" className="btn btn--small">
          <AiFillGithub />
          Repo
        </Link>
      </div>
      {/* </div> */}
    </header>
  );
};
