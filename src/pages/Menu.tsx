
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import DevGemsCredit from "@/components/DevGemsCredit";
import { useCart } from "@/hooks/useCart";
import { toast } from "@/hooks/use-toast";
import { mockCategories, mockProducts, type Product } from "@/data/mockData";
import { useNavigate } from "react-router-dom";
import CategoryBar from "@/components/CategoryBar";
import ProductGrid from "@/components/ProductGrid";
import SearchSection from "@/components/SearchSection";
import { textContains } from "@/utils/textUtils";

const Menu = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryBeforeSearch, setCategoryBeforeSearch] = useState<string>("");

  const { addToCart, getTotalItems } = useCart();

  // Função para ordenar as categorias dinamicamente (apenas com produtos ativos):
  const getOrderedCategories = () => {
    if (!mockCategories || mockCategories.length === 0) return [];
    
    // Filtrar apenas categorias que têm produtos ativos
    const categoriesWithActiveProducts = mockCategories.filter(category => {
      return mockProducts.some(product => 
        product.category_id === category.id && product.status === "active"
      );
    });
    
    const byName = (name: string) =>
      categoriesWithActiveProducts.find(cat => cat.name.toLowerCase().includes(name));
    const prom = byName("promo");
    const combo = byName("combo");
    const bebidas = byName("bebida");
    const rest = categoriesWithActiveProducts.filter(cat =>
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

  // Altere aqui: sempre iniciar pela 1ª da ordem correta
  useEffect(() => {
    const ordered = getOrderedCategories();
    if (ordered.length > 0) {
      setActiveCategory(String(ordered[0].id));
    }
  }, []);

  useEffect(() => {
    filterProducts();
  }, [activeCategory, searchQuery]);

  // Melhorando a filtragem com busca sem acentos
  const filterProducts = () => {
    let filtered = mockProducts.filter((p) => p.status === "active");

    if (activeCategory && activeCategory !== "") {
      filtered = filtered.filter(
        (product) =>
          String(product.category_id) === String(activeCategory)
      );
    }
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          textContains(product.name, searchQuery) ||
          (product.description && textContains(product.description, searchQuery))
      );
    }

    console.log('Filtro -> Categoria:', activeCategory, '| Busca:', searchQuery);
    console.log(
      'Produtos filtrados:',
      filtered.map((p) => ({
        nome: p.name,
        categoria: p.category_id,
      }))
    );

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
    // Se está iniciando uma busca (query não vazia) e não havia busca antes
    if (query && !searchQuery) {
      setCategoryBeforeSearch(activeCategory); // Salva a categoria atual
      setActiveCategory(""); // Limpa categoria para mostrar todos os produtos na busca
    }
    
    // Se está limpando a busca (query vazia) e havia uma busca antes
    if (!query && searchQuery) {
      setActiveCategory(categoryBeforeSearch); // Restaura a categoria anterior
    }
    
    setSearchQuery(query);
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

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nosso <span className="text-red-600">Cardápio</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">Escolha seus favoritos e peça agora!</p>

          <SearchSection
            searchQuery={searchQuery}
            filteredCount={filteredProducts.length}
            onSearch={handleSearch}
          />
        </div>

        {mockCategories.length > 0 && !searchQuery && (
          <CategoryBar
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        )}

        <ProductGrid
          products={filteredProducts}
          onAddToCart={handleAddToCart}
        />
      </div>
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
