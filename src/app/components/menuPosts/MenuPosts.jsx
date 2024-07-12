"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./menuPosts.module.css";

const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/popular`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const MenuPosts = ({ withImage }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.items}>
      {data?.map((item) => (
        <Link
          key={item.id}
          href={`/posts/${item.slug}`}
          className={styles.item}
        >
          {withImage && (
            <div className={styles.imageContainer}>
              <Image
                src={item.img}
                alt={item.title}
                layout="fill"
                className={styles.image}
              />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              {item.catSlug}
            </span>
            <h3 className={styles.postTitle}>{item.title}</h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 10.03.2023</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;
