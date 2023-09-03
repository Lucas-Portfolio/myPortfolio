import MobileNav from "./MobileNav";
import Navigation from "./Navigation";
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
        <MobileNav />
        <Navigation />
      </nav>
    </section>
  );
}

export default Navbar;
