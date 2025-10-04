# The New Townhouse Shell  
_A React starter shell for modern web dashboards._

## 🚀 Overview  
The **New Townhouse Shell** is a minimalist, brand-ready Vite + React + Tailwind CSS shell designed for developer productivity. It includes Google Fonts Montserrat and Raleway, extendable routing logic, and modular component structure for rapid prototyping. Think of it as a preview layer for your modern web dashboard.

## 🔧 Technical Stack  
- **React** – Powers seamless one-page interactions and router logic  
- **Vite, esbuild, + eslint** – Bundles and lints ES modules with fast build-time optimizations  
- **Tailwind CSS** – Uses design tokens for themeable dashboard states and objects

## 🖌️ Theme and Typography  
Unified grid pairs colors and typography with Google’s Montserrat and Raleway.  
- `Montserrat` for sophisticated block components and headings  
- `Raleway` for descriptions, focus states, and body copy  
Theme logic is documented in `tailwind.config.ts` for reuse across modules.

## 📦 Routing Logic  
Uses React’s `path-to-regexp` endpoint logic to gate modules before mounting.  
Examples: `/start`, `/plus`, or `/pro` access tiers.

## 🛠️ Building Tasks  
Use run-scripts to manage local development and deployment:

- `npm run dev` – Run the local dev server  
- `npm run build` – Compile your code into the `dist/` folder  
- `npm run lint` – Validate your code against eslint frontmatter  
- `npm run preview` – Serve the build folder locally before deploying
## 🌐 Live Demo

Check out the deployed shell on Vercel:  
👉 [thenewtownhouse-shell.vercel.app](https://thenewtownhouse-shell.vercel.app)
