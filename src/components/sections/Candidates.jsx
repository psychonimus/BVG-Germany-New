import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "context/LangContext";
import { Button } from "components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const IMG1 =
  "https://images.pexels.com/photos/35724802/pexels-photo-35724802.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const IMG2 =
  "https://images.unsplash.com/photo-1581092446327-9b52bd1570c2?crop=entropy&cs=srgb&fm=jpg&q=85";

export default function Candidates() {
  const { t } = useLang();

  return (
    <section
      id="candidates"
      data-testid="candidates-section"
      className="py-24 lg:py-32 bg-[#F8F9FA]"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 grid grid-cols-2 gap-3"
          >
            <div className="relative border border-[#E2E8F0] col-span-1 row-span-2">
              <img src={IMG1} alt="Nursing professional" className="w-full h-full object-cover aspect-[3/5]" />
            </div>
            <div className="relative border border-[#E2E8F0]">
              <img src={IMG2} alt="Engineer" className="w-full h-[190px] object-cover" />
            </div>
            <div className="border border-[#E2E8F0] p-5 flex flex-col justify-between bg-white">
              <div className="text-[10px] tracking-[0.22em] uppercase font-semibold text-[#0055FF]">
                Pathways
              </div>
              <div className="font-heading text-sm font-semibold text-[#0A1F44] leading-snug">
                Nursing · MEP · Housekeeping
              </div>
              <div className="text-[10px] tracking-[0.15em] uppercase text-[#475569]">
                A1 → B2 German
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#0055FF] mb-5">
              {t.candidates.overline}
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl leading-[1.1] font-semibold tracking-tight text-[#0A1F44]">
              {t.candidates.title}
            </h2>
            <p className="mt-6 text-base text-[#475569] leading-relaxed max-w-2xl">
              {t.candidates.body}
            </p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 max-w-2xl">
              {t.candidates.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#0A1F44]">
                  <Check className="h-4 w-4 text-[#0055FF] mt-0.5 flex-none" strokeWidth={2} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Link to="/contact">
                <Button
                  data-testid="candidate-cta-apply"
                  className="bvg-btn-primary h-12 px-6 rounded-none bg-[#0A1F44] hover:bg-[#0F2D63] text-white text-[13px] font-medium tracking-[0.12em] uppercase"
                >
                  {t.candidates.cta} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
