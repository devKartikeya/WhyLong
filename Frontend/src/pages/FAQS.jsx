import { ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "../components/ui/SearchIcon";

const faqCategories = [
    {
        id: "getting-started",
        title: "Getting Started",
        description: "Learn what WhyLong does and how to get started.",
        icon: "✦",
        questions: [
            {
                q: "What is WhyLong?",
                a: (
                    <>
                        WhyLong is a URL-shortening and link-management platform designed
                        to make long URLs easier to share. It also provides tools such as
                        QR code generation and link analytics. Explore the{" "}
                        <Link className="faq-inline-link" to="/products/url-shortener">
                            URL shortener
                        </Link>{" "}
                        to get started.
                    </>
                ),
                keywords: "about whylong link management platform",
            },
            {
                q: "How do I use WhyLong?",
                a: (
                    <>
                        Start by opening the URL shortener, entering the destination URL,
                        and generating your short link. You can then copy the resulting
                        link and share it wherever you need it. Visit the{" "}
                        <Link className="faq-inline-link" to="/products/url-shortener">
                            URL shortener page
                        </Link>{" "}
                        to begin.
                    </>
                ),
                keywords: "how to use create first link beginner",
            },
            {
                q: "Do I need an account to shorten a URL?",
                a: (
                    <>
                        You can use WhyLong's public URL-shortening experience without
                        signing in. Sign in when you want to access features that require
                        an account, such as your personal workspace.
                    </>
                ),
                keywords: "account login signup guest public shorten",
            },
        ],
    },
    {
        id: "url-shortening",
        title: "URL Shortening",
        description: "Understand short links and how to use them.",
        icon: "↗",
        questions: [
            {
                q: "What is a URL shortener?",
                a: (
                    <>
                        A URL shortener converts a long web address into a shorter link
                        that is easier to share. When someone opens the short link, they
                        are redirected to its destination. Short links are useful in
                        social media posts, messages, documents, and marketing materials.

                        <button className="px-1.5 py-1 rounded-lg my-2 bg-yellow-500 text-white block"><Link className="text-xs" to={"/"}>Short URL Now<span><ArrowRight size={16} className="inline"/></span> </Link></button>

                    </>
                ),
                keywords: "short url shortened link redirect long website address",
            },
            {
                q: "How do I create a short URL with WhyLong?",
                a: (
                    <>
                        Open the{" "}
                        <Link className="faq-inline-link" to="/products/url-shortener">
                            WhyLong URL shortener
                        </Link>
                        , enter the original URL, and use the shortening action. Once the
                        short link is generated, copy it and share it with your audience.
                    </>
                ),
                keywords: "create generate shorten long url link",
            },
            {
                q: "Is WhyLong free to use?",
                a: (
                    <>
                        WhyLong is designed to offer free URL shortening, with unlimited
                        URL creation as part of its current offering. Features and
                        applicable usage conditions may depend on the tool being used.
                        Check the live product for the latest details.
                    </>
                ),
                keywords: "free pricing cost unlimited links urls",
            },
            {
                q: "Where can I share my WhyLong links?",
                a: (
                    <>
                        You can share short links in places that accept URLs, including
                        social media posts, emails, messaging apps, websites, presentations,
                        and printed materials. Always make sure the destination is
                        appropriate for the audience receiving your link.
                    </>
                ),
                keywords: "share social media instagram whatsapp email website",
            },
            {
                q: "Will shortening a URL change the destination website?",
                a: (
                    <>
                        A short link is intended to redirect visitors to its configured
                        destination. Shortening a URL does not itself change the content
                        hosted on the destination website.
                    </>
                ),
                keywords: "redirect destination original url website",
            },
        ],
    },
    {
        id: "qr-codes",
        title: "QR Code Generator",
        description: "Create scannable codes for digital and printed use.",
        icon: "▦",
        questions: [
            {
                q: "What is a QR code?",
                a: (
                    <>
                        A QR code is a two-dimensional barcode that a compatible phone or
                        scanner can read. When a QR code contains a URL, scanning it can
                        open the linked destination without requiring someone to type the
                        address manually.
                    </>
                ),
                keywords: "qr code quick response scan barcode",
            },
            {
                q: "How can I generate a QR code with WhyLong?",
                a: (
                    <>
                        Visit the{" "}
                        <Link className="faq-inline-link" to="/products/qr-code-generator">
                            WhyLong QR code generator
                        </Link>{" "}
                        and follow the options available on the page. Before distributing
                        a QR code, scan it yourself to verify that it opens the intended
                        destination.

                        <button className="px-1.5 py-1 rounded-lg my-2 bg-yellow-500 text-white block"><Link className="text-xs" to={"/products/qr-code-generator"}>Generate QR Now<span><ArrowRight size={16} className="inline"/></span> </Link></button>
                    </>
                ),
                keywords: "make create generate qr code link",
            },
            {
                q: "Where can I use a QR code?",
                a: (
                    <>
                        QR codes can be placed on posters, flyers, business cards,
                        packaging, presentations, menus, event materials, and other
                        places where people need quick access to a URL. For print, make
                        sure the code is large enough to scan and has sufficient contrast.
                    </>
                ),
                keywords: "qr code business cards posters packaging marketing print",
            },
        ],
    },
    {
        id: "analytics",
        title: "Link Analytics",
        description: "Learn how link performance can be understood.",
        icon: "⌁",
        questions: [
            {
                q: "What is link analytics?",
                a: (
                    <>
                        Link analytics refers to data about how a link performs, such as
                        its recorded click activity. These insights can help you understand
                        whether people are interacting with shared links. Available
                        metrics depend on the analytics provided by the product.
                    </>
                ),
                keywords: "link analytics clicks performance tracking",
            },
            {
                q: "How can I access my link analytics?",
                a: (
                    <>
                        Visit the{" "}
                        <Link className="faq-inline-link" to="/products/analytics">
                            WhyLong analytics page
                        </Link>{" "}
                        to learn about link performance insights. Sign in if the relevant
                        information is available only through your personal workspace.\

                        <button className="px-1.5 py-1 rounded-lg my-2 bg-yellow-500 text-white block"><Link className="text-xs" to={"/products/analytics"}>Try Analytics Now<span><ArrowRight size={16} className="inline"/></span> </Link></button>
                    </>
                ),
                keywords: "view click statistics data analytics dashboard",
            },
            {
                q: "Why might my link show no clicks?",
                a: (
                    <>
                        A link may show no recorded clicks if nobody has opened it yet,
                        if activity has not appeared in the interface, or if the
                        particular link or view does not provide the metric you expect.
                        Try opening the link yourself and checking the relevant analytics
                        view again.
                    </>
                ),
                keywords: "zero clicks analytics not updating statistics",
            },
        ],
    },
    {
        id: "account-management",
        title: "Account & Link Management",
        description: "Find answers about your workspace and saved links.",
        icon: "◎",
        questions: [
            {
                q: "What is the WhyLong dashboard?",
                a: (
                    <>
                        The dashboard is the personal workspace for account-based link
                        management. It is the place to look for your saved links and
                        available management features after signing in.
                    </>
                ),
                keywords: "dashboard personal workspace saved links",
            },
            {
                q: "Why should I sign in to WhyLong?",
                a: (
                    <>
                        Signing in gives you access to the account-based features available
                        in your WhyLong workspace. It helps separate your personal link
                        management experience from the public URL-shortening tool.
                    </>
                ),
                keywords: "login sign in account authenticated user",
            },
            {
                q: "Can I manage my shortened links later?",
                a: (
                    <>
                        Account-based link management is intended to help you return to
                        your links after creating them. Sign in and check your dashboard
                        for the management options available to your account.
                    </>
                ),
                keywords: "edit organize manage delete saved short links",
            },
        ],
    },
    {
        id: "privacy-security",
        title: "Privacy, Security & Troubleshooting",
        description: "Use links carefully and resolve common issues.",
        icon: "◇",
        questions: [
            {
                q: "Is every shortened link automatically safe?",
                a: (
                    <>
                        No. A shortened URL hides the full destination from its visible
                        text, so you should only open links from sources you trust. Avoid
                        entering sensitive information after following an unexpected link,
                        and verify the destination whenever possible.
                    </>
                ),
                keywords: "safe security malicious phishing suspicious links",
            },
            {
                q: "Why is my short link not opening?",
                a: (
                    <>
                        Check that you copied the complete short URL and that the
                        destination website is accessible. If the problem continues,
                        generate the link again if appropriate and check whether the
                        destination URL contains a typing error.
                    </>
                ),
                keywords: "broken link error not working redirect issue",
            },
            {
                q: "What should I do if a QR code does not scan?",
                a: (
                    <>
                        Make sure the code is clear, unobstructed, and large enough for
                        the camera to recognize. Improve the lighting, keep sufficient
                        contrast between the code and its background, and test the code
                        with another compatible device.
                    </>
                ),
                keywords: "qr scanning issue camera blurry not working",
            },
        ],
    },
];

const allQuestions = faqCategories.flatMap((category) =>
    category.questions.map((question) => ({
        ...question,
        categoryId: category.id,
        categoryTitle: category.title,
    }))
);

function ChevronIcon({ open }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className={`h-5 w-5 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""
                }`}
        >
            <path
                d="m6 9 6 6 6-6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function FAQ() {
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");
    const [openQuestion, setOpenQuestion] = useState(null);

    useEffect(() => {
        const previousTitle = document.title;
        const description =
            "Find answers about WhyLong, the free URL shortener, QR code generator, link analytics, account management, and troubleshooting.";

        document.title = "FAQs – WhyLong | URL Shortener & Link Tools";

        let metaDescription = document.querySelector('meta[name="description"]');
        const createdDescription = !metaDescription;

        if (!metaDescription) {
            metaDescription = document.createElement("meta");
            metaDescription.name = "description";
            document.head.appendChild(metaDescription);
        }

        const previousDescription = metaDescription.content;
        metaDescription.content = description;

        let canonical = document.querySelector('link[rel="canonical"]');
        const createdCanonical = !canonical;

        if (!canonical) {
            canonical = document.createElement("link");
            canonical.rel = "canonical";
            document.head.appendChild(canonical);
        }

        const previousCanonical = canonical.href;
        canonical.href = `${window.location.origin}/faq`;

        const structuredData = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: allQuestions.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        typeof item.a === "string"
                            ? item.a
                            : item.q === "What is WhyLong?"
                                ? "WhyLong is a URL-shortening and link-management platform with tools such as QR code generation and link analytics."
                                : item.q === "What is a URL shortener?"
                                    ? "A URL shortener converts a long web address into a shorter link that redirects visitors to its destination."
                                    : item.q === "What is a QR code?"
                                        ? "A QR code is a two-dimensional barcode that a compatible phone or scanner can read."
                                        : item.q === "What is link analytics?"
                                            ? "Link analytics refers to data about how a link performs, such as recorded click activity."
                                            : "Visit the WhyLong FAQ page for guidance on this topic.",
                },
            })),
        };

        let jsonLd = document.querySelector('script[data-whylong-faq="true"]');
        const createdJsonLd = !jsonLd;

        if (!jsonLd) {
            jsonLd = document.createElement("script");
            jsonLd.type = "application/ld+json";
            jsonLd.dataset.whylongFaq = "true";
            document.head.appendChild(jsonLd);
        }

        jsonLd.textContent = JSON.stringify(structuredData);

        return () => {
            document.title = previousTitle;
            if (createdDescription) metaDescription.remove();
            else metaDescription.content = previousDescription;

            if (createdCanonical) canonical.remove();
            else canonical.href = previousCanonical;

            if (createdJsonLd) jsonLd.remove();
        };
    }, []);

    const filteredQuestions = useMemo(() => {
        const query = search.trim().toLowerCase();

        return allQuestions.filter((item) => {
            const matchesCategory =
                activeCategory === "all" || item.categoryId === activeCategory;

            const searchableText =
                `${item.q} ${item.keywords} ${item.categoryTitle}`.toLowerCase();

            return matchesCategory && (!query || searchableText.includes(query));
        });
    }, [search, activeCategory]);

    const groupedQuestions = faqCategories
        .map((category) => ({
            ...category,
            questions: filteredQuestions.filter(
                (question) => question.categoryId === category.id
            ),
        }))
        .filter((category) => category.questions.length > 0);

    const selectCategory = (id) => {
        setActiveCategory(id);
        setOpenQuestion(null);
    };

    return (
        <main className="min-h-screen bg-white text-slate-900">
            {/* Hero */}
            <section className="relative overflow-hidden border-b border-slate-200 bg-[#fffdf6]">
                <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-yellow-200/40 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
                    <nav
                        aria-label="Breadcrumb"
                        className="mb-8 flex items-center gap-2 text-sm text-slate-500"
                    >
                        <Link to="/" className="transition hover:text-slate-950">
                            Home
                        </Link>
                        <span aria-hidden="true">/</span>
                        <span className="font-medium text-slate-800">FAQs</span>
                    </nav>

                    <div className="max-w-3xl">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-yellow-800">
                            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                            WhyLong Help Center
                        </div>

                        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                            Frequently Asked{" "}
                            <span className="relative inline-block">
                                Questions
                                <span className="absolute -bottom-1 left-0 -z-0 h-2 w-full bg-yellow-300/70 sm:h-3" />
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                            Everything you need to know about WhyLong — from shortening long
                            URLs and generating QR codes to understanding link analytics and
                            managing your links.
                        </p>

                        <form
                            className="mt-8 flex max-w-2xl items-center gap-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm transition focus-within:border-yellow-400 focus-within:ring-4 focus-within:ring-yellow-100"
                            role="search"
                            onSubmit={(event) => {
                                event.preventDefault();
                                document.getElementById("faq-answers")?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                });
                            }}
                        >
                            <span className="ml-2 h-5 w-5 shrink-0 text-slate-400">
                                <SearchIcon />
                            </span>
                            <input
                                type="search"
                                value={search}
                                onChange={(event) => {
                                    setSearch(event.target.value);
                                    setOpenQuestion(null);
                                }}
                                placeholder="Search questions or topics..."
                                aria-label="Search frequently asked questions"
                                className="min-w-0 flex-1 bg-transparent py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400 sm:text-base"
                            />
                            {search && (
                                <button
                                    type="button"
                                    onClick={() => setSearch("")}
                                    className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-500 hover:bg-slate-100"
                                >
                                    Clear
                                </button>
                            )}
                        </form>

                        <p className="mt-3 text-sm text-slate-500">
                            Search across {allQuestions.length} questions in{" "}
                            {faqCategories.length} help topics.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main help center */}
            <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
                <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">
                    {/* Category sidebar */}
                    <aside className="lg:sticky lg:top-24">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                                Browse by topic
                            </h2>
                            <span className="text-xs text-slate-400">
                                {faqCategories.length} topics
                            </span>
                        </div>

                        <nav aria-label="FAQ categories" className="space-y-1.5">
                            <button
                                type="button"
                                onClick={() => selectCategory("all")}
                                aria-pressed={activeCategory === "all"}
                                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${activeCategory === "all"
                                    ? "bg-slate-950 text-white shadow-sm"
                                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                                    }`}
                            >
                                <span>All questions</span>
                                <span
                                    className={`text-xs ${activeCategory === "all" ? "text-slate-300" : "text-slate-400"
                                        }`}
                                >
                                    {allQuestions.length}
                                </span>
                            </button>

                            {faqCategories.map((category) => {
                                const selected = activeCategory === category.id;

                                return (
                                    <button
                                        key={category.id}
                                        type="button"
                                        onClick={() => selectCategory(category.id)}
                                        aria-pressed={selected}
                                        className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition ${selected
                                            ? "bg-yellow-50 font-bold text-slate-950 ring-1 ring-yellow-300"
                                            : "font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                                            }`}
                                    >
                                        <span
                                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-base ${selected
                                                ? "bg-yellow-300 text-slate-950"
                                                : "bg-slate-100 text-slate-600"
                                                }`}
                                        >
                                            {category.icon}
                                        </span>
                                        <span className="min-w-0 flex-1">{category.title}</span>
                                        {selected && (
                                            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                                        )}
                                    </button>
                                );
                            })}
                        </nav>

                        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-300 text-lg font-bold text-slate-950">
                                ?
                            </div>
                            <h3 className="mt-4 font-bold text-slate-900">
                                Looking for a tool?
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Go directly to a WhyLong tool and explore its available
                                features.
                            </p>
                            <Link
                                to="/"
                                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-slate-900 underline decoration-yellow-400 decoration-2 underline-offset-4 transition hover:text-yellow-700"
                            >
                                Open URL shortener <span aria-hidden="true">↗</span>
                            </Link>
                        </div>
                    </aside>

                    {/* FAQ content */}
                    <div id="faq-answers" className="min-w-0 scroll-mt-24">
                        <div className="mb-8 flex flex-col justify-between gap-3 border-b border-slate-200 pb-6 sm:flex-row sm:items-end">
                            <div>
                                <p className="text-sm font-semibold text-yellow-700">
                                    Help & documentation
                                </p>
                                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                                    {search
                                        ? "Search results"
                                        : activeCategory === "all"
                                            ? "How can we help?"
                                            : faqCategories.find((c) => c.id === activeCategory)?.title}
                                </h2>
                                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                                    {search
                                        ? `Showing ${filteredQuestions.length} matching ${filteredQuestions.length === 1 ? "answer" : "answers"
                                        }.`
                                        : activeCategory === "all"
                                            ? "Browse answers by topic or expand a question to learn more."
                                            : faqCategories.find((c) => c.id === activeCategory)?.description}
                                </p>
                            </div>
                            <span className="shrink-0 text-sm font-medium text-slate-400">
                                {filteredQuestions.length}{" "}
                                {filteredQuestions.length === 1 ? "result" : "results"}
                            </span>
                        </div>

                        {groupedQuestions.length > 0 ? (
                            <div className="space-y-10">
                                {groupedQuestions.map((category) => (
                                    <section key={category.id} aria-labelledby={`heading-${category.id}`}>
                                        {activeCategory === "all" && !search && (
                                            <div className="mb-4 flex items-start gap-3">
                                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-xl text-slate-900">
                                                    {category.icon}
                                                </span>
                                                <div>
                                                    <h3
                                                        id={`heading-${category.id}`}
                                                        className="text-lg font-bold text-slate-950"
                                                    >
                                                        {category.title}
                                                    </h3>
                                                    <p className="mt-1 text-sm leading-6 text-slate-500">
                                                        {category.description}
                                                    </p>
                                                </div>
                                            </div>
                                        )}

                                        <div className="divide-y divide-slate-200 border-y border-slate-200">
                                            {category.questions.map((item, index) => {
                                                const questionId = `${category.id}-${item.q}`;
                                                const isOpen = openQuestion === questionId;

                                                return (
                                                    <article key={item.q} className="py-1">
                                                        <h3>
                                                            <button
                                                                type="button"
                                                                aria-expanded={isOpen}
                                                                aria-controls={`answer-${category.id}-${index}`}
                                                                onClick={() =>
                                                                    setOpenQuestion(isOpen ? null : questionId)
                                                                }
                                                                className="group flex w-full items-center gap-4 py-5 text-left"
                                                            >
                                                                <span
                                                                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition ${isOpen
                                                                        ? "bg-yellow-300 text-slate-950"
                                                                        : "bg-slate-100 text-slate-500 group-hover:bg-yellow-100 group-hover:text-slate-900"
                                                                        }`}
                                                                >
                                                                    {String(index + 1).padStart(2, "0")}
                                                                </span>
                                                                <span className="flex-1 text-[15px] font-semibold leading-6 text-slate-800 transition group-hover:text-slate-950 sm:text-base">
                                                                    {item.q}
                                                                </span>
                                                                <span
                                                                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${isOpen
                                                                        ? "bg-yellow-100 text-slate-900"
                                                                        : "bg-slate-50 text-slate-500 group-hover:bg-slate-100"
                                                                        }`}
                                                                >
                                                                    <ChevronIcon open={isOpen} />
                                                                </span>
                                                            </button>
                                                        </h3>

                                                        <div
                                                            id={`answer-${category.id}-${index}`}
                                                            hidden={!isOpen}
                                                            className="pb-6 pl-12 pr-2 text-sm leading-7 text-slate-600 sm:pl-16 sm:text-[15px]"
                                                        >
                                                            {item.a}
                                                        </div>
                                                    </article>
                                                );
                                            })}
                                        </div>
                                    </section>
                                ))}
                            </div>
                        ) : (
                            <div className="rounded-2xl border border-dashed border-slate-300 px-6 py-16 text-center">
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
                                    <span className="h-6 w-6">
                                        <SearchIcon />
                                    </span>
                                </div>
                                <h3 className="mt-5 text-lg font-bold text-slate-950">
                                    No matching questions found
                                </h3>
                                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                                    Try another keyword or browse all topics to find the answer
                                    you're looking for.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setSearch("");
                                        setActiveCategory("all");
                                        setOpenQuestion(null);
                                    }}
                                    className="mt-5 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
                                >
                                    Show all questions
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Related tools */}
            <section className="border-t border-slate-200 bg-slate-50">
                <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-widest text-yellow-700">
                            Explore WhyLong
                        </p>
                        <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                            The right tools for every link
                        </h2>
                        <p className="mt-3 leading-7 text-slate-600">
                            Explore the tools and resources available on WhyLong to make
                            sharing and managing links easier.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <Link
                            to="/products/url-shortener"
                            className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-lg hover:shadow-slate-200/60"
                        >
                            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-100 text-xl">
                                ↗
                            </span>
                            <h3 className="mt-5 text-lg font-bold text-slate-950">
                                URL Shortener
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Create concise, shareable URLs from long web addresses.
                            </p>
                            <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-yellow-700">
                                Shorten a URL <span aria-hidden="true">→</span>
                            </span>
                        </Link>

                        <Link
                            to="/products/qr-code-generator"
                            className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-lg hover:shadow-slate-200/60"
                        >
                            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-100 text-xl">
                                ▦
                            </span>
                            <h3 className="mt-5 text-lg font-bold text-slate-950">
                                QR Code Generator
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Turn URLs into scannable codes for digital and printed
                                materials.
                            </p>
                            <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-yellow-700">
                                Generate a QR code <span aria-hidden="true">→</span>
                            </span>
                        </Link>

                        <Link
                            to="/products/analytics"
                            className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-lg hover:shadow-slate-200/60"
                        >
                            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-100 text-xl">
                                ⌁
                            </span>
                            <h3 className="mt-5 text-lg font-bold text-slate-950">
                                Link Analytics
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Explore link performance and the analytics available in
                                WhyLong.
                            </p>
                            <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-yellow-700">
                                Explore analytics <span aria-hidden="true">→</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}