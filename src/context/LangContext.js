import React, { createContext, useContext, useEffect, useState } from "react";
import { getT } from "i18n";

const LangContext = createContext({ lang: "en", setLang: () => {}, t: getT("en") });

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("bvg_lang") || "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("bvg_lang", lang);
    } catch {}
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t: getT(lang) }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
