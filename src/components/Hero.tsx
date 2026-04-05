import { MessageCircle, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-plumber.jpg";

const WHATSAPP_URL = "https://wa.me/5491100000000?text=Hola%20Matías%2C%20necesito%20un%20presupuesto";

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <img
      src={heroImage}
      alt="Plomero profesional trabajando"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-foreground/70" />
    <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl py-20">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight text-balance mb-6">
        Soluciones rápidas y confiables en plomería y gas
      </h1>
      <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 text-balance">
        Instalación, reparación y mantenimiento con atención personalizada
      </p>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-whatsapp text-whatsapp-foreground px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
      >
        <MessageCircle className="w-6 h-6" />
        Solicitar presupuesto por WhatsApp
      </a>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-primary-foreground/80 text-sm">
        <span className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5" />
          Atención responsable
        </span>
        <span className="w-1 h-1 rounded-full bg-primary-foreground/40 hidden sm:block" />
        <span className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5" />
          Trabajo garantizado
        </span>
      </div>
    </div>
  </section>
);

export default Hero;
