import startupIcon from "../../assets/startup.png";
import smeIcon from "../../assets/Growth.png";
import foundersIcon from "../../assets/ceos.png";
import internationalIcon from "../../assets/International.png";
import agenciesIcon from "../../assets/agencies.png";
import startupImage from "../../assets/market entry in uae.png";
import rocketIcon from "../../assets/Rocket shape icon.png";
import tickIcon from "../../assets/tick for startups.png";
import arrowIcon from "../../assets/meteor-icons arrow-up-right (black).png";

const categories = [
  [startupIcon, "Startups", "Build Visibility"],
  [smeIcon, "SMEs", "Scale Growth"],
  [foundersIcon, "CEOs & Founders", "Personal Brand"],
  [internationalIcon, "International", "UAE Expansion"],
  [agenciesIcon, "Agencies", "White-Label"],
];

const startupServices = [
  "Brand Positioning",
  "Content & Targeted SEO",
  "Paid Acquisition & Leads",
  "High-Converting Websites",
];

function CategoryIcon({ src, masked = false }) {
  if (masked) {
    return (
      <span
        aria-hidden="true"
        className="h-[15px] w-[15px] bg-[#00C5B5]"
        style={{
          WebkitMaskImage: `url("${src}")`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          WebkitMaskSize: "contain",
          maskImage: `url("${src}")`,
          maskRepeat: "no-repeat",
          maskPosition: "center",
          maskSize: "contain",
        }}
      />
    );
  }

  return <img src={src} alt="" className="h-[15px] w-[15px] object-contain" />;
}

function WhoWeHelpAudience() {
  return (
    <>
      <section className="bg-white px-5 py-7 font-['Manrope'] sm:px-8">
        <div className="mx-auto grid max-w-[840px] grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map(([icon, title, subtitle], index) => (
            <div key={title} className="flex min-h-[66px] flex-col items-center justify-center rounded-[8px] border border-[#0C7376] bg-[#063D40] px-2 py-2 text-center text-[#00C5B5]">
              <CategoryIcon src={icon} masked={index === 0 || index === 3} />
              <p className="mt-1 font-['Arimo'] text-[9px] font-bold">{title}</p>
              <p className="text-[7px] text-[#9DBABC]">{subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#032D31] px-5 py-14 font-['Manrope'] text-white sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-[840px] items-center gap-8 md:grid-cols-[1.2fr_0.9fr] md:gap-10">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#075052] px-3 py-1 font-['Inter'] text-[7px] font-bold uppercase tracking-[0.05em] text-[#00C5B5]">
              <img src={rocketIcon} alt="" className="h-[10px] w-[10px] object-contain" />
              Early Stage &amp; High Growth
            </span>
            <h2 className="mt-4 font-['Arimo'] text-[clamp(25px,3.5vw,32px)] font-bold leading-[1.1]">Startups</h2>
            <h3 className="mt-3 font-['Arimo'] text-[14px] font-bold leading-[1.35] text-[#00C5B5] sm:text-[15px]">Build Visibility Before the Market Passes You By.</h3>
            <p className="mt-4 text-[10px] leading-[1.6] text-[#B4CDCE] sm:text-[11px]">
              Startups have to establish credibility quickly. You need to explain what you do, reach the right audience, generate demand, and prove that your business deserves attention — often without the budget of an established competitor.
            </p>
            <p className="mt-3 text-[9px] leading-[1.55] text-[#91AAAC] sm:text-[10px]">We help startups build the digital foundation and acquisition strategy they need to get noticed, attract customers, and create a repeatable path to growth.</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {startupServices.map((service) => (
                <div key={service} className="flex items-center gap-2 rounded-[7px] border border-[#0B4B4E] bg-[#06383B] px-3 py-2 text-[8px] text-[#B4CDCE] sm:text-[9px]">
                  <img src={tickIcon} alt="" className="h-[10px] w-[10px] shrink-0 object-contain" />
                  {service}
                </div>
              ))}
            </div>
            <a href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#00B9A5] px-4 py-2.5 font-['Inter'] text-[9px] font-semibold text-[#042D30] transition-colors hover:bg-[#00D0BC]">
              Build Your Startup Growth Strategy
              <img src={arrowIcon} alt="" className="h-[12px] w-[12px] object-contain" />
            </a>
          </div>

          <div className="mx-auto w-full max-w-[300px]">
            <img src={startupImage} alt="Startup team collaborating in the UAE" className="block aspect-[1.08/1] w-full rounded-[9px] object-cover shadow-[0_12px_20px_rgba(10,35,45,0.16)]" />
          </div>
        </div>
      </section>
    </>
  );
}

export default WhoWeHelpAudience;
