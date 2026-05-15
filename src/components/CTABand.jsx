import React from "react";
import { Link } from "react-router-dom";
import { Button } from "components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useLang } from "context/LangContext";
import { getP } from "i18n_pages";

export default function CTABand({ variant = "hire" }) {
  const { lang } = useLang();
  const p = getP(lang).cta;
  const isHire = variant === "hire";
  return (
    <section
      data-testid={`cta-band-${variant}`}
      className={`${isHire ? "bg-[#0A1F44] text-white" : "bg-[#F8F9FA] text-[#0A1F44] border-y border-[#E2E8F0]"} relative overflow-hidden`}
    >
      <div className={`absolute inset-0 ${isHire ? "bvg-grid-bg-dark" : "bvg-grid-bg"} pointer-events-none opacity-60`} />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className={`text-[11px] tracking-[0.25em] uppercase font-semibold ${isHire ? "text-[#7FA2FF]" : "text-[#0055FF]"} mb-3`}>
              {isHire ? "EMPLOYERS" : "CANDIDATES"}
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight max-w-2xl">
              {isHire ? p.hireBanner : p.applyBanner}
            </h3>
            <p className={`mt-3 text-base ${isHire ? "text-white/75" : "text-[#475569]"} max-w-xl`}>
              {isHire ? p.hireBannerDesc : p.applyBannerDesc}
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Link to="/contact">
              <Button
                data-testid={`cta-band-${variant}-button`}
                className={`bvg-btn-primary h-12 px-6 rounded-none text-[13px] font-medium tracking-[0.12em] uppercase ${
                  isHire ? "bg-white text-[#0A1F44] hover:bg-[#F8F9FA]" : "bg-[#0A1F44] hover:bg-[#0F2D63] text-white"
                }`}
              >
                {p.contactBtn} {isHire ? <ArrowUpRight className="ml-2 h-4 w-4" /> : <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
