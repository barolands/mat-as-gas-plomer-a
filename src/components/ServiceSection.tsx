import { Flame, Droplets, Wrench, AlertTriangle, CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";

interface ServiceSectionProps {
  title: string;
  icon: ReactNode;
  colorClass: string;
  bgClass: string;
  items: string[];
  pipingTitle: string;
  pipingItems: string[];
  specialTitle: string;
  specialItems: string[];
  note?: string;
}

const ServiceSection = ({
  title,
  icon,
  colorClass,
  bgClass,
  items,
  pipingTitle,
  pipingItems,
  specialTitle,
  specialItems,
  note,
}: ServiceSectionProps) => (
  <div className={`rounded-2xl p-6 md:p-8 ${bgClass}`}>
    <div className="flex items-center gap-3 mb-6">
      <div className={`p-3 rounded-xl ${colorClass}`}>{icon}</div>
      <h3 className="text-2xl font-bold text-foreground">{title}</h3>
    </div>

    <ul className="grid sm:grid-cols-2 gap-2 mb-6">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-foreground/80">
          <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 text-muted-foreground" />
          {item}
        </li>
      ))}
    </ul>

    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
          <Wrench className="w-4 h-4" />
          {pipingTitle}
        </h4>
        <ul className="space-y-1.5">
          {pipingItems.map((item) => (
            <li key={item} className="flex items-start gap-2 text-foreground/80 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
          <Wrench className="w-4 h-4" />
          {specialTitle}
        </h4>
        <ul className="space-y-1.5">
          {specialItems.map((item) => (
            <li key={item} className="flex items-start gap-2 text-foreground/80 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {note && (
      <div className="mt-6 p-4 rounded-xl bg-card border flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-service-gas shrink-0 mt-0.5" />
        <p className="text-sm text-foreground/80 font-medium">{note}</p>
      </div>
    )}
  </div>
);

const Services = () => (
  <section id="servicios" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
        Nuestros Servicios
      </h2>
      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <ServiceSection
          title="Servicios de Gas"
          icon={<Flame className="w-6 h-6 text-service-gas" />}
          colorClass="bg-service-gas-bg"
          bgClass="bg-service-gas-bg/50"
          items={[
            "Instalación, reparación y mantenimiento",
            "Termotanques",
            "Calefones",
            "Calefactores",
            "Cocinas",
            "Llaves de paso",
            "Rejillas compensatorias",
          ]}
          pipingTitle="Tendido de cañerías"
          pipingItems={["Termofusión", "Epoxi", "Transiciones entre materiales"]}
          specialTitle="Trabajos especiales"
          specialItems={[
            "Instalaciones desde cero",
            "Búsqueda y reparación de pérdidas",
            "Adaptación de gas licuado a gas natural y viceversa",
            "Limpieza de quemadores, picos y pilotos",
          ]}
          note="Toda instalación de gas debe ser aprobada por un matriculado"
        />

        <ServiceSection
          title="Servicios de Plomería"
          icon={<Droplets className="w-6 h-6 text-service-plumbing" />}
          colorClass="bg-service-plumbing-bg"
          bgClass="bg-service-plumbing-bg/50"
          items={[
            "Instalación, reparación y mantenimiento",
            "Sanitarios",
            "Grifería",
            "Termotanques",
            "Calefones",
            "Tanques y cisternas",
            "Colectores",
            "Bombas presurizadoras",
          ]}
          pipingTitle="Tendido de cañerías"
          pipingItems={[
            "Termofusión",
            "Polipropileno",
            "Galvanizado",
            "Hidrobronz",
            "Desagües en PVC o Awaduct",
          ]}
          specialTitle="Trabajos especiales"
          specialItems={[
            "Reparación de cañerías de plomo",
            "Transición de plomo a otros materiales",
            "Limpieza de tanques",
            "Colocación de mesadas",
            "Instalación de bachas de acero inoxidable",
            "Detección y reparación de pérdidas",
          ]}
        />
      </div>
    </div>
  </section>
);

export default Services;
