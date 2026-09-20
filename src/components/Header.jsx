import { useState } from "react";
import logo from "../assets/Deltaz Logo.svg";
import arrowIcon from "../assets/meteor-icons_arrow-up-right (white).png";
import { useTheme } from "../context/ThemeContext";

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
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  function handleHeaderClick(event) {
    if (event.target.closest("a, button")) {
      return;
    }

    toggleTheme();
  }

  const headerClasses = isLight
    ? "border-[#E4EEEE] bg-white"
    : "border-[#1C5559]/50 bg-[#061F21]";

  const navClasses = isLight
    ? "border-[#E4EEEE] bg-white shadow-[0_4px_15px_rgba(12,58,62,0.18),inset_0_0_14px_rgba(23,157,166,0.06)]"
    : "border-[#147681]/45 bg-[#082B2E] shadow-[0_3px_14px_rgba(0,0,0,0.22),inset_0_0_18px_rgba(21,174,187,0.05)]";

  const mobileNavClasses = isLight
    ? "border-[#D9E9EA] bg-white shadow-[0_15px_35px_rgba(0,83,89,0.16)]"
    : "border-[#147681]/45 bg-[#072C2F] shadow-[0_15px_35px_rgba(0,0,0,0.35)]";

  return (
    <header
      onClick={handleHeaderClick}
      className={`relative z-50 h-[69px] w-full cursor-pointer border-b transition-colors duration-300 ${headerClasses}`}
    >
      <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between px-[24px] sm:px-[32px] lg:px-[38px]">
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

        <nav
          aria-label="Main navigation"
          className={`hidden h-[43px] items-center gap-[3px] rounded-[9px] border p-[5px] transition-colors duration-300 lg:flex ${navClasses}`}
        >
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex h-[33px] items-center justify-center whitespace-nowrap rounded-[6px] px-[15px] font-['Inter'] text-[13px] font-normal leading-none transition-colors duration-200 ${
                index === 0
                  ? isLight
                    ? "bg-[#E2F4F4] text-[#007D87]"
                    : "bg-[#08737D] text-white"
                  : isLight
                    ? "text-[#31494B] hover:bg-[#E8F5F5] hover:text-[#007D87]"
                    : "text-[#9EAFB0] hover:bg-[#0B5055] hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="/contact"
          className="hidden h-[37px] min-w-[151px] items-center justify-center gap-[8px] rounded-full bg-[#007982] px-[17px] font-['Inter'] text-[14px] font-medium leading-[5] text-white transition-transform duration-200 hover:-translate-y-[1px] hover:bg-[#006B73] lg:inline-flex"
        >
          <span className="text-white">Book Your Free Audit</span>

          <img
            src={arrowIcon}
            alt=""
            aria-hidden="true"
            className="h-[14px] w-[14px] object-contain"
          />
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          className="flex h-[40px] w-[40px] items-center justify-center lg:hidden"
        >
          <span className="flex w-[23px] flex-col gap-[5px]">
            <span
              className={`h-[2px] w-full rounded-full ${
                isLight ? "bg-[#123B3E]" : "bg-white"
              }`}
            />
            <span
              className={`h-[2px] w-full rounded-full ${
                isLight ? "bg-[#123B3E]" : "bg-white"
              }`}
            />
            <span
              className={`h-[2px] w-full rounded-full ${
                isLight ? "bg-[#123B3E]" : "bg-white"
              }`}
            />
          </span>
        </button>
      </div>

      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className={`absolute left-[16px] right-[16px] top-[69px] flex flex-col gap-[3px] rounded-[9px] border p-[9px] transition-colors duration-300 lg:hidden ${mobileNavClasses}`}
        >
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`flex h-[38px] w-full items-center rounded-[6px] px-[13px] font-['Inter'] text-[11px] font-normal ${
                index === 0
                  ? isLight
                    ? "bg-[#E2F4F4] text-[#007D87]"
                    : "bg-[#08737D] text-white"
                  : isLight
                    ? "text-[#31494B] hover:bg-[#E8F5F5] hover:text-[#007D87]"
                    : "text-[#A7B7B8] hover:bg-[#0B5055] hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}

          <a
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-[3px] flex h-[40px] items-center justify-center gap-[8px] rounded-full bg-[#007982] font-['Inter'] text-[11px] font-medium text-white"
          >
            <span className="text-white">Book Your Free Audit</span>

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