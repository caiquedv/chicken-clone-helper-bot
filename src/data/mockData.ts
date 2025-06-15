
export interface Category {
  id: string;
  name: string;
  description: string | null;
  display_order: number;
  active: boolean;
}

export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  category_id: string | null;
  image_url: string | null;
  active: boolean;
}

export const mockCategories: Category[] = [
  {
    id: "1",
    name: "🍗 Frangos Inteiros",
    description: "Frangos inteiros assados e temperados",
    display_order: 1,
    active: true
  },
  {
    id: "2", 
    name: "🍖 Pedaços",
    description: "Pedaços selecionados de frango",
    display_order: 2,
    active: true
  },
  {
    id: "3",
    name: "🍟 Acompanhamentos", 
    description: "Deliciosos acompanhamentos",
    display_order: 3,
    active: true
  },
  {
    id: "4",
    name: "🥤 Bebidas",
    description: "Bebidas geladas",
    display_order: 4,
    active: true
  }
];

export const mockProducts: Product[] = [
  // Frangos Inteiros
  {
    id: "1",
    name: "Frango Inteiro Tradicional",
    description: "Frango inteiro temperado com nossos temperos especiais, assado na brasa",
    price: 28.90,
    category_id: "1",
    image_url: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6",
    active: true
  },
  {
    id: "2", 
    name: "Frango Inteiro Apimentado",
    description: "Frango inteiro com tempero apimentado, para quem gosta de sabor forte",
    price: 32.90,
    category_id: "1", 
    image_url: "https://images.unsplash.com/photo-1562967914-608f82629710",
    active: true
  },
  // Pedaços
  {
    id: "3",
    name: "Coxas da Casa (6 unid)",
    description: "6 coxas suculentas temperadas com nosso blend especial",
    price: 22.90,
    category_id: "2",
    image_url: "https://images.unsplash.com/photo-1527477396000-e27163b481c2",
    active: true
  },
  {
    id: "4",
    name: "Sobrecoxas Grelhadas (4 unid)",
    description: "4 sobrecoxas grelhadas no ponto perfeito",
    price: 19.90,
    category_id: "2",
    image_url: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec",
    active: true
  },
  // Acompanhamentos
  {
    id: "5",
    name: "Batata Frita Especial",
    description: "Batatas fritas crocantes com tempero da casa",
    price: 12.90,
    category_id: "3",
    image_url: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877",
    active: true
  },
  {
    id: "6",
    name: "Arroz Temperado",
    description: "Arroz soltinho temperado com ervas finas",
    price: 8.90,
    category_id: "3",
    image_url: "https://images.unsplash.com/photo-1516684732162-798a0062be99",
    active: true
  },
  // Bebidas
  {
    id: "7",
    name: "Refrigerante Lata",
    description: "Coca-Cola, Guaraná ou Fanta - 350ml",
    price: 4.50,
    category_id: "4",
    image_url: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97",
    active: true
  },
  {
    id: "8",
    name: "Suco Natural",
    description: "Suco natural de laranja ou limão - 300ml",
    price: 6.90,
    category_id: "4",
    image_url: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b",
    active: true
  }
];
