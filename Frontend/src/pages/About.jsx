import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
    ArrowRight,
    BarChart3,
    Check,
    Infinity as InfinityIcon,
    Link2,
    QrCode
} from "lucide-react";

// ---------------------------------------------------------------------------
// Everything for the About page lives in this one file:
// SEO meta, structured data (JSON-LD), copy, and the component.
// Facts used (keep in sync with the product):
//  - URL shortening: no account needed (no analytics for those links)
//  - QR generator: free account; logos, text, colors, dots, shapes, PNG + SVG
//  - Link analytics: devices, CTR, graphs, timestamps, geolocation (free account)
//  - Unlimited links and QR codes, no payment wall
// ---------------------------------------------------------------------------

const SITE_URL = "https://whylong.vercel.app";

// Route of your QR code generator page. Change this if your route differs.
const QR_PATH = "/products/qr-code-generator";

const ABOUT_PATH = "/about";
const ABOUT_URL = `${SITE_URL}${ABOUT_PATH}`;

const META = {
    title: "About WhyLong: Free URL Shortener, QR Codes & Analytics",
    description:
        "WhyLong is a free URL shortener and QR code generator. Shorten links without signing up, build branded QR codes, and see detailed click analytics.",
    ogDescription:
        "Free URL shortener, customizable QR code generator, and deep link analytics. Unlimited links and QR codes with no payment wall."
};

const HERO = {
    eyebrow: "About WhyLong",
    h1Main: "Free URL shortener, QR code generator, and link analytics",
    h1Sub: "built to make the web feel simpler.",
    intro:
        "WhyLong is a free link management platform. Shorten a link without signing up. Create a free account to design branded QR codes and see how your links perform. There are no limits on links or QR codes, and no payment wall.",
    badge: "Unlimited short links. Unlimited QR codes. Free.",
    chips: [
        "Shorten links without signing up",
        "Free account for QR codes and analytics",
        "Unlimited links and QR codes"
    ]
};

const FEATURES = {
    eyebrow: "What you get",
    title: "Everything WhyLong offers",
    intro: "Four core tools, all free. Here is what each one does and what it needs from you.",
    items: [
        {
            title: "URL shortening, no sign-up needed",
            tag: "No account",
            text: "Paste a long link and get a short one in seconds. You do not need an account. Links made without an account do not include analytics."
        },
        {
            title: "QR code generator with full customization",
            tag: "Free account",
            text: "Build your brand with your logo and text. Choose colors, dot patterns, and corner shapes. Download your QR code as a PNG or an SVG."
        },
        {
            title: "Deep link analytics",
            tag: "Free account",
            text: "See the devices your visitors use, when they click, and where they are. Read graphs, timestamps, geolocation, and click-through rate for each link."
        },
        {
            title: "Unlimited links and QR codes",
            tag: "Free",
            text: "Create as many short links and QR codes as you need. There is no payment wall and no hidden paid tier for the core tools."
        }
    ]
};

const ACCOUNT_TABLE = {
    title: "WhyLong free account includes:",
    intro: "You can try WhyLong right away. A free account unlocks the rest.",
    rows: [
        { feature: "URL shortening", need: "No account", cost: "Free" },
        { feature: "QR code generator (logos, text, colors, dots, shapes, PNG and SVG)", need: "Free account", cost: "Free" },
        { feature: "Link analytics (devices, CTR, graphs, timestamps, geolocation)", need: "Free account", cost: "Free" },
        { feature: "Link dashboard to manage your links", need: "Free account", cost: "Free" },
        { feature: "Unlimited links and QR codes", need: "Free account for QR codes", cost: "Free" }
    ]
};

const INTRO = {
    eyebrow: "What is WhyLong?",
    title: "Your Link Management System.",
    paras: [
        "WhyLong is a free link management platform. It makes working with URLs faster, simpler, and more organized.",
        "Create short links, design branded QR codes, and read detailed click analytics from one personal workspace. You can start shortening without an account, and there is no payment wall for the tools you need to share smarter."
    ]
};

const QR_SECTION = {
    eyebrow: "QR code generator",
    title1: "Your links can go",
    title2: "beyond the browser.",
    paras: [
        "Turn your links into customizable QR codes for posters, packaging, presentations, and business cards. Add your logo and brand text. Choose colors, dot patterns, and corner shapes. Then export your code as a PNG or an SVG.",
        "All you need is a free account. QR codes are unlimited, with no separate fee."
    ],
    features: [
        "Logo upload",
        "Brand text",
        "Custom colors",
        "Dot patterns",
        "Corner shapes",
        "Error correction",
        "PNG and SVG export"
    ],
    cta: "Create a branded QR code",
    note: "One WhyLong link can now work both online and offline."
};

const ANALYTICS = {
    eyebrow: "Link analytics",
    title1: "Know what happens",
    title2: "after the click.",
    intro: "Create your links while signed in, and WhyLong shows you how people use them.",
    items: [
        { title: "Devices", text: "See which devices, operating systems, and browsers your visitors use." },
        { title: "Click-through rate", text: "Track click-through rate to see which links perform best." },
        { title: "Graphs", text: "Read trends at a glance with clear charts." },
        { title: "Timestamps", text: "See exactly when each click happened." },
        { title: "Geolocation", text: "Find out which countries and regions your clicks come from." }
    ],
    note: "Links created without an account do not include analytics."
};

const WHY = {
    eyebrow: "Why we built it",
    title1: "Small problem.",
    title2: "Bigger possibilities.",
    intro: "URLs are everywhere, but managing them does not have to be messy.",
    cards: [
        {
            title: "Simplicity first",
            text: "Useful software should not make people learn the software before they can use it. WhyLong keeps the experience straightforward."
        },
        {
            title: "Built to grow",
            text: "Shortening is only the beginning. The platform is designed around the idea of managing links as a workflow."
        },
        {
            title: "Technology with purpose",
            text: "Every technical decision should improve reliability, usability, performance, or the experience of the person using it."
        }
    ]
};

const MAKER = {
    eyebrow: "The maker",
    title1: "Built by a developer who likes",
    title2: " building things.",
    name: "Kartikeya Mishra",
    role: "Full-stack developer & technology enthusiast",
    paras: [
        "I am Kartikeya Mishra, a student at Hewett Polytechnic and the developer behind WhyLong.",
        "I enjoy understanding how software works beyond writing code. That means designing interfaces, building APIs, working with databases, and handling deployment and the systems that connect everything together.",
        "WhyLong brings product development and engineering together. The goal is a useful, reliable link management platform that makes everyday sharing easier, with its core tools free for everyone."
    ],
    skills: [
        "Full-stack Development",
        "Backend Development",
        "DevOps",
        "System Design",
        "REST APIs",
        "Databases",
        "Git & GitHub",
        "Cloud & Deployment"
    ],
    links: [
        { name: "GitHub", href: "https://github.com/devKartikeya" },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/kartikeya-mishra-8199973a9" },
        { name: "DEV", href: "https://dev.to/devKartikeya" },
        { name: "Reddit", href: "https://reddit.com/user/devKartikeya" },
        { name: "Instagram", href: "https://instagram.com/devKartikeya" }
    ]
};

const ENGINEERING = {
    eyebrow: "Behind WhyLong",
    title1: "Engineering is part of",
    title2: "the product.",
    intro:
        "WhyLong is a full-stack application, built with care for both the user experience and the systems behind it.",
    cards: [
        {
            title: "Frontend",
            description: "A responsive interface focused on clarity, accessibility, and a smooth experience.",
            items: ["React", "Vite", "Tailwind CSS"]
        },
        {
            title: "Backend",
            description: "An API-driven backend for authentication, links, users, and application logic.",
            items: ["Node.js", "Express", "REST APIs", "JWT authentication"]
        },
        {
            title: "Data and speed",
            description: "Durable storage with a fast caching layer, so redirects stay quick.",
            items: ["MongoDB", "Redis caching", "Atomic click counters"]
        },
        {
            title: "Reliability and delivery",
            description: "Background jobs, automated tests, and containers that make the app easier to run and change.",
            items: ["RabbitMQ workers", "Load-balanced instances", "Jest tests", "Docker and GitHub Actions CI"]
        }
    ]
};

const VALUES = {
    eyebrow: "Our approach",
    title1: "Build useful.",
    title2: "Keep improving.",
    items: [
        {
            title: "Start with the user",
            text: "Technology matters, but the person using the product matters more."
        },
        {
            title: "Prefer clarity over complexity",
            text: "Good engineering handles complexity without passing it on to the user."
        },
        {
            title: "Keep learning",
            text: "WhyLong is also an engineering journey: learning, experimenting, and improving the systems behind the product."
        }
    ]
};

const VISION = {
    eyebrow: "What is next",
    title1: "WhyLong is just",
    title2: " getting started.",
    text: "WhyLong is a growing workspace for short links, customizable QR codes, and useful click insights. Start with a free account and explore the core features without a subscription fee.",
    tagline: "Unlimited short links. Unlimited QR codes. One free workspace.",
    cta: "Get started, it is free"
};

const FAQS_TITLE = "WhyLong FAQ";

const FAQS = [
    {
        question: "What is WhyLong?",
        answer: "WhyLong is a free link management platform allowing you to shorten links and generate customizable qr codes at zero cost with simplicity without any jargon."
    },
    {
        question: "Is WhyLong really free?",
        answer: "Yes. WhyLong is actually free. The core features like url shortening, qr generation and analysis are free to use without any hidden payment walls. Create am account to get started."
    },
    {
        question: "Do I need an account to shorten a URL?",
        answer: "No. You can shorten a link without signing up. Links made without an account do not include analytics. Sign in to track clicks and manage your links."
    },
    {
        question: "Do I need an account to make a QR code?",
        answer: "Yes. You need a free account to open the QR studio. There is no charge."
    },
    {
        question: "How can I customize my QR code?",
        answer: "Add your logo and brand text. Choose colors, dot patterns, and corner shapes. Download the finished code as a PNG or an SVG."
    },
    {
        question: "What analytics does WhyLong show?",
        answer: "For links you create while signed in, you can see devices, click-through rate, graphs, timestamps, and geolocation."
    },
    {
        question: "Is there a limit on links or QR codes?",
        answer: "No. You can create unlimited short links and unlimited QR codes."
    },
    {
        question: "Who made WhyLong?",
        answer: "WhyLong is built by Kartikeya Mishra, a software developer and a system-design engineer based in Uttar Pradesh, India."
    }
];

const buildAboutSchemas = () => [
    {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: META.title,
        url: ABOUT_URL,
        description: META.description,
        mainEntity: {
            "@type": "Organization",
            name: "WhyLong",
            url: `${SITE_URL}/`,
            description:
                "Free URL shortener, QR code generator, and link analytics platform.",
            founder: {
                "@type": "Person",
                name: MAKER.name,
                jobTitle: "Full-stack developer",
                sameAs: MAKER.links.map((link) => link.href)
            }
        }
    },
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "About", item: ABOUT_URL }
        ]
    },
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer }
        }))
    }
];

const OG_IMAGE = `${SITE_URL}/og-image.png`;
const FEATURE_ICONS = [Link2, QrCode, BarChart3, InfinityIcon];

const Eyebrow = ({ children, light = false }) => (
    <p
        className={`text-sm font-bold uppercase tracking-[0.18em] ${light ? "text-yellow-400" : "text-yellow-600"
            }`}
    >
        {children}
    </p>
);

const CheckBadge = () => (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-400">
        <Check aria-hidden="true" className="h-3.5 w-3.5 text-gray-950" />
    </span>
);

const About = () => {
    const navigate = useNavigate();
    return (
        <main className="min-h-screen bg-white text-gray-950">
            <Helmet>
                <title>{META.title}</title>
                <meta name="description" content={META.description} />
                <meta
                    name="robots"
                    content="index, follow, max-image-preview:large"
                />
                <link rel="canonical" href={ABOUT_URL} />

                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="WhyLong" />
                <meta property="og:title" content={META.title} />
                <meta property="og:description" content={META.ogDescription} />
                <meta property="og:url" content={ABOUT_URL} />
                <meta property="og:image" content={OG_IMAGE} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={META.title} />
                <meta name="twitter:description" content={META.ogDescription} />
                <meta name="twitter:image" content={OG_IMAGE} />

                {buildAboutSchemas().map((schema) => (
                    <script key={schema["@type"]} type="application/ld+json">
                        {JSON.stringify(schema)}
                    </script>
                ))}
            </Helmet>

            {/* ================= HERO ================= */}
            <section
                aria-labelledby="about-heading"
                className="relative overflow-hidden border-b border-gray-100 bg-gray-950"
            >
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-48 -top-48 h-[32rem] w-[32rem] rounded-full bg-yellow-100/70 blur-3xl"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-yellow-50 blur-3xl"
                />

                <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-8 lg:pb-32 lg:pt-40">
                    <div className="max-w-4xl">
                        <nav aria-label="Breadcrumb" className="mb-8">
                            <ol className="flex items-center gap-2 text-xs text-gray-500">
                                <li>
                                    <Link to="/" className="hover:text-gray-950">
                                        Home
                                    </Link>
                                </li>
                                <li aria-hidden="true">/</li>
                                <li aria-current="page" className="font-medium text-gray-950">
                                    About
                                </li>
                            </ol>
                        </nav>

                        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-3.5 py-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                            <span className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-700">
                                {HERO.eyebrow}
                            </span>
                        </div>

                        <h1
                            id="about-heading"
                            className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
                        >
                            {HERO.h1Main}{" "}
                            <span className="text-gray-600">{HERO.h1Sub}</span>
                        </h1>

                        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-500">
                            {HERO.intro}
                        </p>

                        <ul className="mt-6 flex flex-wrap gap-2">
                            {HERO.chips.map((chip) => (
                                <li
                                    key={chip}
                                    className="rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-xs font-semibold text-yellow-800"
                                >
                                    {chip}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10 flex flex-wrap gap-3">
                            <Link
                                to="/"
                                className="group inline-flex items-center gap-2 rounded-xl bg-gray-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-gray-800 active:scale-[0.98]"
                            >
                                Shorten a link free
                                <ArrowRight
                                    aria-hidden="true"
                                    size={16}
                                    className="transition-transform group-hover:translate-x-0.5"
                                />
                            </Link>

                            <Link
                                to={QR_PATH}
                                className="rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50"
                            >
                                Create a branded QR code
                            </Link>

                            <a
                                href="#maker"
                                className="rounded-xl px-4 py-3.5 text-sm font-semibold text-gray-500 transition-colors hover:text-gray-950"
                            >
                                Meet the maker
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= WHAT YOU GET ================= */}
            <section
                id="what-you-get"
                aria-labelledby="what-you-get-heading"
                className="border-b border-gray-100 bg-white py-12"
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <Eyebrow>{FEATURES.eyebrow}</Eyebrow>

                        <h2
                            id="what-you-get-heading"
                            className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
                        >
                            {FEATURES.title}
                        </h2>

                        <p className="mt-5 text-base leading-7 text-gray-500">
                            {FEATURES.intro}
                        </p>
                    </div>

                    <div className="mt-14 grid gap-5 md:grid-cols-2">
                        {FEATURES.items.map((item, index) => {
                            const Icon = FEATURE_ICONS[index];

                            return (
                                <article
                                    key={item.title}
                                    className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-50 text-yellow-600 transition-all group-hover:bg-yellow-400 group-hover:text-gray-950">
                                            <Icon aria-hidden="true" size={20} />
                                        </span>

                                        <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-gray-500">
                                            {item.tag}
                                        </span>
                                    </div>

                                    <h3 className="mt-7 text-lg font-bold text-gray-950">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-gray-500">
                                        {item.text}
                                    </p>
                                </article>
                            );
                        })}
                    </div>

                    {/* Account table */}
                    <div className="mt-20">
                        <h3 className="text-2xl font-bold tracking-tight">
                            {ACCOUNT_TABLE.title}
                        </h3>

                        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500">
                            {ACCOUNT_TABLE.intro}
                        </p>

                        <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200">
                            <table className="w-full min-w-[620px] text-left text-sm">
                                <caption className="sr-only">
                                    WhyLong features, account requirements, and cost
                                </caption>

                                <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
                                    <tr>
                                        <th scope="col" className="px-5 py-3 font-semibold">Feature</th>
                                        <th scope="col" className="px-5 py-3 font-semibold">What you need</th>
                                        <th scope="col" className="px-5 py-3 font-semibold">Cost</th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-100">
                                    {ACCOUNT_TABLE.rows.map((row) => (
                                        <tr key={row.feature}>
                                            <th scope="row" className="px-5 py-4 font-semibold text-gray-950">
                                                {row.feature}
                                            </th>
                                            <td className="px-5 py-4 text-gray-600">{row.need}</td>
                                            <td className="px-5 py-4 font-semibold text-gray-950">{row.cost}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= INTRO ================= */}
            <section
                aria-labelledby="intro-heading"
                className="border-b border-gray-100 bg-gray-50 py-12"
            >
                <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
                    <div>
                        <Eyebrow>{INTRO.eyebrow}</Eyebrow>

                        <h2
                            id="intro-heading"
                            className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
                        >
                            {INTRO.title}
                        </h2>

                        {INTRO.paras.map((para, index) => (
                            <p
                                key={para}
                                className={`max-w-xl text-base leading-7 text-gray-500 ${index === 0 ? "mt-6" : "mt-4"
                                    }`}
                            >
                                {para}
                            </p>
                        ))}
                    </div>

                    {/* Decorative workspace card */}
                    <div aria-hidden="true" className="relative">
                        <div className="rounded-3xl border border-gray-200 bg-white p-3 shadow-[0_25px_80px_rgba(0,0,0,0.07)]">
                            <div className="rounded-2xl border border-gray-200 bg-white p-7">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400">
                                            <Link2 size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold">WhyLong</p>
                                            <p className="text-xs text-gray-400">Link workspace</p>
                                        </div>
                                    </div>
                                    <span className="rounded-full bg-yellow-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-yellow-700">
                                        Simple
                                    </span>
                                </div>

                                <div className="mt-8 space-y-3">
                                    {["w-40", "w-52", "w-32"].map((width, index) => (
                                        <div
                                            key={width}
                                            className="flex items-center gap-3 rounded-xl border border-gray-100 p-4"
                                        >
                                            <div
                                                className={`h-2 w-2 rounded-full ${index === 0 ? "bg-yellow-400" : "bg-gray-200"
                                                    }`}
                                            />
                                            <div className={`h-3 ${width} rounded bg-gray-100`} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= QR CODES ================= */}
            <section
                id="qr-codes"
                aria-labelledby="qr-heading"
                className="border-b border-gray-100 bg-white py-12"
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                        <div>
                            <Eyebrow>{QR_SECTION.eyebrow}</Eyebrow>

                            <h2
                                id="qr-heading"
                                className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
                            >
                                {QR_SECTION.title1}
                                <span className="block text-gray-400">{QR_SECTION.title2}</span>
                            </h2>

                            {QR_SECTION.paras.map((para, index) => (
                                <p
                                    key={para}
                                    className={`max-w-xl text-base leading-7 text-gray-500 ${index === 0 ? "mt-6" : "mt-4"
                                        }`}
                                >
                                    {para}
                                </p>
                            ))}

                            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
                                {QR_SECTION.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3">
                                        <CheckBadge />
                                        <span className="text-sm font-semibold text-gray-700">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to={QR_PATH}
                                className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-gray-500 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-gray-800 active:scale-[0.98]"
                            >
                                {QR_SECTION.cta}
                                <ArrowRight
                                    aria-hidden="true"
                                    size={16}
                                    className="transition-transform group-hover:translate-x-0.5"
                                />
                            </Link>
                        </div>

                        {/* Decorative QR preview */}
                        <div aria-hidden="true" className="relative">
                            <div className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-yellow-100/60 blur-3xl" />

                            <div className="relative rounded-3xl border border-gray-200 bg-white p-4 shadow-[0_25px_80px_rgba(0,0,0,0.07)]">
                                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-7">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-bold text-gray-950">QR Code Generator</p>
                                            <p className="mt-1 text-xs text-gray-400">Customize your WhyLong link</p>
                                        </div>
                                        <span className="rounded-full bg-yellow-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-yellow-700">
                                            Ready
                                        </span>
                                    </div>

                                    <div className="mt-7 flex justify-center">
                                        <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-[28px] border border-gray-200 bg-white p-5">
                                            <div className="grid h-full w-full grid-cols-11 gap-1">
                                                {[
                                                    1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
                                                    1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1,
                                                    1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1,
                                                    1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1,
                                                    1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
                                                    0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0,
                                                    1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1,
                                                    0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0,
                                                    1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1,
                                                    1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1,
                                                    0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1
                                                ].map((cell, index) => (
                                                    <div
                                                        key={index}
                                                        className={cell ? "rounded-[2px] bg-gray-950" : "bg-transparent"}
                                                    />
                                                ))}
                                            </div>

                                            <div className="absolute flex h-16 w-16 items-center justify-center rounded-xl border-4 border-white bg-yellow-400 shadow-md">
                                                <Link2 size={30} className="text-gray-950" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 text-center">
                                        <p className="text-sm font-bold text-gray-950">WhyLong</p>
                                        <p className="mt-1 text-xs text-gray-400">Scan to visit your shortened link</p>
                                    </div>

                                    <div className="mt-6 flex flex-wrap justify-center gap-2">
                                        {["Logo", "Brand Text", "Rounded", "PNG", "SVG"].map((item) => (
                                            <span
                                                key={item}
                                                className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-[10px] font-semibold text-gray-500"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto mt-16 flex max-w-2xl items-center justify-center gap-3 border-t border-gray-200 pt-8 text-center">
                        <CheckBadge />
                        <p className="text-sm text-gray-500">{QR_SECTION.note}</p>
                    </div>
                </div>
            </section>

            {/* ================= ANALYTICS ================= */}
            <section
                id="analytics"
                aria-labelledby="analytics-heading"
                className="border-b border-gray-100 bg-gray-50 py-12"
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <Eyebrow>{ANALYTICS.eyebrow}</Eyebrow>

                        <h2
                            id="analytics-heading"
                            className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
                        >
                            {ANALYTICS.title1}
                            <span className="block text-gray-400">{ANALYTICS.title2}</span>
                        </h2>

                        <p className="mt-5 text-base leading-7 text-gray-500">
                            {ANALYTICS.intro}
                        </p>
                    </div>

                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                        {ANALYTICS.items.map((item, index) => (
                            <article
                                key={item.title}
                                className="rounded-2xl border border-gray-200 bg-white p-6"
                            >
                                <span className="text-xs font-bold text-gray-300">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <h3 className="mt-6 text-base font-bold text-gray-950">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-gray-500">
                                    {item.text}
                                </p>
                            </article>
                        ))}
                    </div>

                    <p className="mt-8 text-sm text-gray-500">{ANALYTICS.note}</p>
                </div>
            </section>

            {/* ================= WHY WE BUILT IT ================= */}
            <section
                aria-labelledby="why-heading"
                className="bg-white py-12"
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <Eyebrow>{WHY.eyebrow}</Eyebrow>

                        <h2
                            id="why-heading"
                            className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
                        >
                            {WHY.title1}
                            <span className="block text-gray-400">{WHY.title2}</span>
                        </h2>

                        <p className="mt-5 text-base leading-7 text-gray-500">{WHY.intro}</p>
                    </div>

                    <div className="mt-14 grid gap-5 md:grid-cols-3">
                        {WHY.cards.map((card, index) => (
                            <article
                                key={card.title}
                                className="rounded-2xl border border-gray-200 bg-gray-50 p-7"
                            >
                                <span className="text-xs font-bold text-gray-300">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <h3 className="mt-8 text-lg font-bold">{card.title}</h3>
                                <p className="mt-3 text-sm leading-6 text-gray-500">{card.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= MAKER ================= */}
            <section
                id="maker"
                aria-labelledby="maker-heading"
                className="border-t border-gray-100 bg-gray-50 py-12"
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                        <div className="relative mx-auto w-full max-w-sm lg:mx-0">
                            <div className="aspect-square overflow-hidden rounded-3xl bg-gray-950 p-8" onClick={() => navigate("/founder/kartikeya-mishra")}>
                                <div className="flex h-full flex-col justify-between">
                                    <div className="flex items-center justify-between">
                                        <div
                                            aria-hidden="true"
                                            className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-xl font-black text-gray-950"
                                        >
                                            K
                                        </div>
                                        <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
                                            Maker
                                        </span>
                                    </div>

                                    <div>
                                        <p className="text-sm font-medium text-gray-400">WhyLong</p>
                                        <p className="mt-2 text-3xl font-bold text-white">{MAKER.name}</p>
                                        <p className="mt-2 text-sm text-gray-400">{MAKER.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Eyebrow>{MAKER.eyebrow}</Eyebrow>

                            <h2
                                id="maker-heading"
                                className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
                            >
                                {MAKER.title1}
                                <span className="text-gray-400">{MAKER.title2}</span>
                            </h2>

                            {MAKER.paras.map((para, index) => (
                                <p
                                    key={para}
                                    className={`text-base leading-7 text-gray-500 ${index === 0 ? "mt-6" : "mt-4"
                                        }`}
                                >
                                    {para}
                                </p>
                            ))}

                            <ul className="mt-9 flex flex-wrap gap-2">
                                {MAKER.skills.map((skill) => (
                                    <li
                                        key={skill}
                                        className="rounded-full border border-gray-200 bg-white px-3.5 py-2 text-xs font-semibold text-gray-600"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-6 flex flex-wrap gap-x-9 gap-y-2 text-sm font-semibold">
                                {MAKER.links.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer me"
                                        className="text-gray-950 underline decoration-yellow-400 decoration-2 underline-offset-4 p-2 rounded-2xl hover:border-2 hover:border-black hover:text-yellow-600"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= ENGINEERING ================= */}
            <section
                aria-labelledby="engineering-heading"
                className="border-t border-gray-100 bg-white py-10"
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-2xl">
                        <Eyebrow>{ENGINEERING.eyebrow}</Eyebrow>

                        <h2
                            id="engineering-heading"
                            className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
                        >
                            {ENGINEERING.title1}
                            <span className="block text-gray-400">{ENGINEERING.title2}</span>
                        </h2>

                        <p className="mt-5 text-base leading-7 text-gray-500">{ENGINEERING.intro}</p>
                    </div>

                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {ENGINEERING.cards.map((card) => (
                            <article
                                key={card.title}
                                className="rounded-2xl border border-gray-200 bg-gray-50 p-7"
                            >
                                <h3 className="text-lg font-bold">{card.title}</h3>
                                <p className="mt-3 text-sm leading-6 text-gray-500">{card.description}</p>

                                <ul className="mt-6 space-y-2">
                                    {card.items.map((technology) => (
                                        <li
                                            key={technology}
                                            className="flex items-center gap-2 text-xs font-semibold text-gray-600"
                                        >
                                            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                                            {technology}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </section>


            {/* ================= FAQ ================= */}
            <section
                id="faq"
                aria-labelledby="faq-heading"
                className="border-t border-gray-100 bg-white py-10"
            >
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    <div className="text-center">
                        <Eyebrow>FAQ</Eyebrow>

                        <h2
                            id="faq-heading"
                            className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
                        >
                            {FAQS_TITLE}
                        </h2>
                    </div>

                    <div className="mt-12 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-gray-50">
                        {FAQS.map((item) => (
                            <details key={item.question} className="group p-6 px-4 hover:border-2 rounded-xl hover:border-yellow-400">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                                    <h3 className="text-base font-semibold text-gray-950">
                                        {item.question}
                                    </h3>

                                    <span
                                        aria-hidden="true"
                                        className="text-xl font-light text-gray-400 transition-transform group-open:rotate-45"
                                    >
                                        +
                                    </span>
                                </summary>

                                <p className="mt-3 text-sm leading-6 text-gray-500">{item.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= VISION / CTA ================= */}
            <section
                aria-labelledby="vision-heading"
                className="border-t border-gray-100 bg-gray-950 py-24"
            >
                <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
                    <Eyebrow light>{VISION.eyebrow}</Eyebrow>

                    <h2
                        id="vision-heading"
                        className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
                    >
                        {VISION.title1}
                        <span className="text-gray-500">{VISION.title2}</span>
                    </h2>

                    <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
                        {VISION.text}
                    </p>

                    <p className="mt-5 text-sm font-semibold text-yellow-400">{VISION.tagline}</p>

                    <div className="mt-10 flex flex-wrap justify-center gap-3">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-bold text-gray-950 transition-all hover:bg-yellow-300 active:scale-[0.98]"
                        >
                            {VISION.cta}
                            <ArrowRight aria-hidden="true" size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ================= FOOTNOTE ================= */}
            <section className="border-t border-gray-800 bg-gray-950 pb-10">
                <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 pt-8 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
                    <p>WhyLong: simple links, smarter workflows.</p>
                    <p>Built by {MAKER.name}.</p>
                </div>
            </section>
        </main>
    );
};

export default About;