# Kripa Kunjumon — Portfolio

Built with React, Tailwind CSS, GSAP (+ ScrollTrigger), and Three.js.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

This creates a `dist/` folder with the optimized, production-ready site.

## Deploy for free

**Vercel (recommended, easiest):**
1. Push this folder to a GitHub repo.
2. Go to vercel.com, sign in with GitHub, click "New Project," select the repo.
3. Vercel auto-detects Vite — just click Deploy. Done.

**Netlify:**
1. Same as above, but on netlify.com.
2. Build command: `npm run build`, publish directory: `dist`.

## Project structure

```
kripa-portfolio/
├── public/assets/kripa-portrait.png   ← your photo
├── src/
│   ├── components/                    ← one file per section
│   ├── data.js                        ← all your content lives here — edit this to update text
│   ├── App.jsx                        ← wires sections together + GSAP setup
│   ├── main.jsx                       ← React entry point
│   └── index.css                      ← Tailwind + custom animations
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

To change any text (experience, skills, project, contact info), edit `src/data.js` —
you don't need to touch the component files for content changes.
