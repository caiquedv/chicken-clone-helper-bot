
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

export const mockCategories: Category[] = [
  { id: 8, name: "Frango + Batata" },
  { id: 9, name: "Frango Empanado" },
  { id: 10, name: "Empanados/Familia" },
  { id: 11, name: "Acompanhamentos" },
  { id: 12, name: "Bebidas" },
  { id: 13, name: "Cortes Tradicionais" },
  { id: 14, name: "Passarinho Empanado" }
];

export const mockProducts: Product[] = [
  {
    id: 39,
    name: "Coca-Cola 1,5L",
    description: null,
    price: 11.0,
    category_id: 12,
    image_url: "https://i.ibb.co/b5YkZs4B/coca-1-5-L.jpg",
    status: "active"
  },
  {
    id: 40,
    name: "Coca-Cola 2L",
    description: null,
    price: 15.0,
    category_id: 12,
    image_url: "https://i.ibb.co/996M78Xv/coca-2L.jpg",
    status: "active"
  },
  {
    id: 41,
    name: "Guaraná Antartica 1,5L",
    description: null,
    price: 11.0,
    category_id: 12,
    image_url: "https://i.ibb.co/rKQp6VvB/guarana-antartida.jpg",
    status: "inactive"
  },
  {
    id: 42,
    name: "Coca-Cola Zero 1,5L",
    description: null,
    price: 11.0,
    category_id: 12,
    image_url: "https://i.ibb.co/TqwJ9FdG/coca-zero-1-5-L.jpg",
    status: "active"
  },
  {
    id: 43,
    name: "Coca-Cola Lata 310ml",
    description: null,
    price: 5.0,
    category_id: 12,
    image_url: "https://i.ibb.co/bgjKk78j/coca-cola-lata-310-ML.jpg",
    status: "active"
  },
  {
    id: 44,
    name: "Suco Natural de Laranja 1L",
    description: null,
    price: 15.0,
    category_id: 12,
    image_url: "https://i.ibb.co/xtpwtVNT/suco-natural-de-laranja.jpg",
    status: "inactive"
  },
  {
    id: 45,
    name: "Suco Natural de Laranja 500ml",
    description: null,
    price: 10.0,
    category_id: 12,
    image_url: "https://i.ibb.co/xtpwtVNT/suco-natural-de-laranja.jpg",
    status: "inactive"
  },
  {
    id: 46,
    name: "Coxinha da Asa - Porção Famíliar",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 60.0,
    category_id: 13,
    image_url: "https://i.ibb.co/77cFFdT/coxinha-da-asa-por-o-familiar.jpg",
    status: "inactive"
  },
  {
    id: 47,
    name: "Coxa e Sobrecoxa - Porção Famíliar",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 60.0,
    category_id: 13,
    image_url: "https://i.ibb.co/xKp60vmx/coxa-sobre-coxa-por-o-familiar.jpg",
    status: "inactive"
  },
  {
    id: 48,
    name: "Frango à Passarinho - Porção Famíliar",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 60.0,
    category_id: 13,
    image_url: "https://i.ibb.co/BVpyQLhb/frango-a-passarinho-por-o-familiar.jpg",
    status: "inactive"
  },
  {
    id: 49,
    name: "Coxinha da Asa Empanada - Porção Familiar",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 67.0,
    category_id: 10,
    image_url: "https://i.ibb.co/SDtkMMkF/coxinha-da-asa-empanada-por-o-familiar.jpg",
    status: "inactive"
  },
  {
    id: 50,
    name: "Coxinha da Asa Empanada - Meia Porção",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 35.0,
    category_id: 10,
    image_url: "https://i.ibb.co/SDtkMMkF/coxinha-da-asa-empanada-por-o-familiar.jpg",
    status: "inactive"
  },
  {
    id: 51,
    name: "Sassami Empanado Crocante - Meia Porção",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 40.0,
    category_id: 10,
    image_url: "https://i.ibb.co/cSL9cQkW/frango-crocante-batata-frita-com-calabresa.jpg",
    status: "active"
  },
  {
    id: 52,
    name: "Sassami Empanado Crocante - Porção Familiar",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 75.0,
    category_id: 10,
    image_url: "https://i.ibb.co/cSL9cQkW/frango-crocante-batata-frita-com-calabresa.jpg",
    status: "active"
  },
  {
    id: 53,
    name: "Tulipa Empanada - Meia Porção",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 35.0,
    category_id: 10,
    image_url: "https://i.ibb.co/ynJC6rm6/tulipa-empanada-por-o-familiar.jpg",
    status: "inactive"
  },
  {
    id: 54,
    name: "Tulipa Empanada - Porção Familiar",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 67.0,
    category_id: 10,
    image_url: "https://i.ibb.co/ynJC6rm6/tulipa-empanada-por-o-familiar.jpg",
    status: "inactive"
  },
  {
    id: 55,
    name: "Frango à Passarinho Empanado",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 49.9,
    category_id: 14,
    image_url: "https://i.ibb.co/N2XQds6q/frango-a-passarinho-por-o-familiar.jpg",
    status: "inactive"
  },
  {
    id: 56,
    name: "Frango à Passarinho Empanado + Coca 1,5L",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 59.9,
    category_id: 14,
    image_url: "https://i.ibb.co/N2XQds6q/frango-a-passarinho-por-o-familiar.jpg",
    status: "inactive"
  },
  {
    id: 57,
    name: "Sassami Empanado - Porção Familiar",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 65.0,
    category_id: 9,
    image_url: "https://i.ibb.co/j98BjzrS/frango-empanado-batata-frita-coca-1-5-L.jpg",
    status: "active"
  },
  {
    id: 58,
    name: "Frango à Passarinho Empanado - Porção Familiar",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 60.0,
    category_id: 9,
    image_url: "https://i.ibb.co/N2XQds6q/frango-a-passarinho-por-o-familiar.jpg",
    status: "active"
  },
  {
    id: 59,
    name: "Frango Empanado + Batata Frita",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 60.0,
    category_id: 8,
    image_url: "https://i.ibb.co/j98BjzrS/frango-empanado-batata-frita-coca-1-5-L.jpg",
    status: "active"
  },
  {
    id: 60,
    name: "Frango Empanado + Batata Frita com Calabresa",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 60.0,
    category_id: 8,
    image_url: "https://i.ibb.co/j98BjzrS/frango-empanado-batata-frita-coca-1-5-L.jpg",
    status: "active"
  },
  {
    id: 61,
    name: "Frango Crocante + Batata Frita",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 72.0,
    category_id: 8,
    image_url: "https://i.ibb.co/cSL9cQkW/frango-crocante-batata-frita-com-calabresa.jpg",
    status: "active"
  },
  {
    id: 62,
    name: "Frango Crocante + Batata Frita com Calabresa",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 72.0,
    category_id: 8,
    image_url: "https://i.ibb.co/cSL9cQkW/frango-crocante-batata-frita-com-calabresa.jpg",
    status: "active"
  },
  {
    id: 63,
    name: "Frango Crocante + Batata Frita + Coca 1,5L",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 83.0,
    category_id: 8,
    image_url: "https://i.ibb.co/cSL9cQkW/frango-crocante-batata-frita-com-calabresa.jpg",
    status: "active"
  },
  {
    id: 64,
    name: "Frango Croc. + Fritas e Calabresa + Coca 1,5L",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 83.0,
    category_id: 8,
    image_url: "https://i.ibb.co/cSL9cQkW/frango-crocante-batata-frita-com-calabresa.jpg",
    status: "active"
  },
  {
    id: 65,
    name: "Frango Empanado + Batata Frita + Coca 1,5L",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 71.0,
    category_id: 8,
    image_url: "https://i.ibb.co/j98BjzrS/frango-empanado-batata-frita-coca-1-5-L.jpg",
    status: "active"
  },
  {
    id: 66,
    name: "Frango Emp. + Fritas e Calabresa + Coca 1,5L",
    description: "Acompanha molho barbecue e molho de alho.",
    price: 71.0,
    category_id: 8,
    image_url: "https://i.ibb.co/j98BjzrS/frango-empanado-batata-frita-coca-1-5-L.jpg",
    status: "active"
  },
  {
    id: 67,
    name: "Batata Frita",
    description: null,
    price: 30.0,
    category_id: 11,
    image_url: "https://i.ibb.co/cSH0TLgb/batata-frita.jpg",
    status: "active"
  },
  {
    id: 68,
    name: "Batata Frita Especial",
    description: null,
    price: 45.0,
    category_id: 11,
    image_url: "https://i.ibb.co/jkkFDQy4/batata-frita-especial.jpg",
    status: "active"
  },
  {
    id: 69,
    name: "Calabresa",
    description: null,
    price: 30.0,
    category_id: 11,
    image_url: "https://i.ibb.co/BHcf5BFg/calabresa.jpg",
    status: "active"
  },
  {
    id: 70,
    name: "Batata Frita - Porção Familiar",
    description: null,
    price: 40.0,
    category_id: 11,
    image_url: "https://i.ibb.co/cSH0TLgb/batata-frita.jpg",
    status: "active"
  },
  {
    id: 71,
    name: "Batata Frita Especial - Porção Familiar",
    description: null,
    price: 60.0,
    category_id: 11,
    image_url: "https://i.ibb.co/jkkFDQy4/batata-frita-especial.jpg",
    status: "active"
  },
  {
    id: 72,
    name: "Calabresa - Porção Familiar",
    description: null,
    price: 40.0,
    category_id: 11,
    image_url: "https://i.ibb.co/BHcf5BFg/calabresa.jpg",
    status: "active"
  },
  {
    id: 73,
    name: "Frango à Passarinho",
    description: null,
    price: 35.0,
    category_id: 11,
    image_url: "https://i.ibb.co/fYyJK511/frango-a-passarinho.jpg",
    status: "active"
  },
  {
    id: 74,
    name: "Frango à Passarinho - Porção Familiar",
    description: null,
    price: 50.0,
    category_id: 11,
    image_url: "https://i.ibb.co/fYyJK511/frango-a-passarinho.jpg",
    status: "active"
  },
  {
    id: 75,
    name: "Porção Mista",
    description: "Batata Frita + Calabresa.",
    price: 30.0,
    category_id: 11,
    image_url: "https://i.ibb.co/tMMtXX5h/por-o-mista-familiar.jpg",
    status: "active"
  },
  {
    id: 76,
    name: "Porção Mista - Porção Familiar",
    description: "Batata Frita + Calabresa.",
    price: 45.0,
    category_id: 11,
    image_url: "https://i.ibb.co/tMMtXX5h/por-o-mista-familiar.jpg",
    status: "active"
  }
];
