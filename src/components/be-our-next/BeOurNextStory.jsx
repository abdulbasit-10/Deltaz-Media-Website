import storyImage from "../../assets/Podcast Studio Session.png";
import tickIcon from "../../assets/tick.png";

const storyPoints = [
  "What you believe.",
  "What you’ve learned.",
  "What you’ve got wrong.",
  "What you’d do differently.",
  "What you’re building next.",
];

function BeOurNextStory() {
  return (
    <section className="bg-[#F2F9F8] px-5 py-14 font-['Manrope'] text-[#12383C] sm:px-8 sm:py-16">
      <div className="mx-auto grid max-w-[845px] items-center gap-8 md:grid-cols-[1.2fr_0.9fr] md:gap-12">
        <div>
          <p className="font-['Inter'] text-[8px] font-bold uppercase tracking-[0.1em] text-[#23676B]">Beyond the Resume</p>
          <h2 className="mt-4 font-['Arimo'] text-[clamp(23px,3.3vw,31px)] font-bold leading-[1.12] tracking-[-0.025em]">
            There’s More to Your Success Than the Company You Built.
          </h2>
          <h3 className="mt-4 font-['Arimo'] text-[13px] font-bold leading-[1.35] text-[#23676B] sm:text-[14px]">
            Because People Want to Know the Person Behind the Success.
          </h3>
          <p className="mt-4 text-[10px] leading-[1.65] text-[#71858A] sm:text-[11px]">
            Your website can explain what your company does. Your LinkedIn profile can list your achievements. But a conversation lets people understand how you think.
          </p>
          <ul className="mt-4 space-y-2 font-['Manrope'] text-[10px] text-[#5C7277] sm:text-[11px]">
            {storyPoints.map((point) => <li key={point} className="flex items-center gap-2"><img src={tickIcon} alt="" className="h-[11px] w-[11px] shrink-0 object-contain" />{point}</li>)}
          </ul>
          <p className="mt-5 text-[10px] leading-[1.5] text-[#71858A] sm:text-[11px]">That’s the kind of content that gives a personal brand depth.</p>
        </div>

        <div className="mx-auto w-full max-w-[330px] rounded-[12px] bg-[#063B3E] p-[5px] shadow-[0_14px_22px_rgba(12,49,52,0.2)]">
          <img src={storyImage} alt="Business leader sharing her story in a podcast conversation" className="aspect-[1.12/1] w-full rounded-[8px] object-cover" />
        </div>
      </div>
    </section>
  );
}

export default BeOurNextStory;
