# Hatkar Construction & Consulting

A premium construction, architecture, interior design and engineering website built with Next.js, TypeScript, Tailwind CSS, Framer Motion, React Hook Form, Zod, and Lucide icons.

## Project structure

- `app/` - Next.js app routes and page files
- `components/` - reusable UI components
- `lib/` - shared data and content
- `public/assets/` - branding visuals
- `styles/` - global styling and Tailwind configuration

## Run locally

1. Install Node.js 20+ or use a package manager available in your environment.
2. From the project root:
   - `npm install`
   - `npm run dev`
3. Visit `http://localhost:3000`

## Build

- `npm run build`
- `npm start`

## Notes

- The site uses the existing image asset in `public/assets/logo.jpg` and remote construction imagery for hero sections.
- The brand is configured for a bright premium look with blue and gold accents.
- To deploy on Cloudflare Pages, use the production build output from `npm run build` and set the root to the project folder.
