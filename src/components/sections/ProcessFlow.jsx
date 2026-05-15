import React from "react";
import { motion } from "framer-motion";
import { useLang } from "context/LangContext";

export default function ProcessFlow() {
  const { t } = useLang();
  return (
    <section
      id="process"
      data-testid="process-section"
      className="py-24 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-7">
            <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#0055FF] mb-4">
              {t.process.overline}
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl leading-[1.1] font-semibold tracking-tight text-[#0A1F44]">
              {t.process.title}
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-4">
            <p className="text-base text-[#475569] leading-relaxed">
              {t.process.subtitle}
            </p>
          </div>
        </div>

        {/* Desktop timeline */}
        <div className="hidden lg:block">
          <div className="relative border-t border-[#E2E8F0]" />
          <div className="grid grid-cols-6">
            {t.process.steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                data-testid={`process-step-${i + 1}`}
                className={`relative p-6 ${
                  i !== 5 ? "border-r border-[#E2E8F0]" : ""
                }`}
              >
                <div className="absolute -top-[6px] left-6 w-3 h-3 bg-[#0A1F44]" />
                <div className="font-heading text-xs font-semibold text-[#0055FF] tracking-[0.22em] mt-2">
                  STEP {s.n}
                </div>
                <div className="font-heading text-base font-semibold text-[#0A1F44] mt-3 leading-snug">
                  {s.t}
                </div>
                <p className="text-xs text-[#475569] leading-relaxed mt-3">
                  {s.d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="lg:hidden space-y-0 border border-[#E2E8F0]">
          {t.process.steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              data-testid={`process-step-mobile-${i + 1}`}
              className={`p-5 flex gap-4 ${
                i !== 0 ? "border-t border-[#E2E8F0]" : ""
              }`}
            >
              <div className="flex-none w-10 h-10 border border-[#0A1F44] flex items-center justify-center font-heading text-sm font-semibold text-[#0A1F44]">
                {s.n}
              </div>
              <div>
                <div className="font-heading text-base font-semibold text-[#0A1F44]">
                  {s.t}
                </div>
                <p className="text-sm text-[#475569] mt-1 leading-relaxed">
                  {s.d}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
