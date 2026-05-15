import React from "react";
import { motion } from "framer-motion";
import { useLang } from "context/LangContext";
import { UsersRound, GraduationCap, Plane, Check } from "lucide-react";

const ICONS = [UsersRound, GraduationCap, Plane];

export default function Services() {
  const { t } = useLang();
  return (
    <section
      id="services"
      data-testid="services-section"
      className="py-24 lg:py-32 bg-[#F8F9FA] border-t border-b border-[#E2E8F0]"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-5">
            <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#0055FF] mb-4">
              {t.services.overline}
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl leading-[1.1] font-semibold tracking-tight text-[#0A1F44]">
              {t.services.title}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#E2E8F0] bg-white">
          {t.services.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                data-testid={`service-card-${i}`}
                className={`bvg-card relative p-8 ${
                  i !== 2 ? "md:border-r border-[#E2E8F0]" : ""
                } ${i !== 0 ? "border-t md:border-t-0 border-[#E2E8F0]" : ""}`}
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 border border-[#0A1F44] flex items-center justify-center">
                    <Icon className="h-5 w-5 text-[#0A1F44]" strokeWidth={1.5} />
                  </div>
                  <span className="font-heading text-sm font-semibold text-[#0055FF] tracking-[0.2em]">
                    {item.n}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#0A1F44] mb-3 leading-snug">
                  {item.t}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed mb-6">
                  {item.d}
                </p>
                <ul className="space-y-2 pt-4 border-t border-[#E2E8F0]">
                  {item.b.map((b, bi) => (
                    <li
                      key={bi}
                      className="flex items-center gap-2 text-xs text-[#0A1F44]"
                    >
                      <Check className="h-3.5 w-3.5 text-[#0055FF]" strokeWidth={2.5} />
                      <span className="tracking-wide">{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
