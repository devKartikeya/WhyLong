import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowLeft,
    ArrowRight,
    BarChart3,
    Check,
    Clock3,
    ExternalLink,
    Globe2,
    Link2,
    QrCode,
    Sparkles,
    Target,
    Zap,
} from "lucide-react";
import { blogPosts } from "../../content/blogPosts";
import ArrowIcon from "../../components/ui/ArrowIcon";
import FeatureCard from "../../components/ui/FeatureCard";

const SITE_URL = "https://whylong.vercel.app";
const ARTICLE_URL = `${SITE_URL}/blogs/whylong-vs-tinyurl`;

const comparisonRows = [
    ["Free URL shortening", "Yes", "Yes"],
    ["Monthly link quota", "Unlimited under current offering", "Check current plan terms"],
    ["Custom link aliases", "Check current product options", "Yes"],
    ["Permanent redirects", "Check current product terms", "Yes, per TinyURL's free-plan guide"],
    ["QR code generation", "Yes", "Yes"],
    ["QR logo insertion", "Yes", "Customization depends on plan"],
    ["Brand text and CTA", "Yes", "Check current product options"],
    ["QR colors and background", "Yes", "Customization depends on plan"],
    ["Custom dots and corners", "Yes", "Check current product options"],
    ["Reusable QR presets", "Yes", "Check current product options"],
    ["PNG and SVG QR downloads", "Yes", "Check current product options"],
    ["CTR, timestamps and graphs", "Yes", "Analytics availability depends on plan"],
    ["Country and geographic insights", "Yes", "Advanced analytics on paid plans"],
    ["Device insights", "Yes", "Advanced analytics on paid plans"],
    ["Edit destination after creation", "Check current product options", "Paid plan"],
];

const faqs = [
    {
        question: "Is WhyLong free?",
        answer:
            "WhyLong offers URL shortening and QR code features under its current offering. It also provides CTR, timestamps, graphs, country and geographic insights, and device information. Check the live product for the latest terms.",
    },
    {
        question: "Is TinyURL free to use?",
        answer:
            "Yes. TinyURL offers a Free plan for basic URL shortening. Its official guide describes automatic QR code generation, link history, custom aliases, and permanent redirects. Check its current pricing page for any applicable limits and feature conditions.",
    },
    {
        question: "Does TinyURL provide link analytics?",
        answer:
            "TinyURL offers analytics features, with advanced insights associated with paid plans. Exact tracking availability can depend on the account and plan. Review TinyURL's current official documentation before choosing.",
    },
    {
        question: "Can I customize QR codes with WhyLong?",
        answer:
            "Yes. WhyLong supports logo insertion, brand text, calls to action, foreground and background colors, custom corners and dots, error-correction settings, reusable presets, and PNG/SVG downloads.",
    },
    {
        question: "Can I change a TinyURL destination after creating a link?",
        answer:
            "TinyURL's official help documentation says destination editing is available on paid plans; links created on its Free plan cannot be edited. Verify current plan terms before relying on this feature.",
    },
    {
        question: "Which is better for QR codes, WhyLong or TinyURL?",
        answer:
            "If you need detailed design controls such as logos, brand text, CTAs, dot and corner styling, reusable presets, and export-format choice, WhyLong is worth trying. TinyURL also generates QR codes, but its available customization should be checked against the current plan.",
    },
    {
        question: "Which URL shortener is better for analytics?",
        answer:
            "WhyLong provides CTR, timestamps, graphs, country and geographic insights, and device information. TinyURL also offers analytics, with advanced reporting associated with paid plans. Compare the exact metrics and data history you need.",
    },
    {
        question: "Should I switch from TinyURL to WhyLong?",
        answer:
            "Try both with your actual workflow. Compare the QR designs you can create, the analytics available to you, how you organize links, and whether the features you need are included in your preferred plan.",
    },
];

function FeatureValue({ value }) {
    if (value === "Yes") {
        return (
            <span className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100">
                    <Check size={12} strokeWidth={3} />
                </span>
                Yes
            </span>
        );
    }

    return (
        <span className="text-sm leading-6 text-slate-600">
            {value}
        </span>
    );
}

function ComparisonTable() {
    return (
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[650px] border-collapse text-left text-sm">
                <thead>
                    <tr className="bg-slate-950 text-white">
                        <th className="px-4 py-4 font-semibold">Feature</th>
                        <th className="border-x border-amber-300/20 bg-slate-900 px-4 py-4 font-semibold text-amber-300">
                            WhyLong
                        </th>
                        <th className="px-4 py-4 font-semibold">TinyURL</th>
                    </tr>
                </thead>
                <tbody>
                    {comparisonRows.map(([feature, whyLong, tinyUrl], index) => (
                        <tr
                            key={feature}
                            className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                        >
                            <td className="border-t border-slate-100 px-4 py-3.5 font-medium text-slate-800">
                                {feature}
                            </td>
                            <td className="border-x border-t border-amber-100 bg-amber-50/30 px-4 py-3.5">
                                <FeatureValue value={whyLong} />
                            </td>
                            <td className="border-t border-slate-100 px-4 py-3.5">
                                <FeatureValue value={tinyUrl} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function ArticleSection({ id, number, title, children }) {
    return (
        <section id={id} className="scroll-mt-28 pt-11">
            <div className="mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-sm font-bold text-amber-800">
                    {number}
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    {title}
                </h2>
            </div>
            <div className="space-y-4 leading-8 text-slate-600">{children}</div>
        </section>
    );
}


function FAQItem({ question, answer }) {
    return (
        <details className="group rounded-2xl border border-slate-200 bg-white">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold text-slate-900 marker:hidden">
                <span>{question}</span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl leading-none text-slate-600 transition group-open:rotate-45">
                    +
                </span>
            </summary>
            <p className="px-5 pb-5 text-sm leading-7 text-slate-600">{answer}</p>
        </details>
    );
}

export default function WhyLongVsTinyURL() {
    useEffect(() => {
        const title = "WhyLong vs TinyURL: Features, Analytics & QR Codes (2026)";
        const description =
            "Compare WhyLong vs TinyURL in 2026. Explore free URL shortening, link analytics, QR code customization, design controls, and which tool fits your workflow.";

        document.title = title;

        const setMeta = (selector, attribute, key, content) => {
            let element = document.head.querySelector(selector);

            if (!element) {
                element = document.createElement("meta");
                element.setAttribute(attribute, key);
                document.head.appendChild(element);
            }

            element.setAttribute("content", content);
        };

        setMeta('meta[name="description"]', "name", "description", description);
        setMeta('meta[property="og:title"]', "property", "og:title", title);
        setMeta(
            'meta[property="og:description"]',
            "property",
            "og:description",
            description
        );
        setMeta('meta[property="og:type"]', "property", "og:type", "article");
        setMeta('meta[property="og:url"]', "property", "og:url", ARTICLE_URL);
        setMeta(
            'meta[name="twitter:card"]',
            "name",
            "twitter:card",
            "summary_large_image"
        );
        setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
        setMeta(
            'meta[name="twitter:description"]',
            "name",
            "twitter:description",
            description
        );

        let canonical = document.head.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement("link");
            canonical.rel = "canonical";
            document.head.appendChild(canonical);
        }
        canonical.href = ARTICLE_URL;

        const articleSchema = {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description,
            datePublished: "2026-10-26",
            dateModified: "2026-10-26",
            author: {
                "@type": "Person",
                name: "Kartikeya Mishra",
            },
            publisher: {
                "@type": "Organization",
                name: "WhyLong",
                url: SITE_URL,
            },
            mainEntityOfPage: {
                "@type": "WebPage",
                "@id": ARTICLE_URL,
            },
        };

        const faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(({ question, answer }) => ({
                "@type": "Question",
                name: question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: answer,
                },
            })),
        };

        const addSchema = (id, data) => {
            let script = document.getElementById(id);
            if (!script) {
                script = document.createElement("script");
                script.id = id;
                script.type = "application/ld+json";
                document.head.appendChild(script);
            }
            script.textContent = JSON.stringify(data);
            return script;
        };

        addSchema("whylong-tinyurl-article-schema", articleSchema);
        addSchema("whylong-tinyurl-faq-schema", faqSchema);

        return () => {
            document.getElementById("whylong-tinyurl-article-schema")?.remove();
            document.getElementById("whylong-tinyurl-faq-schema")?.remove();
        };
    }, []);

    const moreArticles = blogPosts
        .filter((post) => post.slug !== "whylong-vs-tinyurl")
        .slice(0, 5);

    return (
        <main className="min-h-screen bg-[#fcfcfb] text-slate-900">
            <div className="border-b border-slate-200 bg-white">
                <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
                    <Link
                        to="/blogs"
                        className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-amber-700"
                    >
                        <ArrowLeft size={16} />
                        All articles
                    </Link>
                </div>
            </div>

            <header className="relative overflow-hidden border-b border-slate-200 bg-white">
                <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl" />
                <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-yellow-100/50 blur-3xl" />

                <div className="relative mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
                    <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-800">
                        <Sparkles size={14} />
                        URL shortener comparison
                    </span>

                    <Link to={"/blogs/how-to-shorten-a-long-url"} className="text-sm text-slate-500 block mt-5"><strong>Also Read:</strong> <span className="text-gray-700 font-semibold"> How to short a Long URL</span></Link>


                    <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                        WhyLong vs TinyURL:
                        <span className="mt-2 block text-amber-600">
                            Which URL Shortener Should You Choose in 2026?
                        </span>
                    </h1>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                        Compare link creation, analytics, QR code customization, and
                        everyday usability to find the right tool for your links and campaigns.
                    </p>

                    <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                        <span className="font-semibold text-slate-800">
                            By Kartikeya Mishra
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock3 size={15} />
                            8 min read
                        </span>
                        <span>Updated October 26, 2026</span>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="#comparison"
                            className="inline-flex items-center gap-2 rounded-xl bg-slate-500 px-5 py-3 font-semibold text-white transition hover:bg-slate-600"
                        >
                            Compare features <ArrowRight size={16} />
                        </a>
                        <a
                            href={SITE_URL}
                            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition hover:border-amber-400 hover:bg-amber-50"
                        >
                            Try WhyLong <ExternalLink size={15} />
                        </a>
                    </div>
                    {/* WhyLong vs Bitly — Logo Showcase */}
                    <div className="relative mx-auto mt-32 flex w-full max-w-md items-center justify-center py-8 sm:py-10">
                        {/* Background Glow */}
                        <div
                            aria-hidden="true"
                            className="absolute inset-x-10 inset-y-4 rounded-full bg-amber-200/50 blur-3xl"
                        />

                        {/* Decorative Connection */}
                        <div
                            aria-hidden="true"
                            className="absolute left-1/2 top-1/2 h-1 w-40 -translate-x-1/2 -translate-y-1/2 rotate-[-25deg] rounded-full bg-gradient-to-r from-yellow-300 via-amber-200 to-gray-200 sm:w-52"
                        />

                        {/* Bitly Logo — Top Right */}
                        <div className="absolute right-5 top-0 z-10 flex h-28 w-28 items-center justify-center rounded-full border border-gray-200 p-5 shadow-xl shadow-gray-900/10 transition-transform duration-300 hover:scale-105 sm:right-12 sm:h-44 sm:w-44 sm:p-6">
                            <img
                                src="/images/TinyURL.png"
                                alt="Bitly logo"
                                className="h-full w-full object-contain rounded-full"
                                loading="eager"
                                decoding="async"
                            />
                        </div>

                        {/* WhyLong Logo — Bottom Left */}
                        <div className="absolute bottom-0 left-5 z-20 flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-yellow-400 p-4 shadow-xl shadow-yellow-900/20 transition-transform duration-300 hover:scale-105 sm:left-12 sm:h-36 sm:w-36 sm:p-5">
                            <div className="flex h-full w-full items-center justify-center rounded-full bg-yellow-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-12 w-12 text-gray-950 sm:h-16 sm:w-16"
                                    aria-hidden="true"
                                >
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                </svg>
                            </div>
                        </div>

                        {/* VS Badge */}
                        <div className="absolute left-1/2 top-1/2 z-30 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-gray-950 text-xs font-black tracking-wider text-yellow-400 shadow-lg sm:h-14 sm:w-14 sm:text-sm">
                            VS
                        </div>

                        {/* Accessible Context */}
                        <span className="sr-only">WhyLong versus Bitly logo comparison</span>
                    </div>
                </div>
            </header>

            <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
                <article>
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                        <p className="text-lg leading-8 text-slate-700">
                            TinyURL has been a familiar name in URL shortening for years.
                            WhyLong approaches the same problem with an emphasis on link
                            insights and customizable QR codes. If you are choosing between
                            the two, the important question is not only how quickly a tool
                            shortens a URL, but what you can do after creating it.
                        </p>
                        <p className="mt-4 leading-8 text-slate-600">
                            This guide compares WhyLong and TinyURL and their solutions by their practical features.
                            TinyURL offers a free plan for basic shortening, and its
                            capabilities vary by account and subscription. WhyLong provides
                            link analytics and extensive QR design controls under its
                            current offering with deluxe dashboard. We will separate those capabilities rather
                            than treating either product as a one-size-fits-all solution.
                        </p>
                    </div>

                    <div className="border border-black p-3 mt-4">

                        <ArticleSection
                            id="also-read"
                            number={"*"}
                            title="Also Read" >

                            <article
                                key="1"
                                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 sm:p-7"
                            >

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
                        </ArticleSection>
                    </div>

                    <ArticleSection
                        id="quick-verdict"
                        number="01"
                        title="Quick verdict"
                    >
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-6">
                                <h3 className="text-lg font-bold text-slate-900">WhyLong</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-700">
                                    Worth trying if you want link creation, detailed engagement
                                    insights, and creative control over QR codes in one workflow.
                                </p>
                                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                                    {[
                                        "CTR, timestamps and activity graphs",
                                        "Country, geographic and device insights",
                                        "QR logos, brand text and CTAs",
                                        "Custom dots, corners and saved presets",
                                        "PNG and SVG downloads",
                                    ].map((item) => (
                                        <li key={item} className="flex gap-2">
                                            <Check size={16} className="mt-1 shrink-0 text-amber-700" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={SITE_URL}
                                    className="mt-5 inline-flex items-center gap-2 font-semibold text-amber-900 hover:underline"
                                >
                                    Explore WhyLong <ArrowRight size={15} />
                                </a>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-6">
                                <h3 className="text-lg font-bold text-slate-900">TinyURL</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    A familiar option for straightforward link shortening,
                                    custom aliases, link history, and automatically generated
                                    QR codes. More advanced capabilities depend on the plan.
                                </p>
                                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                                    {[
                                        "Basic URL shortening",
                                        "Custom aliases",
                                        "QR code generation",
                                        "Link history for accounts",
                                        "Paid options for advanced management and analytics",
                                    ].map((item) => (
                                        <li key={item} className="flex gap-2">
                                            <Check size={16} className="mt-1 shrink-0 text-slate-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href="https://tinyurl.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-5 inline-flex items-center gap-2 font-semibold text-slate-800 hover:underline"
                                >
                                    Explore TinyURL <ExternalLink size={14} />
                                </a>
                            </div>
                        </div>
                    </ArticleSection>

                    <div className="my-4">
                        <img src="https://adespresso.com/wp-content/uploads/2022/06/url-shortener.jpg" alt="WhyLong vs TinyURL image" />
                    </div>

                    <ArticleSection
                        id="comparison"
                        number="02"
                        title="WhyLong vs TinyURL: feature comparison"
                    >
                        <p>
                            Use this table as a starting point. Plan-dependent features and
                            product limits can change, so confirm the current details before
                            making a decision.
                        </p>
                        <ComparisonTable />
                        <p className="text-xs leading-6 text-slate-500">
                            “Check current product options” means the feature should be
                            verified directly rather than assumed. TinyURL's official
                            documentation and plan pages are linked at the end of this article.
                        </p>
                    </ArticleSection>

                    <ArticleSection
                        id="free-plans"
                        number="03"
                        title="Free URL shortening: what do you actually get?"
                    >
                        <p>
                            A free plan can be enough if your only goal is to turn a long
                            address into a short, shareable URL. The difference becomes
                            important when you need custom branding, analytics, destination
                            editing, or repeatable QR designs.
                        </p>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <FeatureCard icon={Link2} title="WhyLong">
                                WhyLong offers URL shortening with unlimited link creation
                                under its current offering. It also provides analytics and
                                QR customization features described in this guide.
                            </FeatureCard>
                            <FeatureCard icon={Globe2} title="TinyURL">
                                TinyURL's official Free-plan guide describes basic shortening,
                                automatic QR code generation, link history, custom aliases,
                                and permanent redirects. Check its current plan terms for
                                quotas or fair-use restrictions.
                            </FeatureCard>
                        </div>

                        <p>
                            Avoid comparing products by the word “free” alone. Check whether
                            the features you need are included, whether you can edit a
                            destination after publishing, and whether reporting is available
                            without upgrading.
                        </p>
                        <Link
                            href="/products/url-shortener/"
                            className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-amber-800 hover:underline"
                        >
                            Try WhyLong URL Shortener <ExternalLink size={14} />
                        </Link>
                    </ArticleSection>

                    <ArticleSection
                        id="analytics"
                        number="04"
                        title="Analytics: understand what happens after a click"
                    >
                        <p>
                            Link analytics are useful when you share URLs through social
                            posts, campaigns, emails, websites, portfolios, or printed QR
                            codes. Instead of looking only at a total click count, you can
                            investigate when engagement happened and where it came from.
                        </p>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <FeatureCard icon={Target} title="Click-through rate">
                                CTR provides a percentage-based engagement metric. Interpret
                                it according to the product's calculation and the data it uses.
                            </FeatureCard>
                            <FeatureCard icon={Clock3} title="Timestamps and graphs">
                                Review activity over time to spot patterns and changes instead
                                of relying only on one cumulative number.
                            </FeatureCard>
                            <FeatureCard icon={Globe2} title="Country and geolocation">
                                Geographic insights help you understand where your link
                                activity originates and whether you are reaching the intended
                                audience.
                            </FeatureCard>
                            <FeatureCard icon={BarChart3} title="Device information">
                                Device insights provide additional context about how people
                                access your links.
                            </FeatureCard>
                        </div>

                        <Link
                            href="/products/analytics/"
                            className="mt-2 mb-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-800 hover:underline"
                        >
                            Explore WhyLong's Analytics <ExternalLink size={14} />
                        </Link>

                        <h3 className="pt-3 text-xl font-bold text-slate-900">
                            How does TinyURL handle analytics?
                        </h3>
                        <p>
                            TinyURL offers analytics capabilities, and its official site
                            promotes detailed reporting through paid plans. Its published
                            guidance recommends a paid plan when insights, link editing,
                            or advanced analytics are important. Verify which metrics,
                            reporting history, and tracking features your intended plan
                            actually includes.
                        </p>
                        <a
                            href="https://tinyurl.com/blog/whats-included-in-tinyurls-free-plan/"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-800 hover:underline"
                        >
                            Read TinyURL's Free-plan guide <ExternalLink size={14} />
                        </a>
                    </ArticleSection>

                    <ArticleSection
                        id="qr-codes"
                        number="05"
                        title="QR code customization: design beyond the default"
                    >
                        <p>
                            QR codes connect physical materials to digital experiences.
                            You might use them on a menu, business card, event poster,
                            product package, social media profile, or marketing campaign.
                            A customized design can make the code more consistent with
                            your brand—but it still needs to scan reliably.
                        </p>
                        <p>
                            WhyLong supports logo insertion, brand text, calls to action,
                            foreground and background colors, corner and dot customization,
                            error-correction settings, reusable presets, and PNG/SVG
                            downloads.
                        </p>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <FeatureCard icon={Sparkles} title="Brand identity">
                                Add a logo, brand text, and a call to action so a QR code
                                better matches the context where it will be displayed.
                            </FeatureCard>
                            <FeatureCard icon={QrCode} title="Visual controls">
                                Adjust colors, background, dot patterns, and corners to
                                create a design that fits your visual identity.
                            </FeatureCard>
                            <FeatureCard icon={Check} title="Saved presets">
                                Save and reuse QR design presets to keep the appearance
                                consistent across different campaigns or materials.
                            </FeatureCard>
                            <FeatureCard icon={Target} title="Error correction">
                                Configure error correction using the available settings.
                                Always test the final design; error correction cannot
                                guarantee scanning if a code is poorly designed.
                            </FeatureCard>
                        </div>

                        <Link
                            href="/products/qr-code-generator/"
                            className="mt-2 mb-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-800 hover:underline"
                        >
                            Visist WhyLong's QR Studio <ExternalLink size={14} />
                        </Link>

                        <h3 className="pt-3 text-xl font-bold text-slate-900">
                            PNG vs SVG downloads
                        </h3>
                        <p>
                            PNG is a practical choice for many digital uses. SVG is a vector
                            format that can scale cleanly for suitable design and print
                            workflows. WhyLong supports both formats, giving you flexibility
                            over how you use your QR code.
                        </p>

                        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                            <h3 className="font-bold text-slate-900">
                                Always test a QR code before publishing
                            </h3>
                            <p className="mt-2 text-sm leading-7 text-slate-700">
                                Keep sufficient contrast, leave a clear margin around the code,
                                avoid covering too much of it with a logo, and test the
                                downloaded version on multiple phones at its intended size.
                            </p>
                        </div>

                        <h3 className="pt-3 text-xl font-bold text-slate-900">
                            What about TinyURL QR codes?
                        </h3>
                        <p>
                            TinyURL's Free plan includes automatic QR code generation for
                            shortened links. Its QR-related analytics and customization
                            options should be checked against the current product and
                            subscription. If you need detailed styling controls, compare
                            the exact options available rather than assuming that QR
                            generation means every design feature is included.
                        </p>
                        <a
                            href="https://tinyurl.com/blog/qr-code-analytics/"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-800 hover:underline"
                        >
                            Read TinyURL's QR analytics guide <ExternalLink size={14} />
                        </a>
                    </ArticleSection>

                    <ArticleSection
                        id="link-management"
                        number="06"
                        title="Link management and destination editing"
                    >
                        <p>
                            Link management becomes important after a URL has been shared
                            widely. If a destination changes, editing the existing short
                            link can be more convenient than replacing it everywhere.
                        </p>
                        <p>
                            TinyURL's help documentation states that editing the destination
                            URL is available on paid plans and that links created on its
                            Free plan cannot be edited. Review its current terms if this
                            workflow matters to you.
                        </p>
                        <p>
                            With any shortener, also consider link history, deletion
                            controls, expiration options, account access, and how easily
                            you can locate links after creating many of them. Check the
                            live WhyLong dashboard for the management options currently
                            supported.
                        </p>
                        <a
                            href="https://tinyurl.com/blog/help/"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-800 hover:underline"
                        >
                            Browse TinyURL help documentation <ExternalLink size={14} />
                        </a>
                    </ArticleSection>

                    <ArticleSection
                        id="who-should-use"
                        number="07"
                        title="Which URL shortener should you choose?"
                    >
                        <div className="space-y-4">
                            <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-6">
                                <h3 className="text-lg font-bold text-slate-900">
                                    Choose WhyLong if you want
                                </h3>
                                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                                    {[
                                        "Unlimited URL creation under its current offering.",
                                        "CTR, timestamps, graphs, country and geographic insights, and device information.",
                                        "QR logos, brand text, CTAs, colors, dot and corner customization.",
                                        "Reusable QR presets and PNG/SVG downloads.",
                                    ].map((item) => (
                                        <li key={item} className="flex gap-2">
                                            <Check size={17} className="mt-0.5 shrink-0 text-amber-700" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={SITE_URL}
                                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
                                >
                                    Try WhyLong <ArrowRight size={16} />
                                </a>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-6">
                                <h3 className="text-lg font-bold text-slate-900">
                                    Choose TinyURL if you want
                                </h3>
                                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                                    {[
                                        "A familiar, straightforward URL-shortening workflow.",
                                        "Basic link shortening and custom aliases.",
                                        "Automatically generated QR codes for short links.",
                                        "Permanent redirects and link history as described in its Free-plan guide.",
                                    ].map((item) => (
                                        <li key={item} className="flex gap-2">
                                            <Check size={17} className="mt-0.5 shrink-0 text-slate-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href="https://tinyurl.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-5 inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
                                >
                                    Explore TinyURL <ExternalLink size={14} />
                                </a>
                            </div>
                        </div>
                    </ArticleSection>

                    <ArticleSection
                        id="faq"
                        number="08"
                        title="Frequently asked questions"
                    >
                        <div className="space-y-3">
                            {faqs.map((faq) => (
                                <FAQItem
                                    key={faq.question}
                                    question={faq.question}
                                    answer={faq.answer}
                                />
                            ))}
                        </div>
                    </ArticleSection>

                    <section className="mt-12 overflow-hidden rounded-3xl bg-slate-950 p-7 text-white sm:p-10">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300 text-slate-950">
                            <Zap size={24} />
                        </div>
                        <p className="mt-5 text-sm font-bold uppercase tracking-[0.15em] text-amber-300">
                            Your links. Your brand. Your insights.
                        </p>
                        <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                            Give WhyLong a try.
                        </h2>
                        <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                            Create short links, customize QR codes, and explore the data
                            behind your link activity.
                        </p>
                        <a
                            href={SITE_URL}
                            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-amber-300 px-5 py-3 font-bold text-slate-950 transition hover:bg-amber-200"
                        >
                            Get started with WhyLong <ArrowRight size={17} />
                        </a>
                    </section>

                    <section className="mt-10 border-t border-slate-200 pt-7">
                        <h2 className="text-lg font-bold text-slate-900">
                            Sources and further reading
                        </h2>
                        <p className="mt-2 text-sm leading-7 text-slate-600">
                            TinyURL plan details and product features can change. Consult
                            the official sources below for current terms.
                        </p>
                        <ul className="mt-4 space-y-3 text-sm">
                            {[
                                [
                                    "TinyURL official website",
                                    "https://tinyurl.com/",
                                ],
                                [
                                    "What's included in TinyURL's Free Plan?",
                                    "https://tinyurl.com/blog/whats-included-in-tinyurls-free-plan/",
                                ],
                                [
                                    "TinyURL QR code analytics",
                                    "https://tinyurl.com/blog/qr-code-analytics/",
                                ],
                                [
                                    "TinyURL help documentation",
                                    "https://tinyurl.com/blog/help/",
                                ],
                                [
                                    "TinyURL destination editing and dynamic QR codes",
                                    "https://tinyurl.com/blog/are-tinyurl-qr-codes-dynamic/",
                                ],
                            ].map(([label, href]) => (
                                <li key={href}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 font-medium text-amber-800 hover:underline"
                                    >
                                        {label} <ExternalLink size={14} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6">
                        <Link
                            to="/blogs"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-amber-800"
                        >
                            <ArrowLeft size={16} />
                            Back to all articles
                        </Link>
                        <a
                            href={SITE_URL}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-800 hover:underline"
                        >
                            Visit WhyLong <ArrowRight size={15} />
                        </a>
                    </div>
                </article>
            </div>

            {/* More Articles */}
            <section
                id="blog-articles"
                className="mx-auto max-w-7xl scroll-mt-24 px-5 py-14 sm:px-8 sm:py-16 lg:px-12 border border-black mb-6"
            >
                <div className="border-b border-slate-200 pb-7">
                    <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
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

                            <img src={post.img} alt="" className="mt-5 h-48" />

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
                        to="/blogs"
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-yellow-400 hover:bg-yellow-50"
                    >
                        View all articles <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </main>
    );
}