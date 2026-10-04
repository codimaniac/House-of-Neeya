@AGENTS.md

# House of Neeya: Project Guide

## What This Project Is

House of Neeya is a fashion e-commerce storefront for Nigerian customers, focused on curated clothing, footwear, and handbags. The product experience is intended to feel polished and editorial while supporting practical shopping workflows. Prices and delivery fees are expressed in Nigerian naira (NGN / ₦).

Treat this file as project context, not proof that every visible flow is production-ready. Inspect the code that owns a behavior before extending it, and describe unfinished integrations honestly.

## Technology and Commands

- Next.js `16.2.9` App Router, React `19.2.4`, and TypeScript with strict checking.
- Tailwind CSS v4 with theme tokens in `src/app/globals.css`; reusable primitives live under `src/components/ui/`.
- `@/*` aliases resolve to `src/*`.
- Zustand is used for client-side cart and wishlist state. Product forms use React Hook Form and Zod.
- Supabase browser/server SSR clients are in `src/utils/supabase/`; product services are in `src/features/product/api/`.
- Cloudinary image URLs are configured in `next.config.ts`.
- Useful scripts: `npm run dev`, `npm run build`, `npm run lint`.
- There is no test script defined in `package.json`; do not claim tests ran unless a test command is added and executed.

**Important Next.js rule:** This repo explicitly warns that its installed Next.js version has breaking changes relative to commonly remembered conventions. Before changing application code, read the relevant guide under `node_modules/next/dist/docs/` and follow its current API and deprecation notes. Do not copy a pattern from memory without checking the installed-version docs.

## Application Map

Routes are implemented under `src/app/`:

- Storefront route group `src/app/(store)/`: `/`, `/shop`, `/about`, `/contact`, `/checkout`, and `/profile`. Its layout adds the shared `NavBar` and `FooterLayout`.
- Authentication route group `src/app/(auth)/`: `/login` and `/signup`.
- Admin routes under `src/app/admin/`: `/dashboard`, `/analytics`, `/orders`, `/products`, and `/settings`. The admin layout supplies the sidebar, announcement strip, breadcrumb/header, and product-form provider.

Route groups in parentheses organize layouts and do not appear in the URL. Keep route entry points thin where practical and put domain-specific UI/logic in the corresponding feature or section.

Main source areas:

- `src/features/product/`: product types, seed data, product cards/grid, API services, and database mappers.
- `src/features/cart/` and `src/features/wishlist/`: cart and wishlist components, types, and Zustand stores.
- `src/features/checkout/`: checkout form and order summary.
- `src/features/admin/`: admin product form, order services/mappers, dashboard components, and shared admin presentation components.
- `src/sections/`: composed storefront page sections, grouped by page/domain (`home`, `about`, `contact`).
- `src/components/layout/`, `src/components/shared/`, and `src/components/ui/`: site shell, cross-page components, and reusable controls.
- `src/providers/`: UI toggle contexts such as navigation and side-menu state.
- `src/lib/` and `src/utils/`: general helpers, formatting, and infrastructure utilities.

Use the existing `src/components/index.ts` barrel for exports already exposed there. Do not add every new component to the barrel automatically; follow nearby usage and keep feature-owned components within their feature.

## Existing Behavior and Boundaries

- Featured home sections currently draw products from `src/features/product/data/products.ts`.
- Supabase product reads and mutations live in `src/features/product/api/product.services.ts`, with transformations in the adjacent mapper module. The product/admin paths therefore include both local seed data and database-backed services; do not assume one is already the sole source of truth.
- Supabase clients use `@supabase/ssr` and the publishable key in `src/utils/supabase/client.ts`, `server.ts`, and `middleware.ts`. Check the actual schema, policies, environment configuration, and existing call sites before changing data access. Never expose a secret/service-role key to browser code. For database, auth, storage, or RLS work, use current Supabase guidance and verify the behavior after changes.
- Cart identity includes product ID plus selected color and size in `src/features/cart/store/cartStore.ts`. Preserve variant-aware behavior when updating cart actions or UI. Wishlist state is in `src/features/wishlist/store/wishlistStore.ts`.
- Checkout currently displays contact/address fields, state-based delivery fees, payment-provider choices, and an order summary. The visible `CheckoutForm` does not itself submit an order or invoke a payment provider. Inspect for a newer integration before adding one; do not imply that payment processing or order persistence already exists.
- Dependencies include Prisma and NextAuth as well as Supabase, but dependency presence alone does not establish which auth/database integration is active. Verify real imports, configuration, and route handlers before choosing or extending an integration.
- Product editing currently uses a React Hook Form + Zod schema and maps form values through product mappers. Check the current form action and database mapping before changing create/edit behavior.
- Do not assume admin route presence means access control is enforced. Verify the authorization boundary before exposing admin data or adding privileged mutations.

## UI and Product Design

- Follow the existing House of Neeya visual language: refined fashion retail, editorial serif typography paired with restrained sans-serif UI, generous spacing, warm neutral surfaces, and muted gold/green/rust accent tokens. This is a storefront, not a generic SaaS dashboard.
- Use the established CSS variables and Tailwind theme mappings in `src/app/globals.css`. Global font variables are configured in `src/app/layout.tsx` (`Cormorant Garamond`, `DM Sans`, `Noto Sans`, and `Playfair Display`); reuse these rather than introducing a new font without a clear reason.
- Prefer existing primitives in `src/components/ui/` and shared layout components over one-off replacements. `lucide-react` is available for icons. Check the component’s actual API before using a familiar shadcn/Base UI pattern; local components may differ from upstream.
- Maintain responsive layouts, accessible labels and keyboard behavior, meaningful loading/empty/error states, and stable product imagery. Use `next/image` for app images and respect the Cloudinary remote-image configuration.
- Keep prices formatted consistently with `src/lib/formatCurrency.ts`. Preserve currency and delivery-fee assumptions in checkout unless the requested behavior changes them explicitly.

## How to Make Changes

1. Trace the route to the component, feature store/service, and types that own the requested behavior. Prefer the closest established pattern over creating another state or API layer.
2. Check whether the flow is backed by seed data, client state, Supabase, or only presentation. Keep changes at the existing ownership boundary and avoid silently migrating the source of truth.
3. For new or changed data contracts, update the relevant types, validation schema, mapper, service, and consuming UI together. Treat the database schema and row-level security as separate concerns; verify both for Supabase changes.
4. Preserve the brand system and check desktop and mobile layouts. Reuse shared components where their existing behavior fits; avoid broad refactors while implementing a focused feature.
5. Validate with the narrowest relevant check, then run `npm run lint` or `npm run build` as appropriate. Report what was run and call out unavailable or missing tests.
6. Do not add dependencies, migrations, payment/auth integrations, or new architectural layers without confirming the need and the existing project setup.

When a request is ambiguous, ask only for information that changes the implementation decision. Otherwise, state a small reasonable assumption, implement the focused behavior, and make the remaining boundary visible.
