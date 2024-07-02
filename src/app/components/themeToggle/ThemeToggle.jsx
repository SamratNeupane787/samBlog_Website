"use client";
import { useContext } from "react";
import styles from "./themetoggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";
const ThemeToggle = () => {
  const { toogle, theme } = useContext(ThemeContext);
  return (
    <div
      className={styles.container}
      onClick={toogle}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <Image src="/moon.png" alt="toggle_moon" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, backgroundColor: "#0f172a" }
            : { right: 1, backgroundColor: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="toogle_sun" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
