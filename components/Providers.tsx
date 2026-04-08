"use client";

// Client boundary wrapper — allows Server Components (layout.tsx) to use context providers
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
