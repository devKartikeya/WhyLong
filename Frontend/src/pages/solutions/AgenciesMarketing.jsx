import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    Check,
    ChevronDown,
    Link2,
    QrCode,
    ChartNoAxesCombined,
    BriefcaseBusiness,
    Users,
    Megaphone,
    FolderKanban,
    BarChart3,
    Target,
    Sparkles,
    Share2,
} from "lucide-react";
import SolutionsFAQ from "../../components/SolutionsFAQS";
import MoreThanShortener from "../../components/Home/MoreThanShortener";
import Solutions from "../../components/Home/Solutions";

const SITE_URL = "https://whylong.vercel.app";
const PAGE_URL = `${SITE_URL}/solutions/agencies-marketing-teams`;

const benefits = [
    {
        icon: FolderKanban,
        title: "Centralized campaign management",
        description:
            "Keep campaign URLs organized from one dashboard. Manage destination links, monitor their activity, and maintain a clearer view of your marketing operations.",
    },
    {
        icon: QrCode,
        title: "Bridge offline and digital marketing",
        description:
            "Turn print advertisements, product packaging, event materials, and promotional displays into measurable digital touchpoints with customized QR codes.",
    },
    {
        icon: ChartNoAxesCombined,
        title: "Understand campaign engagement",
        description:
            "Go beyond link distribution. Explore clicks, activity trends, device information, and geographic insights to understand how audiences interact with your campaigns.",
    },
    {
        icon: Share2,
        title: "Streamline multi-channel distribution",
        description:
            "Organize destination URLs for social media, email marketing, paid advertisements, websites, and offline promotions while keeping campaign sharing consistent.",
    },
];

const useCases = [
    {
        number: "01",
        title: "Digital marketing agencies",
        description:
            "Coordinate the links behind your marketing campaigns. Whether you're promoting landing pages, distributing lead magnets, running seasonal offers, or launching a new campaign, WhyLong helps keep your destinations organized and accessible.",
        image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1100&q=85",
        alt: "Digital marketing team collaborating on a campaign",
        points: [
            "Organize links for different campaigns and promotions",
            "Monitor engagement across tracked campaign URLs",
            "Keep marketing destinations accessible from one dashboard",
        ],
    },
    {
        number: "02",
        title: "Social media management teams",
        description:
            "Manage the destinations behind social media campaigns. Share product launches, promotional landing pages, lead-generation resources, and content collections while understanding how audiences interact with your links.",
        image:
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1100&q=85",
        alt: "Marketing professionals working together",
        points: [
            "Manage links used across social media channels",
            "Create QR codes for influencer and promotional campaigns",
            "Analyze engagement from tracked links",
        ],
    },
    {
        number: "03",
        title: "Branding and creative agencies",
        description:
            "Extend brand identity beyond digital screens. Create customized QR experiences for product packaging, brochures, business cards, event displays, and client marketing materials.",
        image:
            "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1100&q=85",
        alt: "Creative branding and design workspace",
        points: [
            "Customize QR codes with brand colors and logos",
            "Connect printed materials to digital experiences",
            "Generate downloadable QR assets for campaigns",
        ],
    },
];

const faqs = [
    {
        question: "How can marketing agencies use WhyLong?",
        answer:
            "WhyLong helps agencies organize campaign URLs, manage tracked links, generate branded QR codes, and review engagement insights. It can support product launches, promotional campaigns, social media marketing, lead-generation initiatives, and offline advertising.",
    },
    {
        question: "Does WhyLong provide a centralized dashboard?",
        answer:
            "Yes. Registered users get access to a dashboard where they can manage their links, review click activity, and access available analytics. It provides a centralized place to keep track of your link operations.",
    },
    {
        question: "Can I organize links for different marketing campaigns?",
        answer:
            "Yes. You can create separate short URLs for different campaigns, promotions, landing pages, and marketing channels. This makes it easier to identify and monitor the links associated with your activities.",
    },
    {
        question: "Can I measure engagement from campaign links?",
        answer:
            "Yes. WhyLong provides analytics for tracked links, including click activity, timestamps, device information, and approximate geographic insights. These metrics can help you understand audience engagement and evaluate campaign performance.",
    },
    {
        question: "Can WhyLong support offline marketing campaigns?",
        answer:
            "Absolutely. Generate customized QR codes for brochures, flyers, posters, product packaging, business cards, event signage, and other printed materials. You can connect offline audiences to landing pages and digital campaign destinations.",
    },
    {
        question: "Can I use WhyLong for multiple clients and campaigns?",
        answer:
            "You can create and manage multiple links through your account dashboard, making it useful for organizing different client campaigns and marketing activities. Each tracked link can provide its own engagement information.",
    },
    {
        question: "Is WhyLong suitable for growing marketing teams?",
        answer:
            "WhyLong provides a centralized dashboard, link management, QR customization, and engagement analytics in one platform. These tools can support growing marketing workflows without requiring a paid subscription for basic URL shortening and QR generation.",
    },
    {
        question: "Is WhyLong free for marketing agencies?",
        answer:
            "WhyLong offers free URL shortening with unlimited short URLs and unlimited QR code generation. You can start creating links without a credit card. Dashboard-based link management and analytics are available to registered users.",
    },
];

const AgenciesMarketingTeams = () => {
    const [openFaq, setOpenFaq] = useState(0);

    useEffect(() => {
        document.title =
            "WhyLong for Agencies & Marketing Teams | Manage Campaign Links, Create QR Codes & Track Engagement";

        const description =
            "Manage campaign links, create branded QR codes, and understand link engagement with WhyLong. A free URL shortener and QR code generator for marketing agencies and teams.";

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
            "URL shortener for marketing agencies, campaign link management, QR code generator for marketing, marketing campaign links, branded QR codes, link analytics for agencies"
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
                            Manage campaigns.
                            <span className="block text-amber-600">
                                Own your link operations.
                            </span>
                        </span>

                        <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                            Manage campaigns.
                            <span className="block text-amber-600">
                                Share smarter.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                            Bring your marketing links, campaign destinations, and engagement insights
                            together. WhyLong gives agencies and marketing teams a centralized workspace
                            to manage tracked URLs, create branded QR experiences, and understand how
                            audiences interact with their campaigns.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 font-semibold text-white transition hover:bg-amber-600"
                            >
                                Get started for free
                                <ArrowRight size={18} />
                            </Link>

                            <Link
                                to="/products/analytics"
                                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-800 transition hover:border-yellow-400"
                            >
                                Explore analytics
                                <BarChart3 size={18} />
                            </Link>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
                            {[
                                "Unlimited short URLs",
                                "Unlimited QR codes",
                                "No credit card required",
                            ].map((item) => (
                                <span key={item} className="flex items-center gap-2">
                                    <Check size={16} className="text-amber-600" />
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 rounded-[2rem] bg-yellow-200/40 blur-2xl" />
                        <img
                            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
                            alt="Marketing team collaborating on client projects"
                            className="relative h-[360px] w-full rounded-[2rem] object-cover shadow-2xl sm:h-[460px]"
                        />

                        <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl sm:left-8 sm:right-8">
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                Your marketing workspace
                            </p>
                            <div className="mt-3 flex items-center justify-between gap-3">
                                <p className="font-bold text-slate-950">
                                    Campaigns, distribution & insights
                                </p>
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
                            The WhyLong advantage
                        </p>

                        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                            Essential tools for your marketing workflow
                        </h2>

                        <p className="mt-4 leading-7 text-slate-600">
                            From campaign distribution to audience engagement, bring essential link
                            management and QR marketing workflows together in one platform.
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
                        Who it's for
                    </p>

                    <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                        Built around the way modern agencies work
                    </h2>

                    <p className="mt-4 leading-7 text-slate-600">
                        Whether you're managing client campaigns, coordinating social media
                        marketing, or developing brand experiences, WhyLong helps simplify the
                        way your team creates, distributes, and monitors digital destinations.
                    </p>
                </div>

                <div className="mt-14 space-y-16 lg:space-y-24">
                    {useCases.map((item, index) => (
                        <div
                            key={item.title}
                            className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${index % 2 === 1
                                ? "lg:[&>div:first-child]:order-2"
                                : ""
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
                                    {item.number} / Agency use case
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
                        One platform, multiple tools
                    </p>

                    <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                        A centralized workspace for campaign operations
                    </h2>

                    <p className="mt-5 leading-8 text-slate-600">
                        Manage the links connecting your marketing activities. From creating
                        campaign destinations to distributing branded QR experiences and
                        reviewing engagement, WhyLong brings essential link workflows together
                        through one dashboard.
                    </p>

                    <div className="mt-8 space-y-5">
                        {[
                            {
                                icon: Link2,
                                title: "Campaign Link Management",
                                text: "Create, organize, and manage destination URLs for promotions, landing pages, and marketing channels.",
                                path: "/products/url-shortener",
                            },
                            {
                                icon: QrCode,
                                title: "Branded QR Experiences",
                                text: "Connect physical marketing materials with digital destinations using customized QR codes.",
                                path: "/products/qr-code-generator",
                            },
                            {
                                icon: BarChart3,
                                title: "Campaign Performance Insights",
                                text: "Understand link engagement through click activity, device information, and geographic insights.",
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
                        src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85"
                        alt="Marketing team reviewing campaign performance"
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
                        From campaign management to branded QR experiences, give your marketing
                        workflow a centralized home with WhyLong. Start free and bring more clarity
                        to the way you distribute and monitor links.
                    </p>
                    <Link
                        to="/"
                        className="mt-8 inline-flex rounded-xl bg-amber-400 px-7 py-3.5 font-bold text-gray-950 transition hover:bg-amber-300"
                    >
                        Try WhyLong for Free →
                    </Link>
                </div>
            </section>

            <SolutionsFAQ solution="Agencies & Marketing Teams" faqs={faqs} />
            <MoreThanShortener />
        </main>
    );
};

export default AgenciesMarketingTeams;