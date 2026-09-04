import logo from "../assets/Logo.svg";

import mailIcon from "../assets/MailIcon.png";
import phoneIcon from "../assets/Phone Icon.png";
import locationIcon from "../assets/Location icon.png";

import linkedinIcon from "../assets/Linked in.png";
import instagramIcon from "../assets/Instagram.png";
import facebookIcon from "../assets/Facebook.png";
import twitterIcon from "../assets/Twitter.png";

const quickLinks = [
  "Home",
  "About Us",
  "Our Services",
  "How We Work",
  "Case Studies",
  "Blog",
  "Contact",
];

const services = [
  "SEO Optimization",
  "Google Ads",
  "Branding",
  "Social Media Marketing",
  "Content Marketing",
  "Website Design & Development",
];

function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-main">

        {/* BRAND */}
        <section className="footer-brand">

          <a
            href="/"
            className="footer-logo"
            aria-label="Deltaz Media home"
          >
            <img
              src={logo}
              alt="Deltaz Media"
            />
          </a>

          <p className="footer-description">
            We help ambitious brands grow through data-driven digital
            marketing from search visibility to social reach and everything
            in between.
          </p>

          {/* SOCIAL ICONS */}
          <div className="footer-socials">

            <a
              href="#"
              aria-label="LinkedIn"
            >
              <img
                src={linkedinIcon}
                alt=""
              />
            </a>

            <a
              href="#"
              aria-label="Instagram"
            >
              <img
                src={instagramIcon}
                alt=""
              />
            </a>

            <a
              href="#"
              aria-label="Facebook"
            >
              <img
                src={facebookIcon}
                alt=""
              />
            </a>

            <a
              href="#"
              aria-label="Twitter"
            >
              <img
                src={twitterIcon}
                alt=""
              />
            </a>

          </div>

        </section>


        {/* QUICK LINKS */}
        <section className="footer-column">

          <h2>Quick Links</h2>

          <nav aria-label="Footer quick links">

            {quickLinks.map((item) => (
              <a
                href="#"
                key={item}
              >
                {item}
              </a>
            ))}

          </nav>

        </section>


        {/* SERVICES */}
        <section className="footer-column">

          <h2>Services</h2>

          <nav aria-label="Footer services">

            {services.map((item) => (
              <a
                href="#services"
                key={item}
              >
                {item}
              </a>
            ))}

          </nav>

        </section>


        {/* CONTACT */}
        <section className="footer-contact">

          <h2>Contact</h2>


          {/* EMAIL */}
          <a
            href="mailto:hello@deltazmedia.com"
            className="contact-item"
          >

            <span className="contact-icon">
              <img
                src={mailIcon}
                alt=""
              />
            </span>

            <span>
              hello@deltazmedia.com
            </span>

          </a>


          {/* PHONE */}
          <a
            href="tel:+97141234567"
            className="contact-item"
          >

            <span className="contact-icon">
              <img
                src={phoneIcon}
                alt=""
              />
            </span>

            <span>
              +971 4 123 4567
            </span>

          </a>


          {/* LOCATION */}
          <div className="contact-item">

            <span className="contact-icon">
              <img
                src={locationIcon}
                alt=""
              />
            </span>

            <span>
              Dubai, United Arab Emirates
            </span>

          </div>


          {/* SUBSCRIBE */}
          <form className="footer-subscribe">

            <label
              htmlFor="footer-email"
              className="sr-only"
            >
              Email address
            </label>

            <input
              id="footer-email"
              type="email"
              placeholder="email address"
            />

            <button type="submit">
              Enter
            </button>

          </form>

        </section>

      </div>


      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">

        <p>
          © 2026 Deltaz Media. All rights reserved.
        </p>

        <div className="footer-legal">

          <a href="#privacy">
            Privacy Policy
          </a>

          <a href="#terms">
            Terms &amp; Conditions
          </a>

          <a href="#cookies">
            Cookie Policy
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;