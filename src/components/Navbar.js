function Navbar() {
  return (
    <section>
      <nav className="Navbar">
        <div className="logo">
          <h2>
            <a href="/">LUCAS SILVA</a>
          </h2>
        </div>
        <ul className="links">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/work">PROJECTS</a>
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
