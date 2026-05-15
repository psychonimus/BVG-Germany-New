import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "context/LangContext";
import { Button } from "components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const IMG =
  "https://images.pexels.com/photos/31379836/pexels-photo-31379836.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

export default function Employers() {
  const { t } = useLang();

  return (
    <section
      id="employers"
      data-testid="employers-section"
      className="relative bg-[#0A1F44] text-white overflow-hidden"
    >
      <div className="absolute inset-0 bvg-grid-bg-dark pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#7FA2FF] mb-5">
              {t.employers.overline}
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl leading-[1.1] font-semibold tracking-tight">
              {t.employers.title}
            </h2>
            <p className="mt-6 text-base text-white/75 leading-relaxed max-w-2xl">
              {t.employers.body}
            </p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 max-w-2xl">
              {t.employers.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/90">
                  <Check className="h-4 w-4 text-[#7FA2FF] mt-0.5 flex-none" strokeWidth={2} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact">
                <Button
                  data-testid="employer-cta-submit"
                  className="bvg-btn-primary h-12 px-6 rounded-none bg-white text-[#0A1F44] hover:bg-[#F8F9FA] text-[13px] font-medium tracking-[0.12em] uppercase"
                >
                  {t.employers.cta1} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  data-testid="employer-cta-enquiry"
                  variant="outline"
                  className="h-12 px-6 rounded-none border-white text-white hover:bg-white hover:text-[#0A1F44] bg-transparent text-[13px] font-medium tracking-[0.12em] uppercase"
                >
                  {t.employers.cta2}
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative border border-white/20">
              <img src={IMG} alt="Modern office" className="w-full h-[380px] object-cover opacity-90" />
              <div className="absolute inset-0 bg-[#0A1F44]/30" />
              <div className="absolute bottom-0 left-0 right-0 border-t border-white/20 bg-[#0A1F44]/80 backdrop-blur px-5 py-4">
                <div className="text-[10px] tracking-[0.22em] uppercase text-[#7FA2FF]">
                  Sectors
                </div>
                <div className="font-heading text-sm mt-1 font-semibold">
                  Hospitals · Care Homes · Facility Services · Industrial
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
