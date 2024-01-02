import { PortableText } from "@portabletext/react";
import Image from "next/image"; // Replace "sanity" with "next/image"
import styles from "./Card.module.scss";

const Card = (props: any) => {
  const { mainImage, title, author, author_img, createdAt, content } = props;
  console.log(props);
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectCard__preview}>
        <Image src={mainImage} alt="" />
      </div>
      <div className={styles.projectCard__desc}>
        <h3>{title}</h3>
        <PortableText value={content} />
        <Image src={author_img} alt="" />
        <p>{author}</p>
        <p>{createdAt}</p>
      </div>
    </div>
  );
};

export default Card;
