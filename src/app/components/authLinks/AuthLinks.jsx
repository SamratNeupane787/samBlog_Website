"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const { data, status } = useSession();
  const router = useRouter();

  console.log(data);
  let imageProfile = data?.user?.image;

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link} onClick={signOut}>
            Logout
          </span>
          <Link href="/" className={styles.link}>
            <Image
              src={imageProfile}
              height={32}
              width={32}
              alt=""
              className={styles.linkImage}
            />
          </Link>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>Logout</span>{" "}
              <Link href="/" className={styles.link}>
                <Image
                  src={imageProfile}
                  height={32}
                  width={32}
                  alt=""
                  className={styles.linkImage}
                />
              </Link>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
