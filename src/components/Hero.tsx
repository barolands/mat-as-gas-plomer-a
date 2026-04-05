import { MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import collageBathroom from "@/assets/hero-collage-bathroom.jpg";
import collageKitchen from "@/assets/hero-kitchen.jpg";
import collageWorker from "@/assets/hero-collage-worker.jpg";
import collageStove from "@/assets/hero-collage-stove.jpg";

const WHATSAPP_URL = "https://wa.me/5491100000000?text=Hola%20Matías%2C%20necesito%20un%20presupuesto";

const collageTiles = [
  { src: collageBathroom, label: "Baño" },
  { src: collageKitchen, label: "Cocina" },
  { src: collageWorker, label: "Instalación y reparación" },
  { src: collageStove, label: "Gas y cocina" },
] as const;

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1 bg-foreground sm:gap-1.5" aria-hidden="true">
      {collageTiles.map((tile, i) => (
        <div key={tile.label} className="relative min-h-0 overflow-hidden">
          <img
            src={tile.src}
            alt=""
            width={1200}
            height={800}
            className="h-full min-h-[45vh] w-full object-cover object-center sm:min-h-0"
            decoding="async"
            fetchPriority={i === 0 ? "high" : "low"}
          />
        </div>
      ))}
    </div>
    <div className="absolute inset-0 bg-foreground/70" />
    <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl py-20">
      <div
        className="mb-8 inline-flex flex-col items-center rounded-2xl border border-primary-foreground/25 bg-primary-foreground/[0.08] px-8 py-5 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md"
        aria-label="Marca MATÍAS, gas y plomería"
      >
        <span className="mb-3 h-1 w-14 rounded-full bg-primary shadow-[0_0_20px_hsl(var(--primary)/0.5)]" aria-hidden />
        <span className="text-3xl font-extrabold tracking-[0.28em] text-primary-foreground md:text-4xl">
          MATÍAS
        </span>
        <span className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.42em] text-primary-foreground/80 md:text-xs">
          gas · plomería
        </span>
      </div>
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
        <span className="w-1 h-1 rounded-full bg-primary-foreground/40 hidden sm:block" />
        <span className="flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          Zona: Conurbano y CABA
        </span>
      </div>
    </div>
  </section>
);

export default Hero;
