import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "context/LangContext";
import { Button } from "components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getP } from "i18n_pages";

const HERO_IMG =
  "https://static.prod-images.emergentagent.com/jobs/d19ff5a4-8103-44b1-9f40-4d7e0d8b64bb/images/28c290d1e7078df81d7bf07038d12348d6d9f5d8742345c04cf51567ed59bd52.png";

const Kpi = ({ value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="border-t border-[#E2E8F0] pt-4"
  >
    <div className="font-heading text-2xl sm:text-3xl font-semibold text-[#0A1F44] tracking-tight">
      {value}
    </div>
    <div className="text-[11px] tracking-[0.18em] uppercase text-[#475569] mt-1">
      {label}
    </div>
  </motion.div>
);

export default function Hero() {
  const { t, lang } = useLang();
  const p = getP(lang).home;

  return (
    <section
      data-testid="hero-section"
      className="relative pt-28 lg:pt-32 pb-20 bvg-grid-bg overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="h-px w-10 bg-[#0A1F44]" />
          <span className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#0055FF]">
            {t.hero.overline}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-heading text-[2.5rem] sm:text-5xl lg:text-[4.25rem] leading-[1.02] font-semibold tracking-tighter text-[#0A1F44]"
            >
              {t.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-xl text-base lg:text-lg text-[#475569] leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link to="/contact">
                <Button
                  data-testid="hero-cta-hire"
                  className="bvg-btn-primary h-12 px-6 rounded-none bg-[#0A1F44] hover:bg-[#0F2D63] text-white text-[13px] font-medium tracking-[0.12em] uppercase"
                >
                  {t.hero.ctaHire} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/candidates">
                <Button
                  data-testid="hero-cta-apply"
                  variant="outline"
                  className="h-12 px-6 rounded-none border-[#0A1F44] text-[#0A1F44] hover:bg-[#0A1F44] hover:text-white bg-transparent text-[13px] font-medium tracking-[0.12em] uppercase"
                >
                  {t.hero.ctaApply} <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl">
              <Kpi value="2,500+" label={t.hero.kpi1} delay={0.35} />
              <Kpi value="40+" label={t.hero.kpi2} delay={0.42} />
              <Kpi value="100%" label={t.hero.kpi3} delay={0.49} />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative border border-[#E2E8F0] bg-[#F8F9FA]">
              <img
                src={HERO_IMG}
                alt="India to Germany workforce connection"
                className="w-full h-[420px] lg:h-[520px] object-cover"
              />
              <div className="absolute top-0 left-0 border-r border-b border-[#E2E8F0] bg-white/90 backdrop-blur-sm px-4 py-2">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#0A1F44] font-semibold">
                  IN ↔ DE
                </span>
              </div>
              <div className="absolute bottom-0 right-0 border-l border-t border-[#E2E8F0] bg-white/90 backdrop-blur-sm px-4 py-3">
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#475569]">Lifecycle</div>
                <div className="font-heading text-sm font-semibold text-[#0A1F44]">
                  Sourcing → Deployment
                </div>
              </div>
            </div>
            <div className="hidden lg:flex absolute -right-2 top-6 flex-col items-end text-[10px] tracking-[0.22em] uppercase text-[#475569]">
              <span className="h-px w-8 bg-[#E2E8F0] mb-2" />
              BVG / Germany
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
