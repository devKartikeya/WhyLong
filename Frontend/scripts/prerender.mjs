// Runs AFTER `vite build`  (see "build" script in package.json).
// For every route in ROUTES it writes dist/<path>/index.html with that
// page's own <title>, meta tags, JSON-LD and real content inside #root,
// so crawlers that do not run JavaScript still see the full page.
//
// Location: <project root>/scripts/prerender.mjs  (next to package.json)

import fs from "node:fs";
import path from "node:path";
import * as qr from "../src/content/qrLanding.js";

const SITE_URL = qr.SITE_URL;
const OG_IMAGE = `${SITE_URL}/og-image.png`;

/* ------------------------------ helpers ------------------------------ */

const esc = (value) =>
    String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

const cards = (items) =>
    items
        .map((item) => `<h3>${esc(item.title)}</h3><p>${esc(item.text)}</p>`)
        .join("");

const wrapBody = (inner) =>
    `<div id="root"><main style="max-width:760px;margin:0 auto;padding:48px 24px;font-family:system-ui,sans-serif;line-height:1.6;color:#111827">\n${inner}\n</main></div>`;

/* ------------------------------- routes ------------------------------- */
// Add one object per PUBLIC page you want crawlers to read.
// Do NOT add /dashboard/* (private, behind login).

const qrBody = () =>
    wrapBody(`<nav aria-label="Breadcrumb"><a href="/">Home</a> / QR Code Generator</nav>
<h1>${esc(qr.META.h1)}</h1>
<p>${esc(qr.META.intro)}</p>
<h2>${esc(qr.COPY.whyTitle)}</h2>
<p>${esc(qr.COPY.whyIntro)}</p>
${cards(qr.WHY)}
<h2>${esc(qr.COPY.designTitle)}</h2>
<p>${esc(qr.COPY.designIntro)}</p>
${cards(qr.FEATURES)}
<h2>${esc(qr.COPY.stepsTitle)}</h2>
<p>${esc(qr.COPY.stepsIntro)}</p>
<ol>${qr.STEPS.map((s) => `<li><strong>${esc(s.title)}.</strong> ${esc(s.text)}</li>`).join("")}</ol>
<h2>${esc(qr.COPY.formatsTitle)}</h2>
<p>${esc(qr.COPY.formatsIntro)}</p>
<table><thead><tr><th>Format</th><th>Best for</th><th>Details</th></tr></thead><tbody>${qr.FORMATS.map(
        (r) => `<tr><th scope="row">${esc(r.format)}</th><td>${esc(r.bestFor)}</td><td>${esc(r.details)}</td></tr>`
    ).join("")}</tbody></table>
<h3>${esc(qr.COPY.errorTitle)}</h3>
<p>${esc(qr.COPY.errorIntro)}</p>
<table><thead><tr><th>Level</th><th>Can recover</th><th>Good for</th></tr></thead><tbody>${qr.ERROR_LEVELS.map(
        (r) => `<tr><th scope="row">${esc(r.level)}</th><td>${esc(r.recovery)}</td><td>${esc(r.goodFor)}</td></tr>`
    ).join("")}</tbody></table>
<h2>${esc(qr.COPY.tipsTitle)}</h2>
<p>${esc(qr.COPY.tipsIntro)}</p>
<ul>${qr.BEST_PRACTICES.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
<h2>${esc(qr.COPY.useCasesTitle)}</h2>
${cards(qr.USE_CASES)}
<h2>${esc(qr.COPY.faqTitle)}</h2>
${qr.FAQS.map((f) => `<h3>${esc(f.question)}</h3><p>${esc(f.answer)}</p>`).join("")}`);

const ROUTES = [
    {
        path: qr.PAGE_PATH, // "/qr-code-generator"
        title: qr.META.title,
        description: qr.META.description,
        schemas: qr.buildSchemas(),
        body: qrBody()
    }

    // ---- Example: add another public page the same way ----
    // {
    //     path: "/about",
    //     title: "About WhyLong | Free URL Shortener & QR Codes",
    //     description: "Learn what WhyLong is and why we built it.",
    //     schemas: [],
    //     body: wrapBody(`<h1>About WhyLong</h1><p>...real page text...</p>`)
    // }
];

/* ------------------------------ build ------------------------------ */

const distDir = path.resolve("dist");
const templatePath = path.join(distDir, "index.html");

if (!fs.existsSync(templatePath)) {
    throw new Error("dist/index.html not found. Run `vite build` first.");
}

// Strip HTML comments first so markup mentioned inside a comment is never matched.
const template = fs.readFileSync(templatePath, "utf8").replace(/<!--[\s\S]*?-->/g, "");
// Works with BOTH:
//   1) a plain empty root:   <div id="root"></div>
//   2) the static fallback:  <div id="root"><main>…</main></div>
const emptyRoot = /<div\s+id="root"\s*>\s*<\/div>/;
const fallbackRoot = /<div\s+id="root"\s*>[\s\S]*?<\/main>\s*<\/div>/;

const rootPattern = emptyRoot.test(template)
    ? emptyRoot
    : fallbackRoot.test(template)
        ? fallbackRoot
        : null;

if (!rootPattern) {
    throw new Error(
        'Could not find <div id="root"> in dist/index.html. Check that your index.html has it.'
    );
}

// Remove the homepage's head tags once; every route gets its own.
const cleanTemplate = template
    .replace(/<title>[\s\S]*?<\/title>\s*/g, "")
    .replace(
        /<meta\s+(?:name|property)="(?:description|robots|og:[^"]+|twitter:[^"]+)"[^>]*>\s*/g,
        ""
    )
    .replace(/<link\s+rel="canonical"[^>]*>\s*/g, "")
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/g, "");

// data-rh="true" lets react-helmet-async replace these tags on the client
// instead of adding duplicates beside them.
const buildHead = (route) => {
    const url = `${SITE_URL}${route.path}`;

    return [
        `<title data-rh="true">${esc(route.title)}</title>`,
        `<meta data-rh="true" name="description" content="${esc(route.description)}" />`,
        `<meta data-rh="true" name="robots" content="index, follow, max-image-preview:large" />`,
        `<link data-rh="true" rel="canonical" href="${url}" />`,
        `<meta data-rh="true" property="og:type" content="website" />`,
        `<meta data-rh="true" property="og:site_name" content="WhyLong" />`,
        `<meta data-rh="true" property="og:title" content="${esc(route.title)}" />`,
        `<meta data-rh="true" property="og:description" content="${esc(route.description)}" />`,
        `<meta data-rh="true" property="og:url" content="${url}" />`,
        `<meta data-rh="true" property="og:image" content="${OG_IMAGE}" />`,
        `<meta data-rh="true" name="twitter:card" content="summary_large_image" />`,
        `<meta data-rh="true" name="twitter:title" content="${esc(route.title)}" />`,
        `<meta data-rh="true" name="twitter:description" content="${esc(route.description)}" />`,
        `<meta data-rh="true" name="twitter:image" content="${OG_IMAGE}" />`,
        ...route.schemas.map(
            (schema) =>
                `<script data-rh="true" type="application/ld+json">${JSON.stringify(schema)}</script>`
        )
    ].join("\n    ");
};

for (const route of ROUTES) {
    const html = cleanTemplate
        .replace("</head>", `    ${buildHead(route)}\n  </head>`)
        .replace(rootPattern, () => route.body);

    const outDir = path.join(distDir, route.path);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "index.html"), html);

    console.log(`Prerendered ${route.path}/index.html`);
}
