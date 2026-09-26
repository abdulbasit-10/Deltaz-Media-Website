import { useEffect, useState } from "react";
import heroWaves from "../assets/Waves for hero section.png";
import arrowIcon from "../assets/meteor-icons_arrow-up-right (white).png";
import arrowIconBlack from "../assets/meteor-icons arrow-up-right (black).png";
import RocketIcon from "../assets/Rocket shape icon.png";
import { useTheme } from "../context/useTheme";

function Hero() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section
      className={`relative min-h-[calc(100svh-69px)] w-full overflow-hidden transition-colors duration-300 ${
        isLight
          ? "bg-[linear-gradient(to_bottom,#FCFDFD_0%,#F4FAFA_4%,#E1F0EF_11%,#B8DBD9_30%,#7AC4C5_51%,#35B1B7_74%,#079DA7_100%)]"
          : "bg-[#08272A]"
      }`}
    >
      <div
        className={`pointer-events-none absolute left-1/2 top-[-42px] z-0 w-full -translate-x-1/2 ${
          isLight ? "opacity-100" : "opacity-65"
        }`}
      >
        <img
          src={heroWaves}
          alt=""
          aria-hidden="true"
          className={`absolute left-1/2 top-[-42px] h-auto w-[100vw] max-w-none -translate-x-1/2 object-contain ${
            isLight
              ? "brightness-125 drop-shadow-[0_0_5px_rgba(255,255,255,0.40)]"
              : ""
          }`}
        />
      </div>

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute left-[20px] top-[30px] z-[1] h-[60px] w-[78px] ${
          isLight
            ? "opacity-100 [background-image:radial-gradient(circle,#FFFFFF_2px,transparent_2.5px)] [filter:drop-shadow(0_0_3px_rgba(255,255,255,0.45))]"
            : "opacity-75 [background-image:radial-gradient(circle,#08737D_2px,transparent_2.5px)]"
        } [background-size:14px_14px]`}
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute left-[53px] top-[337px] z-[2] h-[15px] w-[15px] rounded-full blur-[2px] ${
          isLight ? "bg-white opacity-60" : "bg-[#D9E0E0] opacity-65"
        }`}
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute left-1/2 top-[360px] z-[2] h-[8px] w-[8px] -translate-x-1/2 rounded-full ${
          isLight ? "bg-[#007F88] opacity-70" : "bg-[#0C8995] opacity-80"
        }`}
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute right-[89px] top-[349px] z-[2] h-[13px] w-[13px] rounded-full ${
          isLight ? "bg-[#00737D] opacity-75" : "bg-[#087C88] opacity-80"
        }`}
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-69px)] w-full max-w-[1440px] flex-col items-center justify-center px-[20px] py-[34px] text-center sm:px-[30px]">
        <div
          className={`inline-flex h-[27px] items-center justify-center gap-[7px] rounded-full border px-[13px] font-['Inter'] text-[12px] font-semibold leading-none ${
            isLight
              ? "border-[#B9E6E8] bg-white/65 text-[#008B96] shadow-[0_2px_8px_rgba(0,111,120,0.08)]"
              : "border-[#1596A4]/45 bg-[#073B3F] text-[#20C7D9]"
          }`}
        >
          <span className="flex items-center justify-center">
            <img
              src={RocketIcon}
              alt="Rocket"
              className="h-[12px] w-[12px] object-contain"
            />
          </span>

          <span>Trusted Digital Growth Partner</span>
        </div>

        <h1
          className={`mt-[23px] max-w-[950px] font-['Manrope'] text-[48px] font-extrabold leading-[1.1] tracking-[-2px] sm:text-[53px] lg:text-[56px] ${
            isLight ? "text-[#08272A]" : "text-[#F5F8F8]"
          }`}
        >
          Your Business Needs Demand,
          <br />
          Influence{" "}
          <span
            className={
              isLight
                ? "font-['Plus_Jakarta_Sans'] bg-[linear-gradient(100deg,#0A5961_0%,#075F86_44%,#0078B6_72%,#00A6D8_100%)] bg-clip-text text-transparent drop-shadow-[0_1px_5px_rgba(0,133,190,0.18)]"
                : "font-['Plus_Jakarta_Sans'] text-[#18D0E4]"
            }
          >
            &amp; Growth
          </span>
        </h1>

        <p
          className={`mt-[15px] max-w-[600px] font-['Plus Jakarta Sans'] text-[16px] font-normal leading-[1.5] sm:text-[12px] ${
            isLight ? "text-[#294B4E]" : "text-[#9DAFB0]"
          }`}
        >
          We combine strategy, creativity, and digital expertise to help
          businesses attract the right audience, build influence, and turn
          attention into growth.
        </p>

        <div className="mt-[27px] flex items-center justify-center gap-[12px]">
          <a
            href="#contact"
            className={`group inline-flex h-[42px] items-center justify-center gap-[9px] rounded-full border px-[19px] font-['Inter'] text-[14px] font-semibold leading-none transition-all duration-200 ease-out ${
              isLight
                ? "border-white bg-[linear-gradient(100deg,#B9F0F1_0%,#8EDDE1_52%,#69C8D0_100%)] text-[#07383B] shadow-[0_4px_12px_rgba(0,100,108,0.20)] hover:border-white hover:bg-none hover:bg-[#008E98] hover:!text-white"
                : "border-[#20C9D9] bg-transparent text-white hover:border-[#ffffff] hover:bg-[#10899A] hover:shadow-[0_0_20px_rgba(32,185,68,0.24)]"
            }`}
          >
            <span>Let's Build Your Growth</span>

            <span className="relative h-[15px] w-[15px]">
              <img
                src={isLight ? arrowIconBlack : arrowIcon}
                alt=""
                aria-hidden="true"
                className={`absolute inset-0 h-[15px] w-[15px] object-contain transition-all duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] ${
                  isLight ? "group-hover:opacity-0" : ""
                }`}
              />

              {isLight && (
                <img
                  src={arrowIcon}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-[15px] w-[15px] object-contain opacity-0 transition-all duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:opacity-100"
                />
              )}
            </span>
          </a>

          <a
            href="#project"
            className={`group inline-flex h-[42px] min-w-[148px] items-center justify-center gap-[9px] rounded-full border px-[19px] font-['Inter'] text-[14px] font-semibold leading-none transition-all duration-200 ease-out ${
              isLight
                ? "border-white bg-white/12 text-white hover:border-white hover:bg-[#008E98] hover:!text-white"
                : "border-[#20C9D9] bg-transparent text-white hover:border-[#ffffff] hover:bg-[#10899A] hover:shadow-[0_0_20px_rgba(32,185,68,0.24)]"
            }`}
          >
            <span>See Our Work</span>
          </a>
        </div>

        <div className="mt-[53px] grid w-full max-w-[660px] grid-cols-1 gap-[14px] sm:grid-cols-3">
          <StatCard
            number="200+"
            label="Clients Served"
            speed={10}
            isLight={isLight}
          />

          <StatCard
            number="98%"
            label="Retention Rate"
            speed={22}
            isLight={isLight}
          />

          <StatCard
            number="$12M+"
            label="Revenue Generated"
            speed={80}
            isLight={isLight}
          />
        </div>
      </div>
    </section>
  );
}

function AnimatedNumber({ value, speed = 45 }) {
  const [displayValue, setDisplayValue] = useState(() => {
    const numericMatch = value.match(/[\d.]+/);

    if (!numericMatch) {
      return value;
    }

    const prefix = value.startsWith("$") ? "$" : "";
    const suffix = value.replace(/^\$?[\d.]+/, "");

    return `${prefix}1${suffix}`;
  });

  useEffect(() => {
    const numericMatch = value.match(/[\d.]+/);

    if (!numericMatch) {
      return;
    }

    const finalNumber = parseFloat(numericMatch[0]);
    const prefix = value.startsWith("$") ? "$" : "";
    const suffix = value.replace(/^\$?[\d.]+/, "");

    let currentNumber = 1;

    const interval = setInterval(() => {
      currentNumber += 1;

      if (currentNumber >= finalNumber) {
        clearInterval(interval);
        setDisplayValue(value);
      } else {
        setDisplayValue(`${prefix}${currentNumber}${suffix}`);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [value, speed]);

  return <>{displayValue}</>;
}

function StatCard({ number, label, speed, isLight }) {
  return (
    <div
      className={`flex h-[108px] flex-col items-center justify-center rounded-[10px] border ${
        isLight
          ? "border-white/55 bg-white/30 shadow-[0_4px_10px_rgba(0,74,79,0.22)] backdrop-blur-[2px]"
          : "border-[#11818D]/35 bg-[#0B3D41]/90"
      }`}
    >
      <strong
        className={`font-['Manrope'] text-[36px] font-bold leading-none tracking-[-1px] ${
          isLight ? "text-[#092D30]" : "text-[#F5F8F8]"
        }`}
      >
        <AnimatedNumber value={number} speed={speed} />
      </strong>

      <span
        className={`mt-[12px] font-['Inter'] text-[13px] font-normal leading-none ${
          isLight ? "text-[#183E41]" : "text-[#A9BCBD]"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export default Hero;
