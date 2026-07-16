import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import LiveProjects from "@/components/LiveProjects";

export const metadata: Metadata = {
  title: "Catálogo de proyectos | Joselin Montero",
  description:
    "Aplicaciones reales desplegadas por Joselin Montero — código abierto, pruébelas en vivo.",
};

export default function CatalogoPage() {
  return (
    <>
      <Navbar />
      <main>
        <LiveProjects />
      </main>

      <footer className="py-6 text-center text-xs text-gray-400 bg-white border-t border-gray-100">
        © {new Date().getFullYear()} Joselin Montero · Heredia, Costa Rica
      </footer>
    </>
  );
}
