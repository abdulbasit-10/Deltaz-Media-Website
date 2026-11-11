import technicalIcon from "../../assets/technical seo.png";
import contentIcon from "../../assets/Content seo.png";
import localIcon from "../../assets/local seo.png";

const offerings = [
  {
    icon: technicalIcon,
    title: "Technical SEO",
    eyebrow: "FOUNDATION SEARCH ENGINES UNDERSTAND",
    description: "Improve crawlability, indexing, site structure, internal linking, technical performance and on-page elements so your website is easier to discover, understand and rank.",
    link: "Explore Technical SEO",
    featured: false,
  },
  {
    icon: contentIcon,
    title: "Content SEO",
    eyebrow: "CONTENT CUSTOMERS ACTUALLY SEARCH FOR",
    description: "We develop and optimise service pages, landing pages, articles and other search-focused content around keyword opportunities, search intent and commercial relevance.",
    link: "Explore Content SEO",
    featured: true,
  },
  {
    icon: localIcon,
    title: "Local SEO",
    eyebrow: "GET FOUND IN YOUR LOCAL MARKET",
    description: "Strengthen your local search presence through Google Business Profile optimisation, location targeting, local content and strategies that help businesses compete for local searches.",
    link: "Explore Local SEO",
    featured: false,
  },
];

function SEOOfferings() {
  return (
    <section className="bg-[#E8F5F6] px-5 py-14 font-['Manrope'] text-[#082F33] sm:px-8 sm:py-16">
      <div className="mx-auto max-w-[840px]">
        <header className="text-center">
          <span className="inline-flex rounded-full bg-[#062F33] px-3 py-1 font-['Inter'] text-[8px] font-bold uppercase tracking-[0.08em] text-white">Core Offerings</span>
          <h2 className="mx-auto mt-3 max-w-[600px] font-['Arimo'] text-[clamp(25px,4vw,34px)] font-bold leading-[1.08]">
            Three SEO Services With One
            <span className="block">Search Strategy.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-[650px] text-[11px] leading-[1.55] text-[#687E83] sm:text-[12px]">
            Your website needs more than keywords to compete in search. Technical performance, useful content and local visibility all contribute to how your business is discovered and evaluated.
          </p>
        </header>

        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {offerings.map((offering) => (
            <article key={offering.title} className={`relative flex min-h-[245px] flex-col rounded-[11px] border p-5 shadow-[0_5px_14px_rgba(19,65,69,0.06)] sm:p-5 ${offering.featured ? "border-[#007C79] bg-[linear-gradient(145deg,#0B4B4D,#063639)] text-white shadow-[0_12px_20px_rgba(7,54,57,0.18)]" : "border-[#DCEBEC] bg-white text-[#092F33]"}`}>
              {offering.featured && <span className="absolute right-0 top-0 rounded-bl-[7px] rounded-tr-[10px] bg-[#00D0C0] px-3 py-1 font-['Inter'] text-[7px] font-bold uppercase text-[#053638]">Featured</span>}
              <span className={`flex h-[38px] w-[38px] items-center justify-center rounded-[9px] ${offering.featured ? "bg-[#176063]" : "bg-[#F0F8F7]"}`}>
                <img src={offering.icon} alt="" className="h-[19px] w-[19px] object-contain" />
              </span>
              <h3 className="mt-4 font-['Arimo'] text-[16px] font-bold">{offering.title}</h3>
              <p className={`mt-1 font-['Inter'] text-[7px] font-semibold uppercase tracking-[0.03em] ${offering.featured ? "text-[#00D0C0]" : "text-[#07535A]"}`}>{offering.eyebrow}</p>
              <p className={`mt-3 text-[9px] leading-[1.6] sm:text-[10px] ${offering.featured ? "text-[#B8D0D1]" : "text-[#708186]"}`}>{offering.description}</p>
              <a href="/contact" className={`mt-auto pt-4 font-['Arimo'] text-[9px] font-bold ${offering.featured ? "text-[#00D0C0]" : "text-[#07535A]"}`}>{offering.link}<span className="ml-1">→</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SEOOfferings;
