
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

// Categorias
export const mockCategories: Category[] = [
  {
    id: "bebidas",
    name: "Bebidas",
    image_url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836", // Exemplo bebida
  },
  {
    id: "frango-assado",
    name: "Frango Assado",
    image_url: "https://images.unsplash.com/photo-1506302948527-e09c974730d3",
  },
  {
    id: "frango-crocante",
    name: "Frango Crocante (Tipo Americano)",
    image_url: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc",
  },
  {
    id: "promocoes",
    name: "Promoçoes",
    image_url: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c",
  },
  {
    id: "frango-frito-empanado",
    name: "Frango Frito Empanado",
    image_url: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c",
  },
  {
    id: "combos",
    name: "Combos",
    image_url: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0",
  },
  {
    id: "porcoes",
    name: "Porções",
    image_url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  },
];

// Produtos
export const mockProducts: Product[] = [
  // BEBIDAS
  {
    id: "coca-15l",
    name: "Coca-Cola 1,5L",
    description: "Sem descrição",
    price: 11.0,
    category_id: "bebidas",
    image_url: "",
    status: "active",
  },
  {
    id: "coca-2l",
    name: "Coca-Cola 2L",
    description: "Sem descrição",
    price: 15.0,
    category_id: "bebidas",
    image_url: "",
    status: "active",
  },
  {
    id: "guarana-15l",
    name: "Guaraná Antartica 1,5L",
    description: "Sem descrição",
    price: 11.0,
    category_id: "bebidas",
    image_url: "",
    status: "active",
  },
  {
    id: "coca-zero-15l",
    name: "Coca-Cola Zero 1,5L",
    description: "Sem descrição",
    price: 11.0,
    category_id: "bebidas",
    image_url: "",
    status: "active",
  },
  {
    id: "coca-lata",
    name: "Coca-Cola Lata 310ml",
    description: "Sem descrição",
    price: 5.0,
    category_id: "bebidas",
    image_url: "",
    status: "active",
  },
  {
    id: "suco-laranja-1l",
    name: "Suco Natural de Laranja 1L",
    description: "Sem descrição",
    price: 15.0,
    category_id: "bebidas",
    image_url: "",
    status: "active",
  },
  {
    id: "suco-laranja-500",
    name: "Suco Natural de Laranja 500ml",
    description: "Sem descrição",
    price: 10.0,
    category_id: "bebidas",
    image_url: "",
    status: "active",
  },

  // FRANGO ASSADO
  {
    id: "coxinha-asa-familiar",
    name: "Coxinha da Asa - Porção Famíliar",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 60.0,
    category_id: "frango-assado",
    image_url: "",
    status: "active",
  },
  {
    id: "coxa-sobrecoxa-familiar",
    name: "Coxa e Sobrecoxa - Porção Famíliar",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 60.0,
    category_id: "frango-assado",
    image_url: "",
    status: "active",
  },
  {
    id: "passarinho-familiar",
    name: "Frango à Passarinho - Porção Famíliar",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 60.0,
    category_id: "frango-assado",
    image_url: "",
    status: "active",
  },

  // FRANGO CROCANTE (TIPO AMERICANO)
  {
    id: "coxinha-asa-empanada-familiar",
    name: "Coxinha da Asa Empanada - Porção Familiar",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 67.0,
    category_id: "frango-crocante",
    image_url: "",
    status: "active",
  },
  {
    id: "coxinha-asa-empanada-meia",
    name: "Coxinha da Asa Empanada - Meia Porção",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 35.0,
    category_id: "frango-crocante",
    image_url: "",
    status: "active",
  },
  {
    id: "sassami-empanado-meia",
    name: "Sassami Empanado Crocante - Meia Porção",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 40.0,
    category_id: "frango-crocante",
    image_url: "",
    status: "active",
  },
  {
    id: "sassami-empanado-familiar",
    name: "Sassami Empanado Crocante - Porção Familiar",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 75.0,
    category_id: "frango-crocante",
    image_url: "",
    status: "active",
  },
  {
    id: "tulipa-meia",
    name: "Tulipa Empanada - Meia Porção",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 35.0,
    category_id: "frango-crocante",
    image_url: "",
    status: "active",
  },
  {
    id: "tulipa-familiar",
    name: "Tulipa Empanada - Porção Familiar",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 67.0,
    category_id: "frango-crocante",
    image_url: "",
    status: "active",
  },

  // PROMOCOES
  {
    id: "passarinho-empanado",
    name: "Frango à Passarinho Empanado",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 49.90,
    category_id: "promocoes",
    image_url: "",
    status: "active",
  },
  {
    id: "passarinho-empanado-coca",
    name: "Frango à Passarinho Empanado + Coca 1,5L",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 59.90,
    category_id: "promocoes",
    image_url: "",
    status: "active",
  },

  // FRANGO FRITO EMPANADO
  {
    id: "sassami-empanado-frito-familiar",
    name: "Sassami Empanado - Porção Familiar",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 65.0,
    category_id: "frango-frito-empanado",
    image_url: "",
    status: "active",
  },
  {
    id: "passarinho-empanado-frito-familiar",
    name: "Frango à Passarinho Empanado - Porção Familiar",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 60.0,
    category_id: "frango-frito-empanado",
    image_url: "",
    status: "active",
  },

  // COMBOS
  {
    id: "combo-empanado-frita",
    name: "Frango Empanado + Batata Frita",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 60.0,
    category_id: "combos",
    image_url: "",
    status: "active",
  },
  {
    id: "combo-empanado-frita-calabresa",
    name: "Frango Empanado + Batata Frita com Calabresa",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 60.0,
    category_id: "combos",
    image_url: "",
    status: "active",
  },
  {
    id: "combo-crocante-frita",
    name: "Frango Crocante + Batata Frita",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 72.0,
    category_id: "combos",
    image_url: "",
    status: "active",
  },
  {
    id: "combo-crocante-frita-calabresa",
    name: "Frango Crocante + Batata Frita com Calabresa",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 72.0,
    category_id: "combos",
    image_url: "",
    status: "active",
  },
  {
    id: "combo-crocante-frita-coca",
    name: "Frango Crocante + Batata Frita + Coca 1,5L",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 83.0,
    category_id: "combos",
    image_url: "",
    status: "active",
  },
  {
    id: "combo-croc-frita-calabresa-coca",
    name: "Frango Croc. + Fritas e Calabresa + Coca 1,5L",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 83.0,
    category_id: "combos",
    image_url: "",
    status: "active",
  },
  {
    id: "combo-empanado-frita-coca",
    name: "Frango Empanado + Batata Frita + Coca 1,5L",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 71.0,
    category_id: "combos",
    image_url: "",
    status: "active",
  },
  {
    id: "combo-emp-frita-calabresa-coca",
    name: "Frango Emp. + Fritas e Calabresa + Coca 1,5L",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 71.0,
    category_id: "combos",
    image_url: "",
    status: "active",
  },
  // PORÇÕES
  {
    id: "batata-frita",
    name: "Batata Frita",
    description: "Sem descrição",
    price: 30.0,
    category_id: "porcoes",
    image_url: "",
    status: "active",
  },
  {
    id: "batata-frita-especial",
    name: "Batata Frita Especial",
    description: "Sem descrição",
    price: 45.0,
    category_id: "porcoes",
    image_url: "",
    status: "active",
  },
  {
    id: "calabresa",
    name: "Calabresa",
    description: "Sem descrição",
    price: 30.0,
    category_id: "porcoes",
    image_url: "",
    status: "active",
  },
  {
    id: "batata-frita-familiar",
    name: "Batata Frita - Porção Familiar",
    description: "Sem descrição",
    price: 40.0,
    category_id: "porcoes",
    image_url: "",
    status: "active",
  },
  {
    id: "batata-frita-especial-familiar",
    name: "Batata Frita Especial - Porção Familiar",
    description: "Sem descrição",
    price: 60.0,
    category_id: "porcoes",
    image_url: "",
    status: "active",
  },
  {
    id: "calabresa-familiar",
    name: "Calabresa - Porção Familiar",
    description: "Sem descrição",
    price: 40.0,
    category_id: "porcoes",
    image_url: "",
    status: "active",
  },
  {
    id: "passarinho",
    name: "Frango à Passarinho",
    description: "Sem descrição",
    price: 35.0,
    category_id: "porcoes",
    image_url: "",
    status: "active",
  },
  {
    id: "passarinho-familiar",
    name: "Frango à Passarinho - Porção Familiar",
    description: "Sem descrição",
    price: 50.0,
    category_id: "porcoes",
    image_url: "",
    status: "active",
  },
  {
    id: "mista",
    name: "Porção Mista",
    description: "Batata Frita + Calabresa.",
    price: 30.0,
    category_id: "porcoes",
    image_url: "",
    status: "active",
  },
  {
    id: "mista-familiar",
    name: "Porção Mista - Porção Familiar",
    description: "Batata Frita + Calabresa.",
    price: 45.0,
    category_id: "porcoes",
    image_url: "",
    status: "active",
  },
];
