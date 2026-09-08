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
      "Brownie, Dulce de Leche y Merengue Italiano / Crema Chantilly",
      "Rogel",
      "Marquise de Chocolate (Base húmeda de chocolate, dulce de leche, merengue italiano y crema chantilly)",
      "Torta de Nuez (Base de nuez, dulce de leche, crema chantilly, frutilla y arándanos - Sin TACC)",
      "Torta de Cumpleaños / Personalizadas",
    ],
  },
  {
    id: "tartas",
    name: "Tartas",
    note: "Masas finas, frutas de estación y rellenos preparados cada mañana.",
    image: u("1519915028121-7d3463d20b13"),
    items: [
      "Tarta Havannet (Masa sablé, dulce de leche, ganache de chocolate semiamargo)",
      "Tarta Havannet de Cacao (Masa sablé, dulce de leche, ganache de chocolate blanco)",
      "Tarta de Coco y Dulce de Leche",
      "Lemon Pie",
      "Tarta de Frutillas",
      "Tarta de Duraznos",
      "Pavlova (Con curd de limón/crema chantilly y frutas)",
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
      "Budín de Limón (Cubierto con glacé)",
      "Budín de Chocolate (Cubierto con chocolate semiamargo)",
      "Budín de Vainilla",
      "Budín de Vainilla con Chipas de Chocolate",
      "Budín Hamburgués (Oporto, nueces y chispas de chocolate)",
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
      "Brownie con Nuez, Dulce de Leche y Merengue Italiano / Crema Chantilly",
      "Brownie, Dulce de Leche y Merengue Italiano / Crema Chantilly",
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
    note: "Nuestra propuesta salada, elaborada artesanalmente.",
    image: u("1509722747041-616f39b57569"),
    items: [],
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
];

export const ABOUT_IMAGE = "/valentina.jpg";
