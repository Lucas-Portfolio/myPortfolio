import classes from "./navbar.module.css";
import React from "react";

const NavLinks = (props) => {
  return (
    <ul className={classes.NavLinks}>
      <li onClick={() => props.isMobile && props.closeMenu()}>
        <a href="/projects">Projects</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMenu()}>
        <a href="/experiences">Experience</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMenu()}>
        <a href="/about">About</a>
      </li>
      <li onClick={() => props.isMobile && props.closeMenu()}>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  );
};

export default NavLinks;
