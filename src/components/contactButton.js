import React from "react";

export const ContactButton = (props) => {
  return (
    <button
      className="contact-button"
      style={{ backgroundColor: props.backgroundColor }}
    >
      <img
        style={{ float: "left", width: "2rem", height: "2rem" }}
        src={props.img}
        alt=""
      />
      <span>
        <a href={props.href}>{props.name}</a>
      </span>
    </button>
  );
};
