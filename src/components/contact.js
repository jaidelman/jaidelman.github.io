import React from "react";
import {
  LinkedInLogo,
  InstagramLogo,
  GithubLogo,
  EmailIcon,
  TypingImage,
} from "assets";
import { ContactButton } from "components";

export const Contact = (props) => {
  return (
    <div>
      <div className="contact-div" style={{ float: "left" }}>
        <h3 style={{ marginLeft: "2rem" }}>Contact Me!</h3>
        <ContactButton
          backgroundColor="#282828"
          name="Github"
          img={GithubLogo}
          href="https://www.github.com/jaidelman"
        />
        <ContactButton
          backgroundColor="#238FD2"
          name="LinkedIn"
          img={LinkedInLogo}
          href="https://www.linkedin.com/in/jaidelman/"
        />
        <ContactButton
          backgroundColor="#D4007E"
          name="Instagram"
          img={InstagramLogo}
          href="https://www.instagram.com/jaidelman"
        />
        <ContactButton
          backgroundColor="#F2BB05"
          name="Email Me"
          img={EmailIcon}
          href="mailto:jaidelma@uoguelph.ca"
        />
      </div>
      <img className="floating-image" src={TypingImage} alt="" />
    </div>
  );
};
