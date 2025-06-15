
export type Category = {
  id: string;
  name: string;
  image_url?: string;
};

export type Product = {
  id: string;
  name: string;
  description?: string | null;
  price: number;
  category_id: string;
  image_url?: string;
  status?: "active" | "inactive";
};
