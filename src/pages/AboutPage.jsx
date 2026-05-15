import React from "react";
import { motion } from "framer-motion";
import PageHeader from "components/PageHeader";
import About from "components/sections/About";
import CTABand from "components/CTABand";
import { useLang } from "context/LangContext";
import { getP } from "i18n_pages";

export default function AboutPage() {
  const { lang } = useLang();
  const p = getP(lang);
  const head = p.pageHeaders.about;
  const ap = p.aboutPage;

  return (
    <div data-testid="page-about">
      <PageHeader overline={head.overline} title={head.title} subtitle={head.subtitle} breadcrumb="About" />

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#E2E8F0]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-10 border-b md:border-b-0 md:border-r border-[#E2E8F0]"
            data-testid="about-mission"
          >
            <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#0055FF] mb-3">
              {ap.mission.title}
            </div>
            <p className="font-heading text-xl lg:text-2xl leading-snug font-medium text-[#0A1F44]">
              {ap.mission.body}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-10 bg-[#0A1F44] text-white"
            data-testid="about-vision"
          >
            <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#7FA2FF] mb-3">
              {ap.vision.title}
            </div>
            <p className="font-heading text-xl lg:text-2xl leading-snug font-medium">
              {ap.vision.body}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Existing About section (leadership trio) */}
      <About />

      {/* Values */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA] border-y border-[#E2E8F0]" data-testid="about-values">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#0055FF] mb-4">
            VALUES
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0A1F44] max-w-2xl">
            Four principles guide every placement.
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#E2E8F0] bg-white">
            {ap.values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`p-8 ${
                  i !== 3 ? "lg:border-r border-[#E2E8F0]" : ""
                } ${i < 2 ? "md:border-r lg:border-r border-[#E2E8F0]" : ""} ${
                  i !== 0 ? "border-t md:border-t-0 border-[#E2E8F0]" : ""
                }`}
              >
                <div className="font-heading text-sm font-semibold text-[#0055FF] tracking-[0.2em]">
                  0{i + 1}
                </div>
                <div className="font-heading text-lg font-semibold text-[#0A1F44] mt-3">{v.t}</div>
                <p className="text-sm text-[#475569] leading-relaxed mt-2">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28" data-testid="about-timeline">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#0055FF] mb-4">
            HERITAGE
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0A1F44] max-w-2xl">
            {ap.timeline.title}
          </h2>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-4 gap-0 border border-[#E2E8F0]">
            {ap.timeline.items.map((it, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`p-8 ${i !== 3 ? "lg:border-r border-[#E2E8F0]" : ""} ${
                  i !== 0 ? "border-t lg:border-t-0 border-[#E2E8F0]" : ""
                }`}
              >
                <div className="font-heading text-3xl font-semibold text-[#0A1F44] tracking-tight">
                  {it.y}
                </div>
                <div className="h-px w-10 bg-[#0055FF] my-4" />
                <div className="font-heading text-base font-semibold text-[#0A1F44]">{it.t}</div>
                <p className="text-sm text-[#475569] mt-2 leading-relaxed">{it.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Presence */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA] border-t border-[#E2E8F0]" data-testid="about-presence">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0A1F44] max-w-2xl">
            {ap.presenceTitle}
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {ap.presence.map((pr, i) => (
              <div key={i} className="border border-[#E2E8F0] bg-white p-8">
                <div className="text-[11px] tracking-[0.22em] uppercase font-semibold text-[#0055FF]">
                  {pr.c}
                </div>
                <div className="font-heading text-xl font-semibold text-[#0A1F44] mt-2">{pr.l}</div>
                <div className="mt-6 pt-4 border-t border-[#E2E8F0] text-[11px] tracking-[0.18em] uppercase text-[#475569]">
                  {pr.k}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand variant="hire" />
    </div>
  );
}
