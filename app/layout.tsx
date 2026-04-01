import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Poppins loaded with weights needed across the portfolio
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Joselin Montero | Software Engineer",
  description:
    "Portafolio profesional de Joselin Montero — Software Engineer especializada en desarrollo web con Java, Spring Boot y React.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${poppins.variable} antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
