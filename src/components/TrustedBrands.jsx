import devflowLogo from "../assets/Devflow.png";
import godaddyLogo from "../assets/Godaddy.png";
import shahnawarLogo from "../assets/Shahnawar.png";
import encovaLogo from "../assets/Encova Solutions.png";
import hubspotLogo from "../assets/Hubspot.png";
import metaLogo from "../assets/Meta.png";
import shopifyLogo from "../assets/Shopify.png";
import wordpressLogo from "../assets/Wordpress.png";
import googleLogo from "../assets/Google.png";

const firstRow = [
  { name: "Devflow", image: devflowLogo },
  { name: "GoDaddy", image: godaddyLogo },
  { name: "Shahnawar", image: shahnawarLogo },
  { name: "Encova Solutions", image: encovaLogo },
  { name: "HubSpot", image: hubspotLogo },
  { name: "Meta", image: metaLogo },
  { name: "HubSpot", image: hubspotLogo },
];

const secondRow = [
  { name: "Shopify", image: shopifyLogo },
  { name: "Meta", image: metaLogo },
  { name: "HubSpot", image: hubspotLogo },
  { name: "Meta", image: metaLogo },
  { name: "WordPress", image: wordpressLogo },
  { name: "Google", image: googleLogo },
  { name: "WordPress", image: wordpressLogo },
];

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
        {/* Our Partners */}
        <div
          className="
            flex
            items-center
            gap-[7px]
            font-['Inter']
            text-[10px]
            font-medium
            leading-none
            text-[#C5D1D2]
          "
        >
          <span className="flex items-center">
            <span className="h-[13px] w-[13px] rounded-full bg-[#08737D]" />
            <span className="-ml-[7px] h-[13px] w-[13px] rounded-full bg-[#1AA1AE]" />
          </span>

          <span>Our Partners</span>
        </div>

        {/* Heading */}
        <h2
          className="
            mt-[20px]
            font-['Manrope']
            text-[30px]
            font-bold
            leading-[1.08]
            tracking-[-1.2px]
            text-[#F3F7F7]
          "
        >
          Trusted by Leading That
          <br />
          Drive Digital{" "}
          <span className="text-[#18D0E4]">Brands</span>
        </h2>

        {/* Description */}
        <p
          className="
            mt-[19px]
            max-w-[500px]
            font-['Inter']
            text-[9px]
            font-normal
            leading-[1.35]
            text-[#8EA5A6]
          "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore
          <br />
          et dolore magna aliqua.
        </p>
      </div>

      {/* Logo rows */}
      <div
        className="
          absolute
          left-1/2
          top-[242px]
          z-10
          -translate-x-1/2
        "
      >
        {/* First row */}
        <div
          className="
            flex
            w-max
            items-center
            gap-[7px]
          "
        >
          {firstRow.map((logo, index) => (
            <LogoBox
              key={`first-${index}`}
              logo={logo}
            />
          ))}
        </div>

        {/* Second row */}
        <div
          className="
            mt-[9px]
            flex
            w-max
            translate-x-[-32px]
            items-center
            gap-[7px]
          "
        >
          {secondRow.map((logo, index) => (
            <LogoBox
              key={`second-${index}`}
              logo={logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoBox({ logo }) {
  return (
    <div
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
  );
}

export default TrustedBrands;