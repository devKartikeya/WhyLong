import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
    ArrowRight,
    Check,
    ChevronDown,
    Copy,
    ExternalLink,
    Globe,
    Link2,
    MessageCircle,
    ShieldCheck,
    Zap,
} from "lucide-react";

const API_BASE_URL =
    import.meta.env.VITE_API_URL || "http://localhost:3000";

const faqs = [
    {
        question: "What is a URL shortener?",
        answer:
            "A URL shortener is a tool that converts a long web address into a shorter link. When someone opens the short link, the service redirects them to the original destination. It makes links easier to share, read and manage.",
    },
    {
        question: "How do I shorten a URL with WhyLong?",
        answer:
            "Copy the complete URL you want to share, paste it into the URL shortener above, and select the shorten option. Once WhyLong returns your short link, copy it and share it wherever you need. Always open the generated link once to confirm that it leads to the intended destination.",
    },
    {
        question: "Is WhyLong free to use?",
        answer:
            "WhyLong is designed to make link shortening accessible without adding unnecessary friction. You can use the public URL-shortening tool to create short links. Check the current product interface for any account-specific features or restrictions.",
    },
    {
        question: "Will shortening a URL change the original webpage?",
        answer:
            "No. Shortening a URL creates a separate link that redirects to the destination you provide. It does not rewrite the original webpage or change the original URL itself. The destination must still be available for the redirect to reach it successfully.",
    },
    {
        question: "Do short URLs expire?",
        answer:
            "A short URL does not inherently have to expire. Its availability depends on the shortening service's policies, the link's status and whether the destination remains accessible. Do not assume a link will work forever unless the service explicitly guarantees that.",
    },
    {
        question: "Can I use a shortened URL on social media?",
        answer:
            "Yes. Short URLs can be shared in social media posts, bios, comments, messages and other places where links are accepted. Follow the platform's rules and make sure your destination is relevant to the audience.",
    },
    {
        question: "Can I shorten a URL more than once?",
        answer:
            "Technically, a URL can be shortened by multiple services, but chaining short links is usually unnecessary. Each additional redirect can add latency and another point of failure. For simpler sharing and troubleshooting, create one short link directly to the intended destination.",
    },
    {
        question: "Are shortened URLs safe?",
        answer:
            "A shortened URL is not automatically safe or unsafe. It can hide the full destination from a quick glance, so only open links from sources you trust. Be cautious with unexpected links, login requests and pages asking for payment or personal information.",
    },
    {
        question: "Can a shortened URL help with SEO?",
        answer:
            "A short URL is mainly a sharing and redirection tool, not a guaranteed SEO ranking boost. Search performance depends on many factors, including useful content, crawlability, page experience and appropriate indexing. Use direct, descriptive URLs for pages on your own website when practical, and avoid relying on short links as an SEO shortcut.",
    },
    {
        question: "Why might a shortened URL stop working?",
        answer:
            "A link may fail if the shortening service is unavailable, the short link has been disabled or removed, the destination has moved, or the destination server is down. If a link fails, check the original destination and the short link's status before sharing it again.",
    },
];

const steps = [
    {
        number: "01",
        title: "Copy your destination URL",
        description:
            "Open the webpage you want people to visit and copy its full address from your browser or the relevant app.",
    },
    {
        number: "02",
        title: "Paste it into WhyLong",
        description:
            "Enter the complete URL in the shortening field. Make sure you have copied the intended address rather than an unrelated page.",
    },
    {
        number: "03",
        title: "Generate your short link",
        description:
            "Submit the URL and let WhyLong create a shorter link that points to your destination.",
    },
    {
        number: "04",
        title: "Copy, test and share",
        description:
            "Copy the generated link, open it to verify the destination, and then share it in your post, message, document or website.",
    },
];

const useCases = [
    {
        icon: MessageCircle,
        title: "Social media and messaging",
        description:
            "Share links in posts, bios, comments, community messages and chats without displaying a long string of URL parameters.",
    },
    {
        icon: Globe,
        title: "Websites and online content",
        description:
            "Use shorter links in resource lists, support articles, presentations and other content where a readable link is useful.",
    },
    {
        icon: Zap,
        title: "Campaigns and promotions",
        description:
            "Keep a link easier to distribute across promotional messages, newsletters and campaign materials. Measure campaign performance separately using appropriate analytics tools.",
    },
];

export default function UrlShortener() {
    const [originalUrl, setOriginalUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [copied, setCopied] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);

    useEffect(() => {
        const previousTitle = document.title;
        const description =
            "Shorten long URLs into easy-to-share links with WhyLong. Learn how URL shortening works, how to create a short link, and how to share links responsibly.";

        document.title = "Free URL Shortener | Shorten Long Links - WhyLong";

        let meta = document.querySelector('meta[name="description"]');
        const createdMeta = !meta;

        if (!meta) {
            meta = document.createElement("meta");
            meta.name = "description";
            document.head.appendChild(meta);
        }

        const previousDescription = meta.content;
        meta.content = description;

        return () => {
            document.title = previousTitle;

            if (createdMeta) {
                meta.remove();
            } else {
                meta.content = previousDescription;
            }
        };
    }, []);

    const handleShorten = async (event) => {
        event.preventDefault();
        setError("");
        setShortUrl("");
        setCopied(false);

        const value = originalUrl.trim();

        if (!value) {
            setError("Enter a URL to get started.");
            return;
        }

        let parsedUrl;

        try {
            parsedUrl = new URL(value);
        } catch {
            setError("Enter a valid URL, including https:// or http://.");
            return;
        }

        if (!["http:", "https:"].includes(parsedUrl.protocol)) {
            setError("Only HTTP and HTTPS URLs can be shortened.");
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch(`${API_BASE_URL}/urls/shorten`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ originalUrl: value }),
            });

            const result = await response.json().catch(() => ({}));

            if (!response.ok) {
                throw new Error(
                    result.message ||
                    result.error ||
                    "We couldn't shorten this URL. Please try again."
                );
            }

            const generatedUrl =
                result.shortUrl ||
                result.data?.shortUrl;

            if (!generatedUrl) {
                throw new Error(
                    "The server did not return a short URL. Please try again."
                );
            }

            setShortUrl(generatedUrl);
        } catch (err) {
            setError(
                err.message ||
                "Unable to connect to WhyLong. Please try again shortly."
            );
        } finally {
            setIsLoading(false);
        }
    };

    const handleCopy = async () => {
        if (!shortUrl) return;

        try {
            await navigator.clipboard.writeText(shortUrl);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2000);
        } catch {
            setError(
                "Automatic copying failed. Select and copy the short URL manually."
            );
        }
    };
    const SITE_URL = "https://whylong.vercel.app";
    const PAGE_URL = `${SITE_URL}/products/url-shortener`;

    const OG_IMAGE = `${SITE_URL}/og-image.png`;

    const title = "Free URL Shortener - Shorten Long Links | WhyLong";

    const description =
        "Shorten long URLs into easy-to-share links with WhyLong. Create a short link in seconds and learn how URL shortening works.";

    return (
        <main className="min-h-screen bg-white text-slate-900">
            <Helmet>
                {/* Primary SEO */}
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={PAGE_URL} />

                {/* Indexing */}
                <meta
                    name="robots"
                    content="index, follow, max-image-preview:large"
                />
                <meta
                    name="googlebot"
                    content="index, follow, max-image-preview:large"
                />

                {/* Language and browser */}
                <meta httpEquiv="content-language" content="en" />

                {/* Open Graph / Facebook / LinkedIn */}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="WhyLong" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:url" content={PAGE_URL} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={OG_IMAGE} />
                <meta
                    property="og:image:alt"
                    content="WhyLong free URL shortener"
                />

                {/* X / Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={OG_IMAGE} />
                <meta
                    name="twitter:image:alt"
                    content="WhyLong URL shortening tool"
                />

                {/* Theme */}
                <meta name="theme-color" content="#FBBF24" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "WebPage",
                                "@id": `${PAGE_URL}#webpage`,
                                url: PAGE_URL,
                                name: title,
                                description,
                                isPartOf: {
                                    "@type": "WebSite",
                                    "@id": `${SITE_URL}/#website`,
                                    name: "WhyLong",
                                    url: `${SITE_URL}/`,
                                },
                                breadcrumb: {
                                    "@id": `${PAGE_URL}#breadcrumb`,
                                },
                            },
                            {
                                "@type": "SoftwareApplication",
                                "@id": `${PAGE_URL}#software`,
                                name: "WhyLong URL Shortener",
                                applicationCategory: "UtilitiesApplication",
                                operatingSystem: "Any",
                                url: PAGE_URL,
                                description,
                            },
                            {
                                "@type": "BreadcrumbList",
                                "@id": `${PAGE_URL}#breadcrumb`,
                                itemListElement: [
                                    {
                                        "@type": "ListItem",
                                        position: 1,
                                        name: "Home",
                                        item: `${SITE_URL}/`,
                                    },
                                    {
                                        "@type": "ListItem",
                                        position: 2,
                                        name: "Products",
                                        item: `${SITE_URL}/products`,
                                    },
                                    {
                                        "@type": "ListItem",
                                        position: 3,
                                        name: "URL Shortener",
                                        item: PAGE_URL,
                                    },
                                ],
                            },
                        ],
                    })}
                </script>
            </Helmet>
            {/* Hero and working URL shortener */}
            <section
                id="url-shortener"
                className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-amber-50/80 via-white to-white"
            >
                <div className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl" />
                <div className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-yellow-200/25 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                            <Zap size={15} className="text-amber-500" />
                            A simpler way to share links
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.12]">
                            Free URL Shortener
                            <span className="mt-2 block text-amber-500">
                                Make long links easier to share.
                            </span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                            Turn long web addresses into short, shareable links with
                            WhyLong. Paste a URL, create your short link, and use it
                            wherever you connect with people online.
                        </p>

                        <form
                            onSubmit={handleShorten}
                            className="mx-auto mt-10 max-w-3xl rounded-2xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/50 sm:p-4"
                        >
                            <label htmlFor="long-url" className="sr-only">
                                Enter the URL you want to shorten
                            </label>

                            <div className="flex flex-col gap-3 sm:flex-row">
                                <div className="flex min-w-0 flex-1 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4">
                                    <Link2
                                        size={20}
                                        className="shrink-0 text-slate-400"
                                    />
                                    <input
                                        id="long-url"
                                        type="url"
                                        inputMode="url"
                                        autoComplete="url"
                                        value={originalUrl}
                                        onChange={(event) =>
                                            setOriginalUrl(event.target.value)
                                        }
                                        placeholder="https://example.com/your/long/url"
                                        className="min-w-0 flex-1 bg-transparent py-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 sm:text-base"
                                        aria-describedby={error ? "url-error" : undefined}
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-4 font-semibold text-slate-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {isLoading ? "Shortening..." : "Shorten URL"}
                                    {!isLoading && <ArrowRight size={18} />}
                                </button>
                            </div>

                            {error && (
                                <p
                                    id="url-error"
                                    role="alert"
                                    className="mt-3 text-left text-sm text-red-600"
                                >
                                    {error}
                                </p>
                            )}

                            {shortUrl && (
                                <div
                                    aria-live="polite"
                                    className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-left"
                                >
                                    <p className="mb-2 text-sm font-medium text-slate-700">
                                        Your short link is ready
                                    </p>

                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                                        <a
                                            href={shortUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="min-w-0 flex-1 break-all font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4"
                                        >
                                            {shortUrl}
                                        </a>

                                        <div className="flex shrink-0 gap-2">
                                            <button
                                                type="button"
                                                onClick={handleCopy}
                                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
                                            >
                                                {copied ? <Check size={16} /> : <Copy size={16} />}
                                                {copied ? "Copied" : "Copy"}
                                            </button>

                                            <a
                                                href={shortUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Open your short link in a new tab"
                                                className="inline-flex items-center justify-center rounded-lg border border-amber-200 bg-white px-3 py-2.5 text-slate-700 hover:bg-amber-100"
                                            >
                                                <ExternalLink size={16} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <p className="mt-3 text-left text-xs leading-5 text-slate-500">
                                Only shorten links you have permission to share. Check
                                your generated link before distributing it.
                            </p>
                        </form>

                        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-600">
                            <span className="inline-flex items-center gap-2">
                                <Check size={16} className="text-amber-600" />
                                Simple link creation
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <Check size={16} className="text-amber-600" />
                                Easy to copy and share
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <Check size={16} className="text-amber-600" />
                                No installation required
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Explanation */}
            <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
                <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-600">
                            Understanding URL shortening
                        </p>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                            What does a URL shortener actually do?
                        </h2>
                    </div>

                    <div className="space-y-5 text-base leading-8 text-slate-600">
                        <p>
                            A URL, or Uniform Resource Locator, is the address used to
                            locate a resource on the web. Some URLs are naturally short.
                            Others become long because they contain nested paths, query
                            parameters, tracking values or other information.
                        </p>

                        <p>
                            A URL shortener creates a separate, shorter address that
                            points to the original destination. When a person opens that
                            short link, the shortening service looks up the destination
                            and redirects the browser to it.
                        </p>

                        <p>
                            For example, instead of sharing a lengthy product or article
                            address, you can share a compact link generated by WhyLong.
                            The recipient can open it to reach the destination, provided
                            both the short link and the original page are available.
                        </p>

                        <p>
                            Shortening does not make the original webpage smaller, change
                            its content or guarantee privacy. It simply gives you a
                            different address to share.
                        </p>
                    </div>
                </div>

                <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
                    <div className="grid gap-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                        <div className="min-w-0">
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                Original destination
                            </p>
                            <div className="mt-3 break-all rounded-xl border border-slate-200 bg-white p-4 font-mono text-sm leading-6 text-slate-600">
                                https://example.com/articles/how-url-shorteners-work
                                ?source=newsletter
                            </div>
                        </div>

                        <div className="flex justify-center text-amber-500">
                            <ArrowRight size={26} className="hidden sm:block" />
                            <ChevronDown size={26} className="sm:hidden" />
                        </div>

                        <div className="min-w-0">
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                Short link
                            </p>
                            <div className="mt-3 break-all rounded-xl border border-amber-200 bg-amber-50 p-4 font-mono text-sm leading-6 text-amber-800">
                                your-generated-short-link
                            </div>
                            <p className="mt-2 text-xs text-slate-500">
                                Illustrative example only; not a live WhyLong link.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="border-y border-slate-100 bg-slate-50/70">
                <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-600">
                            How it works
                        </p>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                            How to shorten a URL with WhyLong
                        </h2>
                        <p className="mt-4 leading-7 text-slate-600">
                            You do not need to edit the address manually or install
                            software. Follow these steps to create and share a short link.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step) => (
                            <article
                                key={step.number}
                                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50"
                            >
                                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 font-bold text-amber-800">
                                    {step.number}
                                </span>
                                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                                    {step.title}
                                </h3>
                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    {step.description}
                                </p>
                            </article>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <a
                            href="#url-shortener"
                            className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-amber-300"
                        >
                            Shorten a URL now
                            <ArrowRight size={18} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-600">
                        Why use WhyLong?
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                        Make link sharing more practical
                    </h2>
                    <p className="mt-4 leading-7 text-slate-600">
                        Short links are useful when the address itself should not
                        distract from the message. Here is where they can help.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    <article className="rounded-2xl border border-slate-200 p-7">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                            <Link2 size={23} />
                        </div>
                        <h3 className="mt-5 text-xl font-semibold">
                            Easier to share
                        </h3>
                        <p className="mt-3 leading-7 text-slate-600">
                            A shorter address is often easier to place in a message,
                            presentation, caption or document without overwhelming the
                            surrounding text.
                        </p>
                    </article>

                    <article className="rounded-2xl border border-slate-200 p-7">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                            <Zap size={23} />
                        </div>
                        <h3 className="mt-5 text-xl font-semibold">
                            A simpler workflow
                        </h3>
                        <p className="mt-3 leading-7 text-slate-600">
                            Generate a link in a few steps and copy it directly for
                            sharing. You do not have to manually rewrite long URLs or
                            remove parameters yourself.
                        </p>
                    </article>

                    <article className="rounded-2xl border border-slate-200 p-7">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                            <ShieldCheck size={23} />
                        </div>
                        <h3 className="mt-5 text-xl font-semibold">
                            Keep the destination in mind
                        </h3>
                        <p className="mt-3 leading-7 text-slate-600">
                            Use short links to make sharing convenient, while checking
                            the destination and following responsible link-sharing
                            practices.
                        </p>
                    </article>
                </div>
            </section>

            {/* Use cases */}
            <section className="border-y border-slate-100 bg-white">
                <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-600">
                            Everyday applications
                        </p>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                            Where can you use a short URL?
                        </h2>
                        <p className="mt-4 leading-7 text-slate-600">
                            URL shortening is useful across many online activities.
                            The best use is one where a compact, easy-to-share address
                            makes the next step clearer for your audience.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {useCases.map(({ icon: Icon, title, description }) => (
                            <article
                                key={title}
                                className="rounded-2xl bg-slate-50 p-7"
                            >
                                <Icon size={25} className="text-amber-600" />
                                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    {description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison */}
            <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-600">
                            Choosing the right link
                        </p>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                            Long URL vs. short URL
                        </h2>
                        <p className="mt-5 leading-8 text-slate-600">
                            Neither format is automatically better in every situation.
                            A full URL can show a descriptive path and destination
                            structure, while a short URL can be more convenient to
                            distribute. Choose based on where the link will appear and
                            what your audience needs to know.
                        </p>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-slate-200">
                        <div className="grid grid-cols-2 bg-slate-50">
                            <div className="border-r border-slate-200 p-4 font-semibold">
                                Long URL
                            </div>
                            <div className="p-4 font-semibold">Short URL</div>
                        </div>

                        {[
                            [
                                "Can show a descriptive path",
                                "Usually more compact",
                            ],
                            [
                                "Destination may be easier to inspect",
                                "Destination may be less obvious",
                            ],
                            [
                                "Directly identifies the address",
                                "Depends on a redirect service",
                            ],
                            [
                                "Useful for direct website links",
                                "Useful for convenient sharing",
                            ],
                        ].map(([longUrl, shortUrl]) => (
                            <div
                                key={longUrl}
                                className="grid grid-cols-2 border-t border-slate-200"
                            >
                                <div className="border-r border-slate-200 p-4 text-sm leading-6 text-slate-600">
                                    {longUrl}
                                </div>
                                <div className="p-4 text-sm leading-6 text-slate-600">
                                    {shortUrl}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Responsible sharing */}
            <section className="bg-slate-950 text-white">
                <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-center">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3">
                            <ShieldCheck size={25} className="text-amber-400" />
                            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-400">
                                Share responsibly
                            </p>
                        </div>
                        <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                            A shorter link is not a security guarantee.
                        </h2>
                        <p className="mt-4 leading-7 text-slate-300">
                            Short URLs can make a destination less obvious before a
                            person opens the link. Share links that are relevant and
                            trustworthy, avoid misleading recipients, and never use
                            link shortening to disguise phishing or harmful content.
                            If a link arrives unexpectedly, verify its source before
                            opening it.
                        </p>
                    </div>

                    <a
                        href="#url-shortener"
                        className="inline-flex w-fit items-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-amber-300"
                    >
                        Create a short link
                        <ArrowRight size={18} />
                    </a>
                </div>
            </section>

            {/* FAQs — keep at the end of the page */}
            <section
                id="faqs"
                className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20"
            >
                <div className="text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-600">
                        Frequently asked questions
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                        URL Shortener FAQs
                    </h2>
                    <p className="mt-4 leading-7 text-slate-600">
                        Clear answers to common questions about creating, using and
                        sharing shortened URLs.
                    </p>
                </div>

                <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
                    {faqs.map((faq, index) => {
                        const isOpen = openFaq === index;
                        const answerId = `url-faq-answer-${index}`;

                        return (
                            <article key={faq.question} className="py-1">
                                <button
                                    type="button"
                                    aria-expanded={isOpen}
                                    aria-controls={answerId}
                                    onClick={() =>
                                        setOpenFaq(isOpen ? null : index)
                                    }
                                    className="flex w-full items-center justify-between gap-5 py-5 text-left"
                                >
                                    <span className="font-semibold leading-7 text-slate-900">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        size={20}
                                        className={`shrink-0 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {isOpen && (
                                    <div
                                        id={answerId}
                                        className="max-w-3xl pb-5 pr-6 text-sm leading-7 text-slate-600"
                                    >
                                        {faq.answer}
                                    </div>
                                )}
                            </article>
                        );
                    })}
                </div>

                <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center sm:p-8">
                    <h3 className="text-xl font-bold text-slate-900">
                        Ready to shorten your next link?
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                        Create a short URL and make your next link easier to share.
                    </p>
                    <a
                        href="#url-shortener"
                        className="mt-5 inline-flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-amber-300"
                    >
                        Shorten a URL
                        <ArrowRight size={17} />
                    </a>
                </div>

                <p className="mt-8 text-center text-sm text-slate-500">
                    Want to create a QR code for a link instead?{" "}
                    <Link
                        to="/products/qr-code-generator"
                        className="font-semibold text-amber-700 underline underline-offset-4 hover:text-amber-800"
                    >
                        Try the QR Code Generator
                    </Link>
                    .
                </p>
            </section>
        </main>
    );
}