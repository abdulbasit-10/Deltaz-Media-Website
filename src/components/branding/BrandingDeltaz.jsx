import awarenessIcon from "../../assets/Social Media Icon.png";
import seoIcon from "../../assets/Seo optimization icon.png";
import leadIcon from "../../assets/lead symbol.png";
import locationIcon from "../../assets/Location icon.png";

const cards = [
  [awarenessIcon, "Awareness & Credibility", "Personal content creates awareness, while an optimized LinkedIn profile establishes instant executive credibility."],
  [seoIcon, "SEO & Social Reach", "Website and SEO strategies help people discover your expertise through search while social media extends your reach."],
  [leadIcon, "Lead Generation", "Turn relevant market attention into commercial conversations that support the entire customer journey."],
];

function BrandingDeltaz() {
  return (
    <section className="bg-[#062F33] px-5 py-16 font-['Plus_Jakarta_Sans'] text-white sm:px-8 sm:py-20">
      <div className="mx-auto max-w-[920px] text-center">
        <p className="font-['Plus_Jakarta_Sans'] text-[8px] font-bold uppercase tracking-[0.12em] text-[#00C5B5]">THE DELTAZ DIFFERENCE</p>
        <h2 className="mt-3 font-['Plus_Jakarta_Sans'] text-[clamp(25px,4vw,34px)] font-extrabold leading-[1.1]">Why Deltaz Media?</h2>
        <p className="mt-4 text-[11px] text-[#A8C0C2] sm:text-[13px]">Because personal branding works better when it is connected to the rest of your marketing strategy.</p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {cards.map(([icon, title, text]) => <article key={title} className="rounded-[11px] border border-[#0A565A] bg-[#063B3E] p-5 text-left"><img src={icon} alt="" className="h-5 w-5 object-contain" /><h3 className="mt-4 font-['Arimo'] text-[12px] font-bold">{title}</h3><p className="mt-3 text-[9px] leading-[1.55] text-[#AFC9CA] sm:text-[10px]">{text}</p></article>)}
        </div>
        <div className="relative mt-11 overflow-hidden rounded-[16px] border border-[#0A565A] bg-[radial-gradient(circle_at_92%_92%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(135deg,#02282C_0%,#011F23_100%)] px-6 py-9 shadow-[0_16px_30px_rgba(0,20,22,0.22),inset_0_1px_0_rgba(255,255,255,0.035)] sm:px-12">
          <span className="inline-flex rounded-full bg-[#08716D] px-3 py-1 font-['Inter'] text-[8px] font-bold uppercase tracking-[0.08em] text-[#00D2BE]">LONG-TERM IMPACT</span>
          <h3 className="mx-auto mt-4 max-w-[620px] font-['Plus_Jakarta_Sans'] text-[clamp(20px,3vw,28px)] font-extrabold leading-[1.15]">A Personal Brand Keeps Working After Content Is Published.</h3>
          <p className="mx-auto mt-4 max-w-[650px] text-[10px] leading-[1.6] text-[#B4CDCE] sm:text-[12px]">As your positioning becomes clearer, people understand what you stand for, what you know, and why they should trust you. That strengthens credibility with clients, partners, candidates, and media.</p>
          <div className="mx-auto mt-5 inline-flex items-center rounded-full border border-[#087B78] px-4 py-2 font-['Plus_Jakarta_Sans'] text-[9px] font-semibold text-[#00D2BE]"><img src={locationIcon} alt="" className="mr-2 h-3 w-3 object-contain" />Built to support your reputation, network, and business growth continuously.</div>
        </div>
      </div>
    </section>
  );
}

export default BrandingDeltaz;
