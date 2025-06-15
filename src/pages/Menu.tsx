// ...code as described in your script for Menu page...
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import { useCart } from "@/hooks/useCart";
import { toast } from "@/hooks/use-toast";
import { mockCategories, mockProducts, type Category, type Product } from "@/data/mockData";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import DevGemsCredit from "@/components/DevGemsCredit";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>(""); // Ensure state is string
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const { addToCart, getTotalItems } = useCart();

  // Função para ordenar as categorias dinamicamente:
  const getOrderedCategories = () => {
    if (!mockCategories || mockCategories.length === 0) return [];

    // Ache os ids relevantes. Suporte tanto string quanto number como id.
    const byName = (name: string) =>
      mockCategories.find(cat => cat.name.toLowerCase().includes(name));
    const prom = byName("promo");
    const combo = byName("combo");
    const bebidas = byName("bebida");

    // Todas as categorias ignorando as três especiais:
    const rest = mockCategories.filter(cat =>
      cat !== prom && cat !== combo && cat !== bebidas
    );

    const ordered = [
      prom,
      combo,
      ...rest,
      bebidas,
    ].filter(Boolean);

    return ordered;
  };

  useEffect(() => {
    if (mockCategories.length > 0) {
      setActiveCategory(String(mockCategories[0].id)); // Always string
    }
  }, []);

  useEffect(() => {
    filterProducts();
    // eslint-disable-next-line
  }, [activeCategory, searchQuery]);

  const filterProducts = () => {
    let filtered = mockProducts.filter(p => p.status === "active");

    if (activeCategory) {
      filtered = filtered.filter(
        product => String(product.category_id) === String(activeCategory)
      );
    }
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredProducts(filtered);
  };

  const handleAddToCart = (item: Product) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image_url || "https://images.unsplash.com/photo-1562967914-608f82629710"
    });
    toast({
      title: "Item adicionado!",
      description: `${item.name} foi adicionado ao carrinho.`,
    });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) setActiveCategory("");
  };

  const totalItems = getTotalItems();

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <Navbar />
      
      {totalItems > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-red-600 text-white z-40 flex items-center justify-between px-4 py-3 shadow-lg animate-fade-in">
          <span className="font-semibold">
            {totalItems} item{totalItems !== 1 ? "s" : ""} no carrinho
          </span>
          <button
            className="bg-white text-red-600 font-bold rounded px-4 py-2 ml-3 shadow hover:bg-red-50 transition-colors"
            onClick={() => navigate('/cart')}
          >
            Ver Carrinho
          </button>
        </div>
      )}

      <FloatingWhatsAppButton />

      <div className="max-w-7xl mx-auto px-4 py-8 pb-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nosso <span className="text-red-600">Cardápio</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">Escolha seus favoritos e peça agora!</p>

          <div className="flex justify-center">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>

        {mockCategories.length > 0 && !searchQuery && (
          <div
            className="
              w-full overflow-x-auto mb-12
              [&::-webkit-scrollbar]:hidden
              -mx-4 px-4
            "
          >
            <div className="flex flex-nowrap gap-2">
              {getOrderedCategories().map((category) => (
                <Button
                  key={String(category.id)}
                  variant={activeCategory === String(category.id) ? "default" : "outline"}
                  onClick={() => setActiveCategory(String(category.id))}
                  className={`
                    flex items-center transition 
                    whitespace-nowrap
                    ${activeCategory === String(category.id)
                      ? "bg-red-600 text-white hover:bg-red-700 scale-105"
                      : "border-red-600 text-red-600 hover:bg-red-50 hover:scale-105"
                    }
                    px-5 py-3 rounded-full font-semibold shadow-sm duration-200
                  `}
                  style={{ minWidth: 120 }}
                >
                  <span>{category.name}</span>
                </Button>
              ))}
            </div>
          </div>
        )}

        {searchQuery && (
          <div className="mb-8">
            <p className="text-gray-600 text-center">
              Resultados para "<strong>{searchQuery}</strong>" ({filteredProducts.length} item{filteredProducts.length !== 1 ? "s" : ""} encontrado{filteredProducts.length !== 1 ? "s" : ""})
            </p>
            <div className="flex justify-center mt-4">
              <Button
                variant="outline"
                onClick={() => handleSearch("")}
                className="border-red-600 text-red-600 hover:bg-red-50"
              >
                Limpar busca
              </Button>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img
                  src={item.image_url || "https://images.unsplash.com/photo-1562967914-608f82629710"}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                  onError={e => {
                    (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1562967914-608f82629710";
                  }}
                />
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{item.name}</CardTitle>
                <p className="text-gray-600">
                  {item.description || "Delicioso produto do nosso cardápio"}
                </p>
              </CardHeader>

              <CardFooter className="flex justify-between items-center">
                <div className="text-2xl font-bold text-red-600">
                  R$ {Number(item.price).toFixed(2)}
                </div>
                <Button
                  onClick={() => handleAddToCart(item)}
                  className="bg-red-600 hover:bg-red-700"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar
                </Button>
              </CardFooter>
            </Card>
          ))}

          {filteredProducts.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">
                {searchQuery
                  ? `Nenhum produto encontrado para "${searchQuery}".`
                  : "Nenhum produto encontrado nesta categoria."
                }
              </p>
            </div>
          )}
        </div>
      </div>
      {/* Crédito DevGems fixo acima da barra de carrinho */}
      <div
        style={{ bottom: totalItems > 0 ? "60px" : "32px" }}
      >
        <div className="pointer-events-auto">
          <DevGemsCredit />
        </div>
      </div>
    </div>
  );
};

export default Menu;
