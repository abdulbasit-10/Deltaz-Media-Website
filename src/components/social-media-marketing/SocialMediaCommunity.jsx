import communityIcon from "../../assets/news.png";
import marketingSystemIcon from "../../assets/frameworks.png";

const cards = [
  {
    icon: communityIcon,
    title: "Community Management Turns Content Into Conversation.",
    description:
      "Customers ask questions in comments. Prospects send DMs. Existing clients share feedback. Our team manages comment monitoring, direct messages, brand mentions, and enquiry routing.",
    items: [
      "Comment & DM Response Handling",
      "Rapid Sales Enquiry Escalation",
      "Brand Reputation & Feedback Care",
    ],
  },
  {
    icon: marketingSystemIcon,
    title: "Connect Social With Your Wider Marketing System.",
    description:
      "Social channels do not exist in isolation. Deltaz connects social discovery with SEO, performance ads, lead generation, and web conversion so every Reel or post drives business action.",
    tags: ["SEO Search", "Paid Ads", "Web Conversions", "Lead Gen"],
  },
];

function SocialMediaCommunity() {
  return (
    <section className="bg-white px-5 py-12 font-['Plus_Jakarta_Sans'] text-white sm:px-8 sm:py-16">
      <div className="mx-auto grid max-w-[920px] gap-4 md:grid-cols-2">
        {cards.map((card) => (
          <article
            key={card.title}
            className="min-h-[250px] rounded-[12px] bg-[#032D31] p-6 sm:p-7"
          >
            <span className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px] bg-[#064B4B]">
              <img src={card.icon} alt="" className="h-[16px] w-[16px] object-contain" />
            </span>
            <h2 className="mt-5 font-['Plus_Jakarta_Sans'] text-[clamp(16px,2vw,20px)] font-bold leading-[1.25]">
              {card.title}
            </h2>
            <p className="mt-3 text-[10px] leading-[1.65] text-[#B4CDCE] sm:text-[11px]">
              {card.description}
            </p>
            {card.items && (
              <ul className="mt-4 space-y-1.5 text-[9px] text-[#A8C0C2] sm:text-[10px]">
                {card.items.map((item) => (
                  <li key={item}>
                    <span className="mr-2 text-[#00C5B5]">✓</span>{item}
                  </li>
                ))}
              </ul>
            )}
            {card.tags && (
              <div className="mt-5 flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-[#08756F] px-3 py-1.5 text-[8px] text-[#00C5B5]">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default SocialMediaCommunity;
