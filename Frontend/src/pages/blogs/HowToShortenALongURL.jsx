import { useEffect } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../../content/blogPosts";
import ArrowIcon from "../../components/ui/ArrowIcon";
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    Clock3,
    ExternalLink,
    Link2,
    ShieldCheck,
    Zap,
} from "lucide-react";

const SITE_URL = "https://whylong.vercel.app";

const article = {
    slug: "how-to-shorten-a-long-url",
    title: "How to Shorten a Long URL: Free & Easy Guide",
    description:
        "Learn how to shorten a long URL for free in seconds. Follow this simple step-by-step guide to create short, shareable links with WhyLong.",
    author: "Kartikeya Mishra",
    published: "2026-10-27",
    updated: "2026-10-27",
    readTime: "6 min read",
};

const ARTICLE_URL = `${SITE_URL}/blogs/${article.slug}`;

const faqs = [
    {
        question: "How can I shorten a long URL for free?",
        answer:
            "Open WhyLong's URL Shortener, paste your original URL, and generate a short link. You can copy and share the generated link without needing to create an account for basic public shortening.",
    },
    {
        question: "How does a URL shortener work?",
        answer:
            "A URL shortener generates a unique short code associated with your original URL. When someone opens the short link, the service looks up the destination and redirects the visitor to the original page.",
    },
    {
        question: "Can I shorten a URL without creating an account?",
        answer:
            "Yes. WhyLong supports public URL shortening without requiring an account. Sign-in is useful for accessing account-based link management and tracking features.",
    },
    {
        question: "Can I track clicks on a shortened URL?",
        answer:
            "WhyLong provides link analytics for supported tracked links. Sign in and use the dashboard to access available click and link statistics.",
    },
    {
        question: "Can I create a QR code for a shortened URL?",
        answer:
            "Yes. You can use WhyLong's QR Code Generator to create QR codes for links and customize supported design options, including colors and branding elements.",
    },
    {
        question: "Are shortened URLs safe to click?",
        answer:
            "Not automatically. A shortened URL can redirect to a legitimate page or a malicious destination. Check the source of the link, avoid unexpected requests for sensitive information, and use security tools when a destination looks suspicious.",
    },
];

const howToSteps = [
    {
        name: "Open WhyLong's URL Shortener",
        text: "Visit the WhyLong URL Shortener page to get started.",
    },
    {
        name: "Copy your original URL",
        text: "Copy the complete web address you want to shorten from your browser or application.",
    },
    {
        name: "Paste the long URL",
        text: "Paste the original address into the URL input field and check that it points to the correct destination.",
    },
    {
        name: "Generate your short link",
        text: "Use the shortening action to generate a compact, shareable URL.",
    },
    {
        name: "Copy and share your link",
        text: "Copy the generated URL, open it once to verify the destination, and share it wherever your audience needs it.",
    },
];

const setMetaTag = (attribute, key, content) => {
    let element = document.head.querySelector(
        `meta[${attribute}="${key}"]`
    );

    if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
    }

    element.setAttribute("content", content);
};

const setStructuredData = (id, data) => {
    let script = document.getElementById(id);

    if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = id;
        document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(data);
};

function ArticleSection({ id, number, title, children }) {
    return (
        <section id={id} className="scroll-mt-20 py-5">
            <div className="mb-3 flex items-center gap-3">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl ml-7">
                    {title}
                </h2>
            </div>
            <div className="space-y-4 leading-8 text-slate-600">{children}</div>
        </section>
    );
}

const HowToShortenALongURL = () => {
    useEffect(() => {
        const previousTitle = document.title;

        document.title = article.title;

        setMetaTag("name", "description", article.description);
        setMetaTag(
            "name",
            "robots",
            "index, follow, max-image-preview:large"
        );
        setMetaTag("name", "author", article.author);
        setMetaTag(
            "name",
            "keywords",
            [
                "how to shorten a long URL",
                "shorten URL for free",
                "free URL shortener",
                "shorten a link",
                "long URL shortener",
                "create short links",
            ].join(", ")
        );

        // Canonical URL
        let canonical = document.head.querySelector(
            'link[rel="canonical"]'
        );

        const previousCanonical = canonical?.getAttribute("href");

        if (!canonical) {
            canonical = document.createElement("link");
            canonical.rel = "canonical";
            document.head.appendChild(canonical);
        }

        canonical.href = ARTICLE_URL;

        // Open Graph
        setMetaTag("property", "og:type", "article");
        setMetaTag("property", "og:title", article.title);
        setMetaTag("property", "og:description", article.description);
        setMetaTag("property", "og:url", ARTICLE_URL);
        setMetaTag("property", "og:site_name", "WhyLong");
        setMetaTag("property", "article:author", article.author);
        setMetaTag(
            "property",
            "article:published_time",
            `${article.published}T00:00:00+05:30`
        );
        setMetaTag(
            "property",
            "article:modified_time",
            `${article.updated}T00:00:00+05:30`
        );
        setMetaTag(
            "property",
            "article:section",
            "URL Shortening"
        );

        // Twitter / X
        setMetaTag("name", "twitter:card", "summary");
        setMetaTag("name", "twitter:title", article.title);
        setMetaTag(
            "name",
            "twitter:description",
            article.description
        );

        // Article structured data
        setStructuredData("whylong-article-schema", {
            "@context": "https://schema.org",
            "@type": "Article",
            "@id": `${ARTICLE_URL}#article`,
            headline: article.title,
            description: article.description,
            url: ARTICLE_URL,
            datePublished: `${article.published}T00:00:00+05:30`,
            dateModified: `${article.updated}T00:00:00+05:30`,
            author: {
                "@type": "Person",
                name: article.author,
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
            articleSection: "URL Shortening",
            inLanguage: "en",
        });

        // HowTo structured data
        setStructuredData("whylong-howto-schema", {
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Shorten a Long URL",
            description: article.description,
            totalTime: "PT2M",
            tool: [
                {
                    "@type": "HowToTool",
                    name: "WhyLong URL Shortener",
                },
            ],
            step: howToSteps.map((step, index) => ({
                "@type": "HowToStep",
                position: index + 1,
                name: step.name,
                text: step.text,
                url: `${ARTICLE_URL}#step-${index + 1}`,
            })),
        });

        // FAQ structured data
        setStructuredData("whylong-faq-schema", {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                },
            })),
        });

        return () => {
            document.title = previousTitle;

            if (previousCanonical) {
                canonical.href = previousCanonical;
            } else {
                canonical.remove();
            }

            document.getElementById(
                "whylong-article-schema"
            )?.remove();

            document.getElementById(
                "whylong-howto-schema"
            )?.remove();

            document.getElementById(
                "whylong-faq-schema"
            )?.remove();
        };
    }, []);

    const moreArticles = blogPosts
        .filter((post) => post.slug !== "how-to-shorten-a-long-url")
        .slice(0, 5);

    return (
        <main className="min-h-screen bg-[#fcfcfb] text-slate-900">
            {/* Back Navigation */}
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

            {/* Article Header */}
            <header className="relative overflow-hidden border-b border-slate-200 bg-white">
                <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl" />
                <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-yellow-100/50 blur-3xl" />

                <div className="relative mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
                    <nav
                        aria-label="Breadcrumb"
                        className="mb-6 text-sm text-slate-500"
                    >
                        <ol className="flex flex-wrap items-center gap-2">
                            <li>
                                <Link
                                    to="/"
                                    className="transition hover:text-amber-700"
                                >
                                    Home
                                </Link>
                            </li>
                            <li aria-hidden="true">/</li>
                            <li>
                                <Link
                                    to="/blogs"
                                    className="transition hover:text-amber-700"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li aria-hidden="true">/</li>
                            <li
                                aria-current="page"
                                className="text-slate-700"
                            >
                                URL Shortening
                            </li>
                        </ol>
                    </nav>

                    <div className="mb-6 flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-800">
                            URL Shortening
                        </span>

                        <span className="text-sm text-slate-500">
                            Updated October 27, 2026
                        </span>
                    </div>

                    <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                        How to Shorten a Long URL:{" "}
                        <span className="text-amber-600">
                            Turn Long, Messy Links Into Short Ones
                        </span>
                    </h1>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                        Want to shorten a long URL for free? Learn how
                        to turn lengthy web addresses into short,
                        shareable links in a few simple steps using
                        WhyLong — no account required for
                        URL shortening.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-500">
                        <span className="font-semibold text-slate-800">
                            {article.author}
                        </span>

                        <span className="flex items-center gap-2">
                            <Clock3 size={15} />
                            {article.readTime}
                        </span>

                        <span className="flex items-center gap-2">
                            <CheckCircle2 size={15} />
                            Step-by-step tutorial
                        </span>
                    </div>

                    <div className="mt-9 flex flex-wrap gap-3">
                        <a
                            href={`/`}
                            className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-amber-300"
                        >
                            Shorten a URL for Free
                            <ExternalLink size={16} />
                        </a>
                    </div>
                </div>
            </header>

            {/* Article Content */}
            <article className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
                <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-16">

                    {/* Main Article */}
                    <div className="min-w-0">
                        <div className="mb-10 rounded-2xl border border-amber-200 bg-amber-50/70 p-5 sm:p-6">
                            <p className="font-bold text-slate-900">
                                In a hurry? Here is the quick answer.
                            </p>

                            <p className="mt-2 leading-7 text-slate-700">
                                Open the{" "}
                                <Link
                                    to="/"
                                    className="font-semibold text-amber-800 underline decoration-amber-400 underline-offset-4"
                                >
                                    WhyLong URL Shortener
                                </Link>
                                , paste your long web address, generate
                                your short link, and copy it. You can
                                then share the link in messages, emails,
                                social media posts, or other places
                                where you need a cleaner URL.
                            </p>
                        </div>

                        <div className="border border-black p-3 my-8">

                            <ArticleSection
                                id="also-read"
                                number={"*"}
                                title="Also Read" >

                                <article
                                    key="1"
                                    className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50"
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

                        <section className="mb-12" id="what-is-a-url-shortener">
                            <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                                What Is a URL Shortener?
                            </h2>

                            <p className="mt-4 leading-8 text-slate-600">
                                A URL shortener is a tool that converts
                                a long web address into a shorter link
                                that redirects people to the original
                                destination. Instead of sharing a URL
                                containing a long path, tracking
                                parameters, or complex query strings,
                                you can share a compact link that is
                                easier to copy and distribute.
                            </p>

                            <p className="mt-4 leading-8 text-slate-600">
                                For example, a product page or campaign
                                link might contain many characters.
                                A short link gives you a cleaner
                                alternative without requiring people
                                to manually type the original address.
                                The destination remains the original
                                page, provided the short link is
                                configured correctly and remains active.
                            </p>

                            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
                                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                    Example
                                </p>

                                <p className="mt-4 text-sm font-semibold text-slate-700">
                                    Original URL
                                </p>

                                <div className="mt-2 break-all rounded-lg bg-slate-100 p-3 font-mono text-sm text-slate-600">
                                    https://example.com/products/category/item?campaign=social-media
                                </div>

                                <div className="my-3 flex items-center gap-2 text-sm font-medium text-amber-700">
                                    <ArrowRight size={16} />
                                    Shorter, easier to share
                                </div>

                                <p className="text-sm font-semibold text-slate-700">
                                    Short URL
                                </p>

                                <div className="mt-2 break-all rounded-lg border border-amber-200 bg-amber-50 p-3 font-mono text-sm text-amber-900">
                                    https://whylong.vercel.app/your-short-code
                                </div>

                                <p className="mt-3 text-xs leading-5 text-slate-500">
                                    Illustrative example only. The
                                    short code above is a placeholder,
                                    not a generated link.
                                </p>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                                How to Shorten a Long URL in 5 Easy Steps
                            </h2>

                            <p className="mt-4 leading-8 text-slate-600">
                                You do not need programming skills to
                                shorten a URL. Follow these steps to
                                create a link you can share almost
                                anywhere.
                            </p>

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
                                                    <a
                                                        href={`/`}
                                                        className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4 hover:text-amber-950"
                                                    >
                                                        Open URL Shortener
                                                        <ExternalLink size={14} />
                                                    </a>
                                                )}

                                                {index === 2 && (
                                                    <p className="mt-3 rounded-xl bg-slate-100 p-4 text-sm leading-6 text-slate-600">
                                                        <strong className="text-slate-800">
                                                            Tip:
                                                        </strong>{" "}
                                                        Copy the complete
                                                        URL, including
                                                        the required path
                                                        and query
                                                        parameters. If the
                                                        address is
                                                        incomplete, the
                                                        destination may
                                                        not behave as
                                                        expected.
                                                    </p>
                                                )}

                                                {index === 4 && (
                                                    <p className="mt-3 rounded-xl bg-emerald-50 p-4 text-sm leading-6 text-emerald-900">
                                                        <CheckCircle2
                                                            size={17}
                                                            className="mr-2 inline"
                                                        />
                                                        Test your new
                                                        link before
                                                        publishing it.
                                                        Confirm that it
                                                        opens the
                                                        intended page.
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </section>
                                ))}
                            </div>

                            <div className="mt-8 rounded-2xl bg-slate-950 p-6 text-white sm:p-7">
                                <p className="text-sm font-semibold text-amber-300">
                                    Ready to create your first short link?
                                </p>

                                <h3 className="mt-2 text-xl font-bold">
                                    Shorten your URL with WhyLong
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-300">
                                    Turn a lengthy web address into a
                                    shareable link in just a few steps.
                                </p>

                                <a
                                    href={`/products/url-shortener`}
                                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-amber-400 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-300"
                                >
                                    Try WhyLong for Free
                                    <ArrowRight size={16} />
                                </a>
                            </div>
                        </section>

                        <section className="mb-12" id="why-shorten-a-long-url">
                            <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                                Why Should You Shorten a Long URL?
                            </h2>

                            <p className="mt-4 leading-8 text-slate-600">
                                Short links are useful when you want
                                to make sharing easier, keep
                                communications tidy, or organize the
                                links you use across different
                                platforms.
                            </p>

                            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                                    <Link2
                                        size={22}
                                        className="text-amber-600"
                                    />
                                    <h3 className="mt-3 font-bold text-slate-950">
                                        Cleaner links
                                    </h3>
                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        Make long addresses easier to
                                        present in messages, posts,
                                        and marketing materials.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                                    <Zap
                                        size={22}
                                        className="text-amber-600"
                                    />
                                    <h3 className="mt-3 font-bold text-slate-950">
                                        Easier sharing
                                    </h3>
                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        Share a compact link instead
                                        of a lengthy web address.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                                    <CheckCircle2
                                        size={22}
                                        className="text-amber-600"
                                    />
                                    <h3 className="mt-3 font-bold text-slate-950">
                                        Link organization
                                    </h3>
                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        Use account-based link
                                        management to organize your
                                        supported tracked links.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                                    <ShieldCheck
                                        size={22}
                                        className="text-amber-600"
                                    />
                                    <h3 className="mt-3 font-bold text-slate-950">
                                        Useful insights
                                    </h3>
                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        Explore available click
                                        statistics for supported
                                        tracked links.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="mb-12" id="what-can-you-do-with-a-shortened-url">
                            <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                                What Can You Do With a Shortened URL?
                            </h2>

                            <p className="mt-4 leading-8 text-slate-600">
                                A shortened URL can be useful in
                                everyday communication as well as
                                business workflows. Here are some
                                common examples.
                            </p>

                            <ul className="mt-5 space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amber-600" />
                                    <p className="leading-7 text-slate-600">
                                        <strong className="text-slate-900">
                                            Social media:
                                        </strong>{" "}
                                        share product pages, articles,
                                        portfolios, and other resources
                                        without pasting a lengthy URL.
                                    </p>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amber-600" />
                                    <p className="leading-7 text-slate-600">
                                        <strong className="text-slate-900">
                                            Marketing campaigns:
                                        </strong>{" "}
                                        distribute links in posts,
                                        newsletters, and promotional
                                        materials.
                                    </p>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amber-600" />
                                    <p className="leading-7 text-slate-600">
                                        <strong className="text-slate-900">
                                            QR codes:
                                        </strong>{" "}
                                        pair a short link with a QR
                                        code so people can open a
                                        destination by scanning it.
                                        Explore the{" "}
                                        <Link
                                            to="/products/qr-code-generator"
                                            className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4"
                                        >
                                            WhyLong QR Code Generator
                                        </Link>
                                        .
                                    </p>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amber-600" />
                                    <p className="leading-7 text-slate-600">
                                        <strong className="text-slate-900">
                                            Performance tracking:
                                        </strong>{" "}
                                        review supported link metrics
                                        through{" "}
                                        <Link
                                            to="/products/link-analytics"
                                            className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4"
                                        >
                                            link analytics
                                        </Link>
                                        .
                                    </p>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amber-600" />
                                    <p className="leading-7 text-slate-600">
                                        <strong className="text-slate-900">
                                            Personal organization:
                                        </strong>{" "}
                                        use{" "}
                                        <Link
                                            to="/products/link-management"
                                            className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4"
                                        >
                                            link management
                                        </Link>{" "}
                                        to work with the tracked links
                                        available in your account.
                                    </p>
                                </li>
                            </ul>
                        </section>

                        <section className="mb-12" id="tips-for-creating-better-short-links">
                            <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                                Tips for Creating Better Short Links
                            </h2>

                            <p className="mt-4 leading-8 text-slate-600">
                                Shortening a URL is simple, but a few
                                good practices can make your links
                                more reliable and easier to use.
                            </p>

                            <div className="mt-6 space-y-5">
                                <div>
                                    <h3 className="font-bold text-slate-950">
                                        1. Verify the original destination
                                    </h3>
                                    <p className="mt-2 leading-7 text-slate-600">
                                        Before generating a link, check
                                        that the original URL opens
                                        the correct page and includes
                                        the parameters your workflow
                                        needs.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-bold text-slate-950">
                                        2. Test your shortened URL
                                    </h3>
                                    <p className="mt-2 leading-7 text-slate-600">
                                        Open the generated link in a
                                        browser before sharing it
                                        widely. This helps catch
                                        incorrect destinations or
                                        unexpected redirects.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-bold text-slate-950">
                                        3. Use analytics when needed
                                    </h3>
                                    <p className="mt-2 leading-7 text-slate-600">
                                        For campaigns and shared
                                        resources, review the available
                                        click metrics for supported
                                        tracked links to understand
                                        how people interact with them.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-bold text-slate-950">
                                        4. Consider link safety
                                    </h3>
                                    <p className="mt-2 leading-7 text-slate-600">
                                        A short URL hides much of the
                                        original address, so never
                                        assume a link is safe simply
                                        because it is short. Share
                                        links from trusted sources and
                                        check destinations before
                                        entering sensitive information.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-bold text-slate-950">
                                        5. Keep your audience in mind
                                    </h3>
                                    <p className="mt-2 leading-7 text-slate-600">
                                        Use links in the places where
                                        your audience expects them,
                                        and provide enough surrounding
                                        context that people understand
                                        what they are opening.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="mb-12" why-choose-whylong-to-shorten-urls>
                            <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                                Why Choose WhyLong to Shorten URLs?
                            </h2>

                            <p className="mt-4 leading-8 text-slate-600">
                                WhyLong brings URL shortening and
                                related link tools together in one
                                place. You can shorten links publicly
                                without signing in, then use the
                                account dashboard for supported
                                link-management and analytics features.
                            </p>

                            <ul className="mt-5 space-y-3">
                                {[
                                    "Free public URL shortening.",
                                    "Unlimited URL creation under the service's available usage policies.",
                                    "Enterprise grade link management dashbaord.",
                                    "Heavy click analytics for supported tracked links.",
                                    "Customizable QR code generation.",
                                ].map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-start gap-3 text-slate-600"
                                    >
                                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amber-600" />
                                        <span className="leading-7">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-5 leading-8 text-slate-600">
                                If you want to get started, visit the{" "}
                                <Link
                                    to="/products/url-shortener"
                                    className="font-semibold text-amber-800 underline decoration-amber-300 underline-offset-4"
                                >
                                    WhyLong URL Shortener
                                </Link>{" "}
                                and create your first short link.
                            </p>
                        </section>

                        {/* FAQ */}
                        <section
                            id="frequently-asked-questions"
                            className="scroll-mt-24"
                        >
                            <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                                Frequently Asked Questions
                            </h2>

                            <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
                                {faqs.map((faq) => (
                                    <details
                                        key={faq.question}
                                        className="group py-5"
                                    >
                                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900 marker:hidden">
                                            <span>{faq.question}</span>

                                            <span className="text-xl text-amber-700 transition-transform group-open:rotate-45">
                                                +
                                            </span>
                                        </summary>

                                        <p className="mt-3 pr-5 leading-7 text-slate-600">
                                            {faq.answer}
                                        </p>
                                    </details>
                                ))}
                            </div>
                        </section>

                        {/* Final CTA */}
                        <section className="mt-12 rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-6 sm:p-8">
                            <p className="text-sm font-bold uppercase tracking-wider text-amber-800">
                                Make your links work better
                            </p>

                            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                                Ready to shorten your first URL?
                            </h2>

                            <p className="mt-3 leading-7 text-slate-600">
                                Create a clean, shareable link with
                                WhyLong and explore tools for QR
                                codes, link organization, and analytics.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <a
                                    href={`/products/url-shortener`}
                                    className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-amber-300"
                                >
                                    Shorten a URL
                                    <ArrowRight size={16} />
                                </a>

                                <Link
                                    to="/blogs"
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

                            <nav className="mt-4 space-y-3 text-sm">
                                {[
                                    ["What is a URL shortener?", "#what-is-a-url-shortener"],
                                    ["How to shorten a URL", "#step-1"],
                                    ["Why shorten URLs?", "#why-shorten-a-long-url"],
                                    ["Uses of short links", "#what-can-you-do-with-a-shortened-url"],
                                    ["Best practices", "#tips-for-creating-better-short-links"],
                                    ["Why WhyLong?", "#why-choose-whylong-to-shorten-urls"],
                                    ["FAQs", "#frequently-asked-questions"],
                                ].map(([label, href]) => (
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
                                <Link2 size={21} />
                            </div>

                            <h2 className="mt-4 text-lg font-bold">
                                Shorten links for free
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-slate-300">
                                Create shareable URLs with WhyLong.
                                No account is required for basic
                                public shortening.
                            </p>

                            <a
                                href={`/products/url-shortener`}
                                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-amber-300 hover:text-amber-200"
                            >
                                Try WhyLong
                                <ArrowRight size={15} />
                            </a>
                        </div>
                    </aside>
                </div>
            </article>

            {/* Related Guides */}
            <section className="border-t border-slate-200 bg-gray-950">
                <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
                    <p className="text-sm font-semibold uppercase tracking-wider text-amber-700">
                        Explore WhyLong
                    </p>

                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        More ways to share and manage links
                    </h2>

                    <div className="mt-7 grid gap-4 sm:grid-cols-3">
                        <Link
                            to="/products/url-shortener"
                            className="group rounded-2xl border border-slate-200 p-5 transition hover:border-amber-300 hover:bg-amber-50/50"
                        >
                            <Link2 className="text-amber-600" size={22} />

                            <h3 className="mt-4 font-bold text-white">
                                URL Shortener
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Create shorter, shareable links.
                            </p>

                            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-800">
                                Get started
                                <ArrowRight size={15} />
                            </span>
                        </Link>

                        <Link
                            to="/products/qr-code-generator"
                            className="group rounded-2xl border border-slate-200 p-5 transition hover:border-amber-300 hover:bg-amber-50/50"
                        >
                            <CheckCircle2 className="text-amber-600" size={22} />

                            <h3 className="mt-4 font-bold text-white">
                                QR Code Generator
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Create customizable QR codes for links.
                            </p>

                            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-800">
                                Explore QR codes
                                <ArrowRight size={15} />
                            </span>
                        </Link>

                        <Link
                            to="/products/analytics"
                            className="group rounded-2xl border border-slate-200 p-5 transition hover:border-amber-300 hover:bg-amber-50/50"
                        >
                            <Zap className="text-amber-600" size={22} />

                            <h3 className="mt-4 font-bold text-white">
                                Link Analytics
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Explore available click statistics.
                            </p>

                            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-800">
                                Explore analytics
                                <ArrowRight size={15} />
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
            {/* More Articles */}
            <section
                id="blog-articles"
                className="mx-auto max-w-7xl scroll-mt-24 px-5 py-14 sm:px-8 sm:py-16 lg:px-12 border border-black mb-6 mt-6"
            >
                <div className="border-b border-slate-200 pb-7">
                    <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                        More Articles
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base inline">
                        Explore more guides on URL shortening, QR codes, link management,
                        and analytics. <Link to={"/blogs"} className="inline mx-2"><ExternalLink className="inline mb-1" size={18} /></Link>
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
};

export default HowToShortenALongURL;