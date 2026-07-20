
const services = ['SEO Optimization', 'Google Ads (PPC)', 'Social Marketing', 'Content Strategy']
const company = ['Case Studies', 'Our Methodology', 'Careers', 'Contact']

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 12h14M13 6l6 6-6 6" />
  </svg>
)

const ShareIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="18" cy="5" r="2.25" /><circle cx="6" cy="12" r="2.25" /><circle cx="18" cy="19" r="2.25" />
    <path d="m8 11 7.7-4.8M8 13l7.7 4.8" />
  </svg>
)

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="8" /><path d="M4 12h16M12 4c2.2 2.2 3.2 5 3.2 8S14.2 17.8 12 20c-2.2-2.2-3.2-5-3.2-8S9.8 6.2 12 4Z" />
  </svg>
)

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="4" y="7" width="16" height="12" rx="1.5" /><path d="M9 7V5.7c0-.9.7-1.7 1.7-1.7h2.6c.9 0 1.7.8 1.7 1.7V7M4 11h16M10 12h4" />
  </svg>
)

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-main">
      <section className="footer-intro" aria-label="Deltaz Media">
        <a href="#" aria-label="Deltaz Media home"><img src="/deltaz-logo.png" alt="Deltaz Media" /></a>
        <p>The growth partner for high-performance companies in Dubai. Data-driven, results-oriented, and strictly high-velocity.</p>
        <div className="social-links" aria-label="Social links">
          <a href="#" aria-label="Share"><ShareIcon /></a>
          <a href="#" aria-label="Website"><GlobeIcon /></a>
          <a href="#" aria-label="Portfolio"><BriefcaseIcon /></a>
        </div>
      </section>

      <section className="footer-links" aria-labelledby="services-title">
        <h2 id="services-title">Services</h2>
        {services.map((item) => <a href="#services" key={item}>{item}</a>)}
      </section>

      <section className="footer-links" aria-labelledby="company-title">
        <h2 id="company-title">Company</h2>
        {company.map((item) => <a href="#company" key={item}>{item}</a>)}
      </section>

      <section className="footer-newsletter" aria-labelledby="insights-title">
        <h2 id="insights-title">Weekly Insights</h2>
        <p>Get our latest growth playbooks delivered directly to your inbox.</p>
        <form className="newsletter-form">
          <label className="sr-only" htmlFor="email">Email address</label>
          <input id="email" type="email" placeholder="Email address" />
          <button type="submit" aria-label="Subscribe"><ArrowIcon /></button>
        </form>
      </section>
    </div>

    <div className="footer-bottom">
      <p>© 2026 Deltaz Digital Inc. All rights reserved.</p>
      <div><a href="#privacy">Privacy Policy</a><a href="#terms">Terms of Service</a></div>
    </div>
  </footer>
)

export default Footer
