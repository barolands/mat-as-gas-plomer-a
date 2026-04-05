import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5491100000000?text=Hola%20Matías%2C%20necesito%20un%20presupuesto";

const WhatsAppFloat = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
    className="fixed bottom-6 right-6 z-50 bg-whatsapp text-whatsapp-foreground w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
  >
    <MessageCircle className="w-8 h-8" />
  </a>
);

export default WhatsAppFloat;
