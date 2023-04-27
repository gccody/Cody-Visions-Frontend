import React from "react";

export const NavBar = () => {

  return (
    <nav className="nav-bar">
      <div className="nav-bar-title">
        <p>Cody Visions</p>
      </div>
      <div className="nav-bar-links">
        <a className="nav-bar-link" href="/">Home</a>
        <a className="nav-bar-link" href="/gallery">Gallery</a>
      </div>
    </nav>
  );
}