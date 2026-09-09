import React from "react";

import devflowLogo from "../assets/Devflow.png";
import godaddyLogo from "../assets/Godaddy.png";
import shahnawarLogo from "../assets/Shahnawar.png";
import encovaLogo from "../assets/Encova Solutions.png";
import hubspotLogo from "../assets/Hubspot.png";
import metaLogo from "../assets/Meta.png";
import shopifyLogo from "../assets/Shopify.png";
import wordpressLogo from "../assets/Wordpress.png";
import googleLogo from "../assets/Google.png";

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
const BOX_HEIGHT = 60;
const GAP = 7;

function TrustedBrands() {
  return (
    <section
      id="partners"
      className="
        relative
        h-[470px]
        w-full
        overflow-hidden
        bg-[#071F22]
      "
    >
      {/* Heading */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[560px]
          flex-col
          items-center
          text-center
          pt-[61px]
        "
      >
        <div
          className="
            flex
            items-center
            gap-[7px]
            font-['Inter']
            text-[12px]
            font-medium
            leading-none
            text-[#C5D1D2]
          "
        >
          <span>Our Partners</span>
        </div>

        <h2
          className="
            mt-[20px]
            font-['Manrope']
            text-[35px]
            font-bold
            leading-[1.08]
            tracking-[-1.2px]
            text-[#F3F7F7]
          "
        >
          Trusted by Leading That
          <br />
          Drive Digital{" "}
          <span className="font-['Plus_Jakarta_Sans'] text-[#18D0E4]">
            Brands
          </span>
        </h2>

        <p
          className="
            mt-[19px]
            max-w-[700px]
            font-['Inter']
            text-[12px]
            font-normal
            leading-[1.35]
            text-[#8EA5A6]
          "
        >
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore 
          et dolore magna aliqua.
        </p>
      </div>

      {/* SINGLE LINE BRAND STRIP */}
      <div
        className="
          absolute
          left-0
          right-0
          top-[272px]
          z-10
          overflow-hidden
        "
      >
        <div
          className="
            flex
            w-max
            items-center
            gap-[7px]
            animate-brands
          "
        >
          {/* First set */}
          {logos.map((logo, index) => (
            <div
              key={`first-${logo.name}-${index}`}
              className="
                flex
                h-[60px]
                w-[153px]
                shrink-0
                items-center
                justify-center
                rounded-[6px]
                border
                border-[#8FCFD3]
                bg-[#D7F0F1]
                shadow-[0_1px_3px_rgba(0,0,0,0.18)]
              "
            >
              <img
                src={logo.image}
                alt={logo.name}
                className="
                  max-h-[44px]
                  max-w-[125px]
                  object-contain
                "
              />
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`second-${logo.name}-${index}`}
              className="
                flex
                h-[60px]
                w-[153px]
                shrink-0
                items-center
                justify-center
                rounded-[6px]
                border
                border-[#8FCFD3]
                bg-[#D7F0F1]
                shadow-[0_1px_3px_rgba(0,0,0,0.18)]
              "
            >
              <img
                src={logo.image}
                alt={logo.name}
                className="
                  max-h-[44px]
                  max-w-[125px]
                  object-contain
                "
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes brandsMove {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(
              calc(-1 * (14 * 153px + 13 * 7px))
            );
          }
        }

        .animate-brands {
          animation: brandsMove 28s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}

export default TrustedBrands;