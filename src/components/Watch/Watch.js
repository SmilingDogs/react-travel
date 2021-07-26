import React from "react";
import { Link } from "react-router-dom";
import "./Watch.css";

const Watch = () => {
  return (
    <div className="trailer">
      <Link to="/" className="navbar-logo">
        TRVL
        <i className="fab fa-typo3" />
      </Link>
      <h1 className="trailer-slogan">The Big World awaits...</h1>
      <div className="hidden">Hidden</div>
    </div>
  );
};

export default Watch;
