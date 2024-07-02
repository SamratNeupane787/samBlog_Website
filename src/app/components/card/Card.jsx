import React from "react";
import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>11.02.2023</span>{" "}
          <span className={styles.category}>Culture</span>
        </div>
        <h1 className={styles.title}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          assumenda cupiditate eius vitae ex, et, itaque, nostrum facere ipsam
          nam modi quidem impedit quibusdam!
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
          nobis laboriosam qui doloremque et iure ab, earum nisi, aperiam
          quibusdam saepe? Error, itaque! Eos tempora, harum inventore, error
          repellat eveniet numquam rerum nisi odio dignissimos, quibusdam eaque
          quae maxime pariatur nulla quia voluptate vel.
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
