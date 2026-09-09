import React from "react";

// ===== Assets =====
import deltazLogo from "../assets/Deltaz Logo.svg";

import facebookIcon from "../assets/Facebook.png";
import instagramIcon from "../assets/Instagram.png";
import linkedinIcon from "../assets/Linked in.png";
import twitterIcon from "../assets/Twitter.png";

import mailIcon from "../assets/MailIcon.png";
import phoneIcon from "../assets/Phone Icon.png";
import locationIcon from "../assets/Location icon.png";

const Footer = () => {
  return (
    <>
      {/* ===== FOOTER HOVER COLOR ===== */}
      <style>
        {`
          .footer-hover-link:hover {
            color: #00666C !important;
          }
        `}
      </style>

      <footer className="w-full bg-[#032428] font-['Plus_Jakarta_Sans'] text-white">

        {/* ================= MAIN FOOTER ================= */}
        <div className="w-full px-[5%] pt-[38px] pb-[55px]">
          <div
            className="
              mx-auto
              grid
              max-w-[1440px]
              grid-cols-1
              gap-[45px]
              md:grid-cols-2
              lg:grid-cols-[1.45fr_0.72fr_1.12fr_1fr]
              lg:gap-[75px]
            "
          >

            {/* ================= COLUMN 1 ================= */}
            <div>
              {/* Logo */}
              <img
                src={deltazLogo}
                alt="Deltaz Media"
                className="mb-[26px] h-auto w-[150px] object-contain"
              />

              {/* Description */}
              <p
                className="
                  max-w-[315px]
                  font-['Inter']
                  text-[14px]
                  font-normal
                  leading-[1.65]
                  text-[#8FA6A8]
                "
              >
                We help ambitious brands grow through
                <br className="hidden xl:block" />
                data-driven digital marketing from search
                <br className="hidden xl:block" />
                visibility to social reach and everything in
                <br className="hidden xl:block" />
                between.
              </p>

              {/* Social Icons */}
              <div className="mt-[24px] flex items-center gap-[13px]">

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="transition-transform duration-300 hover:-translate-y-[3px]"
                >
                  <img
                    src={linkedinIcon}
                    alt="LinkedIn"
                    className="h-[43px] w-[43px] object-contain"
                  />
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="transition-transform duration-300 hover:-translate-y-[3px]"
                >
                  <img
                    src={instagramIcon}
                    alt="Instagram"
                    className="h-[43px] w-[43px] object-contain"
                  />
                </a>

                <a
                  href="#"
                  aria-label="Facebook"
                  className="transition-transform duration-300 hover:-translate-y-[3px]"
                >
                  <img
                    src={facebookIcon}
                    alt="Facebook"
                    className="h-[43px] w-[43px] object-contain"
                  />
                </a>

                <a
                  href="#"
                  aria-label="Twitter"
                  className="transition-transform duration-300 hover:-translate-y-[3px]"
                >
                  <img
                    src={twitterIcon}
                    alt="Twitter"
                    className="h-[43px] w-[43px] object-contain"
                  />
                </a>

              </div>
            </div>

            {/* ================= QUICK LINKS ================= */}
            <div>
              <h3
                className="
                  mb-[21px]
                  text-[16px]
                  font-semibold
                  text-[#F4F8F8]
                "
              >
                Quick Links
              </h3>

              <ul className="space-y-[14px]">
                {[
                  "Home",
                  "About Us",
                  "Our Services",
                  "How We Work",
                  "Case Studies",
                  "Blog",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="
                        footer-hover-link
                        text-[13px]
                        font-normal
                        text-[#A9BABC]
                        transition-colors
                        duration-200
                      "
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ================= SERVICES ================= */}
            <div>
              <h3
                className="
                  mb-[21px]
                  text-[16px]
                  font-semibold
                  text-[#F4F8F8]
                "
              >
                Services
              </h3>

              <ul className="space-y-[14px]">
                {[
                  "SEO Optimization",
                  "Google Ads",
                  "Branding",
                  "Social Media Marketing",
                  "Content Marketing",
                  "Website Design & Development",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="
                        footer-hover-link
                        text-[13px]
                        font-normal
                        text-[#A9BABC]
                        transition-colors
                        duration-200
                      "
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ================= CONTACT ================= */}
            <div>
              <h3
                className="
                  mb-[19px]
                  text-[16px]
                  font-semibold
                  text-[#F4F8F8]
                "
              >
                Contact
              </h3>

              <div className="space-y-[14px]">

                {/* Email */}
                <a
                  href="mailto:hello@deltazmedia.com"
                  className="group flex items-center gap-[15px]"
                >
                  <img
                    src={mailIcon}
                    alt="Email"
                    className="
                      h-[40px]
                      w-[40px]
                      shrink-0
                      object-contain
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  />

                  <span
                    className="
                      text-[13px]
                      text-[#A9BABC]
                      transition-colors
                      duration-200
                      group-hover:text-white
                    "
                  >
                    hello@deltazmedia.com
                  </span>
                </a>

                {/* Phone */}
                <a
                  href="tel:+97141234567"
                  className="group flex items-center gap-[15px]"
                >
                  <img
                    src={phoneIcon}
                    alt="Phone"
                    className="
                      h-[40px]
                      w-[40px]
                      shrink-0
                      object-contain
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  />

                  <span
                    className="
                      text-[13px]
                      text-[#A9BABC]
                      transition-colors
                      duration-200
                      group-hover:text-white
                    "
                  >
                    +971 4 123 4567
                  </span>
                </a>

                {/* Location */}
                <div className="flex items-center gap-[15px]">
                  <img
                    src={locationIcon}
                    alt="Location"
                    className="
                      h-[40px]
                      w-[40px]
                      shrink-0
                      object-contain
                    "
                  />

                  <span className="text-[13px] text-[#A9BABC]">
                    Dubai, United Arab Emirates
                  </span>
                </div>

              </div>

              {/* ================= NEWSLETTER ================= */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="
                  mt-[20px]
                  flex
                  w-full
                  max-w-[320px]
                  items-stretch
                  gap-[5px]
                "
              >
                <input
                  type="email"
                  placeholder="email address"
                  className="
                    h-[43px]
                    min-w-0
                    flex-1
                    rounded-[5px]
                    border
                    border-[#08616A]
                    bg-transparent
                    px-[15px]
                    text-[12px]
                    text-white
                    outline-none
                    transition-all
                    duration-200
                    placeholder:text-[#72898C]
                    focus:border-[#00A5AF]
                  "
                />

                <button
                  type="submit"
                  className="
                    h-[43px]
                    rounded-[5px]
                    bg-[#138F99]
                    px-[15px]
                    text-[12px]
                    font-medium
                    text-white
                    transition-all
                    duration-200
                    hover:bg-[#10A8B3]
                  "
                >
                  Enter
                </button>
              </form>
            </div>

          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="h-px w-full bg-[#174348]" />

        {/* ================= BOTTOM FOOTER ================= */}
        <div className="px-[5%]">
          <div
            className="
              mx-auto
              flex
              max-w-[1440px]
              flex-col
              gap-[15px]
              py-[20px]
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            {/* Copyright */}
            <p className="text-[12px] text-[#80989B]">
              © 2026 Deltaz Media. All rights reserved.
            </p>

            {/* Policies */}
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-x-[20px]
                gap-y-[8px]
              "
            >
              <a
                href="#"
                className="
                  text-[12px]
                  text-[#80989B]
                  transition-colors
                  hover:text-white
                "
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="
                  text-[12px]
                  text-[#80989B]
                  transition-colors
                  hover:text-white
                "
              >
                Terms & Conditions
              </a>

              <a
                href="#"
                className="
                  text-[12px]
                  text-[#80989B]
                  transition-colors
                  hover:text-white
                "
              >
                Cookie Policy
              </a>
            </div>

          </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;