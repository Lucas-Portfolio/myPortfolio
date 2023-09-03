import style from "./navbar.module.css";
import React from "react";

function Navbar() {
  return (
    <section>
      <nav className={style.Navbar}>
        <div className={style.logo}>
          <h2>
            <a href="/">Lucas Gavião</a>
          </h2>
        </div>
        <ul className={style.links}>
          <li>
            <a href="/projects">PROJECTS</a>
          </li>
          <li>
            <a href="/experiences">EXPERIENCE</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Navbar;
