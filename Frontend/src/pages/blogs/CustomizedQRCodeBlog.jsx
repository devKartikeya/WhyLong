import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogPosts } from "../../content/blogPosts";
import ArrowIcon from "../../components/ui/ArrowIcon";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  ExternalLink,
  Palette,
  QrCode,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Article meta                                                        */
/* ------------------------------------------------------------------ */

const SITE_URL = "https://whylong.vercel.app";

const article = {
  slug: "how-to-create-customized-qr-code",
  title: "How to Create a Customized QR Code for Free: Colors, Logos & More",
  description:
    "Learn how to create a customized QR code for free with WhyLong. Pick a template, set colors, dots and corners, add your logo, brand text and a call to action, then download PNG or SVG.",
  author: "Kartikeya Mishra",
  published: "2026-10-29",
  updated: "2026-10-29",
  readTime: "17 min read",
  section: "QR Codes",
};

const ARTICLE_URL = `${SITE_URL}/blogs/${article.slug}`;
const OG_IMAGE = `${SITE_URL}/og-image.png`;

// Internal routes (all exist in App.jsx)
const ROUTES = {
  qr: "/products/qr-code-generator",
  shortener: "/products/url-shortener",
  analytics: "/products/analytics",
  instagram: "/tutorials/create-instagram-qr-code",
  github: "/tutorials/create-github-qr-code",
  blogs: "/blogs",
  shortenGuide: "/blogs/how-to-shorten-a-long-url",
};

const linkClass =
  "font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950";

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const howToSteps = [
  {
    name: "Create a free WhyLong account and sign in",
    text: "The QR studio needs a free account. Sign up, sign in, and open QR Codes from your dashboard. There is no payment step.",
  },
  {
    name: "Create a short link for your destination",
    text: "Shorten the page you want people to reach, ideally while signed in so the link appears in your dashboard. Open the short link once to make sure it lands on the right page.",
  },
  {
    name: "Open the QR studio and choose your link",
    text: "In the QR studio, pick your new short link from the list. Use the search box if you have many links. The preview updates as soon as you select one.",
  },
  {
    name: "Pick a template",
    text: "Start with Classic, Midnight, Sunrise, Ocean, or Violet. A template sets the colors, gradient, dot pattern, and corner styles in one click, so you can fine-tune from a good starting point.",
  },
  {
    name: "Set your colors and gradient",
    text: "Choose the QR color, the background color, and the corner (eye) color. Turn on the two-color gradient if you want the code to fade from one brand color to another.",
  },
  {
    name: "Choose a dot pattern and corner shapes",
    text: "Pick one of six dot patterns, then set the corner frame and the inner corner dot. Test after each change, because shapes affect how easily phones read the code.",
  },
  {
    name: "Add your logo, brand name, and call to action",
    text: "Upload a PNG, JPG, WebP, or SVG logo up to 2 MB and set its size. Add a brand name (up to 40 characters) and a call to action (up to 60 characters). Both print under the code.",
  },
  {
    name: "Set scan reliability, then test and download",
    text: "Keep error correction on High when you use a logo, adjust the margin, and choose 256, 512, or 1024 px. Scan the preview with your phone, then download a PNG or an SVG.",
  },
];

const controls = [
  ["Templates", "Classic, Midnight, Sunrise, Ocean, Violet", "A fast starting point before you fine-tune."],
  ["QR color", "Any color, with an optional two-color gradient", "Match your brand while keeping strong contrast."],
  ["Background color", "Any color", "Keep it clean. Light backgrounds scan most reliably."],
  ["Corner (eye) color", "Any color", "Add an accent without touching the data dots."],
  ["Dot pattern", "Square, Dots, Rounded, Classy, Soft classy, Extra rounded", "Change the personality of the code."],
  ["Corner frame", "Square, Dot, Rounded", "Style the three large position markers."],
  ["Inner corner dot", "Square, Dot, Rounded", "Style the small dot inside each marker."],
  ["Logo", "PNG, JPG, WebP, or SVG up to 2 MB, sized from 12% to 28%", "Put your brand in the center."],
  ["Brand name", "Up to 40 characters", "Say who the code belongs to."],
  ["Call to action", "Up to 60 characters", "Tell people why to scan."],
  ["Error correction", "Low (7%), Medium (15%), Quartile (25%), High (30%)", "Protect the code when a logo covers part of it."],
  ["Quiet zone margin", "8 to 40 px", "Keep clear space around the code."],
  ["Export", "PNG at 256, 512, or 1024 px, or SVG", "Match the file to where it will be used."],
  ["Brand presets", "Saved in your browser", "Reuse your design for the next code."],
];

const templates = [
  {
    name: "Classic",
    swatch: "#111827",
    look: "Dark code on a white background",
    bestFor: "Menus, business cards, flyers, and anything printed.",
    note: "The safest choice. If you are unsure, start here.",
  },
  {
    name: "Midnight",
    swatch: "linear-gradient(135deg, #f8fafc, #facc15)",
    look: "Light code on a dark navy background with yellow corners",
    bestFor: "Dark slides, dark websites, and screens.",
    note: "Light-on-dark codes look striking, but some scanner apps read them less reliably. Test with more than one phone.",
  },
  {
    name: "Sunrise",
    swatch: "linear-gradient(135deg, #7c2d12, #eab308)",
    look: "Brown-to-gold gradient on a cream background",
    bestFor: "Food, handmade goods, lifestyle brands, and warm palettes.",
    note: "Gradients look great, but keep the darkest end strong against the background.",
  },
  {
    name: "Ocean",
    swatch: "linear-gradient(135deg, #0f766e, #2563eb)",
    look: "Teal-to-blue gradient on a pale mint background",
    bestFor: "Tech, travel, wellness, and clean modern brands.",
    note: "Rounded dots and corners give it a soft, friendly feel.",
  },
  {
    name: "Violet",
    swatch: "linear-gradient(135deg, #6d28d9, #db2777)",
    look: "Purple-to-pink gradient on a pale lavender background",
    bestFor: "Creators, events, music, and bold creative projects.",
    note: "A confident look. Check that the lighter end stays easy to read.",
  },
];

const errorLevels = [
  ["Low (L)", "7%", "Clean digital use with no logo and a very simple design."],
  ["Medium (M)", "15%", "General everyday codes without a logo."],
  ["Quartile (Q)", "25%", "Printed material that may get small scuffs."],
  ["High (H)", "30%", "Codes with a logo. This is the WhyLong default."],
];

const useCases = [
  {
    title: "Instagram profile",
    text: "Put a branded code on business cards, packaging, or a shop window so people can follow you in one scan. A call to action such as \"Follow us on Instagram\" gives the scan a purpose.",
    link: { to: ROUTES.instagram, label: "Read the Instagram QR code guide" },
  },
  {
    title: "GitHub profile or repository",
    text: "Add a code to your resume, a conference slide, or a sticker. Link to your profile to show all your work, or to one repository to show a single project.",
    link: { to: ROUTES.github, label: "Read the GitHub QR code guide" },
  },
  {
    title: "Business cards",
    text: "Replace a long URL with a clean code that opens your portfolio or contact page. Export an SVG so it stays sharp even when printed small.",
  },
  {
    title: "Product packaging",
    text: "Match the code to your pack colors and link to setup guides, offers, or reviews. Test it on the real material, because glossy surfaces can cause glare.",
  },
  {
    title: "Restaurants and cafes",
    text: "Open the menu or the ordering page from a table card. \"Scan to see the menu\" removes any guesswork for guests.",
  },
  {
    title: "Events and posters",
    text: "Use a bold template with strong contrast and make the code large enough to scan from where people will actually stand.",
  },
];

const mistakes = [
  ["Low contrast", "Pale code on a pale background, or similar mid-tones, is the most common reason a pretty code fails. Keep the code clearly darker (or clearly lighter) than the background."],
  ["An oversized logo", "A logo that covers too much of the code removes data the scanner needs. Keep it modest and use High error correction."],
  ["No test scan", "Always scan the final file, not just the preview. Test on an iPhone and an Android phone if you can."],
  ["Printing too small", "A code that is fine on a monitor can be unreadable at 1 cm. Print a sample at the real size before you order a batch."],
  ["Squeezing the quiet zone", "The empty border around the code is part of the code. Do not let text, borders, or photos crowd it."],
  ["Over-styling", "Every extra effect adds risk. Pick one or two ideas, such as a brand color and a logo, and stop there."],
  ["Skipping the call to action", "A bare square gives people no reason to scan. A short line such as \"Scan to see the menu\" tells them what they get."],
  ["Linking to the wrong page", "A beautiful code that opens a broken page is worse than a plain one. Open the link yourself before you design anything."],
];

const checklist = [
  "The destination opens correctly on a phone.",
  "The code is clearly darker or lighter than its background.",
  "The logo is small, and error correction is set to High.",
  "There is clear empty space around the code.",
  "The brand name and call to action are short and readable.",
  "You exported PNG for screens or SVG for print.",
  "You scanned the final file on at least two phones.",
  "You scanned a printed sample at the real size and distance.",
];

const whyWhyLong = [
  "Free to use, with unlimited QR codes and no payment wall.",
  "Full customization: templates, colors, gradients, dots, corner shapes, logo, brand text, and call to action.",
  "PNG and SVG export, so one design works on screens and in print.",
  "Brand presets, so your next code matches the last one.",
  "Click analytics for your links: devices, timestamps, geolocation, and graphs.",
  "Only a free sign-up is needed to open the QR studio.",
];

const faqs = [
  {
    question: "How do I create a customized QR code for free?",
    answer: "Sign in to WhyLong, create a short link for your destination, and open the QR studio. Pick a template, set your colors, dots, and corners, add your logo, brand name, and call to action, then download a PNG or SVG. It is free, with no payment step.",
  },
  {
    question: "Do I need an account to make a custom QR code?",
    answer: "Yes. You need a free WhyLong account to open the QR studio. You can shorten a link without an account, but QR design and downloads are inside the signed-in area.",
  },
  {
    question: "Can I add my logo to a QR code?",
    answer: "Yes. Upload a PNG, JPG, WebP, or SVG file up to 2 MB, then set its size between 12% and 28% of the code. Keep the logo small and leave error correction on High.",
  },
  {
    question: "Can I change the colors, dots, and corners?",
    answer: "Yes. You can set the QR color, background color, and corner color, switch on a two-color gradient, choose from six dot patterns, and style the corner frame and inner corner dot separately.",
  },
  {
    question: "Which error correction level should I use?",
    answer: "Use High (30%) whenever your code has a logo. Medium or Quartile can work for plain codes. Higher correction makes the pattern denser, so always scan-test the result.",
  },
  {
    question: "Should I download PNG or SVG?",
    answer: "Use PNG for websites, social posts, and slides. Use SVG for print, packaging, and signs because it stays sharp at any size. Both include your brand text and call to action.",
  },
  {
    question: "What size should I print my QR code?",
    answer: "Print it at least about 2 cm (0.8 in) wide, and larger if people will scan from a distance. A common rule of thumb is about 1 cm of code width for every 10 cm of scanning distance. Always test a printed sample first.",
  },
  {
    question: "Is there a limit on how many QR codes I can create?",
    answer: "No. WhyLong offers unlimited short links and unlimited QR codes, with no payment wall.",
  },
  {
    question: "Can I track how many people scan my QR code?",
    answer: "Your QR code opens your WhyLong short link, so every scan counts as a click on that link. For links you create while signed in, you can see devices, timestamps, geolocation, and graphs in your dashboard.",
  },
  {
    question: "Are customized QR codes safe to scan?",
    answer: "Design does not decide whether a destination is safe. A QR code can lead to a legitimate page or a harmful one. Check where a code leads when you can, and avoid entering sensitive information on pages you do not recognize.",
  },
];

const toc = [
  ["What is a customized QR code?", "#what-is-a-customized-qr-code"],
  ["Why customize?", "#why-customize"],
  ["Before you start", "#before-you-start"],
  ["Step-by-step guide", "#steps"],
  ["All customization options", "#customization-options"],
  ["The five templates", "#templates"],
  ["Colors and contrast", "#colors-and-contrast"],
  ["Adding a logo", "#logo"],
  ["Error correction", "#error-correction"],
  ["PNG vs SVG", "#png-vs-svg"],
  ["Printing your code", "#printing"],
  ["Use cases", "#use-cases"],
  ["Common mistakes", "#mistakes"],
  ["Short links and analytics", "#short-links-and-analytics"],
  ["Why WhyLong?", "#why-whylong"],
  ["FAQs", "#frequently-asked-questions"],
];

/* ------------------------------------------------------------------ */
/* Structured data                                                     */
/* ------------------------------------------------------------------ */

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${ARTICLE_URL}#article`,
    headline: article.title,
    description: article.description,
    url: ARTICLE_URL,
    image: OG_IMAGE,
    datePublished: `${article.published}T09:00:00+05:30`,
    dateModified: `${article.updated}T09:00:00+05:30`,
    author: { "@type": "Person", name: article.author },
    publisher: {
      "@type": "Organization",
      name: "WhyLong",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/WhyLong.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE_URL },
    articleSection: article.section,
    inLanguage: "en",
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to create a customized QR code",
    description: article.description,
    totalTime: "PT5M",
    tool: [{ "@type": "HowToTool", name: "WhyLong QR studio" }],
    step: howToSteps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      url: `${ARTICLE_URL}#step-${index + 1}`,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blogs` },
      { "@type": "ListItem", position: 3, name: "Customized QR code guide", item: ARTICLE_URL },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Small presentational helpers                                        */
/* ------------------------------------------------------------------ */

const H2 = ({ id, children }) => (
  <h2
    id={id}
    className="scroll-mt-24 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl"
  >
    {children}
  </h2>
);

const P = ({ children, className = "" }) => (
  <p className={`mt-4 leading-8 text-slate-600 ${className}`}>{children}</p>
);

const Callout = ({ tone = "tip", children }) => {
  const styles =
    tone === "good"
      ? "bg-emerald-50 text-emerald-900"
      : tone === "warn"
        ? "bg-amber-50 text-amber-900 border border-amber-200"
        : "bg-slate-100 text-slate-600";

  return (
    <p className={`mt-3 rounded-xl p-4 text-sm leading-6 ${styles}`}>
      {children}
    </p>
  );
};

const Bullet = ({ children }) => (
  <li className="flex items-start gap-3">
    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amber-600" aria-hidden="true" />
    <span className="leading-7 text-slate-600">{children}</span>
  </li>
);

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const CustomizedQRCodeBlog = () => {
  const alsoRead = blogPosts.find((post) => post.slug === "how-to-shorten-a-long-url");

  const moreArticles = blogPosts
    .filter((post) => post.slug !== article.slug)
    .slice(0, 5);

  return (
    <main className="min-h-screen bg-[#fcfcfb] text-slate-900">
      <Helmet>
        <title>{article.title}</title>
        <meta name="description" content={article.description} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content={article.author} />
        <link rel="canonical" href={ARTICLE_URL} />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="WhyLong" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:url" content={ARTICLE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="article:author" content={article.author} />
        <meta property="article:published_time" content={`${article.published}T09:00:00+05:30`} />
        <meta property="article:modified_time" content={`${article.updated}T09:00:00+05:30`} />
        <meta property="article:section" content={article.section} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.description} />
        <meta name="twitter:image" content={OG_IMAGE} />

        {schemas.map((schema) => (
          <script key={schema["@type"]} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      {/* Back Navigation */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
          <Link
            to={ROUTES.blogs}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-amber-700"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            All articles
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <header className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-yellow-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="transition hover:text-amber-700">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to={ROUTES.blogs} className="transition hover:text-amber-700">Blog</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-slate-700">QR Codes</li>
            </ol>
          </nav>

          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-800">
              QR Codes
            </span>
            <time dateTime={article.updated} className="text-sm text-slate-500">
              Updated October 29, 2026
            </time>
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            How to Create a Customized QR Code for Free:{" "}
            <span className="text-amber-600">
              Colors, Shapes, Logos and More
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            Want a QR code that looks like your brand instead of a plain
            black square? This guide shows you how to design one with
            WhyLong: templates, colors, dot and corner shapes, your logo,
            brand text, a call to action, and PNG or SVG downloads. It is
            free, and you only need to sign up.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-500">
            <span className="font-semibold text-slate-800">{article.author}</span>

            <span className="flex items-center gap-2">
              <Clock3 size={15} aria-hidden="true" />
              {article.readTime}
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} aria-hidden="true" />
              Step-by-step tutorial
            </span>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to={ROUTES.qr}
              className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-amber-300"
            >
              Create a Custom QR Code
              <ExternalLink size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-16">

          {/* Main Article */}
          <div className="min-w-0">

            {/* Quick answer */}
            <div className="mb-10 rounded-2xl border border-amber-200 bg-amber-50/70 p-5 sm:p-6">
              <p className="font-bold text-slate-900">
                In a hurry? Here is the quick answer.
              </p>

              <p className="mt-2 leading-7 text-slate-700">
                Sign in to the{" "}
                <Link to={ROUTES.qr} className={linkClass}>
                  WhyLong QR Code Generator
                </Link>
                , create a short link for your destination, and pick a
                template. Then set your colors, dot pattern, and corner
                shapes, add your logo, brand name, and call to action,
                and download the finished code as a PNG or SVG. Scan it
                on your phone before you share or print it.
              </p>
            </div>

            <div className="border border-black p-3 my-8">
              <article
                key="1"
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50"
              >
                <h2 className="text-xl md:text-2xl font-bold">
                  Also Read
                </h2>

                <h3 className="mt-6 text-xl font-bold leading-snug tracking-tight text-slate-950 transition group-hover:text-yellow-800">
                  <Link
                    to={`/blogs/whylong-vs-bitly`}
                    className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                  >
                    WhyLong vs Bitly: Which URL Shortener Should You Choose?
                  </Link>
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  Compare WhyLong and Bitly across link shortening, QR codes, analytics, usability, and pricing. Find the right tool for your needs.
                </p>

                <img src="https://mkt-bitly-media.qrcg.net/wp-content/uploads/2026/09/14150141/hero_digital_marketing_v6-1024x597.png" alt="" className="mt-4" />

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <Link
                    to={`/blogs/whylong-vs-bitly`}
                    aria-label={`Read WhyLong vs Bitly: Which URL Shortener Should You Choose?`}
                    className="group/link inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition hover:text-yellow-800"
                  >
                    Read article <ArrowIcon />
                  </Link>
                </div>
              </article>
            </div>

            {/* What is it */}
            <section className="mb-12" id="what-is-a-customized-qr-code">
              <H2>What Is a Customized QR Code?</H2>

              <P>
                A QR code is a square pattern that stores a small piece of
                data, usually a web address. A standard code is black
                squares on a white background. A customized QR code keeps
                the same data but changes how it looks: the colors, the
                shape of the dots and corners, a logo in the center, and
                text such as your brand name.
              </P>

              <P>
                The design is only a layer on top. A phone still needs to
                find the three large corner markers, read the pattern of
                dots, and see a clear empty border around the code. Good
                customization changes the style and keeps those three
                things intact. That is the idea behind everything in this
                guide.
              </P>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Standard code
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Black on white, no logo, no text. It scans well but
                    it says nothing about who made it or why you should
                    scan it.
                  </p>
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-800">
                    Customized code
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    Your colors, your pattern, your logo, and a short
                    call to action. It looks like part of your brand and
                    still scans reliably when designed with care.
                  </p>
                </div>
              </div>
            </section>

            {/* Why customize */}
            <section className="mb-12" id="why-customize">
              <H2>Why Customize Your QR Code?</H2>

              <P>
                A QR code often sits on something you spent time designing:
                a menu, a card, a pack, or a poster. A plain black square
                can look like an afterthought next to it. Here is what
                customizing gives you.
              </P>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  [Palette, "Brand recognition", "Your colors and logo make the code feel like part of your brand, so people trust it more."],
                  [Sparkles, "A clear reason to scan", "A short call to action such as \"Scan to see the menu\" tells people what happens next."],
                  [QrCode, "A better fit for your layout", "Match the code to your packaging, slides, or posters instead of fighting your own design."],
                  [ShieldCheck, "A more professional look", "Clean spacing, strong contrast, and a tidy logo show the same care as the rest of your material."],
                ].map(([Icon, title, text]) => (
                  <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5">
                    <Icon size={22} className="text-amber-600" aria-hidden="true" />
                    <h3 className="mt-3 font-bold text-slate-950">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Before you start */}
            <section className="mb-12" id="before-you-start">
              <H2>What You Need Before You Start</H2>

              <P>
                Gather these five things first. It takes a minute and
                saves you from redoing the design later.
              </P>

              <ul className="mt-5 space-y-3">
                <Bullet>
                  <strong className="text-slate-900">A free WhyLong account.</strong>{" "}
                  The QR studio is inside the signed-in area. There is no
                  payment step.
                </Bullet>
                <Bullet>
                  <strong className="text-slate-900">A destination you have tested.</strong>{" "}
                  Open the page on your phone and make sure it works.
                </Bullet>
                <Bullet>
                  <strong className="text-slate-900">Your logo file.</strong>{" "}
                  PNG, JPG, WebP, or SVG up to 2 MB. A simple, roughly
                  square logo with a transparent background works best.
                </Bullet>
                <Bullet>
                  <strong className="text-slate-900">Your brand colors.</strong>{" "}
                  Have the color codes handy, and know which one is
                  darkest.
                </Bullet>
                <Bullet>
                  <strong className="text-slate-900">Two short lines of text.</strong>{" "}
                  A brand name (up to 40 characters) and a call to action
                  (up to 60 characters).
                </Bullet>
              </ul>
            </section>

            {/* Steps */}
            <section className="mb-12" id="steps">
              <H2>How to Create a Customized QR Code in 8 Steps</H2>

              <P>
                You do not need design skills. Follow these steps in the
                WhyLong QR studio, and check the live preview as you go.
              </P>

              <P>Don't have a short link yet? No worries, <strong><Link to={"/products/url-shortener"}>Create from WhyLong's URL Shortener</Link></strong></P>

              <div className="mt-8 space-y-7">
                {howToSteps.map((step, index) => (
                  <section
                    key={step.name}
                    id={`step-${index + 1}`}
                    className="scroll-mt-24"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-400 font-bold text-slate-950">
                        {index + 1}
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-bold text-slate-950">
                          {step.name}
                        </h3>

                        <p className="mt-2 leading-7 text-slate-600">
                          {step.text}
                        </p>

                        {index === 0 && (
                          <Link
                            to={ROUTES.qr}
                            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950"
                          >
                            Open the QR Code Generator
                            <ExternalLink size={14} aria-hidden="true" />
                          </Link>
                        )}

                        {index === 1 && (
                          <Callout>
                            <strong className="text-slate-800">Tip:</strong>{" "}
                            Create the link while signed in so
                            it shows up in your dashboard with
                            analytics. New to short links? Read{" "}
                            <Link to={ROUTES.shortenGuide} className={linkClass}>
                              how to shorten a long URL
                            </Link>
                            .
                          </Callout>
                        )}

                        {index === 3 && (
                          <Callout>
                            <strong className="text-slate-800">Tip:</strong>{" "}
                            Not sure which one to pick? Choose
                            Classic for anything printed, and a
                            gradient template for social posts
                            and slides.
                          </Callout>
                        )}

                        {index === 5 && (
                          <Callout>
                            <strong className="text-slate-800">Tip:</strong>{" "}
                            Square dots are the most
                            conservative choice. Rounded styles
                            look softer. Scan-test after you
                            change them.
                          </Callout>
                        )}

                        {index === 6 && (
                          <Callout tone="warn">
                            Keep the logo small. A modest logo
                            protects the data in the code, and a
                            short call to action is easier to read
                            than a long sentence.
                          </Callout>
                        )}

                        {index === 7 && (
                          <Callout tone="good">
                            <CheckCircle2 size={17} className="mr-2 inline" aria-hidden="true" />
                            Scan the exported file, not just the
                            preview. If you plan to print, scan a
                            printed sample too.
                          </Callout>
                        )}
                      </div>
                    </div>
                  </section>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-slate-950 p-6 text-white sm:p-7">
                <p className="text-sm font-semibold text-amber-300">
                  Ready to design your first code?
                </p>

                <h3 className="mt-2 text-xl font-bold">
                  Build your branded QR code with WhyLong
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Templates, logos, colors, shapes, and PNG or SVG export.
                  Free, with unlimited QR codes.
                </p>

                <Link
                  to={ROUTES.qr}
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-amber-400 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-300"
                >
                  Try the QR Code Generator
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </section>

            {/* Customization options */}
            <section className="mb-12" id="customization-options">
              <H2>Every Customization Option, Explained</H2>

              <P>
                Here is the full list of controls in the WhyLong QR studio,
                what each one offers, and what it is good for. You do not
                need to use all of them. A single brand color and a logo
                already make a big difference.
              </P>

              <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                <table className="w-full min-w-[640px] text-left text-sm">
                  <caption className="sr-only">
                    WhyLong QR studio customization options
                  </caption>

                  <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                    <tr>
                      <th scope="col" className="px-5 py-3 font-semibold">Control</th>
                      <th scope="col" className="px-5 py-3 font-semibold">Options</th>
                      <th scope="col" className="px-5 py-3 font-semibold">Good for</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {controls.map(([control, options, goodFor]) => (
                      <tr key={control}>
                        <th scope="row" className="px-5 py-4 font-bold text-slate-950">
                          {control}
                        </th>
                        <td className="px-5 py-4 text-slate-600">{options}</td>
                        <td className="px-5 py-4 text-slate-500">{goodFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Templates */}
            <section className="mb-12" id="templates">
              <H2>The Five Templates and When to Use Each</H2>

              <P>
                Templates are the fastest way to a good-looking code. Each
                one sets the colors, the gradient, the dot pattern, and the
                corner styles together. Pick the closest match to your
                brand, then adjust.
              </P>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {templates.map((template) => (
                  <div
                    key={template.name}
                    className="rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="h-6 w-6 shrink-0 rounded-full border border-black/10"
                        style={{ background: template.swatch }}
                      />
                      <h3 className="font-bold text-slate-950">{template.name}</h3>
                    </div>

                    <p className="mt-3 text-sm font-semibold text-slate-700">
                      {template.look}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      <strong className="text-slate-800">Best for:</strong>{" "}
                      {template.bestFor}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {template.note}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Colors */}
            <section className="mb-12" id="colors-and-contrast">
              <H2>Choosing Colors That Still Scan</H2>

              <P>
                Color is the most visible part of a custom QR code, and the
                easiest place to go wrong. A scanner does not see your brand.
                It sees light modules and dark modules, and it needs to tell
                them apart quickly.
              </P>

              <ul className="mt-5 space-y-3">
                <Bullet>
                  <strong className="text-slate-900">Make the difference obvious.</strong>{" "}
                  The code should be clearly darker than the background, or
                  clearly lighter. Mid-tones against mid-tones are risky.
                </Bullet>
                <Bullet>
                  <strong className="text-slate-900">Start with dark on light.</strong>{" "}
                  It is the most widely supported pairing, especially on
                  paper.
                </Bullet>
                <Bullet>
                  <strong className="text-slate-900">Use gradients carefully.</strong>{" "}
                  Both ends of a gradient must stay strong against the
                  background, not just the darker end.
                </Bullet>
                <Bullet>
                  <strong className="text-slate-900">Use the corner color for accents.</strong>{" "}
                  The corner (eye) color is separate, so you can add a brand
                  accent without touching the data dots.
                </Bullet>
                <Bullet>
                  <strong className="text-slate-900">Be careful with light-on-dark.</strong>{" "}
                  Some scanner apps read inverted codes less reliably, so
                  test with more than one phone.
                </Bullet>
                <Bullet>
                  <strong className="text-slate-900">Skip busy backgrounds.</strong>{" "}
                  A photo or pattern behind the code makes it harder to read.
                </Bullet>
              </ul>
            </section>

            {/* Logo */}
            <section className="mb-12" id="logo">
              <H2>How to Add a Logo to Your QR Code</H2>

              <P>
                A logo in the center is the quickest way to make a code
                feel like yours. It works because QR codes include built-in
                error correction, which lets a scanner recover data even
                when part of the pattern is covered. The studio also clears
                the dots directly behind the logo so the mark stays crisp.
              </P>

              <P>
                That recovery has limits, so how you add the logo matters.
              </P>

              <ul className="mt-5 space-y-3">
                <Bullet>
                  <strong className="text-slate-900">Use a supported file.</strong>{" "}
                  PNG, JPG, WebP, or SVG, up to 2 MB.
                </Bullet>
                <Bullet>
                  <strong className="text-slate-900">Keep it simple and roughly square.</strong>{" "}
                  Fine detail and thin lines disappear at small sizes.
                </Bullet>
                <Bullet>
                  <strong className="text-slate-900">Keep it small.</strong>{" "}
                  The size slider runs from 12% to 28%. Staying toward the
                  lower half gives the scanner more data to read.
                </Bullet>
                <Bullet>
                  <strong className="text-slate-900">Set error correction to High.</strong>{" "}
                  It recovers the most data, which compensates for the area
                  the logo covers.
                </Bullet>
                <Bullet>
                  <strong className="text-slate-900">Use a transparent background.</strong>{" "}
                  A logo on a solid box can look heavier than it is.
                </Bullet>
              </ul>
            </section>

            {/* Error correction */}
            <section className="mb-12" id="error-correction">
              <H2>Error Correction: How Much Damage Can a Code Survive?</H2>

              <P>
                Every QR code carries extra data that lets a scanner rebuild
                missing parts. You choose how much extra data to include.
                More correction means a code that survives scuffs and logos
                better, but the pattern becomes denser, which can make
                modules smaller.
              </P>

              <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                <table className="w-full min-w-[560px] text-left text-sm">
                  <caption className="sr-only">QR code error correction levels</caption>

                  <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                    <tr>
                      <th scope="col" className="px-5 py-3 font-semibold">Level</th>
                      <th scope="col" className="px-5 py-3 font-semibold">Can recover</th>
                      <th scope="col" className="px-5 py-3 font-semibold">Good for</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {errorLevels.map(([level, recovery, goodFor]) => (
                      <tr key={level}>
                        <th scope="row" className="px-5 py-4 font-bold text-slate-950">{level}</th>
                        <td className="px-5 py-4 text-slate-600">{recovery}</td>
                        <td className="px-5 py-4 text-slate-500">{goodFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <Callout>
                <strong className="text-slate-800">Rule of thumb:</strong>{" "}
                use High when there is a logo, and always scan-test the
                result. WhyLong sets High by default.
              </Callout>
            </section>

            {/* PNG vs SVG */}
            <section className="mb-12" id="png-vs-svg">
              <H2>PNG vs SVG: Which File Should You Download?</H2>

              <P>
                WhyLong exports your finished code in two formats. Both
                include your brand name and call to action under the code.
              </P>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-700">PNG</p>
                  <h3 className="mt-2 text-lg font-bold text-slate-950">For screens</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    A raster image that drops easily into websites, social
                    posts, slides, and email. Choose 256 px for small
                    placements, 512 px for general use, and 1024 px when
                    the code will be enlarged.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-700">SVG</p>
                  <h3 className="mt-2 text-lg font-bold text-slate-950">For print</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    A vector file that scales to any size without turning
                    blurry. Use it for packaging, posters, signs, stickers,
                    and business cards.
                  </p>
                </div>
              </div>

              <P>
                If you are not sure, download both. A PNG for your website
                and an SVG for your printer covers almost every case.
              </P>
            </section>

            {/* Printing */}
            <section className="mb-12" id="printing">
              <H2>How to Print a QR Code Properly</H2>

              <P>
                A code that scans perfectly on your laptop can fail on a
                flyer. Printing adds size limits, glare, and distance. Plan
                for those before you order.
              </P>

              <ul className="mt-5 space-y-3">
                <Bullet>
                  <strong className="text-slate-900">Size:</strong>{" "}
                  print at least about 2 cm (0.8 in) wide. Go larger when
                  people will scan from farther away.
                </Bullet>
                <Bullet>
                  <strong className="text-slate-900">Distance:</strong>{" "}
                  a common rule of thumb is about 1 cm of code width for
                  every 10 cm of scanning distance.
                </Bullet>
                <Bullet>
                  <strong className="text-slate-900">Quiet zone:</strong>{" "}
                  leave empty space around the code. Do not let borders or
                  text touch it.
                </Bullet>
                <Bullet>
                  <strong className="text-slate-900">Surface:</strong>{" "}
                  glossy or curved surfaces cause glare and distortion.
                  Matte, flat areas are safer.
                </Bullet>
                <Bullet>
                  <strong className="text-slate-900">File:</strong>{" "}
                  send the SVG to your printer so the edges stay sharp.
                </Bullet>
                <Bullet>
                  <strong className="text-slate-900">Proof:</strong>{" "}
                  print one sample at the final size and scan it on more
                  than one phone before the full run.
                </Bullet>
              </ul>
            </section>

            {/* Use cases */}
            <section className="mb-12" id="use-cases">
              <H2>Where to Use Your Customized QR Code</H2>

              <P>
                The same design skills apply everywhere, but each place has
                its own small rules. Here are six common uses.
              </P>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {useCases.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                    <h3 className="font-bold text-slate-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>

                    {item.link && (
                      <Link
                        to={item.link.to}
                        className="group mt-3 inline-flex items-center gap-2 text-sm font-semibold text-amber-800 hover:text-amber-950"
                      >
                        {item.link.label} <ArrowIcon />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Mistakes */}
            <section className="mb-12" id="mistakes">
              <H2>8 Common QR Code Design Mistakes</H2>

              <P>
                Most failed QR codes fail for the same few reasons. Check
                your design against this list before you share it.
              </P>

              <div className="mt-6 space-y-5">
                {mistakes.map(([title, text], index) => (
                  <div key={title}>
                    <h3 className="font-bold text-slate-950">
                      {index + 1}. {title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-600">{text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
                <p className="font-bold text-slate-950">Final checklist before you share or print</p>

                <ul className="mt-4 space-y-3">
                  {checklist.map((item) => (
                    <Bullet key={item}>{item}</Bullet>
                  ))}
                </ul>
              </div>
            </section>

            {/* Short links and analytics */}
            <section className="mb-12" id="short-links-and-analytics">
              <H2>Why Your QR Code Points to a Short Link</H2>

              <P>
                In WhyLong, a QR code is built from one of your short links,
                not from the long original address. That has two practical
                benefits.
              </P>

              <P>
                First, a shorter address means less data to store, which
                gives a simpler pattern with bigger modules. Simpler
                patterns are easier for phones to read, especially at small
                sizes. Second, every scan opens your short link, so it
                counts as a click on that link.
              </P>

              <P>
                For links you create while signed in, the dashboard shows
                devices, timestamps, geolocation, and graphs. Read more on
                the{" "}
                <Link to={ROUTES.analytics} className={linkClass}>
                  link analytics page
                </Link>
                .
              </P>

              <Callout>
                <strong className="text-slate-800">Tip:</strong> if you want
                to measure a printed code separately from the same link
                shared online, create a separate short link just for the QR
                code. Then its clicks stay in their own row.
              </Callout>
            </section>

            {/* Why WhyLong */}
            <section className="mb-12" id="why-whylong">
              <H2>Why Use WhyLong for Custom QR Codes?</H2>

              <P>
                WhyLong puts short links, QR codes, and analytics in one
                free workspace, so a code you design stays connected to a
                link you can manage and measure.
              </P>

              <ul className="mt-5 space-y-3">
                {whyWhyLong.map((feature) => (
                  <Bullet key={feature}>{feature}</Bullet>
                ))}
              </ul>

              <P>
                Ready to try it? Open the{" "}
                <Link to={ROUTES.qr} className={linkClass}>
                  WhyLong QR Code Generator
                </Link>
                , or start with a{" "}
                <Link to={ROUTES.shortener} className={linkClass}>
                  short link
                </Link>
                .
              </P>
            </section>

            {/* FAQ */}
            <section id="frequently-asked-questions" className="scroll-mt-24">
              <H2>Frequently Asked Questions</H2>

              <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900 marker:hidden">
                      <h3 className="text-base font-semibold">{faq.question}</h3>

                      <span
                        aria-hidden="true"
                        className="text-xl text-amber-700 transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>

                    <p className="mt-3 pr-5 leading-7 text-slate-600">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section className="mt-12 rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-wider text-amber-800">
                Make every scan feel like your brand
              </p>

              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                Ready to create your customized QR code?
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Pick a template, add your logo, and download a PNG or SVG in
                minutes. It is free, with unlimited QR codes and no payment
                wall.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to={ROUTES.qr}
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-amber-300"
                >
                  Create a QR Code
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>

                <Link
                  to={ROUTES.blogs}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition hover:border-amber-400"
                >
                  Explore More Guides
                </Link>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-8 lg:self-start">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                In this guide
              </p>

              <nav aria-label="Table of contents" className="mt-4 space-y-3 text-sm">
                {toc.map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="block leading-6 text-slate-600 transition hover:text-amber-800"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="rounded-2xl bg-slate-950 p-5 text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400 text-slate-950">
                <QrCode size={21} aria-hidden="true" />
              </div>

              <p className="mt-4 text-lg font-bold">Design a QR code for free</p>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                Logos, colors, shapes, and PNG or SVG export. A free
                account is all you need.
              </p>

              <Link
                to={"/"}
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-amber-300 hover:text-amber-200"
              >
                Try WhyLong
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </article>

      {/* Related Guides */}
      <section aria-labelledby="related-heading" className="border-t border-slate-200 bg-gray-950">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-400">
            Explore WhyLong
          </p>

          <h2 id="related-heading" className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            More ways to use QR codes
          </h2>

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {[
              [QrCode, "QR Code Generator", "Design customizable QR codes for your links.", "Explore QR codes", ROUTES.qr],
              [Zap, "Instagram QR Code", "Send people to your profile with one scan.", "Read the guide", ROUTES.instagram],
              [Sparkles, "GitHub QR Code", "Share your profile or a repository from paper.", "Read the guide", ROUTES.github],
            ].map(([Icon, title, text, cta, to]) => (
              <Link
                key={to}
                to={to}
                className="group rounded-2xl border border-slate-700 p-5 transition hover:border-amber-400 hover:bg-slate-900"
              >
                <Icon className="text-amber-400" size={22} aria-hidden="true" />

                <h3 className="mt-4 font-bold text-white">{title}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-300">
                  {cta}
                  <ArrowRight size={15} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* More Articles */}
      <section
        id="blog-articles"
        aria-labelledby="more-articles-heading"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 py-14 sm:px-8 sm:py-16 lg:px-12 border border-black mb-6 mt-6r"
      >
        <div className="border-b border-slate-200 pb-7">
          <h2 id="more-articles-heading" className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
            More Articles
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Explore more guides on URL shortening, QR codes, link management,
            and analytics.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {moreArticles.map((post, index) => (
            <article
              key={post.slug}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-xl hover:shadow-slate-200/50 sm:p-7"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-yellow-50 px-3 py-1.5 text-xs font-bold text-yellow-800">
                  {post.category}
                </span>

                <span className="text-xs font-semibold tracking-widest text-slate-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold leading-snug tracking-tight text-slate-950 transition group-hover:text-yellow-800">
                <Link
                  to={`/blogs/${post.slug}`}
                  className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                >
                  {post.title}
                </Link>
              </h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                {post.excerpt}
              </p>

              {post.img && (
                <img
                  src={post.img}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="mt-5 h-48 w-full rounded-xl object-cover"
                />
              )}

              <div className="mt-6 border-t border-slate-100 pt-5">
                <Link
                  to={`/blogs/${post.slug}`}
                  aria-label={`Read ${post.title}`}
                  className="group/link inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition hover:text-yellow-800"
                >
                  Read article <ArrowIcon />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to={ROUTES.blogs}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-yellow-400 hover:bg-yellow-50"
          >
            View all articles <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default CustomizedQRCodeBlog;