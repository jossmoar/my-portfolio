"use client";

// Global language context — provides locale and translations to all components
import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Locale, Translations } from "@/lib/translations";

interface LanguageContextValue {
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es");

  const toggleLocale = () => setLocale((l) => (l === "es" ? "en" : "es"));

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale], toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook — throws if used outside LanguageProvider
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
