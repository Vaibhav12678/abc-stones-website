# ABC Stones India — Website

A premium natural stone brand website for ABC Stones India Pvt. Ltd., built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Production build

```bash
npm run build
npm run start
```

> Note: `next/font/google` fetches Cormorant Garamond and Manrope at build
> time and requires internet access to fonts.googleapis.com /
> fonts.gstatic.com. This works out of the box on Vercel and any normal
> dev machine with internet access.

## Project structure

See `app/`, `components/`, `data/`, `types/`, and `lib/` — organized by
route and feature, matching the architecture used for this build. Local
TypeScript data (in `data/`) is the current source of truth for the
catalogue and is structured to make a future move to Supabase
straightforward (each data file could become a table/query with the
existing `types/` unchanged).

## Content & data policy

Per the brief, the site never invents business facts. Where information
was not supplied (e.g. granite origins, slab/block availability,
per-stone applications, founding year, certifications), the corresponding
field is left `undefined` in `data/stones.ts` and the UI displays an
honest placeholder ("Please contact us to confirm...") instead of a
fabricated value.

Stone `colors` fields are populated only where the colour is either
explicitly supplied or is a literal word in the stone's own published
name (e.g. "Carrara **White**", "Khalda **Red**") — never inferred from
general knowledge of the stone variety.

## Images

Actual showroom, factory, and slab photography is not yet available.
All product and scene imagery in `public/images/` is a **locally
generated placeholder** (a soft gradient + subtle vein/fleck texture),
clearly labeled "Representative Image" in the UI. These are simple
JPGs at the exact same path structure real photography will use, so
swapping in real photos later is a drop-in replacement — no code
changes required:

```
public/images/marble/<slug>.jpg
public/images/granite/<slug>.jpg
public/images/applications/<slug>.jpg
public/images/about/*.jpg
public/images/hero/*.jpg
public/images/showroom/*.jpg
```

## WhatsApp integration

Centralized in `lib/constants.ts` (`WHATSAPP_NUMBER`) and
`lib/whatsapp.ts`. Update the number in one place only. Three message
templates are supported: general enquiry, stone enquiry (prefilled with
stone name), and quotation enquiry.

## Filters

The collection filter system (`lib/filters.ts`,
`components/collection/FilterFields.tsx`) works entirely client-side
against `data/stones.ts` — color, origin, form, application, and name
search all combine with AND logic. Because origin/form/application data
is largely unconfirmed for the current catalogue, some filter
combinations will correctly return no results until that data is
filled in — this is intentional (see Content & data policy above), and
the empty state explains this and offers a reset.

## What's next (per the brief's future-proofing requirements)

- Replace placeholder images in `public/images/` with real photography.
- Fill in `forms`, `applications`, and remaining `origin`/`colors`
  fields in `data/stones.ts` as confirmed by ABC Stones India.
- Add showroom gallery / video / 360° tour to `components/showroom/`
  once available — `LocationCard.tsx` is the single place to update.
- Add real factory photography/video to `components/craft/` once
  available.
