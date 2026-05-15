import React from "react";
import { motion } from "framer-motion";
import PageHeader from "components/PageHeader";
import Platform from "components/sections/Platform";
import CTABand from "components/CTABand";
import { Database, Activity, GitMerge, BarChart3, Lock, LifeBuoy, ShieldCheck, Globe, Server } from "lucide-react";
import { useLang } from "context/LangContext";
import { getP } from "i18n_pages";

const MODULE_ICONS = [Database, Activity, GitMerge, BarChart3, Lock, LifeBuoy];
const SECURITY_ICONS = [ShieldCheck, Globe, Server];

export default function PlatformPage() {
  const { lang } = useLang();
  const p = getP(lang);
  const head = p.pageHeaders.platform;
  const pp = p.platformPage;

  return (
    <div data-testid="page-platform">
      <PageHeader overline={head.overline} title={head.title} subtitle={head.subtitle} breadcrumb="Platform" />

      <Platform />

      {/* Modules */}
      <section className="py-20 lg:py-28" data-testid="platform-modules">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#0055FF] mb-4">
            MODULES
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0A1F44]">
            {pp.modulesTitle}
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#E2E8F0]">
            {pp.modules.map((m, i) => {
              const Icon = MODULE_ICONS[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`p-8 bvg-card bg-white ${
                    i % 3 !== 2 ? "lg:border-r border-[#E2E8F0]" : ""
                  } ${i % 2 === 0 ? "md:border-r lg:border-r-0" : ""} ${
                    i !== 0 ? "border-t md:border-t border-[#E2E8F0]" : ""
                  } ${i === 1 || i === 2 ? "md:border-t-0" : ""} ${
                    i === 2 ? "lg:border-t-0" : ""
                  }`}
                  data-testid={`platform-module-${i}`}
                >
                  <div className="w-11 h-11 border border-[#0A1F44] flex items-center justify-center mb-5">
                    <Icon className="h-4 w-4 text-[#0A1F44]" strokeWidth={1.5} />
                  </div>
                  <div className="font-heading text-base font-semibold text-[#0A1F44]">{m.t}</div>
                  <p className="text-sm text-[#475569] mt-2 leading-relaxed">{m.d}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 lg:py-28 bg-[#0A1F44] text-white relative overflow-hidden" data-testid="platform-security">
        <div className="absolute inset-0 bvg-grid-bg-dark pointer-events-none opacity-60" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#7FA2FF] mb-4">
            TRUST
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight max-w-3xl">
            {pp.securityTitle}
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/15">
            {pp.security.map((s, i) => {
              const Icon = SECURITY_ICONS[i];
              return (
                <div
                  key={i}
                  className={`p-8 ${
                    i !== 2 ? "md:border-r border-white/15" : ""
                  } ${i !== 0 ? "border-t md:border-t-0 border-white/15" : ""}`}
                >
                  <Icon className="h-5 w-5 text-[#7FA2FF]" strokeWidth={1.5} />
                  <div className="font-heading text-lg font-semibold mt-4">{s.t}</div>
                  <p className="text-sm text-white/75 leading-relaxed mt-2">{s.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABand variant="hire" />
    </div>
  );
}
