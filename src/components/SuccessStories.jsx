import successImage from "../assets/image for strategy.png";
import wavesImage from "../assets/Waves for success stories.png";
import searchIcon from "../assets/icon.png";
import arrowIcon from "../assets/meteor-icons arrow-up-right (green).png";
import growthArrow from "../assets/Arrow with bar upward.png";

function SuccessStories() {
  return (
    <section
      id="success-stories"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#08272A]
        px-[16px]
        py-[56px]
        sm:px-[24px]
        sm:py-[64px]
        lg:min-h-[760px]
        lg:px-[20px]
        lg:py-0
      "
    >
      {/* =========================================================
          MAIN BACKGROUND WAVES
      ========================================================= */}
      <img
        src={wavesImage}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-115px]
          top-[-55px]
          z-0
          h-[300px]
          w-[300px]
          object-contain
          opacity-55
          sm:right-[-90px]
          sm:top-[-60px]
          sm:h-[380px]
          sm:w-[380px]
          lg:right-[-35px]
          lg:top-[-45px]
          lg:h-[500px]
          lg:w-[500px]
          lg:opacity-85
        "
      />

      {/* =========================================================
          HEADING
      ========================================================= */}
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
          lg:pt-[52px]
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
            sm:text-[10px]
            lg:text-[11px]
          "
        >
          <span className="flex items-center">
            <span
              className="
                h-[12px]
                w-[12px]
                rounded-full
                bg-[#08737D]
                sm:h-[14px]
                sm:w-[14px]
              "
            />
            <span
              className="
                -ml-[6px]
                h-[12px]
                w-[12px]
                rounded-full
                bg-[#1AA1AE]
                sm:h-[14px]
                sm:w-[14px]
              "
            />
          </span>

          <span>Success Stories</span>
        </div>

        {/* Heading */}
        <h2
          className="
            mt-[18px]
            font-['Manrope']
            text-[29px]
            font-bold
            leading-[1.08]
            tracking-[-1.2px]
            text-[#F3F7F7]
            sm:text-[34px]
            sm:tracking-[-1.5px]
            lg:text-[38px]
            lg:tracking-[-1.7px]
          "
        >
          Turn Your Marketing Into Real
          <br />
          <span className="text-[#18D0E4]">Business Growth</span>
        </h2>

        {/* Description */}
        <p
          className="
            mt-[14px]
            max-w-[620px]
            font-['Inter']
            text-[9px]
            font-normal
            leading-[1.5]
            text-[#8EA5A6]
            sm:mt-[16px]
            sm:text-[10px]
          "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* =========================================================
          CARDS
          
          MOBILE:
          One clean vertical column.

          DESKTOP:
          Original 3-column Figma composition.
      ========================================================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          mt-[38px]
          flex
          w-full
          max-w-[560px]
          flex-col
          gap-[12px]
          lg:mt-[43px]
          lg:grid
          lg:w-fit
          lg:max-w-none
          lg:grid-cols-[420px_265px_220px]
          lg:grid-rows-[215px_210px]
          lg:gap-[11px]
        "
      >
        {/* =======================================================
            STRATEGY IMAGE
        ======================================================= */}
        <article
          className="
            relative
            h-[390px]
            w-full
            overflow-hidden
            rounded-[11px]
            sm:h-[430px]
            lg:row-span-2
            lg:h-[436px]
            lg:w-[420px]
          "
        >
          {/* Image itself is the frame */}
          <img
            src={successImage}
            alt="Marketing team working together"
            className="
              absolute
              inset-0
              block
              h-full
              w-full
              rounded-[11px]
              object-cover
              object-center
            "
          />

          {/* Gradient */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-[11px]
              bg-gradient-to-t
              from-[#087B83]/95
              via-[#087B83]/25
              to-transparent
            "
          />

          {/* Content */}
          <div
            className="
              absolute
              bottom-[20px]
              left-[19px]
              right-[19px]
              sm:bottom-[24px]
              sm:left-[23px]
              sm:right-[23px]
            "
          >
            <h3
              className="
                max-w-[350px]
                font-['Manrope']
                text-[22px]
                font-bold
                leading-[1.1]
                tracking-[-0.7px]
                text-white
                sm:text-[25px]
              "
            >
              Strategy That Creates
              <br />
              Impact
            </h3>

            <p
              className="
                mt-[10px]
                max-w-[390px]
                font-['Inter']
                text-[9px]
                font-normal
                leading-[1.5]
                text-[#D4EEEE]
                sm:text-[10px]
              "
            >
              From smart campaigns to creative digital solutions, we turn your
              marketing goals into measurable growth.
            </p>

            <a
              href="#services"
              className="
                group
                mt-[15px]
                inline-flex
                h-[33px]
                items-center
                justify-center
                gap-[7px]
                rounded-full
                bg-white
                px-[14px]
                font-['Manrope']
                text-[8px]
                font-semibold
                leading-none
                !text-[#0B8995]
                transition-all
                duration-200
                hover:bg-[#18D0E4]
                sm:mt-[17px]
                sm:h-[35px]
                sm:px-[15px]
                sm:text-[9px]
              "
            >
              <span>Explore Our Results</span>

              <img
                src={arrowIcon}
                alt=""
                aria-hidden="true"
                className="
                  h-[13px]
                  w-[13px]
                  object-contain
                  transition-transform
                  duration-200
                  group-hover:translate-x-[2px]
                  group-hover:-translate-y-[2px]
                "
              />
            </a>
          </div>
        </article>

        {/* =======================================================
            RIGHT TOP AREA

            On mobile these are separate full-width cards.
        ======================================================= */}
        <article
          className="
            relative
            min-h-[205px]
            w-full
            overflow-hidden
            rounded-[11px]
            border
            border-[#1A6267]/75
            bg-[#0C383C]
            p-[19px]
            sm:min-h-[215px]
            sm:p-[21px]
            lg:h-[215px]
            lg:min-h-0
            lg:w-[265px]
          "
        >
          {/* Supplied complete icon */}
          <img
            src={searchIcon}
            alt=""
            aria-hidden="true"
            className="
              block
              h-[40px]
              w-[40px]
              object-contain
            "
          />

          <h3
            className="
              mt-[12px]
              font-['Manrope']
              text-[14px]
              font-semibold
              leading-none
              text-[#F0F7F7]
            "
          >
            From Visibility to Growth
          </h3>

          <p
            className="
              mt-[10px]
              max-w-[430px]
              font-['Inter']
              text-[9px]
              font-normal
              leading-[1.5]
              text-[#91AAAB]
              lg:max-w-[225px]
            "
          >
            Our SEO strategy helped increase organic visibility, attract
            qualified traffic, and turn searches into real business
            opportunities.
          </p>

          <a
            href="#services"
            className="
              group
              mt-[13px]
              inline-flex
              h-[30px]
              items-center
              justify-center
              gap-[6px]
              rounded-full
              bg-white
              px-[12px]
              font-['Manrope']
              text-[9px]
              font-semibold
              leading-none
              !text-[#0B8995]
              transition-all
              duration-200
              hover:bg-[#18D0E4]
            "
          >
            <span>View Results</span>

            <img
              src={arrowIcon}
              alt=""
              aria-hidden="true"
              className="
                h-[12px]
                w-[12px]
                object-contain
                transition-transform
                duration-200
                group-hover:translate-x-[1px]
                group-hover:-translate-y-[1px]
              "
            />
          </a>
        </article>

        {/* =======================================================
            STATISTICS
        ======================================================= */}
        <article
          className="
            relative
            min-h-[205px]
            w-full
            overflow-hidden
            rounded-[11px]
            border
            border-[#1A6267]/75
            bg-[#0D393D]
            px-[18px]
            py-[20px]
            shadow-[0_8px_28px_rgba(0,0,0,0.20)]
            sm:min-h-[215px]
            sm:px-[20px]
            lg:h-[215px]
            lg:min-h-0
            lg:w-[220px]
          "
        >
          {/* Soft glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              right-[-30px]
              top-[-35px]
              h-[155px]
              w-[155px]
              rounded-full
              bg-[#7BA7A9]/10
              blur-[30px]
            "
          />

          <div className="relative z-10">
            <div
              className="
                font-['DM_Serif_Display']
                text-[45px]
                font-normal
                leading-none
                tracking-[-1.4px]
                text-[#F4F8F8]
                sm:text-[48px]
              "
            >
              450<span>+</span>
            </div>

            <p
              className="
                mt-[8px]
                font-['Inter']
                text-[9px]
                font-normal
                text-[#8EA5A6]
                sm:text-[10px]
              "
            >
              Live Websites Launched
            </p>

            <div
              className="
                mt-[11px]
                h-px
                w-full
                bg-[#1B666B]/60
              "
            />

            <div
              className="
                mt-[14px]
                font-['DM_Serif_Display']
                text-[45px]
                font-normal
                leading-none
                tracking-[-1.4px]
                text-[#F4F8F8]
                sm:text-[48px]
              "
            >
              120<span>+</span>
            </div>

            <p
              className="
                mt-[8px]
                font-['Inter']
                text-[9px]
                font-normal
                text-[#8EA5A6]
                sm:text-[10px]
              "
            >
              Brands Supported
            </p>
          </div>
        </article>

        {/* =======================================================
            MARKETING RESULTS
        ======================================================= */}
        <article
          className="
            relative
            min-h-[225px]
            w-full
            overflow-hidden
            rounded-[11px]
            border
            border-[#18A5AF]/60
            bg-[#108893]
            px-[19px]
            py-[20px]
            sm:min-h-[235px]
            sm:px-[21px]
            sm:py-[21px]
            lg:col-span-2
            lg:h-[210px]
            lg:min-h-0
            lg:w-[496px]
          "
        >
          {/* =====================================================
              WAVES INSIDE GREEN CARD
          ===================================================== */}
          <img
            src={wavesImage}
            alt=""
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-[-48px]
              right-[-55px]
              z-0
              h-[235px]
              w-[330px]
              object-contain
              opacity-75
              sm:right-[-25px]
              sm:h-[255px]
              sm:w-[370px]
              lg:right-[-5px]
              lg:bottom-[-58px]
              lg:h-[250px]
              lg:w-[365px]
            "
          />

          {/* Extra wave layer */}
          <img
            src={wavesImage}
            alt=""
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-[-30px]
              right-[-5px]
              z-[1]
              h-[190px]
              w-[280px]
              object-contain
              opacity-30
              sm:right-[15px]
              lg:right-[25px]
              lg:h-[205px]
              lg:w-[300px]
            "
          />

          {/* Content */}
          <div
            className="
              relative
              z-10
              max-w-[310px]
            "
          >
            <h3
              className="
                font-['Manrope']
                text-[18px]
                font-semibold
                leading-[1.1]
                tracking-[-0.3px]
                text-white
                sm:text-[20px]
              "
            >
              Marketing That Delivers Results
            </h3>

            <p
              className="
                mt-[13px]
                max-w-[300px]
                font-['Inter']
                text-[9px]
                font-normal
                leading-[1.5]
                text-[#C9E7E8]
                sm:text-[10px]
              "
            >
              We combine creativity, strategy, and digital expertise to turn
              attention into measurable growth.
            </p>

            <a
              href="#success-stories"
              className="
                group
                mt-[17px]
                inline-flex
                h-[33px]
                items-center
                justify-center
                gap-[7px]
                rounded-full
                bg-white
                px-[14px]
                font-['Manrope']
                text-[8px]
                font-semibold
                leading-none
                !text-[#0B8995]
                transition-all
                duration-200
                hover:bg-[#18D0E4]
                sm:mt-[19px]
                sm:h-[34px]
                sm:px-[15px]
                sm:text-[9px]
              "
            >
              <span>View Success Stories</span>

              <img
                src={arrowIcon}
                alt=""
                aria-hidden="true"
                className="
                  h-[13px]
                  w-[13px]
                  object-contain
                  transition-transform
                  duration-200
                  group-hover:translate-x-[2px]
                  group-hover:-translate-y-[2px]
                "
              />
            </a>
          </div>

          {/* Actual supplied growth graphic */}
          <img
            src={growthArrow}
            alt=""
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-[8px]
              right-[5px]
              z-10
              h-[105px]
              w-[145px]
              object-contain
              sm:right-[10px]
              sm:h-[115px]
              sm:w-[165px]
              lg:right-[13px]
              lg:h-[125px]
              lg:w-[178px]
            "
          />
        </article>
      </div>
    </section>
  );
}

export default SuccessStories;