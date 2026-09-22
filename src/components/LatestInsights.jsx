import seoImage from "../assets/SEO.png";
import socialMediaImage from "../assets/Social Media.png";
import contentMarketingImage from "../assets/Content Marketing (2) for insights.png";
import readIcon from "../assets/Read icon.png";
import blackArrowIcon from "../assets/meteor-icons arrow-up-right (black).png";
import whiteArrowIcon from "../assets/meteor-icons_arrow-up-right (white).png";

import { useTheme } from "../context/useTheme";

const articles = [
  {
    category: "SEO",
    image: seoImage,
    readTime: "6 min read",
    title: "How Semantic Search Is Reshaping Keyword Strategy In 2026",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    category: "Social Media",
    image: socialMediaImage,
    readTime: "5 min read",
    title: "Social Media Strategies That Turn Attention Into Growth",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    category: "Content Marketing",
    image: contentMarketingImage,
    readTime: "7 min read",
    title: "Content That Builds Trust And Drives Results",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

function LatestInsights() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section
      id="insights"
      className={`relative min-h-[730px] w-full overflow-hidden px-[16px] py-[50px] transition-colors duration-300 sm:px-[24px] sm:py-[58px] lg:px-[32px] lg:py-[62px] ${
        isLight ? "bg-[#F7FBFB]" : "bg-[#071F22]"
      }`}
    >
      {isLight && (
        <>
          <div className="pointer-events-none absolute -left-[170px] -top-[165px] h-[490px] w-[470px] rounded-full bg-[#A8DFE0]/27 blur-[125px]" />
          <div className="pointer-events-none absolute -bottom-[260px] -left-[165px] h-[500px] w-[560px] rounded-full bg-[#69C5C8]/34 blur-[130px]" />
          <div className="pointer-events-none absolute -bottom-[250px] -right-[165px] h-[520px] w-[570px] rounded-full bg-[#6AC8CB]/30 blur-[135px]" />
          <div className="pointer-events-none absolute right-[10%] top-[80px] h-[260px] w-[350px] rounded-full bg-[#E4F6F6]/52 blur-[100px]" />
        </>
      )}

      {!isLight && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-160px] top-[30px] h-[480px] w-[360px] rounded-full bg-[#08737D]/10 blur-[110px]"
        />
      )}

      <div className="relative z-10 mx-auto flex w-full max-w-[900px] flex-col items-center text-center">
        <div
          className={`font-['Inter'] text-[9px] font-medium leading-none sm:text-[11px] ${
            isLight ? "text-[#00737C]" : "text-[#C5D1D2]"
          }`}
        >
          Latest Insights
        </div>

        <h2
          className={`mt-[18px] max-w-[700px] font-['Manrope'] text-[33px] font-bold leading-[1.08] tracking-[-1.25px] sm:text-[33px] sm:tracking-[-1.5px] lg:text-[37px] lg:tracking-[-1.6px] ${
            isLight ? "text-[#25282B]" : "text-[#F3F7F7]"
          }`}
        >
          Ideas, Insights &amp; Strategies for
          <br />
          <span
            className={
              isLight
                ? "font-['Plus_Jakarta_Sans'] bg-[linear-gradient(100deg,#0A5961_0%,#075F86_44%,#0078B6_72%,#00A6D8_100%)] bg-clip-text text-transparent drop-shadow-[0_1px_5px_rgba(0,133,190,0.18)]"
                : "font-['Plus_Jakarta_Sans'] text-[#18D0E4]"
            }
          >
            Business Growth
          </span>
        </h2>

        <p
          className={`mt-[16px] max-w-[700px] font-['Plus_Jakarta_Sans'] text-[10px] font-normal leading-[1.45] sm:text-[11px] ${
            isLight ? "text-[#354E50]" : "text-[#8EA5A6]"
          }`}
        >
          Discover practical marketing insights, proven strategies, and fresh
          ideas to help your business grow, reach the right audience, and stay
          ahead.
        </p>
      </div>

      <div className="relative z-10 mx-auto mt-[32px] grid w-full max-w-[1080px] grid-cols-1 gap-[14px] sm:mt-[36px] sm:grid-cols-2 lg:mt-[34px] lg:grid-cols-3 lg:gap-[10px]">
        {articles.map((article) => (
          <InsightCard
            key={article.title}
            article={article}
            isLight={isLight}
          />
        ))}
      </div>

      <div className="relative z-10 flex justify-center">
        <a
          href="#blogs"
          className={`group mt-[35px] inline-flex h-[34px] items-center justify-center gap-[7px] rounded-full border px-[18px] font-['Inter'] text-[12px] font-bold leading-none transition-all duration-200 ease-out ${
            isLight
              ? "border-[#007E87] bg-[#007E87] text-white hover:border-[#152B2D] hover:bg-transparent hover:!text-black"
              : "border-white bg-transparent !text-white hover:border-[#18D0E4] hover:bg-[#18D0E4] hover:!text-black"
          }`}
        >
          <span className={isLight ? "text-white group-hover:text-black" : ""}>
            View All Blogs
          </span>

          <img
            src={whiteArrowIcon}
            alt=""
            aria-hidden="true"
            className="block h-[15px] w-[16px] object-contain transition-transform duration-200 ease-out group-hover:hidden"
          />

          <img
            src={blackArrowIcon}
            alt=""
            aria-hidden="true"
            className="hidden h-[15px] w-[16px] object-contain transition-transform duration-200 ease-out group-hover:block group-hover:translate-x-[1px] group-hover:-translate-y-[1px]"
          />
        </a>
      </div>
    </section>
  );
}

function InsightCard({ article, isLight }) {
  return (
    <article
      className={`group relative flex min-h-[385px] w-full flex-col overflow-hidden rounded-[8px] border p-[7px] transition-all duration-200 ease-out sm:min-h-[390px] lg:min-h-[390px] ${
        isLight
          ? "border-[#E2EEEE] bg-[#FCFEFE] shadow-[0_4px_14px_rgba(11,82,87,0.08)] hover:-translate-y-[2px] hover:border-[#63BFC2] hover:shadow-[0_10px_24px_rgba(0,112,120,0.16)]"
          : "border-[#1A5B60] bg-[#0C383C] hover:-translate-y-[2px] hover:border-[#208B93] hover:bg-[#0E4145]"
      }`}
    >
      <div className="relative h-[230px] w-full shrink-0 overflow-hidden rounded-[5px] sm:h-[235px] lg:h-[190px]">
        <img
          src={article.image}
          alt={article.title}
          className="block h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
        />

        <span
          className={`absolute left-[7px] top-[7px] inline-flex h-[19px] items-center rounded-full border px-[9px] font-['Inter'] text-[8px] font-normal leading-none transition-all duration-200 ${
            isLight
              ? "border-white/80 bg-black/35 text-white shadow-[0_1px_5px_rgba(0,0,0,0.45)] group-hover:border-[#008E98] group-hover:bg-[#008E98] group-hover:text-white"
              : "border-white/40 bg-[#163C3E]/80 text-white group-hover:border-[#18D0E4] group-hover:bg-[#18D0E4] group-hover:text-[#06272A]"
          }`}
        >
          {article.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-[2px] pt-[11px]">
        <div
          className={`flex items-center gap-[5px] font-['Inter'] text-[8px] font-normal leading-none ${
            isLight ? "text-[#526A6C]" : "text-[#A9C3C4]"
          }`}
        >
          <img
            src={readIcon}
            alt=""
            aria-hidden="true"
            className="h-[12px] w-[12px] object-contain"
          />
          <span>Read Time: {article.readTime}</span>
        </div>

        <h3
          className={`mt-[15px] max-w-[320px] font-['Plus_Jakarta_Sans'] text-[15px] font-bold leading-[1.14] tracking-[-0.35px] ${
            isLight ? "text-[#25282B]" : "text-[#F2F7F7]"
          }`}
        >
          {article.title}
        </h3>

        <p
          className={`mt-[11px] max-w-[350px] font-['Inter'] text-[10px] font-normal leading-[1.45] ${
            isLight ? "text-[#5F7678]" : "text-[#8EA7A8]"
          }`}
        >
          {article.description}
        </p>

        <div className="mt-auto pt-[15px]">
          <a
            href="#blogs"
            className={`group/button inline-flex h-[27px] items-center justify-center gap-[6px] rounded-[4px] px-[11px] font-['Inter'] text-[9.5px] font-medium leading-none transition-all duration-200 ease-out ${
              isLight
                ? "bg-[#007E87] text-white hover:bg-[#18D0E4] hover:text-[#06272A]"
                : "bg-[#0B8995] text-white hover:bg-[#18D0E4] hover:text-[#06272A]"
            }`}
          >
            <span className="text-white group-hover/button:text-[#06272A]">
              Read Articles
            </span>

            <img
              src={whiteArrowIcon}
              alt=""
              aria-hidden="true"
              className="block h-[12px] w-[12px] object-contain transition-transform duration-200 group-hover/button:hidden"
            />

            <img
              src={blackArrowIcon}
              alt=""
              aria-hidden="true"
              className="hidden h-[12px] w-[12px] object-contain transition-transform duration-200 group-hover/button:block group-hover/button:translate-x-[2px] group-hover/button:-translate-y-[1px]"
            />
          </a>
        </div>
      </div>
    </article>
  );
}

export default LatestInsights;
