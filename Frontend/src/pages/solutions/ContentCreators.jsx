
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    Check,
    ChevronDown,
    Link2,
    QrCode,
    ChartNoAxesCombined,
    Sparkles,
    Share2,
    BarChart3,
} from "lucide-react";
import SolutionsFAQ from "../../components/SolutionsFAQS";
import MoreThanShortener from "../../components/Home/MoreThanShortener";
import Solutions from "../../components/Home/Solutions";

const SITE_URL = "https://whylong.vercel.app";
const PAGE_URL = `${SITE_URL}/solutions/content-creators`;

const benefits = [
    {
        icon: Link2,
        title: "One link for all your content",
        description:
            "Create short, memorable links for your videos, portfolios, newsletters, social profiles, and latest content. Make sharing easier wherever your audience finds you.",
    },
    {
        icon: QrCode,
        title: "Custom QR codes for your brand",
        description:
            "Turn your content links into branded QR codes. Customize colors, patterns, logos, and calls to action to match your creator identity.",
    },
    {
        icon: ChartNoAxesCombined,
        title: "Understand link engagement",
        description:
            "See how your tracked links perform. Review clicks, activity trends, devices, and available geographic insights from your dashboard.",
    },
    {
        icon: Share2,
        title: "Share across every platform",
        description:
            "Use your short links in social bios, video descriptions, stories, newsletters, presentations, and offline promotional materials.",
    },
];

const useCases = [
    {
        title: "Social media creators",
        description:
            "Share your Instagram, TikTok, YouTube, and other social profiles through clean, easy-to-share links.",
        image:
            "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1000&q=85",
        alt: "Social media content displayed across digital devices",
        points: [
            "Share your latest posts and profiles",
            "Keep links organized across platforms",
            "Create QR codes for your social profiles",
        ],
    },
    {
        title: "YouTubers and video creators",
        description:
            "Make video descriptions cleaner with short links to resources, products, playlists, sponsorships, and your other channels.",
        image:
            "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1000&q=85",
        alt: "Video creator working with a camera",
        points: [
            "Shorten links in video descriptions",
            "Share resources and recommended products",
            "Track engagement on tracked links",
        ],
    },
    {
        title: "Personal brands and portfolios",
        description:
            "Connect your portfolio, work samples, contact pages, and professional profiles with links that are easier to remember and distribute.",
        image:
            "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
        alt: "Creative professionals collaborating on digital projects",
        points: [
            "Share portfolio and personal website links",
            "Create QR codes for business cards",
            "Make professional links easier to distribute",
        ],
    },
];

const faqs = [
    {
        question: "How can content creators use WhyLong?",
        answer:
            "Creators can shorten links to social profiles, videos, portfolios, newsletters, and other resources. They can also generate customized QR codes and review available engagement insights for links created while signed in.",
    },
    {
        question: "Is WhyLong free for content creators?",
        answer:
            "Yes. WhyLong offers free URL shortening with unlimited short URLs and unlimited QR codes. You do not need a credit card to get started.",
    },
    {
        question: "Can I create a QR code for my Instagram or YouTube profile?",
        answer:
            "Yes. Create a link to your profile and use WhyLong's QR code generator to customize its appearance with colors, patterns, and branding elements.",
    },
    {
        question: "Can I track clicks on links I share on social media?",
        answer:
            "For links created while signed in, you can review available click information in your dashboard, including activity trends, timestamps, device details, and approximate geographic insights.",
    },
    {
        question: "Can I use short links in YouTube descriptions?",
        answer:
            "Yes. You can use WhyLong short links in YouTube descriptions, pinned comments, social bios, newsletters, and other places where links are supported.",
    },
    {
        question: "Can I customize QR codes with my creator logo?",
        answer:
            "Yes. WhyLong's QR Studio supports design customization, including colors, patterns, logo placement, brand identity, and calls to action.",
    },
    {
        question: "Can I use WhyLong without creating an account?",
        answer:
            "Yes. You can shorten URLs publicly without signing in. Sign in when you want to manage your links and access your dashboard analytics.",
    },
    {
        question: "Can I create unlimited short links and QR codes?",
        answer:
            "Yes. WhyLong's core offering includes unlimited short URLs and unlimited QR codes, without requiring a paid plan to unlock those limits.",
    },
];

const ContentCreators = () => {
    const [openFaq, setOpenFaq] = useState(0);

    useEffect(() => {
        document.title =
            "WhyLong for Content Creators | Shorten Links, Create QR Codes & Track Engagement";

        const description =
            "Discover how content creators can use WhyLong to shorten links, create branded QR codes, share social profiles, and track link engagement for free.";

        const setMeta = (attribute, key, content) => {
            let element = document.querySelector(
                `meta[${attribute}="${key}"]`
            );

            if (!element) {
                element = document.createElement("meta");
                element.setAttribute(attribute, key);
                document.head.appendChild(element);
            }

            element.setAttribute("content", content);
        };

        setMeta("name", "description", description);
        setMeta(
            "name",
            "keywords",
            "URL shortener for content creators, QR code generator for creators, social media link shortener, YouTube link shortener, Instagram QR code, creator link management"
        );
        setMeta("property", "og:title", document.title);
        setMeta("property", "og:description", description);
        setMeta("property", "og:url", PAGE_URL);
        setMeta("property", "og:type", "website");
        setMeta("name", "twitter:card", "summary_large_image");

        let canonical = document.querySelector(
            'link[rel="canonical"]'
        );

        if (!canonical) {
            canonical = document.createElement("link");
            canonical.rel = "canonical";
            document.head.appendChild(canonical);
        }

        canonical.href = PAGE_URL;
    }, []);

    return (
        <main className="overflow-hidden bg-white text-slate-900">
            {/* HERO */}
            <section className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-amber-50">
                <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-yellow-200/30 blur-3xl" />
                <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-amber-100/50 blur-3xl" />

                <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:py-28">
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-white px-4 py-2 text-sm font-semibold text-amber-800 shadow-sm">
                            <Sparkles size={16} />
                            WhyLong for Creators
                        </span>

                        <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                            Create. Share.
                            <span className="block text-amber-600">
                                Grow your audience.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                            Your content deserves better links. Shorten URLs,
                            create branded QR codes, and understand how people
                            engage with your shared content — all with WhyLong.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 font-semibold text-white transition hover:bg-amber-600"
                            >
                                Start creating for free
                                <ArrowRight size={18} />
                            </Link>

                            <Link
                                to="/products/qr-code-generator"
                                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-800 transition hover:border-yellow-400"
                            >
                                Explore QR Studio
                                <QrCode size={18} />
                            </Link>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
                            {[
                                "Unlimited short URLs",
                                "Unlimited QR codes",
                                "No credit card required",
                            ].map((item) => (
                                <span key={item} className="flex items-center gap-2">
                                    <Check
                                        size={16}
                                        className="text-amber-600"
                                    />
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 rounded-[2rem] bg-yellow-200/40 blur-2xl" />
                        <img
                            src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=85"
                            alt="Content creator working on digital content"
                            className="relative h-[360px] w-full rounded-[2rem] object-cover shadow-2xl sm:h-[460px]"
                        />

                        <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl sm:left-8 sm:right-8">
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                        Your creator toolkit
                                    </p>
                                    <p className="mt-1 font-bold text-slate-950">
                                        Links, QR codes & insights
                                    </p>
                                </div>
                                <div className="flex -space-x-2">
                                    {[Link2, QrCode, BarChart3].map(
                                        (Icon, index) => (
                                            <span
                                                key={index}
                                                className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-white bg-yellow-100 text-slate-900"
                                            >
                                                <Icon size={18} />
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFITS */}
            <section className="bg-slate-50 py-20 lg:py-24">
                <div className="mx-auto max-w-7xl px-5 sm:px-8">
                    <div className="max-w-2xl text-center mx-auto">
                        <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
                            Everything in one place
                        </p>

                        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                            Tools that make content sharing simpler
                        </h2>

                        <p className="mt-4 leading-7 text-slate-600">
                            Spend less time managing links and more time
                            creating content your audience loves.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {benefits.map(({ icon: Icon, title, description }) => (
                            <article
                                key={title}
                                className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-xl hover:shadow-slate-200/50"
                            >
                                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-amber-800">
                                    <Icon size={23} />
                                </span>

                                <h3 className="mt-6 text-lg font-bold text-slate-950">
                                    {title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    {description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* USE CASES */}
            <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
                        Made for every creator
                    </p>

                    <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                        One platform. Different ways to create.
                    </h2>

                    <p className="mt-4 leading-7 text-slate-600">
                        Whether you publish videos, build a personal brand,
                        or create content for social media, WhyLong helps
                        you share your work more effectively.
                    </p>
                </div>

                <div className="mt-14 space-y-16 lg:space-y-24">
                    {useCases.map((item, index) => (
                        <div
                            key={item.title}
                            className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                                }`}
                        >
                            <div className="overflow-hidden rounded-3xl">
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    loading="lazy"
                                    className="h-[300px] w-full object-cover transition duration-500 hover:scale-105 sm:h-[390px]"
                                />
                            </div>

                            <div>
                                <span className="text-sm font-bold uppercase tracking-widest text-amber-700">
                                    0{index + 1} / Creator use case
                                </span>

                                <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950">
                                    {item.title}
                                </h3>

                                <p className="mt-5 leading-8 text-slate-600">
                                    {item.description}
                                </p>

                                <ul className="mt-6 space-y-4">
                                    {item.points.map((point) => (
                                        <li
                                            key={point}
                                            className="flex items-start gap-3 text-slate-700"
                                        >
                                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-100 text-amber-800">
                                                <Check size={13} />
                                            </span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    to="/"
                                    className="mt-8 inline-flex p-4 hover:bg-amber-400 rounded-2xl items-center gap-2 font-bold text-amber-800 transition hover:gap-3"
                                >
                                    Try WhyLong for free
                                    <ArrowRight size={17} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* PLATFORM FEATURES */}
            <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-24">
                <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
                        Your creator toolkit
                    </p>

                    <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                        Everything you need to share smarter
                    </h2>

                    <p className="mt-5 leading-8 text-slate-600">
                        WhyLong combines the essential tools for managing
                        and sharing your online presence. From your first
                        short link to a customized QR code, keep your
                        sharing workflow simple.
                    </p>

                    <div className="mt-8 space-y-5">
                        {[
                            {
                                icon: Link2,
                                title: "Free URL Shortener",
                                text: "Create unlimited short URLs without a credit card.",
                                path: "/products/url-shortener",
                            },
                            {
                                icon: QrCode,
                                title: "QR Code Generator",
                                text: "Customize QR codes with colors, logos, and brand elements.",
                                path: "/products/qr-code-generator",
                            },
                            {
                                icon: BarChart3,
                                title: "Link Analytics",
                                text: "Review clicks and available engagement insights.",
                                path: "/products/analytics",
                            },
                        ].map(({ icon: Icon, title, text, path }) => (
                            <Link
                                to={path}
                                key={title}
                                className="flex items-start gap-4 rounded-2xl p-3 transition hover:bg-yellow-50"
                            >
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-amber-800">
                                    <Icon size={21} />
                                </span>

                                <span>
                                    <span className="font-bold text-slate-950">
                                        {title}
                                    </span>
                                    <span className="mt-1 block text-sm leading-6 text-slate-600">
                                        {text}
                                    </span>
                                </span>
                                <ArrowRight
                                    size={17}
                                    className="ml-auto mt-2 shrink-0 text-amber-700"
                                />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -inset-4 rounded-3xl bg-yellow-100 blur-2xl" />
                    <img
                        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
                        alt="Creative team planning and reviewing content"
                        loading="lazy"
                        className="relative h-[380px] w-full rounded-3xl object-cover shadow-xl sm:h-[470px]"
                    />
                </div>
            </section>

            <Solutions/>

            {/* Final CTA */}
            <section className="px-5 py-20 bg-gray-950">
                <div className="mx-auto max-w-5xl rounded-3xl bg-white px-6 py-14 text-center text-black sm:px-12">
                    <span className="text-sm font-semibold uppercase tracking-wider text-amber-400">
                        Start growing smarter
                    </span>
                    <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
                        Make every business link work harder.
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-950">
                        Shorten links, create branded QR codes and explore
                        link analytics — all with WhyLong, completely free.
                    </p>
                    <Link
                        to="/"
                        className="mt-8 inline-flex rounded-xl bg-amber-400 px-7 py-3.5 font-bold text-gray-950 transition hover:bg-amber-300"
                    >
                        Try WhyLong for Free →
                    </Link>
                </div>
            </section>
            <SolutionsFAQ solution="Content Creators" faqs={faqs} />
            <MoreThanShortener/>
        </main>
    );
};

export default ContentCreators;