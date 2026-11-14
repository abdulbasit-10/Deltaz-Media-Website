import podcastIcon from "../../assets/full podcast.png";
import reelsIcon from "../../assets/reels.png";
import linkedinIcon from "../../assets/linkedin black.png";
import quotesIcon from "../../assets/quotes.png";

const assets = [
  [podcastIcon, "Full Podcast Episode", "Immersive deep dive into your business journey and leadership insights.", false],
  [reelsIcon, "Short-Form Video Clips", "Engaging vertical snippets engineered for maximum reach and engagement.", true],
  [linkedinIcon, "LinkedIn Video Content", "Professional thought leadership clips designed for B2B networking and visibility.", false],
  [quotesIcon, "Quotes & Brand Assets", "Key insights, quotes, and professional video assets built for your personal brand.", false],
];

function BeOurNextDistribution() {
  return (
    <section className="bg-white px-5 py-14 font-['Manrope'] text-[#0A3034] sm:px-8 sm:py-16">
      <div className="mx-auto max-w-[850px]">
        <header className="mx-auto max-w-[600px] text-center">
          <p className="font-['Inter'] text-[8px] font-bold uppercase tracking-[0.1em] text-[#23676B]">Repurposed Distribution</p>
          <h2 className="mt-2 font-['Arimo'] text-[clamp(23px,3.5vw,32px)] font-bold leading-[1.1]">
            One Conversation Has Multiple
            <span className="block">Ways to Be Seen.</span>
          </h2>
          <p className="mt-3 text-[10px] leading-[1.55] text-[#71858A] sm:text-[11px]">
            Your podcast appearance isn&apos;t just about the episode. With professional recording and content production, your conversation can become a collection of assets for your personal brand.
          </p>
        </header>

        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {assets.map(([icon, title, description, maskIcon]) => (
            <article key={title} className="rounded-[10px] border border-[#E0EAEA] bg-[#F3F9F8] p-4">
              <span className="flex h-[34px] w-[34px] items-center justify-center rounded-[8px] bg-[#C6F0EB]">
                {maskIcon ? (
                  <span
                    aria-hidden="true"
                    className="h-[17px] w-[17px] bg-black"
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
                ) : (
                  <img src={icon} alt="" className="h-[17px] w-[17px] object-contain" />
                )}
              </span>
              <h3 className="mt-3 font-['Arimo'] text-[12px] font-bold leading-[1.3]">{title}</h3>
              <p className="mt-2 text-[8px] leading-[1.5] text-[#71858A]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BeOurNextDistribution;
