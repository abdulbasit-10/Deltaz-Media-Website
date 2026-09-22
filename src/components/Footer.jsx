import deltazLogo from "../assets/Deltaz Logo.svg";
import deltazLogoLight from "../assets/Deltaz logo light.png";

import facebookIcon from "../assets/Facebook.png";
import instagramIcon from "../assets/Instagram.png";
import linkedinIcon from "../assets/Linked in.png";
import twitterIcon from "../assets/Twitter.png";

import mailIcon from "../assets/MailIcon.png";
import phoneIcon from "../assets/Phone Icon.png";
import locationIcon from "../assets/Location icon.png";

import { useTheme } from "../context/useTheme";

const socialLinks = [
  { label: "LinkedIn", icon: linkedinIcon },
  { label: "Instagram", icon: instagramIcon },
  { label: "Facebook", icon: facebookIcon },
  { label: "Twitter", icon: twitterIcon },
];

const quickLinks = [
  "Home",
  "About Us",
  "Our Services",
  "How We Work",
  "Case Studies",
  "Blog",
  "Contact",
];

const services = [
  "SEO Optimization",
  "Google Ads",
  "Branding",
  "Social Media Marketing",
  "Content Marketing",
  "Website Design & Development",
];

function MaskedIcon({ src, className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`block bg-[#07383B] ${className}`}
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

function SocialIcon({ social, isLight }) {
  if (!isLight) {
    return (
      <a
        href="#"
        aria-label={social.label}
        className="group flex h-[43px] w-[43px] items-center justify-center rounded-[5px] bg-[#00666C] transition-all duration-300 hover:-translate-y-[3px] hover:bg-[#00AAB4]"
      >
        <MaskedIcon
          src={social.icon}
          className="h-[19px] w-[19px] bg-white"
        />
      </a>
    );
  }

  return (
    <a
      href="#"
      aria-label={social.label}
      className="group flex h-[43px] w-[43px] items-center justify-center rounded-[5px] border border-[#E0EDEE] bg-transparent transition-all duration-200 hover:-translate-y-[3px] hover:border-[#008E98]"
    >
      <MaskedIcon
        src={social.icon}
        className="h-[19px] w-[19px] transition-colors duration-200 group-hover:!bg-[#008E98]"
      />
    </a>
  );
}

function ContactIcon({ src, isLight }) {
  if (!isLight) {
    return (
      <div className="group flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#00666C] transition-colors duration-200 group-hover:bg-[#00AAB4]">
        <MaskedIcon
          src={src}
          className="h-[19px] w-[19px] bg-white"
        />
      </div>
    );
  }

  return (
    <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full border border-[#DCEBEC] bg-transparent transition-colors duration-200 group-hover:border-[#008E98]">
      <MaskedIcon
        src={src}
        className="h-[19px] w-[19px] transition-colors duration-200 group-hover:!bg-[#008E98]"
      />
    </div>
  );
}

const Footer = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const headingColor = isLight ? "text-[#06383B]" : "text-[#F4F8F8]";
  const bodyColor = isLight ? "text-[#34494B]" : "text-[#A9BABC]";
  const mutedColor = isLight ? "text-[#405759]" : "text-[#80989B]";

  return (
    <footer
      className={`w-full font-['Plus_Jakarta_Sans'] transition-colors duration-300 ${
        isLight ? "bg-white text-[#1F3032]" : "bg-[#032428] text-white"
      }`}
    >
      <div className="w-full px-[5%] pb-[44px] pt-[28px] sm:pb-[52px] sm:pt-[35px]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-[38px] md:grid-cols-2 lg:grid-cols-[1.45fr_0.72fr_1.12fr_1fr] lg:gap-[65px]">
          <div>
            <img
              src={isLight ? deltazLogoLight : deltazLogo}
              alt="Deltaz Media"
              className={`mb-[24px] h-auto object-contain ${
                isLight ? "w-[150px]" : "w-[150px]"
              }`}
            />

            <p
              className={`max-w-[315px] font-['Inter'] font-normal ${
                isLight
                  ? "text-[14px] leading-[1.65]"
                  : "text-[14px] leading-[1.65]"
              } ${bodyColor}`}
            >
              We help ambitious brands grow through
              <br className={isLight ? "" : "hidden xl:block"} />
              data-driven digital marketing from search
              <br className={isLight ? "" : "hidden xl:block"} />
              visibility to social reach and everything in
              <br className={isLight ? "" : "hidden xl:block"} />
              between.
            </p>

            <div
              className={`flex items-center ${
                isLight ? "mt-[24px] gap-[13px]" : "mt-[24px] gap-[13px]"
              }`}
            >
              {socialLinks.map((social) => (
                <SocialIcon
                  key={social.label}
                  social={social}
                  isLight={isLight}
                />
              ))}
            </div>
          </div>

          <div>
            <h3
              className={`mb-[16px] font-semibold ${
                isLight ? "mb-[21px] text-[16px]" : "mb-[21px] text-[16px]"
              } ${headingColor}`}
            >
              Quick Links
            </h3>

            <ul className="space-y-[14px]">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className={`inline-block origin-left font-normal transition-all duration-200 hover:scale-[1.06] hover:!text-[#008E98] ${
                      isLight ? "text-[13px]" : "text-[13px]"
                    } ${bodyColor}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className={`mb-[16px] font-semibold ${
                isLight ? "mb-[21px] text-[16px]" : "mb-[21px] text-[16px]"
              } ${headingColor}`}
            >
              Services
            </h3>

            <ul className="space-y-[14px]">
              {services.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className={`inline-block origin-left font-normal transition-all duration-200 hover:scale-[1.06] hover:!text-[#008E98] ${
                      isLight ? "text-[13px]" : "text-[13px]"
                    } ${bodyColor}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className={`mb-[16px] font-semibold ${
                isLight ? "mb-[19px] text-[16px]" : "mb-[19px] text-[16px]"
              } ${headingColor}`}
            >
              Contact
            </h3>

            <div className={isLight ? "space-y-[12px]" : "space-y-[14px]"}>
              <a
                href="mailto:hello@deltazmedia.com"
                className={`group flex items-center ${
                  isLight ? "gap-[15px]" : "gap-[15px]"
                }`}
              >
                <ContactIcon src={mailIcon} isLight={isLight} />

                <span
                  className={`transition-colors duration-200 group-hover:text-[#008E98] ${
                    isLight ? "text-[13px]" : "text-[13px] group-hover:text-white"
                  } ${bodyColor}`}
                >
                  hello@deltazmedia.com
                </span>
              </a>

              <a
                href="tel:+97141234567"
                className={`group flex items-center ${
                  isLight ? "gap-[15px]" : "gap-[15px]"
                }`}
              >
                <ContactIcon src={phoneIcon} isLight={isLight} />

                <span
                  className={`transition-colors duration-200 group-hover:text-[#008E98] ${
                    isLight ? "text-[13px]" : "text-[13px] group-hover:text-white"
                  } ${bodyColor}`}
                >
                  +971 4 123 4567
                </span>
              </a>

              <div
                className={`group flex items-center ${
                  isLight ? "gap-[15px]" : "gap-[15px]"
                }`}
              >
                <ContactIcon src={locationIcon} isLight={isLight} />

                <span className={`${isLight ? "text-[13px]" : "text-[13px]"} ${bodyColor}`}>
                  Dubai, United Arab Emirates
                </span>
              </div>
            </div>

            <form
              onSubmit={(event) => event.preventDefault()}
              className={`flex w-full items-stretch ${
                isLight
                  ? "mt-[20px] max-w-[320px] gap-[5px]"
                  : "mt-[20px] max-w-[320px] gap-[5px]"
              }`}
            >
              <input
                type="email"
                placeholder="email address"
                className={`min-w-0 flex-1 rounded-[5px] border outline-none transition-all duration-200 ${
                  isLight
                    ? "h-[43px] border-[#CFE2E3] bg-white px-[15px] text-[12px] text-[#193D40] placeholder:text-[#82999B] focus:border-[#008E98]"
                    : "h-[43px] border-[#08616A] bg-transparent px-[15px] text-[12px] text-white placeholder:text-[#72898C] focus:border-[#00A5AF]"
                }`}
              />

              <button
                type="submit"
                className={`rounded-[5px] font-medium text-white transition-all duration-200 ${
                  isLight
                    ? "h-[43px] bg-[#007E87] px-[15px] text-[12px] hover:bg-[#00AAB4]"
                    : "h-[43px] bg-[#138F99] px-[15px] text-[12px] hover:bg-[#10A8B3]"
                }`}
              >
                Enter
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className={`h-px w-full ${isLight ? "bg-[#E3EEEE]" : "bg-[#174348]"}`} />

      <div className="px-[5%]">
        <div
          className={`mx-auto flex max-w-[1440px] flex-col gap-[15px] sm:flex-row sm:items-center sm:justify-between ${
            isLight ? "py-[17px]" : "py-[20px]"
          }`}
        >
          <p className={`${isLight ? "text-[12px]" : "text-[12px]"} ${mutedColor}`}>
            © 2026 Deltaz Media. All rights reserved.
          </p>

          <div
            className={`flex flex-wrap items-center ${
              isLight ? "gap-x-[20px] gap-y-[8px]" : "gap-x-[20px] gap-y-[8px]"
            }`}
          >
            {["Privacy Policy", "Terms & Conditions", "Cookie Policy"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className={`transition-colors duration-200 hover:text-[#008E98] ${
                    isLight ? "text-[12px] hover:!text-[#008E98]" : "text-[12px] hover:text-white"
                  } ${mutedColor}`}
                >
                  {item}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;