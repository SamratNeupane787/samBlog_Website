import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "../components/comments/Comments";
function page() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>11.02.2002</span>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              placeat, odio veritatis amet at fuga officia fugiat laboriosam
              dicta cum minima, itaque provident blanditiis perspiciatis numquam
              minus saepe recusandae? Quod totam ipsa temporibus magni.
            </p>
            <h5>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
              deserunt dolor iure.
            </h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
              sunt sapiente tempora cupiditate consequatur! Iure culpa commodi
              cumque consectetur, illum tempore quis ea? Cupiditate quas harum
              assumenda delectus placeat facilis aperiam architecto odio eius.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
