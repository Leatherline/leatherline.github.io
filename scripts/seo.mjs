import {writeFile,readFile} from 'node:fs/promises';
const url=process.env.SITE_URL;
if(!url){console.log('Set SITE_URL to the published URL to generate canonical metadata and sitemap.');process.exit(0)}
const base=new URL(url).href.replace(/\/?$/,'/');
await writeFile('public/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${base}</loc></url></urlset>`);
await writeFile('public/robots.txt',`User-agent: *\nAllow: /\nSitemap: ${base}sitemap.xml\n`);
let html=await readFile('index.html','utf8');html=html.replace(/<!-- production-seo -->[\s\S]*?<!-- \/production-seo -->/g,'');html=html.replace('</head>',`<!-- production-seo --><link rel="canonical" href="${base}"/><meta property="og:url" content="${base}"/><meta property="og:image" content="${base}images/project-21-1600.webp"/><meta property="og:image:alt" content="Leatherline grey sectional upholstery project"/><meta name="twitter:card" content="summary_large_image"/><!-- /production-seo --></head>`);await writeFile('index.html',html);console.log(`SEO configured for ${base}`);
