
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src="/bclogo2.webp"
              alt="Big Chicken Logo"
              className="max-h-20 object-contain transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <span className="text-2xl font-bold text-red-600 ml-2" translate="no">
              Big Chicken
            </span>
          </div>
          {/* Header limpo sem botoes do carrinho ou whatsapp */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
