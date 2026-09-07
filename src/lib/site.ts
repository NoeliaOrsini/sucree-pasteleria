export const WHATSAPP_URL = "https://wa.me/5492227517071";
export const WHATSAPP_DISPLAY = "+54 9 2227 51-7071";
export const ADDRESS = "Turdo 627, Lobos, Provincia de Buenos Aires";

export const NAV = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Galería", href: "#galeria" },
  { label: "Sobre Sucrée", href: "#sobre" },
  { label: "Contacto", href: "#contacto" },
];

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export type Category = {
  id: string;
  name: string;
  note: string;
  image: string;
  items: string[];
};

export const CATEGORIES: Category[] = [
  {
    id: "tortas",
    name: "Tortas",
    note: "Capas generosas, terminaciones a mano y sabores clásicos de casa.",
    image: u("1578985545062-69928b1d9587"),
    items: [
      "Brownie con DDL y Merengue",
      "Brownie con DDL y Crema Chantilly",
      "Rogel",
      "Marquise de Chocolate",
      "Torta de Nuez",
    ],
  },
  {
    id: "tartas",
    name: "Tartas",
    note: "Masas finas, frutas de estación y rellenos preparados cada mañana.",
    image: u("1519915028121-7d3463d20b13"),
    items: [
      "Tarta Havannet",
      "Tarta Havannet de Cacao",
      "Tarta de Coco y DDL",
      "Lemon Pie",
      "Tarta de Frutillas",
      "Tarta de Duraznos",
      "Pavlova",
      "NY Cheesecake",
      "Selva Negra",
    ],
  },
  {
    id: "budines",
    name: "Budines",
    note: "Miga húmeda, horneados en molde y perfectos para la merienda.",
    image: u("1509440159596-0249088772ff"),
    items: [
      "Budín de Limón",
      "Budín de Chocolate",
      "Budín de Vainilla",
      "Budín con Chipas",
      "Budín Hamburgués",
    ],
  },
  {
    id: "shots",
    name: "Shots Dulces",
    note: "Porciones individuales en vasito, ideales para mesas dulces.",
    image: u("1488477181946-6428a0291777"),
    items: ["Lemon Pie", "Cheesecake", "Chocotorta", "Oreo", "Chocooreo", "Tiramisú"],
  },
  {
    id: "petit-fours",
    name: "Petit Fours",
    note: "Bocados en miniatura con la misma precisión que una pieza grande.",
    image: u("1464349095431-e9a21285b5f3"),
    items: [
      "NY Cheesecake",
      "Key Lime Pie",
      "Lemon Pie",
      "Pavlova",
      "Brownies",
      "Rogelitos",
      "Mini Havannet",
    ],
  },
  {
    id: "postres-en-pote",
    name: "Postres en Pote",
    note: "Listos para llevar, con cuchara incluida y frío perfecto.",
    image: u("1551024506-0bccd828d307"),
    items: ["Tiramisú", "Chocotorta", "Oreo", "Chocooreo", "Mousse de Chocolate Amargo"],
  },
  {
    id: "sandwiches",
    name: "Sandwiches / Focaccia",
    note: "Nuestra línea salada: focaccia de masa madre y rellenos del día.",
    image: u("1509722747041-616f39b57569"),
    items: [
      "Focaccia clásica",
      "Focaccia del día",
      "Sandwich de jamón crudo",
      "Sandwich vegetariano",
      "Próximamente más variedades",
    ],
  },
];

export const HERO_IMAGE = u("1587248720327-8eb72564be1e", 1600);

export const GALLERY = [
  u("1565958011703-44f9829ba187"),
  u("1578985545062-69928b1d9587"),
  u("1486427944299-d1955d23e34d"),
  u("1519915028121-7d3463d20b13"),
  u("1464349095431-e9a21285b5f3"),
  u("1551024506-0bccd828d307"),
  u("1488477181946-6428a0291777"),
  u("1509440159596-0249088772ff"),
  u("1533134242453-ca0ad4ce7abb"),
];

export const ABOUT_IMAGE = u("1556910103-1c02745aae4d");
