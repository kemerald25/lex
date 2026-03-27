# Domira

Domira is a cutting-edge platform for high-end residential real estate, representing the world's most exceptional properties. From ultra-luxury estates to private concierge services and off-market access, Domira perfectly curates architectural masterpieces for refined living.

## Features

- **Exclusive Property Portfolio**: Explore world-class luxury real estate listings across prominent global regions.
- **Advanced Filtration**: Precisely narrow down properties by location (e.g., Manhattan, Aspen, London), property format (Villa, Estate, etc.), and multidimensional price brackets using dynamic range sliders.
- **Private Concierge**: Deep integration for lifestyle and membership services, catering to seamless transitions and elite partnerships.
- **Adaptive Precision UI**: Experience a meticulously crafted glass-morphism aesthetic using Radix UI primitives that seamlessly adapts between dark and light themes.

## Tech Stack

This project is built atop modern, high-performance web tooling:

- **Core**: Next.js 15 (App Router with Turbopack), React 19
- **Design System & Styling**: Tailwind CSS, Radix UI Primitives, Lucide Icons, `clsx`, `tailwind-merge`
- **Animations & Interaction**: Embla Carousel (React), `tailwindcss-animate`
- **Forms & Validation**: React Hook Form, Zod
- **Backend & AI Integration**: Firebase 11, Google GenAI SDK, Genkit

## Project Structure

```text
src/
├── app/                  # Next.js App Router (pages, layout, globals.css)
├── ai/                   # Genkit and Google GenAI configurations (dev.ts)
├── components/
│   ├── filters/          # Advanced property search bar & filters
│   ├── layout/           # Shared structures like Navbar & Footer
│   ├── sections/         # Landing page subsections (Hero, Listings)
│   └── ui/               # Granular, reusable Radix component blocks
```

## Getting Started

### Prerequisites

- Node.js version 20 or higher.
- A package manager of your choice.

### Installation & Run

1. **Install dependencies:**
   ```bash
   npm install
   ```
   *(Note: Avoid mixing package managers. A `package-lock.json` lockfile limits this project to NPM currently.)*

2. **Start the Next.js development server:**
   ```bash
   npm run dev
   ```
   *The server runs on [http://localhost:9002](http://localhost:9002).*

3. **Start the Genkit / AI Development environment (optional):**
   ```bash
   npm run genkit:watch
   ```

## License

© 2026 Dev Royale. All Rights Reserved.
