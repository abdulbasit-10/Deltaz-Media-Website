import whyChooseUsImage from "../assets/Image for why choose us.png";

import dataStrategyIcon from "../assets/Data drive startegy.svg";
import rapidExecutionIcon from "../assets/rapid execution.svg";
import transparentReportingIcon from "../assets/transparent reporting.svg";
import fullCoverageIcon from "../assets/Full coverage.svg";

import seoImage from "../assets/Seo Optimization.png";
import socialImage from "../assets/Social Media Marketing.png";
import contentImage from "../assets/Content Marketing.jpg";

function Home() {
  const benefits = [
    {
      icon: dataStrategyIcon,
      title: "Data-Driven Strategy",
      text: "Every campaign is backed by deep analytics, not guesswork.",
    },
    {
      icon: rapidExecutionIcon,
      title: "Rapid Execution",
      text: "From brief to live campaign in days, not weeks.",
    },
    {
      icon: transparentReportingIcon,
      title: "Transparent Reporting",
      text: "Real-time dashboards so you always know what's working.",
    },
    {
      icon: fullCoverageIcon,
      title: "Full-Funnel Coverage",
      text: "Awareness to conversion — we own every stage of the journey.",
    },
  ];

  const services = [
    {
      title: "SEO Optimization",
      text: "Data-driven SEO strategies that improve search visibility, attract qualified traffic, and drive long-term growth.",
      image: seoImage,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="M15.5 15.5L21 21" />
          <path d="M8 10.5h5" />
          <path d="M10.5 8v5" />
        </svg>
      ),
    },
    {
      title: "Social Media Marketing",
      text: "Build a stronger social presence with creative campaigns that engage your audience and grow your brand.",
      image: socialImage,
      featured: true,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="5" y="7" width="11" height="11" rx="2" />
          <path d="M8 5h10a2 2 0 0 1 2 2v9" />
          <path d="M8 12h5" />
          <path d="M8 15h3" />
        </svg>
      ),
    },
    {
      title: "Content Marketing",
      text: "Create valuable content that builds trust, connects with your audience, and turns attention into action.",
      image: contentImage,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 4h8l3 3v13H7z" />
          <path d="M15 4v4h4" />
          <path d="M10 12h5" />
          <path d="M10 15h5" />
          <path d="M10 9h2" />
        </svg>
      ),
    },
  ];

  return (
    <main className="home-page">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="hero" aria-labelledby="hero-title">

        <div className="hero-dots" aria-hidden="true">
          {Array.from({ length: 30 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>

        <div className="hero-orb hero-orb-left" />
        <div className="hero-orb hero-orb-right" />
        <div className="hero-orb hero-orb-center" />

        {/* Figma flowing wave system */}
        <div className="hero-waves" aria-hidden="true">
          <svg
            className="hero-wave-svg"
            viewBox="0 0 1440 540"
            preserveAspectRatio="none"
          >
            <path d="M-80 250 C 70 120 165 105 270 190 C 370 270 420 410 545 405 C 690 400 730 245 855 235 C 980 225 1080 300 1185 320 C 1295 340 1370 300 1520 250" />

            <path d="M-80 258 C 70 128 165 113 270 198 C 370 278 420 418 545 413 C 690 408 730 253 855 243 C 980 233 1080 308 1185 328 C 1295 348 1370 308 1520 258" />

            <path d="M-80 266 C 70 136 165 121 270 206 C 370 286 420 426 545 421 C 690 416 730 261 855 251 C 980 241 1080 316 1185 336 C 1295 356 1370 316 1520 266" />

            <path d="M-80 274 C 70 144 165 129 270 214 C 370 294 420 434 545 429 C 690 424 730 269 855 259 C 980 249 1080 324 1185 344 C 1295 364 1370 324 1520 274" />

            <path d="M-80 282 C 70 152 165 137 270 222 C 370 302 420 442 545 437 C 690 432 730 277 855 267 C 980 257 1080 332 1185 352 C 1295 372 1370 332 1520 282" />

            <path d="M-80 290 C 70 160 165 145 270 230 C 370 310 420 450 545 445 C 690 440 730 285 855 275 C 980 265 1080 340 1185 360 C 1295 380 1370 340 1520 290" />

            <path d="M-80 298 C 70 168 165 153 270 238 C 370 318 420 458 545 453 C 690 448 730 293 855 283 C 980 273 1080 348 1185 368 C 1295 388 1370 348 1520 298" />

            <path d="M-80 306 C 70 176 165 161 270 246 C 370 326 420 466 545 461 C 690 456 730 301 855 291 C 980 281 1080 356 1185 376 C 1295 396 1370 356 1520 306" />

            <path d="M-80 314 C 70 184 165 169 270 254 C 370 334 420 474 545 469 C 690 464 730 309 855 299 C 980 289 1080 364 1185 384 C 1295 404 1370 364 1520 314" />

            <path d="M-80 322 C 70 192 165 177 270 262 C 370 342 420 482 545 477 C 690 472 730 317 855 307 C 980 297 1080 372 1185 392 C 1295 412 1370 372 1520 322" />

            <path d="M-80 330 C 70 200 165 185 270 270 C 370 350 420 490 545 485 C 690 480 730 325 855 315 C 980 305 1080 380 1185 400 C 1295 420 1370 380 1520 330" />
          </svg>
        </div>

        <div className="hero-content">

          <div className="hero-badge">
            <span className="hero-badge-icon">✦</span>
            Trusted Digital Growth Partner
          </div>

          <h1 id="hero-title" className="hero-title">
            Your Business Needs Demand,
            <br />
            Influence <span className="accent">&amp; Growth</span>
          </h1>

          <p className="hero-description">
            We combine strategy, creativity, and digital expertise to help
            businesses attract the right audience, build influence, and turn
            attention into growth.
          </p>

          <div className="hero-actions">

            <a href="#contact" className="primary-button">
              Let's Build Your Growth
              <span>↗</span>
            </a>

            <a href="#services" className="secondary-button">
              See Our Work
              <span>↗</span>
            </a>

          </div>

          <div className="hero-stats">

            <div className="stat-card">
              <strong>200+</strong>
              <span>Clients Served</span>
            </div>

            <div className="stat-card">
              <strong>98%</strong>
              <span>Retention Rate</span>
            </div>

            <div className="stat-card">
              <strong>$12M+</strong>
              <span>Revenue Generated</span>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHY CHOOSE US
      ====================================================== */}

      <section className="why-section" id="why-us">

        <div className="why-card">

          <div className="why-content">

            <div className="section-label">
              <span className="section-label-dots">
                <i />
                <i />
                <i />
              </span>

              Why Choose Us
            </div>

            <h2 className="section-title why-title">
              Why Businesses Choose
              <br />
              <span>Deltaz Media</span>
            </h2>

            <p className="why-description">
              We combine strategy, creativity, and data-driven marketing to
              help businesses build stronger brands, attract the right
              audience, and achieve sustainable growth. Every solution is
              tailored to your goals, ensuring measurable results and
              long-term success.
            </p>

            <div className="benefits-list">

              {benefits.map((benefit) => (
                <div className="benefit-item" key={benefit.title}>

                  <div className="benefit-icon">
                    <img src={benefit.icon} alt="" />
                  </div>

                  <div className="benefit-copy">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.text}</p>
                  </div>

                </div>
              ))}

            </div>

          </div>

          <div className="why-image-wrapper">
            <img
              src={whyChooseUsImage}
              alt="Deltaz Media team"
              className="why-image"
            />
          </div>

        </div>
      </section>


      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section className="services-section" id="services">

        <div className="services-background-lines" aria-hidden="true">
          <span className="service-curve service-curve-1" />
          <span className="service-curve service-curve-2" />
          <span className="service-curve service-curve-3" />
          <span className="service-curve service-curve-4" />
          <span className="service-curve service-curve-5" />
        </div>

        <div className="service-dot service-dot-one" />
        <div className="service-dot service-dot-two" />
        <div className="service-dot service-dot-three" />

        <div className="services-inner">

          <div className="services-heading">

            <div className="section-label services-label">

              <span className="section-label-dots">
                <i />
                <i />
                <i />
              </span>

              Our Services
            </div>

            <h2 className="services-title">
              Marketing Solutions That Drive
              <br />
              Real Business <span>&amp; Growth</span>
            </h2>

            <p className="services-description">
              We combine strategy, creativity, and digital expertise to help
              businesses attract the right audience, build influence, and turn
              attention into growth.
            </p>

          </div>


          <div className="services-grid">

            {services.map((service) => (
              <article
                className={`service-card ${
                  service.featured ? "featured" : ""
                }`}
                key={service.title}
              >

                <div className="service-card-top">

                  <div className="service-icon">
                    {service.icon}
                  </div>

                </div>

                <h3>{service.title}</h3>

                <p>{service.text}</p>

                <div className="service-image-wrapper">

                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                  />

                  <a
                    href="#contact"
                    className="service-arrow"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    ↗
                  </a>

                </div>

              </article>
            ))}

          </div>


          <a href="#services" className="explore-button">
            Explore All Services
            <span>↗</span>
          </a>

        </div>

      </section>


      <div id="how-we-work" className="page-anchor" />
      <div id="project" className="page-anchor" />
      <div id="courses" className="page-anchor" />
      <div id="contact" className="page-anchor" />

    </main>
  );
}

export default Home;