
import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">🍗 Big Chicken</h3>
            <p className="text-gray-300 mb-4">
              O melhor frango da cidade! Tradição, qualidade e sabor em cada pedaço.
              Feito com carinho para sua família.
            </p>
            <p className="text-sm text-gray-400">
              © 2024 Big Chicken. Todos os direitos reservados.
            </p>
          </div>
          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-red-400" />
                <span className="text-gray-300">(11) 98520-8044</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-red-400" />
                <span className="text-gray-300">São Paulo, SP</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-red-400" />
                <span className="text-gray-300">Seg-Dom: 18h às 00h</span>
              </div>
            </div>
          </div>
          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <div className="space-y-2">
              <a href="/" className="block text-gray-300 hover:text-white transition-colors">
                Início
              </a>
              <a href="/menu" className="block text-gray-300 hover:text-white transition-colors">
                Cardápio
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5511985208044"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
