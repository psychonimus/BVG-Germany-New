import React from "react";
import { motion } from "framer-motion";
import PageHeader from "components/PageHeader";
import CTABand from "components/CTABand";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "components/ui/accordion";
import { useLang } from "context/LangContext";
import { getP } from "i18n_pages";

export default function ProcessPage() {
  const { lang } = useLang();
  const p = getP(lang);
  const head = p.pageHeaders.process;
  const pp = p.processPage;

  return (
    <div data-testid="page-process">
      <PageHeader overline={head.overline} title={head.title} subtitle={head.subtitle} breadcrumb="Process" />

      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="border border-[#E2E8F0]">
            {pp.detail.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                data-testid={`process-detail-${i + 1}`}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-6 p-8 ${
                  i !== 0 ? "border-t border-[#E2E8F0]" : ""
                } hover:bg-[#F8F9FA] transition-colors`}
              >
                <div className="lg:col-span-2">
                  <div className="font-heading text-5xl font-semibold text-[#0A1F44] tracking-tighter leading-none">
                    {s.n}
                  </div>
                  <div className="mt-3 text-[11px] tracking-[0.18em] uppercase text-[#0055FF] font-semibold">
                    {s.dur}
                  </div>
                </div>
                <div className="lg:col-span-10 lg:pl-8 lg:border-l border-[#E2E8F0]">
                  <h3 className="font-heading text-xl lg:text-2xl font-semibold text-[#0A1F44]">
                    {s.t}
                  </h3>
                  <p className="text-sm lg:text-base text-[#475569] mt-3 leading-relaxed max-w-3xl">
                    {s.d}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA] border-y border-[#E2E8F0]" data-testid="process-faq">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
          <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#0055FF] mb-4">
            FAQ
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0A1F44]">
            Operational questions, answered.
          </h2>
          <div className="mt-12 border border-[#E2E8F0] bg-white">
            <Accordion type="single" collapsible>
              {pp.faq.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-[#E2E8F0]">
                  <AccordionTrigger
                    data-testid={`faq-process-${i}`}
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
