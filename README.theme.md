# Tiny Rocket

A starter theme for Astro.

🧑‍🚀 Features:

- ✅ Designed for company website and blog
- ✅ Simple enough for personal website and/or blog
- ✅ Markdown support (.mdx)
- ✅ Sitemap.xml generation
- ✅ Style is highly customisable with Tailwind CSS
- ✅ Search capability using lightweight client-side JS
- ✅ RSS feed (rss.xml) generation
- ✅ Web map / geolocation
- ✅ [View transitions](https://docs.astro.build/en/guides/view-transitions/)

Refer to [Tiny Rocket Documentation](https://tinyrocket.pages.dev/doc).

## 🚀 Project Structure

Below is an overview.

```bash
/
├── public/
│   ├── assets
│   ├── _leaflet
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── components/
│   ├── layouts/
│   └── pages/
│       └── index.astro
│       └── doc.mdx
│       └── search.astro
│       └── map.astro
│       └── 404.astro
│       └── about.mdx
│       └── privacy.mdx
│       └── rss.xml.ts
│       └── blog/
│           └── [...page].astro
│           └── few_sample_posts.mdx
└── astro.config.mjs
```

Astro looks for `.astro` or `.mdx` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, are placed in the `public/` directory.

## 👀 Want to learn more?

- [Astro documentation](https://docs.astro.build/en/getting-started/)

- [Tiny Rocket Documentation](https://tinyrocket.pages.dev/doc)
