# Project 467 — Step 0: Brand & Experience Blueprint

## Foundation confirmation

Project 467 is a premium global anime culture house, not an anime-themed fan store and not a Naruto store.

The 4–6–7 Hokage lineage remains invisible architecture:

- **Minato / Speed:** fast transitions, immediate feedback, efficient navigation.
- **Kakashi / Precision:** disciplined grids, exact spacing, hierarchy, technical detail.
- **Naruto / Energy:** expressive product moments, organic motion, community and emotional resonance.

These principles govern behavior only. They will not become franchise motifs, literal imagery, or competing gold/silver/orange themes. Inventory will span multiple anime and manga properties while **PROJECT 467** remains the sole visual brand.

## Creative direction

**Liquid Obsidian / Anime Atelier** combines a luxury fashion house, Japanese design magazine, contemporary art gallery, and futuristic archive.

- **Canvas:** Obsidian `#070708`
- **Surfaces:** Smoke `#111214`
- **Primary type:** Bone `#F2EFE8`
- **Secondary type:** Ash `#8D8A84`
- **Structure:** Graphite `#242529`
- **Single interface accent:** Vermilion `#E53920`
- **Display typography:** Space Grotesk
- **Technical typography:** JetBrains Mono
- **Composition:** asymmetric editorial grids, oversized object imagery, negative space, variable scale, and controlled overlap.
- **Material language:** smoked glass, translucent black acrylic, polished obsidian, subtle reflection, and restrained depth—not generic glassmorphism.
- **Motion:** slow and cinematic while establishing; immediate during interaction; weighted and inertial rather than robotic.
- **Responsive principle:** wide, layered editorial compositions on desktop; cinematic vertical compositions and reduced effect complexity on mobile.
- **Photography direction:** tactile object studies, directional studio lighting, clear material detail, deliberate shadows, and franchise-neutral art direction.
- **3D direction:** object-focused rotation, controlled camera movement, subtle depth, and graceful static or image-based fallbacks.

## Reference archive confirmation

The supplied split ZIP was inspected successfully. It contains **165 image entries** plus one containing folder, confirming the locked count of **165 Instagram inspiration images**.

The archive remains a private creative reference library. Images will not be copied into the product experience. Step 0.5 will extract reusable principles for composition, typography, lighting, motion, interaction, spacing, mobile adaptation, and product presentation.

## Recommended project structure

The requested client/server responsibilities are preserved, but the existing application is a unified React 19 + TanStack Start project rather than two separately deployed Express and Vite applications. The proposed structure keeps browser, shared, and server-only responsibilities explicit without introducing a second framework.

```text
project-467/
├── public/
│   ├── favicon.ico
│   ├── fonts/
│   ├── models/
│   ├── textures/
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── textures/
│   │   └── models/
│   ├── components/
│   │   ├── ui/
│   │   ├── navigation/
│   │   ├── product/
│   │   ├── commerce/
│   │   ├── three/
│   │   └── motion/
│   ├── sections/
│   │   ├── hero/
│   │   ├── archive/
│   │   ├── collections/
│   │   ├── featured/
│   │   └── editorial/
│   ├── routes/
│   │   ├── __root.tsx
│   │   ├── index.tsx
│   │   ├── archive.tsx
│   │   ├── collections.index.tsx
│   │   ├── collections.$slug.tsx
│   │   ├── series.index.tsx
│   │   ├── series.$slug.tsx
│   │   ├── products.$slug.tsx
│   │   ├── search.tsx
│   │   ├── cart.tsx
│   │   ├── checkout.tsx
│   │   ├── auth.tsx
│   │   ├── _authenticated/
│   │   │   ├── route.tsx
│   │   │   ├── account.tsx
│   │   │   ├── orders.index.tsx
│   │   │   ├── orders.$id.tsx
│   │   │   └── wishlist.tsx
│   │   └── api/
│   │       └── public/
│   │           ├── stripe-webhook.ts
│   │           └── health.ts
│   ├── features/
│   │   ├── catalog/
│   │   ├── collections/
│   │   ├── search/
│   │   ├── cart/
│   │   ├── wishlist/
│   │   ├── checkout/
│   │   ├── account/
│   │   ├── orders/
│   │   ├── reviews/
│   │   └── admin/
│   ├── motion/
│   │   ├── tokens.ts
│   │   ├── easings.ts
│   │   ├── timelines.ts
│   │   ├── reduced-motion.ts
│   │   └── primitives/
│   │       ├── entrance-reveal.ts
│   │       ├── image-reveal.ts
│   │       ├── text-mask-reveal.ts
│   │       ├── product-float.ts
│   │       ├── parallax-object.ts
│   │       ├── card-spread.ts
│   │       ├── magnetic-interaction.ts
│   │       ├── perspective-shift.ts
│   │       ├── scroll-transformation.ts
│   │       └── page-transition.ts
│   ├── three/
│   │   ├── scenes/
│   │   ├── objects/
│   │   ├── materials/
│   │   ├── lighting/
│   │   ├── controls/
│   │   └── performance/
│   ├── data/
│   │   ├── catalog.ts
│   │   ├── navigation.ts
│   │   └── editorial.ts
│   ├── store/
│   │   ├── cart-store.ts
│   │   ├── wishlist-store.ts
│   │   └── interface-store.ts
│   ├── hooks/
│   ├── lib/
│   │   ├── catalog.functions.ts
│   │   ├── cart.functions.ts
│   │   ├── checkout.functions.ts
│   │   ├── account.functions.ts
│   │   ├── catalog.server.ts
│   │   ├── commerce.server.ts
│   │   ├── validation.ts
│   │   └── utils.ts
│   ├── integrations/
│   │   ├── cloud/
│   │   └── stripe/
│   ├── router.tsx
│   ├── start.ts
│   ├── server.ts
│   └── styles.css
├── docs/
│   ├── brand/
│   │   ├── positioning.md
│   │   ├── visual-system.md
│   │   ├── photography.md
│   │   └── responsive-principles.md
│   ├── motion/
│   │   ├── principles.md
│   │   ├── primitives.md
│   │   └── reference-index.md
│   ├── architecture/
│   │   ├── application.md
│   │   ├── commerce.md
│   │   ├── data-model.md
│   │   └── deployment.md
│   └── references/
│       └── README.md
├── migrations/
│   ├── schema/
│   └── seed/
├── package.json
├── tsconfig.json
├── vite.config.ts
├── components.json
├── README.md
└── roadmap.md
```

## Architecture decision requiring approval

The SOP proposes **Node.js + Express + Prisma + MySQL**, with separate Vercel and Railway deployments. The current project is already established on the supported **TanStack Start** architecture, where the browser experience and server operations share one typed application boundary.

Recommended replacement for later phases:

- Keep React 19, Vite, Tailwind CSS v4, anime.js, Motion, Three.js, React Three Fiber, Drei, Zustand, and Stripe.
- Use TanStack Start routes and server functions instead of Express controllers and routes.
- Use Lovable Cloud for the relational database, authentication, storage, and server-side commerce operations instead of Prisma/MySQL.
- Keep privileged payment and order work server-side; keep public webhooks signed and isolated.
- Use the platform’s integrated deployment rather than splitting the application across Vercel and Railway.

This is an explicit proposed architecture correction, not a silent change. Approval of this Step 0 plan establishes it as the implementation standard for subsequent steps.

## Implementation roadmap — Steps 1 through 19

### Phase 1 — Foundation

1. **Initialize Project** — Confirm the existing TanStack Start foundation; establish the approved feature, route, asset, documentation, and server-boundary structure.
2. **Install Motion and 3D Libraries** — Add anime.js, Motion for React, Three.js, React Three Fiber, Drei, and Zustand; establish reduced-motion and performance boundaries.
3. **Global Brand System** — Implement Liquid Obsidian color tokens, typography, spacing, borders, shadows, grain, material surfaces, and motion tokens.

### Phase 2 — The Experience

4. **Editorial Navigation** — Build Project 467 identity, Archive/Search/Cart/Account navigation, command search, responsive states, and restrained magnetic interaction.
5. **Cinematic Hero** — Build oversized editorial typography, a cinematic object focus, coordinated entrance sequence, subtle parallax/3D, controlled lighting, and mobile fallbacks.
6. **Archive / Catalog** — Build the universal asymmetric archive, categories, anime series, collections, filters, sorting, search, and object-led hover transitions.
7. **Product Detail Experience** — Build object gallery/3D viewing, story, technical specifications, variants, availability, price, add-to-cart, related objects, and scroll choreography.

### Phase 3 — Commerce Engine

8. **Data Architecture** — Create the Product, ProductVariant, Category, AnimeSeries, Collection, User, Address, Cart, CartItem, Order, OrderItem, Wishlist, Review, Payment, and Shipment entities with secure access rules.
9. **Global Anime Seed** — Seed the twelve supplied concept products across apparel, figures, and lifestyle to establish multi-series breadth immediately.
10. **Product Data Services** — Implement typed product, category, series, and collection reads with filtering, search, sorting, and pagination.
11. **Cart and Wishlist** — Implement variant-aware quantities, persistent signed-in state, wishlist behavior, optimistic interactions, and recovery states.

### Phase 4 — The Exchange

12. **Stripe Checkout** — Implement secure payment creation, checkout, verified webhook handling, order creation, confirmation, and failure recovery.
13. **Authentication and Account** — Implement registration, login, secure authorization, customer account, order history, and saved items.
14. **Shipping and Orders** — Implement addresses, shipping methods, local pickup, shipment status, tracking, taxes, discounts, and gift-card foundations.

### Phase 5 — Motion and Polish

15. **Motion and Interaction Pass** — Apply the approved reference-derived primitives to entrances, hover physics, product motion, transitions, magnetic controls, cursor behavior, 3D, loading, and micro-interactions.
16. **Performance Pass** — Audit WebGL budgets, image delivery, lazy loading, code splitting, animation cost, mobile GPU load, and fallbacks.
17. **Responsive and Accessibility Pass** — Verify desktop, laptop, tablet, and mobile layouts; keyboard access; touch; screen readers; contrast; and reduced motion.

### Phase 6 — Deployment

18. **Deployment** — Configure the integrated production environment, domain-ready deployment, Stripe secrets, database, storage, and environment settings.
19. **Production Verification** — Verify authentication, products, variants, collections, search, filtering, cart, wishlist, checkout, payments, orders, shipping, data services, accessibility, responsive behavior, performance, errors, and production configuration.

## Step boundary

This plan completes **Step 0 only**. It introduces no application implementation code and makes no changes to the current interface.

After approval, work remains stopped until the explicit instruction: **“Proceed to Step 1.”**
