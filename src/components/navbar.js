import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navbar">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/revyoome">
        RevyooMe
      </Link>{" "}
      <Link className="link" to="/tekside">
        Tekside.io
      </Link>
      <Link className="link" to="/wsib">
        WSIB Innovation Lab
      </Link>
    </div>
  );
};
