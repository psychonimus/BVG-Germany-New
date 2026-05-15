import React from "react";
import PageHeader from "components/PageHeader";
import Contact from "components/sections/Contact";
import { useLang } from "context/LangContext";
import { getP } from "i18n_pages";

export default function ContactPage() {
  const { lang } = useLang();
  const head = getP(lang).pageHeaders.contact;
  return (
    <div data-testid="page-contact">
      <PageHeader overline={head.overline} title={head.title} subtitle={head.subtitle} breadcrumb="Contact" />
      <Contact />
    </div>
  );
}
