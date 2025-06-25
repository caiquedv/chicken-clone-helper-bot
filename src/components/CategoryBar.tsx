
import React, { useRef, useState, useEffect } from "react";
import { mockCategories, mockProducts, Category } from "@/data/mockData";

interface CategoryBarProps {
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}

function getOrderedCategories(): Category[] {
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
  const rest = categoriesWithActiveProducts.filter(
    cat => cat !== prom && cat !== combo && cat !== bebidas
  );
  const ordered = [prom, combo, ...rest, bebidas].filter(Boolean) as Category[];
  return ordered;
}

const CategoryBar: React.FC<CategoryBarProps> = ({
  activeCategory,
  setActiveCategory,
}) => {
  const categories = getOrderedCategories();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  // Ativa/desativa gradientes conforme scrolado
  const checkScrollEdges = () => {
    const node = scrollRef.current;
    if (!node) return;
    setShowLeft(node.scrollLeft > 2);
    setShowRight(
      node.scrollLeft + node.clientWidth < node.scrollWidth - 2
    );
  };

  useEffect(() => {
    checkScrollEdges();
    const node = scrollRef.current;
    if (!node) return;
    node.addEventListener("scroll", checkScrollEdges);
    window.addEventListener("resize", checkScrollEdges);
    return () => {
      node.removeEventListener("scroll", checkScrollEdges);
      window.removeEventListener("resize", checkScrollEdges);
    };
  }, []);

  useEffect(() => {
    checkScrollEdges();
  }, [categories.length]);

  if (!categories.length) return null;

  return (
    <div className="relative w-full mb-10 z-10 select-none">
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
            height: 0;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
      <div
        ref={scrollRef}
        className="
          overflow-x-auto
          scrollbar-hide
          whitespace-nowrap
          flex items-center
          pl-4 pr-4
        "
        style={{
          WebkitOverflowScrolling: "touch",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
        tabIndex={0}
      >
        <div className="flex flex-nowrap gap-2 w-max py-2">
          {categories.map((category) => {
            const isActive = activeCategory === String(category.id);
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(String(category.id))}
                className={`
                  font-semibold 
                  flex flex-col items-center
                  px-4 py-2
                  bg-transparent border-none outline-none
                  rounded-md
                  w-auto
                  transition-colors
                  duration-200
                  ${isActive ? "text-red-600" : "text-gray-700 hover:text-red-600"}
                `}
                style={{
                  minWidth: 0,
                  background: "transparent",
                  position: "relative",
                }}
              >
                <span className="whitespace-nowrap text-base relative pb-1">
                  {category.name}
                  {isActive && (
                    <span
                      className="block h-[2px] rounded-full bg-red-600 absolute left-0 right-0 bottom-0"
                      style={{
                        width: "100%",
                        transition: "width 0.18s"
                      }}
                    />
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      {showLeft && (
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 z-20"
          style={{
            background: "linear-gradient(to right, #f9fafb 80%, transparent)",
          }}
        />
      )}
      {showRight && (
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 z-20"
          style={{
            background: "linear-gradient(to left, #f9fafb 80%, transparent)",
          }}
        />
      )}
    </div>
  );
};

export default CategoryBar;
