import React from "react";
import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        {item.img && (
          <Image src={item.img} alt="" fill className={styles.image} />
        )}
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>{item.createdAt.substring(0, 10)}</span>
          {" - "} <span className={styles.category}>{item.catSlug}</span>
        </div>
        <h1 className={styles.title}>{item.title}</h1>
        <p
          className={styles.desc}
          dangerouslySetInnerHTML={{ __html: item.desc.substring(0, 60) }}
        />
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
