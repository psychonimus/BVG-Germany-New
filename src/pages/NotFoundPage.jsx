import React from "react";
import { Link } from "react-router-dom";
import { Button } from "components/ui/button";
import { ArrowRight } from "lucide-react";

export default function NotFoundPage() {
  return (
    <section
      data-testid="page-404"
      className="min-h-[70vh] flex items-center justify-center bvg-grid-bg"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 text-center">
        <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#0055FF] mb-4">
          404
        </div>
        <h1 className="font-heading text-5xl lg:text-7xl font-semibold tracking-tighter text-[#0A1F44]">
          Page not found
        </h1>
        <p className="mt-5 text-[#475569] max-w-md mx-auto">
          The page you are looking for has been moved or does not exist.
        </p>
        <Link to="/">
          <Button className="mt-8 bvg-btn-primary h-12 px-6 rounded-none bg-[#0A1F44] hover:bg-[#0F2D63] text-white text-[13px] font-medium tracking-[0.12em] uppercase">
            Go to Home <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
