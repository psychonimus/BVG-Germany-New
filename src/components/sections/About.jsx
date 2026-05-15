import React from "react";
import { motion } from "framer-motion";
import { useLang } from "context/LangContext";

const OFFICE_IMG =
  "https://images.pexels.com/photos/17872188/pexels-photo-17872188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const LeaderCard = ({ role, name, description, testId }) => (
  <div
    data-testid={testId}
    className="border border-[#E2E8F0] p-6 bg-white bvg-card"
  >
    <div className="text-[10px] tracking-[0.22em] uppercase font-semibold text-[#0055FF]">
      {role}
    </div>
    <div className="font-heading text-xl font-semibold text-[#0A1F44] mt-2">
      {name}
    </div>
    <p className="text-sm text-[#475569] leading-relaxed mt-3">{description}</p>
  </div>
);

export default function About() {
  const { t } = useLang();
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 lg:py-32 border-t border-[#E2E8F0]"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#0055FF] mb-5">
              {t.about.overline}
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] font-semibold tracking-tight text-[#0A1F44] max-w-2xl">
              {t.about.title}
            </h2>
            <p className="mt-6 text-base text-[#475569] leading-relaxed max-w-2xl">
              {t.about.body}
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
              {t.about.stats.map((s, i) => (
                <div key={i} className="border-t-2 border-[#0A1F44] pt-3">
                  <div className="font-heading text-2xl font-semibold text-[#0A1F44]">
                    {s.v}
                  </div>
                  <div className="text-[11px] tracking-[0.15em] uppercase text-[#475569] mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative border border-[#E2E8F0]">
              <img
                src={OFFICE_IMG}
                alt="Corporate presence"
                className="w-full h-[340px] object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 border border-[#E2E8F0] text-[10px] tracking-[0.2em] uppercase font-semibold text-[#0A1F44]">
                Global Presence.
              </div>
            </div>
          </motion.div>
        </div>

        {/* Leadership */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#E2E8F0] divide-y md:divide-y-0 md:divide-x divide-[#E2E8F0]">
          <div data-testid="leader-ceo" className="p-8">
            <div className="text-[10px] tracking-[0.22em] uppercase font-semibold text-[#0055FF]">
              {t.about.ceo}
            </div>
            <div className="font-heading text-xl font-semibold text-[#0A1F44] mt-2">
              {t.about.ceoName}
            </div>
            <p className="text-sm text-[#475569] leading-relaxed mt-3">
              {t.about.ceoRole}
            </p>
          </div>
          <div data-testid="leader-vp" className="p-8">
            <div className="text-[10px] tracking-[0.22em] uppercase font-semibold text-[#0055FF]">
              {t.about.vp}
            </div>
            <div className="font-heading text-xl font-semibold text-[#0A1F44] mt-2">
              {t.about.vpName}
            </div>
            <p className="text-sm text-[#475569] leading-relaxed mt-3">
              {t.about.vpRole}
            </p>
          </div>
          <div data-testid="leader-germany" className="p-8 bg-[#0A1F44] text-white">
            <div className="text-[10px] tracking-[0.22em] uppercase font-semibold text-[#7FA2FF]">
              {t.about.led}
            </div>
            <div className="font-heading text-xl font-semibold mt-2">
              {t.about.leadName}
            </div>
            <p className="text-sm text-white/75 leading-relaxed mt-3">
              {t.about.leadRole}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
