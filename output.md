# GetB+ Website Project Overview

GetB+ is a cross-border fintech platform designed to enable international travelers and NRIs to pay seamlessly across India using their existing Visa, Mastercard, or Amex cards at any UPI QR-accepting merchant.

This project implements the complete blueprint using Next.js 14 (App Router), TypeScript, and Tailwind CSS. It encompasses a full 10-page structure (Home, How It Works, Pricing, Security, Travelers, NRIs, Partners, About, Support, Blog), reusable UI components, layout architectures, and backend API routes for forms.

## Folder Structure

/getbplus
├── src/
│   ├── app/
│   │   ├── about/page.tsx
│   │   ├── api/
│   │   │   ├── contact/route.ts
│   │   │   ├── partner/route.ts
│   │   │   └── waitlist/route.ts
│   │   ├── blog/page.tsx
│   │   ├── for-nris/page.tsx
│   │   ├── for-travelers/page.tsx
│   │   ├── how-it-works/page.tsx
│   │   ├── partner/page.tsx
│   │   ├── pricing/page.tsx
│   │   ├── security/page.tsx
│   │   ├── support/page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       └── Card.tsx
│   └── lib/
│       └── utils.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md


## Setup Instructions

1. Ensure you have Node.js installed.
2. Navigate to the project directory: cd getbplus
3. Install dependencies: npm install

## Run Commands

Start the development server:
`npm run dev`

Build for production:
`npm run build`

Start the production server:
`npm run start`

## Codebase Summary

The full codebase is implemented in the `getbplus` directory. All 10 frontend routes have been mapped to their respective folders in `src/app`. The components make use of `lucide-react` for iconography and Radix primitives for accessibility. Tailwind is fully customized with the Navy and Gold theme. API routes are built securely to catch requests from the Waitlist, Partner, and Contact forms.
