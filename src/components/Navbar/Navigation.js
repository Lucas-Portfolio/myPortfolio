import NavLinks from "./NavLinks";
import classes from "./navbar.module.css";
import React from "react";

function Navigation() {
  return (
    <nav className={classes.Navigation}>
      <NavLinks />
    </nav>
  );
}

export default Navigation;
