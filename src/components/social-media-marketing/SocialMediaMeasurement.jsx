import reachIcon from "../../assets/reach.png";
import engagementIcon from "../../assets/engagement rate.png";
import followerIcon from "../../assets/follower growth.png";
import trafficIcon from "../../assets/website traffic.png";
import leadsIcon from "../../assets/leads.png";
import conversionIcon from "../../assets/conversion activities.png";

const metrics = [
  [reachIcon, "Reach & Impressions", "Targeted brand visibility"],
  [engagementIcon, "Engagement Rate", "Audience interest & response"],
  [followerIcon, "Follower Growth", "Relevant audience scale"],
  [trafficIcon, "Website Traffic", "Direct referral visitors"],
  [leadsIcon, "Social Enquiries & Leads", "Inbound commercial opportunities"],
  [conversionIcon, "Conversion Activity", "Measurable commercial ROI"],
];

function SocialMediaMeasurement() {
  return (
    <section className="bg-[#EFF8F8] px-5 py-14 font-['Plus_Jakarta_Sans'] text-[#092B31] sm:px-8 sm:py-16">
      <div className="mx-auto max-w-[920px]">
        <header className="text-center">
          <span className="inline-flex rounded-full bg-[#C9F0EB] px-3 py-1 font-['Inter'] text-[8px] font-bold uppercase tracking-[0.08em] text-[#15474A]">
            Performance
          </span>
          <h2 className="mt-3 font-['Plus_Jakarta_Sans'] text-[clamp(24px,3.5vw,34px)] font-extrabold leading-[1.1]">
            Measure What Actually Matters.
          </h2>
          <p className="mt-3 text-[10px] leading-[1.5] text-[#678187] sm:text-[12px]">
            Reach is useful. Business impact is better. We track social media against commercial objectives.
          </p>
        </header>

        <div className="mt-9 grid gap-5 lg:grid-cols-[0.88fr_1.22fr]">
          <article className="rounded-[12px] bg-[#032D31] p-6 text-white sm:p-7">
            <p className="font-['Inter'] text-[8px] font-bold uppercase tracking-[0.1em] text-[#00C5B5]">
              Deliverables Focus
            </p>
            <h3 className="mt-4 font-['Plus_Jakarta_Sans'] text-[clamp(20px,2.7vw,26px)] font-extrabold leading-[1.2]">
              RESULTS ARE EASIER TO TALK ABOUT <span className="text-[#00C5B5]">THAN TO DELIVER.</span>
            </h3>
            <p className="mt-4 text-[10px] leading-[1.6] text-[#B4CDCE] sm:text-[11px]">
              Deltaz measures social media work by real business outcomes — lead enquiries, audience trust, site conversions, and long-term brand authority.
            </p>
            <a href="/contact" className="mt-5 inline-flex items-center gap-2 font-['Arimo'] text-[10px] font-bold text-[#00C5B5]">
              Get Started With Deltaz <span aria-hidden="true">→</span>
            </a>
          </article>

          <div className="grid gap-3 sm:grid-cols-2">
            {metrics.map(([icon, title, description]) => (
              <article key={title} className="flex min-h-[70px] items-center gap-3 rounded-[9px] border border-[#C9E9E7] bg-white px-4 py-3 shadow-[0_3px_8px_rgba(24,60,65,0.04)]">
                <span className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-[7px] bg-[#DDF7F3]">
                  <img src={icon} alt="" className="h-[16px] w-[16px] object-contain" />
                </span>
                <div>
                  <h4 className="font-['Arimo'] text-[10px] font-bold text-[#12343A]">{title}</h4>
                  <p className="mt-0.5 text-[8px] text-[#71878C]">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialMediaMeasurement;
