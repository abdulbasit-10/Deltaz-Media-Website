import { useState } from "react";

import logo from "../assets/Deltaz Logo.svg";
import arrowIcon from "../assets/meteor-icons_arrow-up-right (white).png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Who We Help", href: "/#who-we-help" },
  { label: "Case Studies", href: "/#success-stories" },
  { label: "Insights", href: "/#insights" },
  { label: "Contact Us", href: "/contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenuOnEscape(event) {
    if (event.key === "Escape") {
      setMenuOpen(false);
    }
  }

  return (
    <header
      className="
        fixed inset-x-0 top-0 z-50
        h-[69px]
        border-b border-[#245055]/60
        bg-[#032D31]
      "
    >
      <div
        className="
          mx-auto flex h-full max-w-[1440px]
          items-center justify-between
          gap-4 px-5
          sm:px-7
        "
      >
        {/* Logo */}
        <a
          href="/"
          aria-label="Deltaz Media home"
          className="shrink-0"
        >
          <img
            src={logo}
            alt="Deltaz Media"
            className="h-auto w-[104px]"
          />
        </a>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="
            hidden items-center gap-[6px]
            rounded-[10px]
            border border-[#32818A]/60
            bg-[#083439]
            p-[7px]
            shadow-[inset_0_0_10px_rgba(42,164,177,0.25)]
            lg:flex
          "
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={item.href === "/" ? "page" : undefined}
              className={`
                flex min-h-[34px] items-center justify-center
                rounded-[6px]
                px-[10px]
                font-['Inter']
                text-[12px]
                whitespace-nowrap
                transition-colors duration-200
                xl:px-[14px]
                xl:text-[13px]
                ${
                  item.href === "/"
                    ? "bg-[#078894] text-white"
                    : "text-[#B0C6C8] hover:bg-[#0B5055] hover:text-white"
                }
              `}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop audit button */}
        <a
          href="/contact"
          className="
            group hidden min-h-[37px] shrink-0
            items-center justify-center gap-2
            rounded-full
            bg-[#087F89]
            px-[18px]
            font-['Inter'] text-[12px] font-medium text-white
            transition-all duration-200
            hover:-translate-y-px hover:bg-[#006B73]
            lg:inline-flex
          "
        >
          <span>Book Your Free Audit</span>

          <img
            src={arrowIcon}
            alt=""
            aria-hidden="true"
            className="
              h-[14px] w-[14px] object-contain
              transition-transform duration-200
              group-hover:translate-x-[2px]
              group-hover:-translate-y-[2px]
            "
          />
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          onKeyDown={closeMenuOnEscape}
          className="
            flex h-11 w-11 shrink-0
            items-center justify-center
            rounded-lg
            border border-[#28575C]
            text-white
            lg:hidden
          "
        >
          <span
            aria-hidden="true"
            className="relative block h-5 w-6"
          >
            <span
              className={`
                absolute left-0 top-0
                h-[2px] w-6 rounded bg-current
                transition-transform duration-200
                ${menuOpen ? "translate-y-[9px] rotate-45" : ""}
              `}
            />

            <span
              className={`
                absolute left-0 top-[9px]
                h-[2px] w-6 rounded bg-current
                transition-opacity duration-200
                ${menuOpen ? "opacity-0" : "opacity-100"}
              `}
            />

            <span
              className={`
                absolute bottom-0 left-0
                h-[2px] w-6 rounded bg-current
                transition-transform duration-200
                ${menuOpen ? "-translate-y-[9px] -rotate-45" : ""}
              `}
            />
          </span>
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          onKeyDown={closeMenuOnEscape}
          className="
            absolute inset-x-4 top-[77px]
            max-h-[calc(100dvh-93px)]
            overflow-y-auto
            rounded-xl
            border border-[#32818A]/60
            bg-[#073438]
            p-3
            shadow-[inset_0_0_10px_rgba(42,164,177,0.25)]
            lg:hidden
          "
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={item.href === "/" ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
              className={`
                flex min-h-11 items-center
                rounded-lg px-4
                text-sm
                transition-colors duration-200
                ${
                  item.href === "/"
                    ? "bg-[#078894] text-white"
                    : "text-[#B0C6C8] hover:bg-[#0B5055] hover:text-white"
                }
              `}
            >
              {item.label}
            </a>
          ))}

          <a
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="
              group mt-3 flex min-h-11
              items-center justify-center gap-2
              rounded-full
              bg-[#087F89]
              px-4
              text-sm font-medium text-white
              transition-colors duration-200
              hover:bg-[#006B73]
            "
          >
            <span>Book Your Free Audit</span>

            <img
              src={arrowIcon}
              alt=""
              aria-hidden="true"
              className="
                h-[14px] w-[14px] object-contain
                transition-transform duration-200
                group-hover:translate-x-[2px]
                group-hover:-translate-y-[2px]
              "
            />
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;