# Sucrée Sweet Spot

Create a responsive, elegant, and modern web application for an artisanal French-style bakery called "SUCRÉE PASTELERÍA".

Visual Identity & Aesthetic:
- Aesthetic: French pâtisserie boutique, elegant, artisanal, sophisticated, warm, minimalist (never childish or overly decorated).
- Color Palette: Cream/ivory background (#FDFBF7 / #FAF6F0), deep burgundy red (#8B0000 or #800020) as primary accent, soft neutral tones.
- Typography: Elegant serif for headings (Playfair Display, Cormorant Garamond, or similar), clean sans-serif for body. Editorial French pâtisserie look.

Animated Intro:
- Smooth animated opening with an ivory background.
- "SUCRÉE" reveals letter-by-letter dynamically.
- Upon completion, a small chef hat icon smoothly animates onto the top of the last letter.
- "PASTELERÍA" fades in gently underneath.
- CRITICAL: Once the intro finishes, this logo composition ("SUCRÉE PASTELERÍA" + chef hat) MUST remain fixed at the top header as the permanent brand identity.

Header & Navigation:
- Navigation items: Inicio, Productos, Galería, Sobre Sucrée, Contacto.
- Smooth scroll navigation to sections. Elegant mobile hamburger menu.

Hero Section:
- High-impact visual hero featuring a main artisanal pastry image placeholder container.
- Clear Call to Action button: "HACÉ TU PEDIDO" pointing to WhatsApp (+54 9 2227 51-7071).

Products Section (Portfolio / Interactive Catalog Style):
- Organized strictly by categories:
  1. TORTAS (Brownie con DDL y Merengue/Crema Chantilly, Rogel, Marquise de Chocolate, Torta de Nuez)
  2. TARTAS (Tarta Havannet, Tarta Havannet de Cacao, Tarta de Coco y DDL, Lemon Pie, Tarta de Frutillas, Tarta de Duraznos, Pavlova, NY Cheesecake, Selva Negra)
  3. BUDINES (Budín de Limón, Budín de Chocolate, Budín de Vainilla, Budín con Chipas, Budín Hamburgués)
  4. SHOTS DULCES (Lemon Pie, Cheesecake, Chocotorta, Oreo, Chocooreo, Tiramisú)
  5. PETIT FOURS (NY Cheesecake, Key Lime Pie, Lemon Pie, Pavlova, Brownies, Rogelitos, Mini Havannet)
  6. POSTRES EN POTE (Tiramisú, Chocotorta, Oreo, Chocooreo, Mousse de Chocolate Amargo)
  7. SANDWICHES / FOCACCIA (Category with product placeholders)
- DO NOT DISPLAY ANY PRICES.
- Design layout: Each category should feature a main representative image placeholder frame alongside an elegant list. When hovering over items in the list, trigger smooth hover/preview interactions.
- IMPORTANT FOR IMAGES: Since real product photos are not available yet, use elegant high-quality Unsplash pastry image placeholders or clear image skeleton containers so real photos can be easily swapped in later.

Gallery Section:
- Grid gallery with high-quality pastry image placeholders.
- Clicking any image opens a clean modal/lightbox.

"Sobre Sucrée" Section:
- Introduces Valentina Chironi as the founder/baker.
- Warm, concise presentation highlighting artisanal craftsmanship, dedication, and passion for French pastry in Lobos.

WhatsApp Integration & QR:
- Floating & section "HACÉ TU PEDIDO" buttons linking directly to: https://wa.me/5492227517071
- Include a dedicated container/card prepared to display a WhatsApp QR code later.

Contacto & Location Section:
- Contact info block:
  - SUCRÉE PASTELERÍA
  - Valentina Chironi
  - Ubicación: Turdo 627, Lobos, Provincia de Buenos Aires
  - WhatsApp: +54 9 2227 51-7071
- Embedded Google Maps view displaying the location pin specifically for "Turdo 627, Lobos, Buenos Aires".
- Includes "HACÉ TU PEDIDO" CTA button.

Footer:
- Minimalist footer displaying:
  - "SUCRÉE PASTELERÍA"
  - "Realizado por Noelia Orsini"
  - Email: noelia.tech@gmail.com
  - LinkedIn: https://www.linkedin.com/in/noelia-orsini (clickable external link)

Technical & Responsiveness:
- Mobile-first, fully responsive design for phones, tablets, and desktops.
- Clean React component architecture using Tailwind CSS and Lucide icons. Prepared for future e-commerce expansion (cart, backend, Mercado Pago).

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://sucree-pasteleria.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e28a76ad-1147-4530-b1d7-ebc4f5de6303).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
