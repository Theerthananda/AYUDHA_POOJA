# Sri Chamundeshwari — Ayudha Pooja

A responsive React + TypeScript + Vite digital celebration of Sri Chamundeshwari Devi, Ayudha Pooja, and Mysuru Dasara.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

The site is a static single page. `vite.config.ts` uses a relative asset base, so the generated `dist` directory is suitable for a GitHub Pages project site or any static host. For GitHub Pages, publish the `dist` folder through your preferred Pages workflow.

## Content and accessibility

- Kannada copy uses `Noto Serif Kannada` with a system fallback.
- Respects `prefers-reduced-motion` and includes semantic landmarks, a skip link, keyboard-dismissable navigation, focusable controls, descriptive image alt text, and fallbacks for sharing/copying.
- The photographic assets are local, lazy loaded below the hero, and retain a designed layout if an image is unavailable.

## Image credits / licence manifest

The supplied local images are downloaded from Wikimedia Commons at resized display dimensions. They remain subject to their original Creative Commons terms; retain attribution and licence notices if redistributing the work.

| Local file | Use | Source and author | Licence |
| --- | --- | --- | --- |
| `public/images/devi-chamundeshwari.jpg` | Hero / greeting | [Devi Chamundeshwari](https://commons.wikimedia.org/wiki/File:Devi_Chamundeshwari.jpg), RASHMI M D | CC BY-SA 4.0 |
| `public/images/chamundeshwari-idol.jpg` | Image fallback | [Idol at Chamundeshwari Temple](https://commons.wikimedia.org/wiki/File:Idol_at_Chamundeshwari_Temple.jpg), Vinodtiwari2608 | CC BY-SA 4.0 |
| `public/images/mysore-palace-illuminated.jpg` | Mysuru / illumination | [Mysore Palace Dussehra Illumination](https://commons.wikimedia.org/wiki/File:Mysore_Palace_Dussehra_Illumination.jpg), V N GUPTA | CC BY-SA 4.0 |
| `public/images/dasara-procession.jpg` | Procession | [Mysore Dasara procession](https://commons.wikimedia.org/wiki/Category:Mysore_Dasara) | See source file page |
| `public/images/karnataka-folk-dance.jpg` | Karnataka culture | [Folk dance of Karnataka](https://commons.wikimedia.org/wiki/File:Folk_dance_of_Karnataka.jpg), Ashwin Geet Dsa | See source file page |

Before any commercial campaign or relicensing, review each linked source page for the exact current attribution and licence conditions.

## Shutterstock reference

The requested Shutterstock video-thumbnail URL was used only as a visual reference and is not bundled or displayed. Shutterstock requires a licence before its content can be used publicly. To use that exact asset, license Shutterstock video `3614008695` from its detail page and replace `public/images/devi-chamundeshwari.jpg` with the licensed export; retain the purchase record and apply the licence terms appropriate to the deployment.
