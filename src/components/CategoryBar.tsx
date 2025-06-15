
import React from "react";
import { mockCategories, Category } from "@/data/mockData";

interface CategoryBarProps {
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}

function getOrderedCategories(): Category[] {
  if (!mockCategories || mockCategories.length === 0) return [];
  const byName = (name: string) =>
    mockCategories.find(cat => cat.name.toLowerCase().includes(name));
  const prom = byName("promo");
  const combo = byName("combo");
  const bebidas = byName("bebida");
  const rest = mockCategories.filter(
    cat => cat !== prom && cat !== combo && cat !== bebidas
  );
  const ordered = [prom, combo, ...rest, bebidas].filter(Boolean) as Category[];
  return ordered;
}

const CategoryBar: React.FC<CategoryBarProps> = ({
  activeCategory,
  setActiveCategory,
}) => {
  if (!mockCategories.length) return null;
  const categories = getOrderedCategories();

  return (
    <div
      className="
        relative w-full mb-10
        overflow-x-auto
        whitespace-nowrap
        flex items-center
        select-none
        z-10
        scrollbar-hide
        pl-4 pr-4
      "
      style={{
        WebkitOverflowScrolling: "touch",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
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
      {/* gradientes suaves nas laterais */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 z-20"
        style={{
          background: "linear-gradient(to right, #f9fafb 80%, transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 z-20"
        style={{
          background: "linear-gradient(to left, #f9fafb 80%, transparent)",
        }}
      />
    </div>
  );
};

export default CategoryBar;
