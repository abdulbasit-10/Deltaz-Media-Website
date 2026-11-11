import instagramIcon from "../../assets/Instagram.png";
import linkedinIcon from "../../assets/Linked in.png";
import facebookIcon from "../../assets/Facebook.png";
import tiktokIcon from "../../assets/tiktok.png";
import otherChannelsIcon from "../../assets/Content Marketing icon.png";

const platforms = [
  [instagramIcon, "Instagram Marketing", "Build a stronger visual presence through Reels, Stories, carousels, educational content, product storytelling, and community engagement.", "VISUAL DISCOVERY"],
  [linkedinIcon, "LinkedIn Marketing", "Build professional credibility through thought leadership, business insights, expertise-led content, and executive visibility.", "B2B & AUTHORITY"],
  [tiktokIcon, "TikTok Marketing", "Use short-form, platform-native video content to reach new audiences and build discovery where the format fits your business.", "SHORT-FORM REACH"],
  [facebookIcon, "Facebook Marketing", "Support brand visibility, community engagement, local UAE audiences, targeted campaigns, and paid social activity.", "COMMUNITY & ADS"],
];

function FooterStyleIcon({ src }) {
  return (
    <span
      aria-hidden="true"
      className="block h-[17px] w-[17px] bg-white"
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

function SocialMediaPlatforms() {
  return (
    <section className="bg-[#EFF8F8] px-5 py-14 font-['Plus_Jakarta_Sans'] text-[#092B31] sm:px-8 sm:py-16">
      <div className="mx-auto max-w-[920px]">
        <header className="text-center">
          <span className="rounded-full bg-[#C9F0EB] px-3 py-1 font-['Inter'] text-[8px] font-bold uppercase tracking-[0.08em]">Platform Management</span>
          <h2 className="mt-3 font-['Plus_Jakarta_Sans'] text-[clamp(23px,3.4vw,31px)] font-extrabold">Every Platform Has a Different Job.</h2>
          <p className="mx-auto mt-3 max-w-[610px] text-[10px] leading-[1.55] text-[#678187] sm:text-[12px]">Fit content to how people actually use each channel — rather than simply cross-posting the same graphic everywhere.</p>
        </header>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {platforms.map(([icon, title, description, label]) => (
            <article key={title} className="rounded-[10px] border border-[#C9E9E7] bg-white p-4 shadow-[0_4px_12px_rgba(24,60,65,0.04)] sm:p-5">
              <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[8px] bg-[#00666C]">
                <FooterStyleIcon src={icon} />
              </span>
              <h3 className="mt-4 font-['Arimo'] text-[12px] font-bold">{title}</h3>
              <p className="mt-2 min-h-[84px] text-[9px] leading-[1.55] text-[#71878C]">{description}</p>
              <p className="mt-3 font-['Inter'] text-[7px] font-bold uppercase tracking-[0.04em]">{label}</p>
            </article>
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-3 rounded-[10px] bg-[#06383B] p-4 text-white sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <div className="flex items-center gap-3">
            <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[#087F75]"><img src={otherChannelsIcon} alt="" className="h-4 w-4 object-contain" /></span>
            <div><h3 className="font-['Arimo'] text-[11px] font-bold">Other Channels (YouTube, X, Snapchat, Threads)</h3><p className="mt-1 text-[8px] text-[#B4CDCE]">Depending on your specific UAE target audience, we expand strategies to fit relevant custom platforms.</p></div>
          </div>
          <span className="self-start rounded-full border border-[#087B78] px-3 py-1.5 font-['Inter'] text-[7px] text-[#00C5B5] sm:self-auto">Relevant Channels Only</span>
        </div>
      </div>
    </section>
  );
}

export default SocialMediaPlatforms;
