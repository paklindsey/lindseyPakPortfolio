# Lindsey — Portfolio

A minimal, editorial portfolio built with React + Vite.

## Getting started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project structure

```
src/
├── main.jsx              # Entry point
├── App.jsx               # Root component + scroll reveal setup
├── index.css             # Global styles + CSS tokens
└── components/
    ├── Cursor.jsx         # Custom cursor (dot + lagging ring)
    ├── Cursor.module.css
    ├── Nav.jsx            # Fixed navigation
    ├── Nav.module.css
    ├── Hero.jsx           # Full-viewport hero with name animation
    ├── Hero.module.css
    ├── Work.jsx           # Project list with hover previews
    ├── Work.module.css
    ├── About.jsx          # Bio + capabilities
    ├── About.module.css
    ├── Contact.jsx        # Email + social links
    ├── Contact.module.css
    ├── Footer.jsx
    └── Footer.module.css
```

## Customising

All design tokens live in `src/index.css` under `:root`:

```css
--bg        warm parchment background
--fg        near-black text
--fg-dim    muted secondary text
--accent    olive green accent
--serif     Playfair Display
--sans      DM Sans
```

Update project data in `src/components/Work.jsx` (`PROJECTS` array).  
Update social links in `src/components/Contact.jsx` (`SOCIALS` array).

## Deploying

Works out of the box with **Vercel**, **Netlify**, or **GitHub Pages**.

```bash
# Vercel (recommended)
npx vercel

# Netlify
npm run build && netlify deploy --prod --dir=dist
```
# lindseyPakPortfolio
