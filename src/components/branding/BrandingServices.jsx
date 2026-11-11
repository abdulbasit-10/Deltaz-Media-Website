import linkedinIcon from "../../assets/Linkedin strategy.png";
import crossPlatformIcon from "../../assets/cross platform.png";

const services = [
  {
    icon: linkedinIcon,
    eyebrow: "LINKEDIN EXECUTIVE STRATEGY",
    title: "Positioning & Ghostwriting",
    description:
      "Before developing content, we look at your commercial objectives, target audience, expertise, and market positioning to determine what your profile should communicate and which subjects you have a credible right to speak about.",
    label: "OUR LINKEDIN SERVICES INCLUDE:",
    items: [
      "Profile strategy & optimization",
      "CEO & Founder personal branding",
      "Executive personal branding",
      "Personal brand positioning",
      "LinkedIn content strategy",
      "LinkedIn ghostwriting",
      "Thought leadership content",
      "Performance & engagement analysis",
    ],
    button: "Build Your LinkedIn Strategy",
  },
  {
    icon: crossPlatformIcon,
    eyebrow: "CROSS-PLATFORM PRESENCE",
    title: "Complete Profile Optimization",
    description:
      "When someone searches for you online, your profiles across LinkedIn, Instagram, X, Facebook, and executive bios should communicate a consistent picture of who you are, what you know, and why your expertise matters.",
    label: "WE OPTIMIZE:",
    items: [
      "LinkedIn profile & positioning",
      "Instagram bio & profile",
      "X/Twitter professional profile",
      "Facebook professional profile",
      "Biography & executive bios",
      "Social proof & credibility",
      "Cross-platform brand consistency & narrative",
    ],
    button: "Optimize Your Personal Brand",
  },
];

function BrandingServices() {
  return (
    <section className="bg-[#032D31] px-5 py-16 font-['Plus_Jakarta_Sans'] text-white sm:px-8 sm:py-20">
      <div className="mx-auto max-w-[920px]">
        <div className="mx-auto max-w-[650px] text-center">
          <p className="font-['Inter'] text-[8px] font-bold uppercase tracking-[0.12em] text-[#00C5B5]">
            B2B AUTHORITY ENGINE
          </p>
          <h2 className="mt-3 font-['Plus_Jakarta_Sans'] text-[clamp(27px,4vw,40px)] font-extrabold leading-[1.08] tracking-[-0.04em]">
            LinkedIn &amp; Personal Branding
            <span className="block">Services</span>
          </h2>
          <p className="mt-4 text-[11px] leading-[1.55] text-[#A8C0C2] sm:text-[13px]">
            LinkedIn is often where professionals research executives and founders. But publishing without a clear position rarely creates a meaningful reputation.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="flex flex-col rounded-[10px] border border-[#0B5A5D] bg-[#063B3E] p-6 sm:p-7">
              <div className="flex items-start justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-[9px] bg-[#006D6C]">
                  <img src={service.icon} alt="" className="h-5 w-5 object-contain" />
                </span>
                <span className="rounded-full bg-[#14595B] px-3 py-1 font-['Inter'] text-[7px] text-[#A8C0C2]">Pillar 0{services.indexOf(service) + 1}</span>
              </div>
              <p className="mt-5 font-['Inter'] text-[8px] font-bold uppercase tracking-[0.08em] text-[#00C5B5]">{service.eyebrow}</p>
              <h3 className="mt-2 font-['Arimo'] text-[18px] font-bold text-white">{service.title}</h3>
              <p className="mt-3 text-[10px] leading-[1.6] text-[#B4CDCE] sm:text-[11px]">{service.description}</p>
              <p className="mt-4 font-['Inter'] text-[8px] font-bold uppercase tracking-[0.06em] text-[#00C5B5]">{service.label}</p>
              <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2 text-[9px] leading-[1.35] text-[#B4CDCE]">
                {service.items.map((item) => <li key={item} className="before:mr-1 before:text-[#00C5B5] before:content-['✓']">{item}</li>)}
              </ul>
              <a href="/contact" className="mt-6 flex items-center justify-center rounded-[6px] bg-[#104F52] px-4 py-3 font-['Arimo'] text-[10px] font-bold text-white transition hover:bg-[#12666A]">{service.button}<span className="ml-2">→</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandingServices;
