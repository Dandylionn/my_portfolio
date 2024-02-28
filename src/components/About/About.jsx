import React from "react";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section>
      <h2>About</h2>
      <div>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
        />
        <ul>
          <li>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
            <div>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building and
                optimized sites
              </p>
            </div>
          </li>
          <li>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
            <div>
              <h3>Backend Developer</h3>
              <p>I have experience in developing backend system and APIs</p>
            </div>
          </li>
          <li>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
            <div>
              <h3>UI Designer</h3>
              <p>I have designed multiple landing pages</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
