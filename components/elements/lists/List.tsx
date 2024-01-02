import styles from "./List.module.scss";

export function BadgeList({
  badges,
  badgeStyle,
}: {
  badges: string[];
  badgeStyle?: "themed" | "transparent";
}) {
  const badgeClass = badgeStyle ? styles[badgeStyle] : "";
  return (
    <ul className={`${styles.badgeList}`}>
      {Array.isArray(badges) &&
        badges.map((badge) => (
          <li key={badge} className={`${badgeClass}`}>
            {badge}
          </li>
        ))}
    </ul>
  );
}
