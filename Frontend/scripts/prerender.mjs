// Runs AFTER `vite build`.
// Creates dist/qr-code-generator/index.html with this page's own
// <title>, meta tags, JSON-LD and real content inside #root, so crawlers
// that do not run JavaScript still see the full page.
// Content comes from src/content/qrLanding.js (single source of truth).

import fs from "node:fs";
import path from "node:path";
import {
    META,
    COPY,
    PAGE_URL,
    PAGE_PATH,
    SITE_URL,
    WHY,
    FEATURES,
    STEPS,
    FORMATS,
    ERROR_LEVELS,
    BEST_PRACTICES,
    USE_CASES,
    FAQS,
    buildSchemas
} from "../src/content/qrLanding.js";

const distDir = path.resolve("dist");
const templatePath = path.join(distDir, "index.html");

if (!fs.existsSync(templatePath)) {
    throw new Error("dist/index.html not found. Run `vite build` first.");
}

const template = fs.readFileSync(templatePath, "utf8");

const esc = (value) =>
    String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

/* ---------------------------- static body ---------------------------- */

const cards = (items) =>
    items
        .map((item) => `<h3>${esc(item.title)}</h3><p>${esc(item.text)}</p>`)
        .join("");

const body = `<div id="root"><main style="max-width:760px;margin:0 auto;padding:48px 24px;font-family:system-ui,sans-serif;line-height:1.6;color:#111827">
<nav aria-label="Breadcrumb"><a href="/">Home</a> / QR Code Generator</nav>
<h1>${esc(META.h1)}</h1>
<p>${esc(META.intro)}</p>
<h2>${esc(COPY.whyTitle)}</h2>
<p>${esc(COPY.whyIntro)}</p>
${cards(WHY)}
<h2>${esc(COPY.designTitle)}</h2>
<p>${esc(COPY.designIntro)}</p>
${cards(FEATURES)}
<h2>${esc(COPY.stepsTitle)}</h2>
<p>${esc(COPY.stepsIntro)}</p>
<ol>${STEPS.map((s) => `<li><strong>${esc(s.title)}.</strong> ${esc(s.text)}</li>`).join("")}</ol>
<h2>${esc(COPY.formatsTitle)}</h2>
<p>${esc(COPY.formatsIntro)}</p>
<table><thead><tr><th>Format</th><th>Best for</th><th>Details</th></tr></thead><tbody>${FORMATS.map(
    (r) => `<tr><th scope="row">${esc(r.format)}</th><td>${esc(r.bestFor)}</td><td>${esc(r.details)}</td></tr>`
).join("")}</tbody></table>
<h3>${esc(COPY.errorTitle)}</h3>
<p>${esc(COPY.errorIntro)}</p>
<table><thead><tr><th>Level</th><th>Can recover</th><th>Good for</th></tr></thead><tbody>${ERROR_LEVELS.map(
    (r) => `<tr><th scope="row">${esc(r.level)}</th><td>${esc(r.recovery)}</td><td>${esc(r.goodFor)}</td></tr>`
).join("")}</tbody></table>
<h2>${esc(COPY.tipsTitle)}</h2>
<p>${esc(COPY.tipsIntro)}</p>
<ul>${BEST_PRACTICES.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
<h2>${esc(COPY.useCasesTitle)}</h2>
${cards(USE_CASES)}
<h2>${esc(COPY.faqTitle)}</h2>
${FAQS.map((f) => `<h3>${esc(f.question)}</h3><p>${esc(f.answer)}</p>`).join("")}
</main></div>`;

/* ------------------------------ head tags ----------------------------- */
// data-rh="true" lets react-helmet-async replace these tags on the client
// instead of adding duplicates next to them.

const og = `${SITE_URL}/og-image.png`;

const head = [
    `<title data-rh="true">${esc(META.title)}</title>`,
    `<meta data-rh="true" name="description" content="${esc(META.description)}" />`,
    `<meta data-rh="true" name="robots" content="index, follow, max-image-preview:large" />`,
    `<link data-rh="true" rel="canonical" href="${PAGE_URL}" />`,
    `<meta data-rh="true" property="og:type" content="website" />`,
    `<meta data-rh="true" property="og:site_name" content="WhyLong" />`,
    `<meta data-rh="true" property="og:title" content="${esc(META.title)}" />`,
    `<meta data-rh="true" property="og:description" content="${esc(META.description)}" />`,
    `<meta data-rh="true" property="og:url" content="${PAGE_URL}" />`,
    `<meta data-rh="true" property="og:image" content="${og}" />`,
    `<meta data-rh="true" name="twitter:card" content="summary_large_image" />`,
    `<meta data-rh="true" name="twitter:title" content="${esc(META.title)}" />`,
    `<meta data-rh="true" name="twitter:description" content="${esc(META.description)}" />`,
    `<meta data-rh="true" name="twitter:image" content="${og}" />`,
    ...buildSchemas().map(
        (schema) =>
            `<script data-rh="true" type="application/ld+json">${JSON.stringify(schema)}</script>`
    )
].join("\n    ");

/* --------------------------- build the page --------------------------- */

let html = template
    // remove the homepage's head tags
    .replace(/<title>[\s\S]*?<\/title>\s*/g, "")
    .replace(
        /<meta\s+(?:name|property)="(?:description|robots|og:[^"]+|twitter:[^"]+)"[^>]*>\s*/g,
        ""
    )
    .replace(/<link\s+rel="canonical"[^>]*>\s*/g, "")
    .replace(
        /<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/g,
        ""
    )
    // add this page's head tags
    .replace("</head>", `    ${head}\n  </head>`);

const rootPattern = /<div id="root">[\s\S]*?<\/main>\s*<\/div>/;

if (!rootPattern.test(html)) {
    throw new Error(
        'Could not find the static #root fallback in dist/index.html. Keep the <div id="root"><main>…</main></div> block from index.html.'
    );
}

html = html.replace(rootPattern, body);

const outDir = path.join(distDir, PAGE_PATH);
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "index.html"), html);

console.log(`Prerendered ${PAGE_PATH}/index.html`);
