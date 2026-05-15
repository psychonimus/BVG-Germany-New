import React from "react";
import { motion } from "framer-motion";
import PageHeader from "components/PageHeader";
import CTABand from "components/CTABand";
import { Check } from "lucide-react";
import { useLang } from "context/LangContext";
import { getP } from "i18n_pages";

export default function ServicesPage() {
  const { lang } = useLang();
  const p = getP(lang);
  const head = p.pageHeaders.services;
  const sp = p.servicesPage;

  return (
    <div data-testid="page-services">
      <PageHeader overline={head.overline} title={head.title} subtitle={head.subtitle} breadcrumb="Services" />

      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 space-y-16">
          {sp.detailed.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              data-testid={`service-detail-${i}`}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 ${
                i !== 0 ? "pt-16 border-t border-[#E2E8F0]" : ""
              }`}
            >
              <div className="lg:col-span-4">
                <div className="font-heading text-6xl lg:text-7xl font-semibold text-[#E2E8F0] leading-none tracking-tighter">
                  {s.n}
                </div>
                <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#0055FF] mt-6">
                  SERVICE 0{i + 1}
                </div>
              </div>
              <div className="lg:col-span-8">
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#0A1F44] leading-tight">
                  {s.t}
                </h2>
                <p className="mt-5 text-base text-[#475569] leading-relaxed max-w-2xl">{s.d}</p>
                <div className="mt-8 border-t border-[#E2E8F0] pt-6">
                  <div className="text-[11px] tracking-[0.22em] uppercase font-semibold text-[#0A1F44] mb-4">
                    Deliverables
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    {s.deliverables.map((d, di) => (
                      <li key={di} className="flex items-start gap-3 text-sm text-[#0A1F44]">
                        <Check className="h-4 w-4 text-[#0055FF] mt-0.5 flex-none" strokeWidth={2} />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTABand variant="hire" />
    </div>
  );
}
