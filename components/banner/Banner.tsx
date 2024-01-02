import styles from "./Banner.module.scss";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div>
        <h1>Joshua&apos;s Daily Blog</h1>
        <h2>
          Welcome to
          <span>Every Developers</span>
          favorite blog
        </h2>
      </div>
      <p>
        <span>Bug Smashing</span>|<span>Problem solving</span>|
        <span>Forever Learning</span>|<span>Always Growing</span>|
        <span>Something Something</span>
      </p>
    </div>
  );
}
