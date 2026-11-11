import touchpointsIcon from "../../assets/touchpoints.png";
import brandConnectionIcon from "../../assets/brand connection.png";
import resultIcon from "../../assets/result.png";

function BrandingExperience() {
  return (
    <section
      aria-labelledby="branding-experience-heading"
      className="
        w-full bg-[#EFF7F7]
        px-5 py-12
        font-['Plus_Jakarta_Sans']
        text-[#12343A]
        sm:px-8 sm:py-[60px]
      "
    >
      <div className="mx-auto w-full max-w-[760px]">
        <div className="flex flex-col items-center text-center">
          <h2
            id="branding-experience-heading"
            className="
              font-['Plus_Jakarta_Sans']
              text-[clamp(18px,3vw,28px)]
              font-extrabold leading-[1.15]
              tracking-[-0.035em]
            "
          >
            <span className="block text-[#172D33]">
              Your Experience Is Valuable.
            </span>
            <span className="block text-[#66828A]">
              But Experience Alone Doesn’t Build Market Authority.
            </span>
          </h2>
          <span
            aria-hidden="true"
            className="mt-[12px] h-[2px] w-[32px] rounded-full bg-[#00B8AA]"
          />
        </div>

        <div
          className="
            mt-7 grid grid-cols-1 gap-4
            min-[480px]:grid-cols-2
            sm:mt-10 sm:gap-5
          "
        >
          <article
            className="
              min-w-0 rounded-[8px] border border-[#E5EEEE] flex flex-col
              bg-white p-5
              shadow-[0_3px_8px_rgba(24,60,65,0.08)]
              sm:p-6
            "
          >
            <span
              aria-hidden="true"
              className="
                flex h-[18px] w-[18px] items-center justify-center
                rounded-[5px] bg-[#FFF1D1]
                font-['Inter'] text-[10px] font-bold text-[#D88A12]
              "
            >
              <img src={touchpointsIcon} alt="" className="h-[11px] w-[11px] object-contain" />
            </span>
            <h3
              className="
                mt-3
                font-['Arimo'] text-[12px] font-extrabold
                leading-[1.35] text-[#17343A]
                sm:text-[14px]
              "
            >
              Inconsistent Touchpoints Dilute Credibility
            </h3>
            <p className="mt-[10px] text-[10px] leading-[1.65] text-[#71878C] sm:text-[12px]">
              Prospects see your LinkedIn, search results, site, or interviews.
              When those touchpoints are incomplete, inconsistent or generic,
              your market understands what your company does without
              understanding why you are worth listening to.
            </p>
            <p className="mt-2 text-[10px] leading-[1.65] text-[#71878C] sm:text-[12px]">
              Unconnected digital touchpoints leave your expertise hidden
              behind client meetings and closed boardrooms.
            </p>
            <div className="mt-auto border-t border-[#EEF2F2] pt-4">
              <p className="flex items-start gap-1.5 whitespace-nowrap text-[8px] font-semibold leading-[1.5] text-[#DB7925] sm:text-[9px]">
                <img src={resultIcon} alt="" className="mt-[2px] h-[10px] w-[10px] shrink-0 object-contain" />
                Result: Expertise stays invisible to the people who need to see it.
              </p>
            </div>
          </article>

          <article
            className="
              relative min-w-0 overflow-hidden rounded-[8px] flex flex-col
              bg-[linear-gradient(135deg,#0A4849_0%,#064347_100%)]
              p-5 text-white
              shadow-[0_4px_10px_rgba(7,54,57,0.16)]
              sm:p-6
            "
          >
            <span
              aria-hidden="true"
              className="
                flex h-[18px] w-[18px] items-center justify-center
                rounded-[5px] bg-[#087F75]
                font-['Inter'] text-[10px] font-bold text-[#00D3B7]
              "
            >
              <img src={brandConnectionIcon} alt="" className="h-[11px] w-[11px] object-contain" />
            </span>
            <h3
              className="
                mt-3
                font-['Arimo'] text-[12px] font-extrabold
                leading-[1.35] text-white
                sm:text-[14px]
              "
            >
              Your Name Can Strengthen the Company Behind It
            </h3>
            <p className="mt-[10px] text-[10px] leading-[1.65] text-[#B6D1D1] sm:text-[12px]">
              For founder-led businesses, your reputation directly influences
              how prospects perceive the enterprise.
            </p>
            <p className="mt-2 text-[10px] leading-[1.65] text-[#B6D1D1] sm:text-[12px]">
              We connect personal branding with content, SEO, social media, and
              lead generation so your personal and business brands work together
              to support growth.
            </p>
            <a
              href="/contact"
              className="
                mt-auto pt-4 inline-flex items-center gap-1
                font-['Inter'] text-[9px] font-bold
                uppercase tracking-[0.035em] text-[#00C5B5]
                transition-colors hover:text-white
                sm:text-[10px]
              "
            >
              Connect personal brand with business
              <span aria-hidden="true">→</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

export default BrandingExperience;
