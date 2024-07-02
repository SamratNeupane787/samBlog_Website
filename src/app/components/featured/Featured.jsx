import React from "react";
import styles from "./featured.module.css";
import Link from "next/link";
import Image from "next/image";
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey There,</b> Discover Trending things everyday!
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem, ipsum dolor.</h1>
          <p className={styles.postDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab delectus
            distinctio amet, hic rserum soluta quae exercitationem, nobis esse
            saepe obcaecati magnam, totam deleniti repellendus explicabo. Nemo
            quo minus expedita ipsum excepturi consequatur officiis?
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
