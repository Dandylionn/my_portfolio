import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.containers}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Zheng Hui</h1>
        <p className={styles.description}>
          I'm a Software Engineer with 2 years of experience
        </p>
        <a href="mailto:zheng.hui94@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/pfp.png")}
        alt="Hero Image of me "
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
