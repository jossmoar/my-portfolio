// Root page — composes all portfolio sections
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="py-6 text-center text-xs text-gray-400 bg-white border-t border-gray-100">
        © {new Date().getFullYear()} Joselin Montero · Heredia, Costa Rica
      </footer>
    </>
  );
}
