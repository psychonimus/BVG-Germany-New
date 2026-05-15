import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function PageHeader({ overline, title, subtitle, breadcrumb }) {
  return (
    <section
      data-testid="page-header"
      className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 border-b border-[#E2E8F0] bvg-grid-bg overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {breadcrumb && (
          <motion.nav
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#475569] mb-8"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-[#0A1F44]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#0A1F44] font-semibold">{breadcrumb}</span>
          </motion.nav>
        )}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-px w-10 bg-[#0A1F44]" />
          <span className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#0055FF]">
            {overline}
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-heading text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.05] font-semibold tracking-tighter text-[#0A1F44] max-w-4xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-base lg:text-lg text-[#475569] leading-relaxed max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
