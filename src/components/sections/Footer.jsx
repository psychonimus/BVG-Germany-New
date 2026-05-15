import React from "react";
import { Link } from "react-router-dom";
import { useLang } from "context/LangContext";

export default function Footer() {
  const { t } = useLang();
  const items = [
    { to: "/about", key: "about" },
    { to: "/services", key: "services" },
    { to: "/process", key: "process" },
    { to: "/platform", key: "platform" },
  ];
  return (
    <footer data-testid="site-footer" className="bg-[#0A1F44] text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-white text-[#0A1F44] font-heading font-semibold text-sm">
                B
              </span>
              <span className="font-heading font-semibold text-lg tracking-tight">
                BVG Germany
              </span>
            </Link>
            <p className="mt-5 text-sm text-white/70 leading-relaxed max-w-md">
              {t.footer.tagline}
            </p>
            <div className="mt-8 flex items-center gap-6 text-[10px] tracking-[0.2em] uppercase text-white/60">
              <span>INDIA HQ · Pune</span>
              <span className="h-px w-6 bg-white/30" />
              <span>DE · Frankfurt</span>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] tracking-[0.22em] uppercase text-white/60 mb-4">
              {t.footer.explore}
            </div>
            <ul className="space-y-2">
              {items.map((i) => (
                <li key={i.to}>
                  <Link to={i.to} className="text-sm text-white/85 hover:text-white transition-colors">
                    {t.nav[i.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] tracking-[0.22em] uppercase text-white/60 mb-4">
              {t.footer.contact}
            </div>
            <ul className="space-y-2 text-sm text-white/85">
              <li>
                <Link to="/contact" className="hover:text-white">{t.nav.contact}</Link>
              </li>
              <li>
                <a href="mailto:hello@bvggermany.com" className="hover:text-white">
                  hello@bvggermany.com
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] tracking-[0.22em] uppercase text-white/60 mb-4">
              {t.footer.legal}
            </div>
            <ul className="space-y-2 text-sm text-white/85">
              {t.footer.legalItems.map((l, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/15 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/50">
          <div data-testid="footer-rights">{t.footer.rights}</div>
          <div className="tracking-[0.22em] uppercase">BVG INDIA LIMITED · 2025</div>
        </div>
      </div>
    </footer>
  );
}
