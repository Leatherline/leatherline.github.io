# Leatherline Ltd

A responsive, static React + Vite + TypeScript website for Leatherline Ltd, Mauritius. All furniture and seating photographs are the supplied business photos, optimized locally as responsive WebP assets. The original image folders are preserved.

## Run locally

Requires Node.js 24 LTS or newer compatible LTS release.

```sh
npm ci
npm run dev
```

On Windows, double-click `START-WEBSITE.cmd` to start the preview in your own terminal. Keep that terminal open, then visit `http://localhost:5173/`. This is useful when the agent's isolated execution environment cannot expose its server to your browser. Port 5173 is fixed; if another server is using it, stop that server first.

```sh
npm run build
npm run preview
```

## GitHub Pages

1. Create a GitHub repository and push this folder to its `main` branch. Include `public/images`, `src/photos.json`, source files, `package-lock.json`, and `.github/workflows/pages.yml`. Do not commit `node_modules` or `dist`.
2. In repository **Settings → Pages → Build and deployment**, choose **GitHub Actions**.
3. The included workflow builds and publishes the site. It automatically generates the sitemap, canonical URL, Open Graph image and robots sitemap reference using your repository URL.

Vite uses a relative base (`./`) so assets work on repository Pages URLs as well as custom domains. For a custom domain, update the workflow's `SITE_URL` to that HTTPS domain and add the domain in GitHub Pages settings.

## Content and photography

- Business contacts and verified before/after pairs: `src/business.ts`.
- Services, short copy and image choices: `src/App.tsx`.
- Colors, layout, fonts, motion and responsive rules: `src/styles.css`.
- Photo inventory and original source references: `src/photos.json`.
- To regenerate WebP images after changing the original folders, run `npm run assets`. IDs follow sorted folder filenames; inspect `src/photos.json` and update image references if files are added or removed.

No before-and-after images were supplied. The site has no comparison section or Before & After navigation link. The portfolio shows individual project photographs.

Materials are illustrative CSS texture studies, not stock photography or inventory claims. Process imagery uses actual furniture and workshop photos; no workshop personnel photos were supplied. No testimonials, awards, opening hours, exact street address or unverified guarantees have been added.

## Contact behavior

All quote links open `https://wa.me/23058655458` with URL-encoded enquiry text. Each service has its own message. The optional form validates name, service and item type, then opens a prefilled WhatsApp conversation. It does not submit to a server, store personal data, or upload attachments. Visitors send their photos within WhatsApp. Email: leatherlineltd@gmail.com.

## Motion and accessibility

Motion for headline and gallery animation, GSAP ScrollTrigger for reveals and hero parallax, Lenis smooth scrolling, and a lazy-loaded Three.js / React Three Fiber / Drei fabric mesh on suitable desktop devices. Touch, smaller screens, reduced motion and data-saving settings use the static photographic hero. Reduced motion disables smooth scrolling and animation. Native modal dialogs provide keyboard containment; the gallery supports Escape and arrow keys. The visible Google Maps section uses the coordinates resolved from the supplied business location link, with a direct directions button.

## External services

Google Fonts supplies Cormorant Garamond and Manrope with local fallbacks. WhatsApp handles enquiries, Google Maps opens the supplied location link. No analytics, form backend, cookies or API keys are required. Hosting is static; no Sites hosting account is required.
