import foundersIcon from "../../assets/Founders.png";
import startupIcon from "../../assets/Startup.png";
import leadershipIcon from "../../assets/leadership.png";

const guestTypes = [
  [foundersIcon, "CEOs & Founders", "Share the decisions, experiences, and lessons behind the business you’re building in the UAE and beyond."],
  [startupIcon, "Startup Owners", "Talk about the idea, challenge, pivot, or opportunity that brought your startup to life."],
  [leadershipIcon, "Industry Experts", "Bring your perspective, expertise, and predictions to the conversation, inspiring peers and future builders."],
];

function BeOurNextGuests() {
  return (
    <section className="bg-[#F2F9F8] px-5 py-14 font-['Manrope'] text-[#12383C] sm:px-8 sm:py-16">
      <div className="mx-auto max-w-[850px]">
        <header className="text-center">
          <p className="font-['Inter'] text-[8px] font-bold uppercase tracking-[0.1em] text-[#23676B]">Ideal Guests</p>
          <h2 className="mx-auto mt-2 max-w-[560px] font-['Arimo'] text-[clamp(24px,3.6vw,32px)] font-bold leading-[1.1]">
            Who Should Be Sitting Across
            <span className="block">From Us?</span>
          </h2>
          <p className="mt-3 text-[10px] text-[#71858A] sm:text-[11px]">If You’ve Built Something, Learned Something or Have Something Worth Saying — You.</p>
        </header>

        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {guestTypes.map(([icon, title, description]) => (
            <article key={title} className="rounded-[10px] border border-[#EBF0EF] bg-white p-4 shadow-[0_10px_16px_rgba(24,60,65,0.12)] sm:p-5">
              <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[8px] bg-[#C6F0EB]">
                <span
                  aria-hidden="true"
                  className="h-[15px] w-[15px] bg-black"
                  style={{
                    WebkitMaskImage: `url("${icon}")`,
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    WebkitMaskSize: "contain",
                    maskImage: `url("${icon}")`,
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                    maskSize: "contain",
                  }}
                />
              </span>
              <h3 className="mt-4 font-['Arimo'] text-[12px] font-bold">{title}</h3>
              <p className="mt-2 text-[9px] leading-[1.55] text-[#71858A]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BeOurNextGuests;
