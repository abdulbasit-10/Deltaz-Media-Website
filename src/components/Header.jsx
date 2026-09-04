import { useState } from "react";
import logo from "../assets/Logo.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">

        <a href="/" className="logo" aria-label="Deltaz Media home">
          <img src={logo} alt="Deltaz Media" />
        </a>

        <nav
          className={`main-nav ${menuOpen ? "open" : ""}`}
          aria-label="Main navigation"
        >
          <a href="/" className="active">
            Home
          </a>

          <a href="/about">
            About
          </a>

          <a href="#services">
            Our Services
          </a>

          <a href="#how-we-work">
            How We Work
          </a>

          <a href="#project">
            Our Project
          </a>

          <a href="#courses">
            Courses
          </a>

          <a href="/contact">
            Contact Us
          </a>
        </nav>

        <a href="/contact" className="header-cta">
          <span>Book Your Free Audit</span>
          <strong>↗</strong>
        </a>

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

      </div>
    </header>
  );
}

export default Header;