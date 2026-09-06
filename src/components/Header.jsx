import { useState } from "react";
import logo from "../assets/Deltaz Logo.svg";
import arrowIcon from "../assets/meteor-icons_arrow-up-right (white).png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Services", href: "#services" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "Our Project", href: "#project" },
  { label: "Courses", href: "#courses" },
  { label: "Contact Us", href: "/contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 h-[69px] w-full border-b border-[#1C5559]/50 bg-[#061F21]">
      <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between px-[24px] sm:px-[32px] lg:px-[38px]">

        {/* Logo */}
        <a
          href="/"
          aria-label="Deltaz Media home"
          className="flex w-[125px] shrink-0 items-center"
        >
          <img
            src={logo}
            alt="Deltaz Media"
            className="h-auto w-[104px]"
          />
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="
            hidden
            h-[35px]
            items-center
            gap-[2px]
            rounded-[7px]
            border
            border-[#147681]/45
            bg-[#082B2E]
            p-[4px]
            shadow-[inset_0_0_18px_rgba(21,174,187,0.05)]
            lg:flex
          "
        >
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`
                flex
                h-[27px]
                items-center
                justify-center
                whitespace-nowrap
                rounded-[5px]
                px-[10px]
                font-['Inter']
                text-[10px]
                font-normal
                leading-none
                transition-colors
                duration-200
                ${
                  index === 0
                    ? "bg-[#08737D] text-white"
                    : "text-[#9EAFB0] hover:bg-[#0B5055] hover:text-white"
                }
              `}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Header CTA */}
        <a
          href="/contact"
          className="
            hidden
            h-[37px]
            min-w-[151px]
            items-center
            justify-center
            gap-[8px]
            rounded-full
            bg-[#10899A]
            px-[17px]
            font-['Inter']
            text-[10px]
            font-medium
            leading-none
            text-white
            transition-transform
            duration-200
            hover:-translate-y-[1px]
            lg:inline-flex
          "
        >
          <span>Book Your Free Audit</span>

          {/* Actual arrow asset */}
          <img
            src={arrowIcon}
            alt=""
            aria-hidden="true"
            className="h-[13px] w-[13px] object-contain"
          />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          className="
            flex
            h-[40px]
            w-[40px]
            items-center
            justify-center
            lg:hidden
          "
        >
          <span className="flex w-[23px] flex-col gap-[5px]">
            <span className="h-[2px] w-full rounded-full bg-white" />
            <span className="h-[2px] w-full rounded-full bg-white" />
            <span className="h-[2px] w-full rounded-full bg-white" />
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="
            absolute
            left-[16px]
            right-[16px]
            top-[69px]
            flex
            flex-col
            gap-[3px]
            rounded-[9px]
            border
            border-[#147681]/45
            bg-[#072C2F]
            p-[9px]
            shadow-[0_15px_35px_rgba(0,0,0,0.35)]
            lg:hidden
          "
        >
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`
                flex
                h-[38px]
                w-full
                items-center
                rounded-[6px]
                px-[13px]
                font-['Inter']
                text-[11px]
                font-normal
                ${
                  index === 0
                    ? "bg-[#08737D] text-white"
                    : "text-[#A7B7B8] hover:bg-[#0B5055] hover:text-white"
                }
              `}
            >
              {item.label}
            </a>
          ))}

          {/* Mobile CTA */}
          <a
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="
              mt-[3px]
              flex
              h-[40px]
              items-center
              justify-center
              gap-[8px]
              rounded-full
              bg-[#10899A]
              font-['Inter']
              text-[11px]
              font-medium
              text-white
            "
          >
            <span>Book Your Free Audit</span>

            {/* Actual arrow asset */}
            <img
              src={arrowIcon}
              alt=""
              aria-hidden="true"
              className="h-[13px] w-[13px] object-contain"
            />
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;