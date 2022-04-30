import React from "react";
import "../styles/Header.css";

export default function Header() {
  return (
    <>
      <header className="header-section">
        <img src="../images/troll-face.png" className="troll_face" />
        <h1>Meme Generator</h1>
        <h2>React Course - Project 3</h2>
      </header>
    </>
  );
}
