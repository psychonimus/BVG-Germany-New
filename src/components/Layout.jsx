import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "components/sections/Header";
import Footer from "components/sections/Footer";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div data-testid="app-layout" className="min-h-screen flex flex-col bg-white text-[#0A1F44]">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
