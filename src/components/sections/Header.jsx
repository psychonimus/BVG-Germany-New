import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useLang } from "context/LangContext";
import { Button } from "components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_ITEMS = [
  { to: "/about", key: "about", testId: "nav-about" },
  { to: "/services", key: "services", testId: "nav-services" },
  { to: "/process", key: "process", testId: "nav-process" },
  { to: "/employers", key: "employers", testId: "nav-employers" },
  { to: "/candidates", key: "candidates", testId: "nav-candidates" },
  { to: "/platform", key: "platform", testId: "nav-platform" },
  { to: "/contact", key: "contact", testId: "nav-contact" },
];

export default function Header() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-[#E2E8F0]"
          : "bg-white/60 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" data-testid="brand-logo" className="flex items-center gap-2.5 group">
          <span className="inline-flex items-center justify-center w-8 h-8 bg-[#0A1F44] text-white font-heading font-semibold text-sm tracking-tight">
            B
          </span>
          <span className="flex flex-col leading-tight text-left">
            <span className="font-heading font-semibold text-[15px] tracking-tight text-[#0A1F44]">
              BVG Germany
            </span>
            <span className="text-[10px] tracking-[0.18em] uppercase text-[#475569]">
              India · Deutschland
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map((i) => (
            <NavLink
              key={i.to}
              to={i.to}
              data-testid={i.testId}
              className={({ isActive }) =>
                `nav-link text-[13px] font-medium tracking-wide ${
                  isActive ? "text-[#0A1F44]" : "text-[#475569] hover:text-[#0A1F44]"
                }`
              }
            >
              {({ isActive }) => (
                <span data-active={isActive ? "true" : "false"} className="nav-link">
                  {t.nav[i.key]}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div
            data-testid="language-toggle"
            className="hidden sm:flex items-center border border-[#E2E8F0] text-[11px] font-semibold tracking-[0.15em]"
          >
            <button
              onClick={() => setLang("en")}
              data-testid="lang-en"
              className={`px-2.5 py-1 transition-colors ${
                lang === "en" ? "bg-[#0A1F44] text-white" : "text-[#475569] hover:text-[#0A1F44]"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("de")}
              data-testid="lang-de"
              className={`px-2.5 py-1 transition-colors ${
                lang === "de" ? "bg-[#0A1F44] text-white" : "text-[#475569] hover:text-[#0A1F44]"
              }`}
            >
              DE
            </button>
          </div>

          <Button
            data-testid="header-cta-hire"
            onClick={() => navigate("/contact")}
            className="hidden md:inline-flex bvg-btn-primary h-9 px-4 rounded-none bg-[#0A1F44] hover:bg-[#0F2D63] text-white text-[12px] font-medium tracking-[0.1em] uppercase"
          >
            {t.nav.hire} <ArrowRight className="ml-2 h-3.5 w-3.5" />
          </Button>

          <button
            onClick={() => setOpen(!open)}
            data-testid="mobile-menu-toggle"
            className="lg:hidden p-2 text-[#0A1F44]"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div data-testid="mobile-menu" className="lg:hidden bg-white border-t border-[#E2E8F0] px-6 py-4">
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((i) => (
              <NavLink
                key={i.to}
                to={i.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-left py-2 text-sm font-medium border-b border-[#E2E8F0] ${
                    isActive ? "text-[#0055FF]" : "text-[#0A1F44]"
                  }`
                }
              >
                {t.nav[i.key]}
              </NavLink>
            ))}
            <div className="flex gap-2 pt-3">
              <button
                onClick={() => setLang("en")}
                className={`flex-1 py-2 text-xs font-semibold tracking-widest border ${
                  lang === "en" ? "bg-[#0A1F44] text-white border-[#0A1F44]" : "border-[#E2E8F0] text-[#475569]"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("de")}
                className={`flex-1 py-2 text-xs font-semibold tracking-widest border ${
                  lang === "de" ? "bg-[#0A1F44] text-white border-[#0A1F44]" : "border-[#E2E8F0] text-[#475569]"
                }`}
              >
                DE
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
