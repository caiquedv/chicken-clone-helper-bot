
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag as ShoppingCart, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/useCart";

const Navbar = () => {
  const navigate = useNavigate();
  const { getTotalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const totalItems = getTotalItems();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="text-gray-700 hover:text-red-600"
            >
              Início
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("/menu")}
              className="text-gray-700 hover:text-red-600"
            >
              Cardápio
            </Button>
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
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Button
                variant="ghost"
                onClick={() => {
                  navigate("/");
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left"
              >
                Início
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  navigate("/menu");
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left"
              >
                Cardápio
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  navigate("/cart");
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left relative border-red-600 text-red-600"
              >
                <ShoppingCart className="w-4 h-4 mr-2 inline" />
                Carrinho
                {totalItems > 0 && (
                  <span className="ml-2 bg-red-600 text-white text-xs rounded-full px-2 py-1">
                    {totalItems}
                  </span>
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
