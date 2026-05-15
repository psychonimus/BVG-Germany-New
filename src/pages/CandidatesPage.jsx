import React from "react";
import { motion } from "framer-motion";
import PageHeader from "components/PageHeader";
import Candidates from "components/sections/Candidates";
import CTABand from "components/CTABand";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "components/ui/accordion";
import { Stethoscope, Sparkles, Wrench } from "lucide-react";
import { useLang } from "context/LangContext";
import { getP } from "i18n_pages";

const ROLE_ICONS = [Stethoscope, Sparkles, Wrench];

export default function CandidatesPage() {
  const { lang } = useLang();
  const p = getP(lang);
  const head = p.pageHeaders.candidates;
  const cp = p.candidatesPage;

  return (
    <div data-testid="page-candidates">
      <PageHeader overline={head.overline} title={head.title} subtitle={head.subtitle} breadcrumb="For Candidates" />

      <Candidates />

      {/* Roles */}
      <section className="py-20 lg:py-28" data-testid="candidates-roles">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#0055FF] mb-4">
            ROLES
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0A1F44]">
            {cp.rolesTitle}
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#E2E8F0]">
            {cp.roles.map((r, i) => {
              const Icon = ROLE_ICONS[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className={`p-8 bvg-card bg-white ${
                    i !== 2 ? "md:border-r border-[#E2E8F0]" : ""
                  } ${i !== 0 ? "border-t md:border-t-0 border-[#E2E8F0]" : ""}`}
                >
                  <div className="w-12 h-12 border border-[#0A1F44] flex items-center justify-center mb-6">
                    <Icon className="h-5 w-5 text-[#0A1F44]" strokeWidth={1.5} />
                  </div>
                  <div className="font-heading text-lg font-semibold text-[#0A1F44]">{r.t}</div>
                  <p className="text-sm text-[#475569] leading-relaxed mt-2">{r.d}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA] border-y border-[#E2E8F0]" data-testid="candidates-journey">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#0055FF] mb-4">
            JOURNEY
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0A1F44]">
            {cp.journeyTitle}
          </h2>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 border border-[#E2E8F0] bg-white">
            {cp.journey.map((j, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className={`p-6 relative ${
                  (i + 1) % 2 !== 0 ? "border-r border-[#E2E8F0]" : ""
                } ${i < cp.journey.length - 2 ? "border-b md:border-b-0 border-[#E2E8F0]" : ""} ${
                  i % 3 !== 2 ? "md:border-r" : "md:border-r-0"
                } lg:border-r ${i === 5 ? "lg:border-r-0" : ""}`}
              >
                <div className="font-heading text-sm font-semibold text-[#0055FF] tracking-[0.2em]">
                  0{i + 1}
                </div>
                <div className="font-heading text-base font-semibold text-[#0A1F44] mt-3 leading-snug">
                  {j.t}
                </div>
                <p className="text-xs text-[#475569] mt-2 leading-relaxed">{j.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Life in Germany */}
      <section className="py-20 lg:py-28" data-testid="candidates-life">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#0055FF] mb-4">
            SUPPORT
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0A1F44] max-w-2xl">
            {cp.lifeTitle}
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#E2E8F0]">
            {cp.life.map((l, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`p-8 bg-white ${
                  i !== 3 ? "lg:border-r border-[#E2E8F0]" : ""
                } ${i < 2 ? "md:border-r border-[#E2E8F0]" : ""} ${
                  i !== 0 ? "border-t md:border-t-0 border-[#E2E8F0]" : ""
                } ${i === 2 ? "md:border-t lg:border-t-0 border-[#E2E8F0]" : ""}`}
              >
                <div className="font-heading text-sm font-semibold text-[#0055FF] tracking-[0.2em]">
                  0{i + 1}
                </div>
                <div className="font-heading text-base font-semibold text-[#0A1F44] mt-3">{l.t}</div>
                <p className="text-sm text-[#475569] mt-2 leading-relaxed">{l.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA] border-y border-[#E2E8F0]" data-testid="candidates-faq">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
          <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#0055FF] mb-4">
            FAQ
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0A1F44]">
            Candidate questions, answered.
          </h2>
          <div className="mt-12 border border-[#E2E8F0] bg-white">
            <Accordion type="single" collapsible>
              {cp.faq.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-[#E2E8F0]">
                  <AccordionTrigger
                    data-testid={`faq-candidate-${i}`}
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

      <CTABand variant="apply" />
    </div>
  );
}
