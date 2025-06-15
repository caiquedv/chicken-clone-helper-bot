
export type Category = {
  id: number | string;
  name: string;
  image_url?: string;
};
export type Product = {
  id: number | string;
  name: string;
  description?: string | null;
  price: number;
  category_id: number | string;
  image_url?: string;
  status?: "active" | "inactive";
};

// Limpa as categorias e produtos
export const mockCategories: Category[] = [];

export const mockProducts: Product[] = [];
