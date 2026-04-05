import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5491100000000?text=Hola%20Matías%2C%20necesito%20un%20presupuesto";

const FinalCTA = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto text-center bg-primary rounded-3xl p-10 md:p-14 shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
          ¿Necesitás un plomero o gasista de confianza?
        </h2>
        <p className="text-primary-foreground/85 text-lg mb-8">
          Contactame y resolvemos tu problema de forma rápida y segura
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-whatsapp text-whatsapp-foreground px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
        >
          <MessageCircle className="w-6 h-6" />
          Escribime por WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default FinalCTA;
