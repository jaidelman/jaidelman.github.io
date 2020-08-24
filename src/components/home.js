import React from "react";
import { MeWorking } from "assets";

export const Home = () => {
  return (
    <div>
      <img src={MeWorking} alt="Me at work" className="home-image" />
      <div className="intro">
        <h1>
          <u>Josh Aidelman's Co-op Work Term Report</u>
        </h1>
        <p>
          Welcome to my website! I built this website to allow me to share my
          experience as a Co-op student at the University of Guelph as well as
          to help me improve my web development skills. I hope that by exploring
          my website, you learn more about me and my Co-op experiences!
        </p>
        <h3>
          <u>About Me</u>
        </h3>
        <p>
          I am a Software Engineering student who has finished my 3rd year of
          the 5-year Co-op program at the University of Guelph in Guelph,
          Ontario. I am minoring in mathematics, and I have an interest in
          emerging technologies in software as well as automation. In the summer
          of 2019, I completed my first Co-op work term as an iOS developer at
          RevyooMe. That fall, I completed my second Co-op term at Tekside.io as
          a full stack developer. This summer, I worked at the WSIB Innovation
          Lab as a full stack developer. My first three Co-op terms were amazing
          experiences, and I cannot wait to complete the rest of my Co-op terms
          so I can graduate university with a lot of invaluable experience!
        </p>
      </div>
    </div>
  );
};
