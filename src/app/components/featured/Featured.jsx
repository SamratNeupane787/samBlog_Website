import React from "react";
import styles from "./featured.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async (slug) => {
  const res = await fetch(`https://blog.samratneupane.com.np/api/featured`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const Featured = async () => {
  const data = await getData();
  const post = data[0];
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey There,</b> Discover Trending things everyday!
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={post?.img} alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>{post?.title}</h1>
          <p
            className={styles.postDescription}
            dangerouslySetInnerHTML={{ __html: post?.desc }}
          ></p>
          <button className={styles.button}>
            <Link href={`/posts/${post.slug}`}>Read More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
