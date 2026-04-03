import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ReportPreview from "@/components/ReportPreview";
import Education from "@/components/Education";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBar />
      <ReportPreview />
      <Education />
      <Services />
      <Contact />
      <FloatingWhatsApp />

      {/* Footer */}
      <footer className="py-16 bg-white border-t border-gray-100 flex flex-col items-center">
        <Link href="/" className="flex items-center gap-3 mb-6 group">
          <div className="relative w-12 h-12 overflow-hidden transform group-hover:rotate-6 transition-transform duration-300">
            <Image
              src="/logo.png"
              alt="Aisha Rehman Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-2xl font-heading font-black text-brand-text tracking-tighter">
            Aisha<span className="text-primary italic">Rehman</span>
          </span>
        </Link>
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-gray-400 font-body">
            &copy; {new Date().getFullYear()} Aisha Rehman. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-400 font-body">
            Created by <a href="https://kamipresents.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300 font-semibold underline decoration-primary/20 hover:decoration-primary">Kami Presents</a>
          </p>
        </div>
      </footer>
    </main>
  );
}
