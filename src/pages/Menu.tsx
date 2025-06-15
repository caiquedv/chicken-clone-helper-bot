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

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string>(""); // Ensure state is string
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const { addToCart } = useCart();

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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
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
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {mockCategories.map((category) => (
              <Button
                key={String(category.id)}
                variant={activeCategory === String(category.id) ? "default" : "outline"}
                onClick={() => setActiveCategory(String(category.id))}
                className={`flex items-center space-x-2 ${
                  activeCategory === String(category.id)
                    ? "bg-red-600 hover:bg-red-700"
                    : "border-red-600 text-red-600 hover:bg-red-50"
                }`}
              >
                <span>{category.name}</span>
              </Button>
            ))}
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
    </div>
  );
};

export default Menu;
