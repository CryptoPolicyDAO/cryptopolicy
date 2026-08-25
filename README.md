# Crypto Policy Center

The website of the [Crypto Policy Center](https://cryptopolicy.center) — a
member-governed policy think-tank lobbying for clear, principle-based,
Web3-friendly regulation. (Founded as Crypto Policy DAO; the Center is still
governed on-chain by its members.)

## The Blockchain Regulation Matrix (BRM)

The backbone of the site is the [Blockchain Regulation Matrix](https://cryptopolicy.center/matrix):
an interactive framework that breaks the blockchain into 21 layers — from the
electricity powering consensus to fiat on/off-ramps — and analyzes each layer's
centralized and decentralized sides against five questions:

1. Government concerns
2. Consumer risks
3. Cons of over-regulation
4. Cons of a lack of regulation
5. Does technology already exist that fulfills these obligations?

Each cell also maps the current regulatory landscape (statutes, rulings,
guidance, and enforcement actions), documents notable incidents, and carries
the DAO's assessment of how well regulation covers it — rendered as a
heat-map view with jurisdiction and status filters.

All matrix content lives in one file:
[`app/(marketing)/matrix/brm-data.ts`](<app/(marketing)/matrix/brm-data.ts>).

## Contributing

Every cell of the matrix has a **"Suggest an addition"** link that opens a
prefilled issue here. You can also open an issue or PR directly — content
contributions (concerns, risks, instruments, incidents, corrections) belong in
`brm-data.ts`.

## Running locally

```sh
npx pnpm@8 install   # the lockfile is pnpm lockfileVersion 6.0
npx pnpm@8 dev
```

Copy `.env.example` values as needed; the marketing pages, blog, docs, and
matrix run without any external services.

## Stack

- Next.js (App Router) + TypeScript
- Contentlayer + MDX for the blog, docs, and guides
- Tailwind CSS + Radix UI
- Supabase (auth) and Prisma/Stripe scaffolding from the original
  [Taxonomy](https://github.com/shadcn-ui/taxonomy) template
