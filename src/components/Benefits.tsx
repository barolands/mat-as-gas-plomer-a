import { Zap, Sparkles, HardHat, Timer, MessageSquare } from "lucide-react";

const benefits = [
  { icon: <Zap className="w-7 h-7" />, title: "Atención rápida", desc: "Respuesta inmediata a tu consulta" },
  { icon: <Sparkles className="w-7 h-7" />, title: "Trabajo prolijo", desc: "Terminaciones impecables en cada trabajo" },
  { icon: <HardHat className="w-7 h-7" />, title: "Experiencia comprobada", desc: "Años de trabajo en todo tipo de instalaciones" },
  { icon: <Timer className="w-7 h-7" />, title: "Soluciones duraderas", desc: "Materiales de calidad y mano de obra profesional" },
  { icon: <MessageSquare className="w-7 h-7" />, title: "Asesoramiento personalizado", desc: "Te orientamos para elegir la mejor opción" },
];

const Benefits = () => (
  <section className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
        ¿Por qué elegir a Matías?
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="bg-card rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent text-primary mb-4">
              {b.icon}
            </div>
            <h3 className="font-semibold text-foreground mb-1">{b.title}</h3>
            <p className="text-sm text-muted-foreground">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
