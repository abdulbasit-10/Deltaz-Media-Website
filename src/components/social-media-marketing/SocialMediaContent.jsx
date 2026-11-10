import reelsIcon from "../../assets/reels.png";
import carouselsIcon from "../../assets/carousels.png";
import thoughtIcon from "../../assets/thought.png";
import productIcon from "../../assets/product.png";
import brandIcon from "../../assets/brand.png";
import marketingIcon from "../../assets/Marketing.png";
import updatesIcon from "../../assets/updates.png";
import communityIcon from "../../assets/community.png";
import captionsIcon from "../../assets/captions.png";

const contentTypes = [
  [reelsIcon, "Reels & Videos"],
  [carouselsIcon, "Educational Carousels"],
  [thoughtIcon, "Thought Leadership"],
  [productIcon, "Product Stories"],
  [brandIcon, "Executive Personal Brand"],
  [marketingIcon, "Campaign Creative"],
  [updatesIcon, "Stories & Updates"],
  [communityIcon, "Community Content"],
  [captionsIcon, "Strategic Captions"],
];

function SocialMediaContent() {
  return (
    <section className="bg-[#032D31] px-5 py-14 font-['Plus_Jakarta_Sans'] text-white sm:px-8 sm:py-16">
      <div className="mx-auto grid max-w-[920px] gap-8 lg:grid-cols-[0.95fr_1.35fr] lg:items-center">
        <div>
          <span className="inline-flex rounded-full border border-[#08756F] bg-[#064A49] px-3 py-1 font-['Inter'] text-[8px] font-bold uppercase tracking-[0.08em] text-[#00C5B5]">
            Content Excellence
          </span>
          <h2 className="mt-4 font-['Plus_Jakarta_Sans'] text-[clamp(24px,3.2vw,32px)] font-extrabold leading-[1.12] tracking-[-0.03em]">
            Create Content People Have a Reason to Consume.
          </h2>
          <p className="mt-4 text-[11px] leading-[1.65] text-[#B4CDCE] sm:text-[12px]">
            Good social content can educate, demonstrate expertise, answer questions, show the product, tell the story behind the business, address objections, or simply give people a reason to remember your brand.
          </p>
          <div className="mt-5 rounded-[10px] bg-[#04272B] p-4">
            <h3 className="font-['Arimo'] text-[11px] font-bold text-[#00C5B5]">Consistency vs Relevance</h3>
            <p className="mt-1 text-[9px] leading-[1.55] text-[#A8C0C2]">
              Consistency matters, but relevance matters more. We build monthly systems that prevent the endless daily “what should we post today?” panic.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {contentTypes.map(([icon, label]) => (
            <article key={label} className="min-h-[62px] rounded-[9px] bg-[#04272B] p-3 sm:min-h-[70px] sm:p-4">
              <img src={icon} alt="" className="h-[15px] w-[15px] object-contain" />
              <h3 className="mt-2 font-['Arimo'] text-[9px] font-bold text-white sm:text-[10px]">{label}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialMediaContent;
