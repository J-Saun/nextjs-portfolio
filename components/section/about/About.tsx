// import { Badge } from "@sanity/ui";
import { BadgeList } from "@/components/elements/lists/List";
import styles from "./about.module.scss";

export default function About() {
  const pageHeader = "About me";
  const aboutMe = `Hey there! I'm a coding enthusiast who's really into JavaScript and
  React. I haven't worked in tech yet, but I'm super excited to dive
  in. Apart from coding, you'll often find me outdoors, soaking up the
  sun and enjoying nature. It's my way of balancing the screen time. Even though I haven't had a tech job yet,
  don't let that fool you. I'm all geared up to bring my A-game to the
  tech world. Can't wait to see where this journey takes me!`;
  const title = "Some Technologies I've Been Working With Lately";
  const badges = ["SCSS", "React", "Node.js", "PHP", "Sanity", "Vercel", "GIT"];
  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.container}`}>
        <div>
          <h2>{pageHeader}</h2>
          <p>{aboutMe}</p>
        </div>
        <div>
          <h3>{title}</h3>
          <BadgeList badges={badges} badgeStyle="themed" />
        </div>
      </div>
    </section>
  );
}
