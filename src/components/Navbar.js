function Navbar() {
  return (
    <section>
      <nav className="Navbar">
        <div className="logo">
          <h2>
            <a href="/">Lucas Gavião</a>
          </h2>
        </div>
        <ul className="links">
          <li>
            <a href="/projects">PROJECTS</a>
          </li>
          <li>
            <a href="/experience">EXPERIENCE</a>
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
