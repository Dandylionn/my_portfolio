import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/foxy.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Engineer</h3>
              <p>
                I'm a Software Engineer with experience in testing and
                maintenance of a system module
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor2 Icon" />
            <div className={styles.aboutItemText}>
              <h3>System Integrator</h3>
              <p>
                I have experience in integrating multiple products into a system
                for clients
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor3 Icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>I have developed backend system and APIs in a project</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
