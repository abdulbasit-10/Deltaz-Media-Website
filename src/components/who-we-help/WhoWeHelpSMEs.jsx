import smeImage from "../../assets/SMEs.png";
import scaledBusinessIcon from "../../assets/scaled business.png";
import cohesiveMarketingIcon from "../../assets/cohesive marketing.png";
import arrowIcon from "../../assets/meteor-icons arrow-up-right (green).png";

const challenges = [
  "Your website may not convert effectively.",
  "Your content may fail to communicate deep expertise.",
  "Your advertising generates vanity activity without real business.",
];

function WhoWeHelpSMEs() {
  return (
    <section className="bg-[#F5F8FB] px-5 py-14 font-['Manrope'] text-[#172033] sm:px-8 sm:py-16">
      <div className="mx-auto grid max-w-[820px] items-center gap-8 md:grid-cols-[0.78fr_1.22fr] md:gap-10">
        <div className="relative mx-auto w-full max-w-[300px] pb-4 pr-4">
          <img src={smeImage} alt="Analytics dashboard on a laptop" className="aspect-[1.08/1] w-full rounded-[9px] object-cover shadow-[0_12px_20px_rgba(10,35,45,0.16)]" />
          <div className="absolute bottom-0 right-0 flex w-[76%] items-start gap-2 rounded-[10px] bg-[#02292D] p-3 text-white shadow-[0_10px_18px_rgba(3,45,49,0.22)]">
            <span className="mt-0.5 flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-[#087F75]">
              <img src={cohesiveMarketingIcon} alt="" className="h-[11px] w-[11px] object-contain" />
            </span>
            <div>
              <h3 className="font-['Arimo'] text-[9px] font-bold">Cohesive Marketing</h3>
              <p className="mt-1 text-[7px] leading-[1.4] text-[#B4CDCE]">Connecting SEO, paid media, and web experience into a unified engine.</p>
            </div>
          </div>
        </div>

        <div>
          <span className="inline-flex items-center gap-1 rounded-full bg-[#D8F5F0] px-3 py-1 font-['Inter'] text-[7px] font-semibold uppercase tracking-[0.04em] text-[#176B68]">
            <img src={scaledBusinessIcon} alt="" className="h-[10px] w-[10px] object-contain" />
            Scaled Businesses
          </span>
          <h2 className="mt-3 font-['Arimo'] text-[clamp(28px,4vw,34px)] font-bold leading-[1.05]">SMEs</h2>
          <h3 className="mt-3 font-['Arimo'] text-[14px] font-bold leading-[1.3] text-[#00A995] sm:text-[15px]">
            Compete With Bigger Businesses Without Marketing Like Them.
          </h3>
          <p className="mt-4 text-[10px] leading-[1.6] text-[#566476] sm:text-[11px]">
            Growing businesses often have strong products and real market experience, but their digital presence does not always reflect it.
          </p>
          <ul className="mt-4 space-y-2 text-[9px] leading-[1.45] text-[#627083] sm:text-[10px]">
            {challenges.map((challenge) => (
              <li key={challenge} className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-[1px] text-[11px] leading-none text-[#F4A000]">⚠</span>
                {challenge}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[9px] leading-[1.55] text-[#566476] sm:text-[10px]">
            Deltaz helps SMEs connect content, SEO, social media, performance marketing, lead generation, and digital experiences into a more effective growth system.
          </p>
          <a href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#032D31] px-4 py-3 font-['Inter'] text-[9px] font-semibold !text-white transition-colors hover:bg-[#00D1E0] hover:!text-black">
            Grow Your Business With a Stronger Digital Strategy
            <img src={arrowIcon} alt="" className="h-[12px] w-[12px] object-contain" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default WhoWeHelpSMEs;
