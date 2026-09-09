import seoImage from "../assets/SEO.png";
import socialMediaImage from "../assets/Social Media.png";
import contentMarketingImage from "../assets/Content Marketing (2) for insights.png";
import readIcon from "../assets/Read icon.png";
import arrowIcon from "../assets/meteor-icons arrow-up-right (black).png";
import readArticleIcon from "../assets/meteor-icons_arrow-up-right (white).png";


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
  return (
    <section
      id="insights"
      className="
        relative
        min-h-[730px]
        w-full
        overflow-hidden
        bg-[#071F22]
        px-[16px]
        py-[50px]
        sm:px-[24px]
        sm:py-[58px]
        lg:px-[32px]
        lg:py-[62px]
      "
    >
      {/* Soft decorative glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[-160px]
          top-[30px]
          h-[480px]
          w-[360px]
          rounded-full
          bg-[#08737D]/10
          blur-[110px]
        "
      />

      {/* =====================================================
          SECTION HEADER
      ====================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[900px]
          flex-col
          items-center
          text-center
        "
      >
        {/* Label */}
        <div
          className="
            flex
            items-center
            gap-[7px]
            font-['Inter']
            text-[9px]
            font-medium
            leading-none
            text-[#C5D1D2]
            sm:text-[11px]
          "
        >
          <span className="flex items-center">
          </span>

          <span>Latest Insights</span>
        </div>

        {/* Main heading — MANROPE */}
        <h2
          className="
            mt-[18px]
            max-w-[700px]
            font-['Manrope']
            text-[33px]
            font-bold
            leading-[1.08]
            tracking-[-1.25px]
            text-[#F3F7F7]
            sm:text-[33px]
            sm:tracking-[-1.5px]
            lg:text-[37px]
            lg:tracking-[-1.6px]
          "
        >
          Ideas, Insights &amp; Strategies for
          <br />
          <span className="font-['Plus_Jakarta_Sans'] text-[#18D0E4]">Business Growth</span>
        </h2>

        {/* Description — INTER */}
        <p
          className="
            mt-[16px]
            max-w-[700px]
            font-['Plus_Jakarta_Sans']
            text-[10px]
            font-normal
            leading-[1.45]
            text-[#8EA5A6]
            sm:text-[11px]
          "
        >
          Discover practical marketing insights, proven strategies, and fresh
          ideas to help your business grow, reach the right audience, and stay
          ahead.
        </p>
      </div>

      {/* =====================================================
          ARTICLE CARDS
      ====================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          mt-[32px]
          grid
          w-full
          max-w-[1080px]
          grid-cols-1
          gap-[14px]
          sm:mt-[36px]
          sm:grid-cols-2
          lg:mt-[34px]
          lg:grid-cols-3
          lg:gap-[10px]
        "
      >
        {articles.map((article) => (
          <InsightCard key={article.title} article={article} />
        ))}
      </div>

      {/* =====================================================
          VIEW ALL BLOGS
      ====================================================== */}
      <div className="relative z-10 flex justify-center">
        <a
          href="#blogs"
          className="
            group
            mt-[35px]
            inline-flex
            h-[34px]
            items-center
            justify-center
            gap-[7px]
            rounded-full
            border
            border-white
            bg-transparent
            px-[18px]
            font-['Inter']
            text-[12px]
            font-bold
            leading-none
            !text-[white]
            transition-all
            duration-200
            ease-out
            hover:border-[#18D0E4]
            hover:bg-[#18D0E4]
            hover:!text-black
            hover:shadow-[0_0_20px_rgba(32,185,68,0.25)]
          "
        >
          <span className="">View All Blogs</span>

                   <img 
            src={readArticleIcon} 
            alt="" 
            aria-hidden="true" 
            className=" 
              block 
              h-[15px] 
              w-[16px] 
              object-contain 
              transition-transform 
              duration-200 
              ease-out 
              group-hover:hidden
            " 
          />

          <img 
            src={arrowIcon} 
            alt="" 
            aria-hidden="true" 
            className=" 
              hidden 
              h-[15px] 
              w-[16px] 
              object-contain 
              transition-transform 
              duration-200 
              ease-out 
              group-hover:block
              group-hover:translate-x-[1px] 
              group-hover:-translate-y-[1px]
            " 
          />
        </a>
      </div>
    </section>
  );
}

function InsightCard({ article }) {
  return (
    <article
      className="
        group
        relative
        flex
        min-h-[385px]
        w-full
        flex-col
        overflow-hidden
        rounded-[8px]
        border
        border-[#1A5B60]
        bg-[#0C383C]
        p-[7px]
        transition-all
        duration-200
        ease-out
        hover:-translate-y-[2px]
        hover:border-[#208B93]
        hover:bg-[#0E4145]
        sm:min-h-[390px]
        lg:min-h-[390px]
      "
    >
      {/* =====================================================
          IMAGE — INCREASED HEIGHT
      ====================================================== */}
      <div
        className="
          relative
          h-[230px]
          w-full
          shrink-0
          overflow-hidden
          rounded-[5px]
          sm:h-[235px]
          lg:h-[190px]
        "
      >
        <img
          src={article.image}
          alt={article.title}
          className="
            block
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            ease-out
            group-hover:scale-[1.025]
          "
        />

        {/* Category badge */}
        <span
          className="
            absolute
            left-[7px]
            top-[7px]
            inline-flex
            h-[19px]
            items-center
            rounded-full
            border
            border-white/40
            bg-[#163C3E]/80
            px-[9px]
            font-['Inter']
            text-[8px]
            font-normal
            leading-none
            text-white
            backdrop-blur-[3px]
          "
        >
          {article.category}
        </span>
      </div>

      {/* =====================================================
          CARD CONTENT
      ====================================================== */}
      <div className="flex flex-1 flex-col px-[2px] pt-[11px]">
        {/* Read time — INTER */}
        <div
          className="
            flex
            items-center
            gap-[5px]
            font-['Inter']
            text-[8px]
            font-normal
            leading-none
            text-[#A9C3C4]
          "
        >
          <img
            src={readIcon}
            alt=""
            aria-hidden="true"
            className="h-[12px] w-[12px] object-contain"
          />

          <span>Read Time: {article.readTime}</span>
        </div>

        {/* Card heading — PLUS JAKARTA SANS */}
        <h3
          className="
            mt-[15px]
            max-w-[320px]
            font-['Plus_Jakarta_Sans']
            text-[15px]
            font-bold
            leading-[1.14]
            tracking-[-0.35px]
            text-[#F2F7F7]
          "
        >
          {article.title}
        </h3>

        {/* Description — INTER */}
        <p
          className="
            mt-[11px]
            max-w-[350px]
            font-['Inter']
            text-[10px]
            font-normal
            leading-[1.45]
            text-[#8EA7A8]
          "
        >
          {article.description}
        </p>

        {/* Read Article button */}
        <div className="mt-auto pt-[15px]">
          <a
            href="#blogs"
            className="
              group/button
              inline-flex
              h-[27px]
              items-center
              justify-center
              gap-[6px]
              rounded-[4px]
              bg-[#0B8995]
              px-[11px]
              font-['Inter']
              text-[9.5px]
              font-medium
              leading-none
              text-white
              transition-all
              duration-200
              ease-out
              hover:bg-[#18D0E4]
              hover:text-[#06272A]
            "
          >
            <span>Read Articles</span>

            <img
              src={readArticleIcon}
              alt=""
              aria-hidden="true"
              className="
                h-[12px]
                w-[12px]
                object-contain
                transition-transform
                duration-200
                group-hover/button:translate-x-[2px]
                group-hover/button:-translate-y-[1px]
              "
            />
          </a>
        </div>
      </div>
    </article>
  );
}

export default LatestInsights;