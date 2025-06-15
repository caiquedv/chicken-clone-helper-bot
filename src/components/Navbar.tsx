
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag as ShoppingCart, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/useCart";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5511985208044&text=Olá,%20gostaria%20de%20fazer%20um%20pedido!";

const Navbar = () => {
  const navigate = useNavigate();
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <span className="text-2xl font-bold text-red-600">
              🍗 Big Chicken
            </span>
          </div>
          {/* Botões Carrinho + WhatsApp */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={() => navigate("/cart")}
              className="relative border-red-600 text-red-600 hover:bg-red-50"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Carrinho
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2"
            >
              <Button variant="default" className="bg-green-500 hover:bg-green-600 flex items-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                Pedir pelo WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
