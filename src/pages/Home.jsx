const services = [
  ['service-growth', 'Be Found Where Your Customers Are Looking.', 'If your customers can’t find you, your competitors will. We build SEO strategies that improve your visibility and unlock qualified traffic.'],
  ['service-clicks', 'Turn Every Click Into an Opportunity.', 'We create targeted Google Ads campaigns that connect your business with high-intent customers and make every advertising spend work harder.'],
  ['service-brand', 'Build a Brand People Remember.', 'Your brand is more than a logo. We create distinctive brand identities that give your business a clear voice and help you stand out.'],
  ['service-social', 'Content That Moves People to Act.', 'The right content builds trust before the sale. We create strategies that connect, attract the right audience, and support your wider business goals.'],
  ['service-attention', 'Turn Attention Into Influence.', 'Social media should do more than fill your content calendar. We help businesses create meaningful connections, build trust, and engage audiences.'],
  ['service-web', 'Build a Website That Works for Your Business.', 'Your website is more than a digital presence. We build fast, modern, conversion-focused websites that turn attention into action.'],
]

const Home = () => (
  <main>
    <section className="home-hero">
      <div className="hero-content">
        <h1>Your Business <em>Needs</em> Demand,<br />Influence, and Growth</h1>
        <p>We combine strategy, creativity, and digital expertise to help businesses attract the right audience, build influence, and turn attention into growth.</p>
        <div className="hero-actions"><a className="button button-solid" href="#contact">Let's Build Your Growth <span>→</span></a><a className="button button-outline" href="#work">See Real Results <span>→</span></a></div>
      </div>
    </section>

    <section className="section services-section" id="services">
      <div className="section-heading"><h2>Make Your Business <em>Impossible</em> to Ignore</h2><p>We help you build the visibility, presence, and digital experience your business needs to stand out and get chosen.</p></div>
      <div className="services-grid">{services.map(([style, title, copy]) => <article className={`service-card ${style}`} key={title}><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
    </section>

    <section className="section results-section" id="work">
      <div className="section-heading"><h2><em>See What</em> the Right Marketing<br />Can Do for <em>Your Business.</em></h2><p>You have your own goals, challenges, and opportunities. See how businesses like yours used the right marketing approach to overcome obstacles, create new opportunities, and achieve results that matter to them.</p></div>
      <div className="results-grid"><article className="result-card result-saas"><strong>412%</strong><span>SCALING SAAS TO<br />RS10M ARR</span></article><article className="result-card result-seo"><strong>2.5M</strong><span>GLOBAL SEO</span></article><article className="result-card result-revenue"><strong>12:1</strong><span>REVENUE RECOVERY</span></article></div>
      <a className="button button-solid results-button" href="#case-studies">Explore Success Stories</a>
    </section>

    <section className="section insights-section">
      <div className="section-heading"><h2>Make <em>Better</em> Marketing<br />Decisions for Your <em>Business</em></h2><p>Whether you’re trying to get found on Google, generate better leads, build a stronger brand, or make your marketing work harder, explore practical insights to help you decide what to do next.</p></div>
      <a className="view-all" href="#insights">View All Posts →</a>
      <article className="featured-post"><div><span>SEO TRENDS</span><h3>Most Important SEO<br />Practices in 2026 for<br />Business Growth</h3><p>Master the evolution of search engines and learn how to secure your market position for the coming decade.</p><a href="#post">Read Full Insight&nbsp; →</a></div></article>
    </section>
  </main>
)

export default Home
