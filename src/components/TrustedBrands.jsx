import devflowLogo from "../assets/Devflow.png";
import godaddyLogo from "../assets/Godaddy.png";
import shahnawarLogo from "../assets/Shahnawar.png";
import encovaLogo from "../assets/Encova Solutions.png";
import hubspotLogo from "../assets/Hubspot.png";
import metaLogo from "../assets/Meta.png";
import shopifyLogo from "../assets/Shopify.png";
import wordpressLogo from "../assets/Wordpress.png";
import googleLogo from "../assets/Google.png";

import { useTheme } from "../context/useTheme";

const logos = [
  { name: "Devflow", image: devflowLogo },
  { name: "GoDaddy", image: godaddyLogo },
  { name: "WordPress", image: wordpressLogo },
  { name: "Shahnawar", image: shahnawarLogo },
  { name: "Encova Solutions", image: encovaLogo },
  { name: "HubSpot", image: hubspotLogo },
  { name: "Meta", image: metaLogo },
  { name: "Shopify", image: shopifyLogo },
  { name: "HubSpot", image: hubspotLogo },
  { name: "Google", image: googleLogo },
  { name: "Meta", image: metaLogo },
  { name: "WordPress", image: wordpressLogo },
  { name: "Google", image: googleLogo },
  { name: "WordPress", image: wordpressLogo },
];

const BOX_WIDTH = 153;
const GAP = 7;

function TrustedBrands() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const logoCardClass = isLight
    ? "border-[#D9E8E9] bg-white shadow-[0_2px_7px_rgba(19,83,88,0.07)]"
    : "border-[#8FCFD3] bg-[#D7F0F1] shadow-[0_1px_3px_rgba(0,0,0,0.18)]";

  return (
    <section
  id="partners"
  className={`relative h-[470px] w-full overflow-hidden transition-colors duration-300 ${
    isLight ? "bg-[#F7FBFB]" : "bg-[#071F22]"
  }`}
>
  {isLight && (
    <>
      <div className="pointer-events-none absolute -left-[190px] -top-[170px] h-[390px] w-[470px] rounded-full bg-[#8ED7D8]/45 blur-[110px]" />

      <div className="pointer-events-none absolute -bottom-[210px] -left-[150px] h-[390px] w-[490px] rounded-full bg-[#61BEC1]/35 blur-[115px]" />

      <div className="pointer-events-none absolute -bottom-[210px] -right-[165px] h-[410px] w-[510px] rounded-full bg-[#77CDCF]/35 blur-[125px]" />
    </>
  )}
      <div className="relative z-10 mx-auto flex w-full max-w-[700px] flex-col items-center px-[24px] pt-[61px] text-center">
        <div
          className={`font-['Inter'] text-[12px] font-medium leading-none ${
            isLight ? "text-[#00737C]" : "text-[#C5D1D2]"
          }`}
        >
          Our Partners
        </div>

        <h2
          className={`mt-[20px] font-['Manrope'] text-[35px] font-extrabold leading-[1.08] tracking-[-1.2px] ${
            isLight ? "text-[#25282B]" : "text-[#F3F7F7]"
          }`}
        >
          Trusted by Leading That
          <br />
          Drive Digital{" "}
          <span
            className={
              isLight
                ? "font-['Plus_Jakarta_Sans'] bg-[linear-gradient(100deg,#0A5961_0%,#075F86_44%,#0078B6_72%,#00A6D8_100%)] bg-clip-text text-transparent drop-shadow-[0_1px_5px_rgba(0,133,190,0.18)]"
                : "font-['Plus_Jakarta_Sans'] text-[#18D0E4]"
            }
          >
            Brands
          </span>
        </h2>

        <p
          className={`mt-[19px] max-w-[590px] font-['Inter'] text-[12px] font-normal leading-[1.35] ${
            isLight ? "text-[#3F5557]" : "text-[#8EA5A6]"
          }`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="absolute left-0 right-0 top-[252px] z-10 overflow-hidden">
        <div className="animate-brands flex w-max items-center gap-[7px]">
          {logos.map((logo, index) => (
            <div
              key={`first-${logo.name}-${index}`}
              className={`flex h-[60px] w-[153px] shrink-0 items-center justify-center rounded-[6px] border ${logoCardClass}`}
            >
              <img
                src={logo.image}
                alt={logo.name}
                className="max-h-[44px] max-w-[125px] object-contain"
              />
            </div>
          ))}

          {logos.map((logo, index) => (
            <div
              key={`second-${logo.name}-${index}`}
              className={`flex h-[60px] w-[153px] shrink-0 items-center justify-center rounded-[6px] border ${logoCardClass}`}
            >
              <img
                src={logo.image}
                alt={logo.name}
                className="max-h-[44px] max-w-[125px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes brandsMove {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(
              calc(-1 * (${logos.length} * ${BOX_WIDTH}px + ${
                logos.length - 1
              } * ${GAP}px))
            );
          }
        }

        .animate-brands {
          animation: brandsMove 28s linear infinite;
          will-change: transform;
        }

        .animate-brands:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

export default TrustedBrands;