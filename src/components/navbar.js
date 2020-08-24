import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navbar">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/revyoome">
        Term 1: RevyooMe
      </Link>{" "}
      <Link className="link" to="/tekside">
        Term 2: Tekside.io
      </Link>
      <Link className="link" to="/wsib">
        Term 3: WSIB Innovation Lab
      </Link>
      <Link className="link" to="/contact">
        Contact Me
      </Link>
    </div>
  );
};
