import React from "react";
import { motion } from "framer-motion";
import { useLang } from "context/LangContext";
import { Activity, BarChart3, Workflow, Eye } from "lucide-react";

const DASH_IMG =
  "https://static.prod-images.emergentagent.com/jobs/d19ff5a4-8103-44b1-9f40-4d7e0d8b64bb/images/fffc09861d764ab75bfaf53ec29da05ab84896fa064431c636054a3add920212.png";

const ICONS = [Activity, BarChart3, Workflow, Eye];

export default function Platform() {
  const { t } = useLang();
  return (
    <section
      id="platform"
      data-testid="platform-section"
      className="py-24 lg:py-32 border-t border-[#E2E8F0]"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-end">
          <div className="lg:col-span-7">
            <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#0055FF] mb-4">
              {t.platform.overline}
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl leading-[1.1] font-semibold tracking-tight text-[#0A1F44]">
              {t.platform.title}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-[#475569] leading-relaxed">
              {t.platform.subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8 border border-[#E2E8F0] bg-[#F8F9FA] overflow-hidden relative"
          >
            <img src={DASH_IMG} alt="Workforce platform dashboard" className="w-full h-auto block" />
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur border border-[#E2E8F0] px-3 py-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[10px] tracking-[0.22em] uppercase text-[#0A1F44] font-semibold">
                Live System
              </span>
            </div>
          </motion.div>

          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-0 border border-[#E2E8F0]">
            {t.platform.features.map((f, i) => {
              const Icon = ICONS[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  data-testid={`platform-feature-${i}`}
                  className={`p-5 bg-white ${
                    i !== t.platform.features.length - 1
                      ? "border-b border-[#E2E8F0]"
                      : ""
                  } ${i !== 0 && i % 2 === 1 ? "sm:border-l sm:border-b-0 lg:border-l-0 lg:border-b" : ""}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 border border-[#0A1F44] flex items-center justify-center flex-none">
                      <Icon className="h-4 w-4 text-[#0A1F44]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-heading text-sm font-semibold text-[#0A1F44]">
                        {f.t}
                      </div>
                      <p className="text-xs text-[#475569] leading-relaxed mt-1">
                        {f.d}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
