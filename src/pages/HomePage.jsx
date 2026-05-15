import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Hero from "components/sections/Hero";
import About from "components/sections/About";
import Services from "components/sections/Services";
import ProcessFlow from "components/sections/ProcessFlow";
import Employers from "components/sections/Employers";
import Candidates from "components/sections/Candidates";
import Platform from "components/sections/Platform";
import CTABand from "components/CTABand";
import { useLang } from "context/LangContext";
import { getP } from "i18n_pages";

const Teaser = ({ to, label, title, sub, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, delay: index * 0.06 }}
  >
    <Link
      to={to}
      data-testid={`home-teaser-${to.replace("/", "")}`}
      className="group block p-6 border border-[#E2E8F0] bg-white hover:bg-[#F8F9FA] transition-colors relative"
    >
      <div className="text-[10px] tracking-[0.22em] uppercase font-semibold text-[#0055FF] mb-3">
        {label}
      </div>
      <div className="font-heading text-lg font-semibold text-[#0A1F44] leading-snug">
        {title}
      </div>
      <p className="text-sm text-[#475569] mt-2 leading-relaxed">{sub}</p>
      <div className="mt-5 flex items-center gap-1 text-[11px] tracking-[0.18em] uppercase font-semibold text-[#0A1F44] group-hover:gap-2 transition-all">
        Explore <ArrowUpRight className="h-3.5 w-3.5" />
      </div>
    </Link>
  </motion.div>
);

export default function HomePage() {
  const { t, lang } = useLang();
  const p = getP(lang).home;

  const teasers = [
    { to: "/about", label: t.nav.about.toUpperCase(), title: p.aboutLink, sub: t.about.title },
    { to: "/services", label: t.nav.services.toUpperCase(), title: p.servicesLink, sub: t.services.title },
    { to: "/process", label: t.nav.process.toUpperCase(), title: p.processLink, sub: t.process.title },
    { to: "/employers", label: t.nav.employers.toUpperCase(), title: p.employersLink, sub: t.employers.title },
    { to: "/candidates", label: t.nav.candidates.toUpperCase(), title: p.candidatesLink, sub: t.candidates.title },
    { to: "/platform", label: t.nav.platform.toUpperCase(), title: p.platformLink, sub: t.platform.title },
  ];

  return (
    <div data-testid="home-page">
      <Hero />

      {/* About teaser (condensed) */}
      <About />

      {/* Site map teaser grid */}
      <section data-testid="home-teasers" className="py-24 lg:py-28 bg-[#F8F9FA] border-y border-[#E2E8F0]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-7">
              <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#0055FF] mb-4">
                EXPLORE
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl leading-[1.1] font-semibold tracking-tight text-[#0A1F44]">
                Six paths into the BVG Germany operation.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teasers.map((tg, i) => <Teaser key={tg.to} {...tg} index={i} />)}
          </div>
        </div>
      </section>

      <Services />
      <ProcessFlow />
      <Employers />
      <Candidates />
      <Platform />
      <CTABand variant="hire" />
    </div>
  );
}
