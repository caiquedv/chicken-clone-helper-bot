
import React from "react";
import { Product } from "@/data/types";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface ProductGridProps {
  products: Product[];
  onAddToCart: (item: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onAddToCart
}) => {
  // Função para verificar se deve mostrar a descrição
  const shouldShowDescription = (description?: string | null): boolean => {
    if (!description) return false;
    if (description.trim() === "Sem descrição") return false;
    return true;
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((item) => (
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
            {shouldShowDescription(item.description) && (
              <p className="text-gray-600">
                {item.description}
              </p>
            )}
          </CardHeader>

          <CardFooter className="flex justify-between items-center">
            <div className="text-2xl font-bold text-red-600">
              R$ {Number(item.price).toFixed(2)}
            </div>
            <Button
              onClick={() => onAddToCart(item)}
              className="bg-red-600 hover:bg-red-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Adicionar
            </Button>
          </CardFooter>
        </Card>
      ))}

      {products.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-gray-500 text-lg">
            Nenhum produto encontrado nesta categoria.
          </p>
        </div>
      )}
    </div>
  );
}

export default ProductGrid;
