import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {

  return (
    <nav className="nav-bar">
      <div className="nav-bar-title">
        <p>Cody Visions</p>
      </div>
      <div className="nav-bar-links">
        <Link className="nav-bar-link link" to="/">Home</Link>
        <Link className="nav-bar-link link" to="/gallery">Gallery</Link>
      </div>
    </nav>
  );
}