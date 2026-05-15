import React from "react";
import { motion } from "framer-motion";
import PageHeader from "components/PageHeader";
import Employers from "components/sections/Employers";
import CTABand from "components/CTABand";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "components/ui/accordion";
import { Building2, HeartPulse, Briefcase, Wrench, ShieldCheck, Gauge, Scale, Workflow } from "lucide-react";
import { useLang } from "context/LangContext";
import { getP } from "i18n_pages";

const SECTOR_ICONS = [HeartPulse, Building2, Briefcase, Wrench];
const WHY_ICONS = [Gauge, Scale, ShieldCheck, Workflow];

export default function EmployersPage() {
  const { lang } = useLang();
  const p = getP(lang);
  const head = p.pageHeaders.employers;
  const ep = p.employersPage;

  return (
    <div data-testid="page-employers">
      <PageHeader overline={head.overline} title={head.title} subtitle={head.subtitle} breadcrumb="For Employers" />

      <Employers />

      {/* Sectors */}
      <section className="py-20 lg:py-28" data-testid="employers-sectors">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#0055FF] mb-4">
            COVERAGE
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0A1F44] max-w-2xl">
            {ep.sectorsTitle}
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#E2E8F0]">
            {ep.sectors.map((s, i) => {
              const Icon = SECTOR_ICONS[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className={`p-8 bvg-card ${
                    i !== 3 ? "lg:border-r border-[#E2E8F0]" : ""
                  } ${i < 2 ? "md:border-r border-[#E2E8F0]" : ""} ${
                    i !== 0 ? "border-t md:border-t-0 border-[#E2E8F0]" : ""
                  } ${i === 2 ? "md:border-t lg:border-t-0 border-[#E2E8F0]" : ""}`}
                >
                  <div className="w-12 h-12 border border-[#0A1F44] flex items-center justify-center mb-6">
                    <Icon className="h-5 w-5 text-[#0A1F44]" strokeWidth={1.5} />
                  </div>
                  <div className="font-heading text-lg font-semibold text-[#0A1F44]">{s.t}</div>
                  <p className="text-sm text-[#475569] leading-relaxed mt-2">{s.d}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 lg:py-28 bg-[#0A1F44] text-white relative overflow-hidden" data-testid="employers-why">
        <div className="absolute inset-0 bvg-grid-bg-dark pointer-events-none opacity-60" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#7FA2FF] mb-4">
            WHY US
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight max-w-3xl">
            {ep.whyTitle}
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/15">
            {ep.why.map((w, i) => {
              const Icon = WHY_ICONS[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className={`p-8 ${
                    i !== 3 ? "lg:border-r border-white/15" : ""
                  } ${i < 2 ? "md:border-r border-white/15" : ""} ${
                    i !== 0 ? "border-t md:border-t-0 border-white/15" : ""
                  } ${i === 2 ? "md:border-t lg:border-t-0 border-white/15" : ""}`}
                >
                  <Icon className="h-5 w-5 text-[#7FA2FF]" strokeWidth={1.5} />
                  <div className="font-heading text-lg font-semibold mt-4">{w.t}</div>
                  <p className="text-sm text-white/75 leading-relaxed mt-2">{w.d}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="py-20 lg:py-28" data-testid="employers-engagement">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#0055FF] mb-4">
            ENGAGEMENT
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0A1F44] max-w-2xl">
            {ep.engagementTitle}
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#E2E8F0]">
            {ep.engagement.map((e, i) => (
              <div
                key={i}
                className={`p-8 bg-white bvg-card ${
                  i !== 2 ? "md:border-r border-[#E2E8F0]" : ""
                } ${i !== 0 ? "border-t md:border-t-0 border-[#E2E8F0]" : ""}`}
              >
                <div className="font-heading text-sm tracking-[0.2em] text-[#0055FF] font-semibold">
                  MODEL 0{i + 1}
                </div>
                <div className="font-heading text-xl font-semibold text-[#0A1F44] mt-3">{e.t}</div>
                <p className="text-sm text-[#475569] leading-relaxed mt-2">{e.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA] border-y border-[#E2E8F0]" data-testid="employers-faq">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
          <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#0055FF] mb-4">
            FAQ
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0A1F44]">
            Common employer questions.
          </h2>
          <div className="mt-12 border border-[#E2E8F0] bg-white">
            <Accordion type="single" collapsible>
              {ep.faq.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-[#E2E8F0]">
                  <AccordionTrigger
                    data-testid={`faq-employer-${i}`}
                    className="px-6 py-5 text-left font-heading text-base lg:text-lg font-medium text-[#0A1F44] hover:no-underline"
                  >
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-sm lg:text-base text-[#475569] leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CTABand variant="hire" />
    </div>
  );
}
