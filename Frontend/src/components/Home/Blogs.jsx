import {
    FiArrowUpRight,
    FiLayers,
    FiBarChart2,
    FiTrendingUp,
    FiClock,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const articles = [
    {
        number: "01",
        icon: FiTrendingUp,
        category: "Platform Comparison",
        title: "WhyLong vs Bitly",
        highlight: "Which link tool fits you?",
        description:
            "Compare WhyLong and Bitly across URL shortening, QR code customization, analytics, usability, and pricing to find the right platform for your needs.",
        img: "https://mkt-bitly-media.qrcg.net/wp-content/uploads/2026/09/14150141/hero_digital_marketing_v6-1024x597.png",
        readTime: "9 min read",
        slug: "/blogs/whylong-vs-bitly",
    },
    {
        number: "02",
        icon: FiLayers,
        category: "QR Codes",
        title: "How to Create a customized QR Code",
        highlight: "Build branded QRs.",
        description:
            "Learn how to create customizd or branded QR codes for your business, company and personal use cases.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMRsZ0L5RQhJ04rJ8Im3diLiCEmkBoRCN9DsJ-BEyS-JXBC5N-mcbL5DxV&s=10",
        readTime: "17 min read",
        slug: "/blogs/how-to-create-customized-qr-code",
    },
    {
        number: "03",
        icon: FiBarChart2,
        category: "How-to Guide",
        title: "How to Shorten a Long URL",
        highlight: "Long link. Simple solution.",
        description:
            "Learn how URL shorteners work and follow a simple, step-by-step guide to turn lengthy web addresses into clean, shareable links with WhyLong.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPs44Af3ozmbm5WfKzAlmTaJdGoC7vEw6Mrqh9JlbLPQ&s=10",
        readTime: "6 min read",
        slug: "/blogs/how-to-shorten-a-long-url",
    },
];

const Blogs = () => {
    return (
        <section
            id="blogs"
            className="relative overflow-hidden bg-gray-950 px-6 py-24 sm:px-10 lg:px-14"
        >
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow-600">
                            The WhyLong Blog
                        </p>

                        <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            Insights for
                            <span className="block text-yellow-500">
                                smarter links.
                            </span>
                        </h2>

                        <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300">
                            Explore practical guides, platform comparisons,
                            and tips to help you shorten, share, and manage
                            your links more effectively.
                        </p>
                    </div>

                    <Link
                        to="/blogs"
                        className="inline-flex w-fit items-center gap-2 text-sm font-bold text-gray-900 transition hover:text-yellow-700"
                    >
                        Explore all articles
                        <FiArrowUpRight size={18} />
                    </Link>
                </div>

                {/* Article Cards */}
                <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 bg-gray-900 p-8 rounded-3xl">
                    {articles.map((article) => {

                        return (
                            <Link
                                key={article.number}
                                to={article.slug}
                                aria-label={`Read article: ${article.title}`}
                                className="group block h-full rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-4"
                            >
                                <article className="relative flex h-full min-h-[480px] flex-col overflow-hidden rounded-3xl border-1 border-gray-200 bg-white p-5 transition-all duration-300 group-hover:-translate-y-8 group-hover:border-yellow-300 group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.08)]">

                                    {/* Background Number */}
                                    <span
                                        aria-hidden="true"
                                        className="pointer-events-none absolute -right-4 -top-7 text-[130px] sm:text-[180px] font-black leading-none text-gray-50 transition-colors duration-300 group-hover:text-yellow-200"
                                    >
                                        {article.number}
                                    </span>

                                    {/* Content */}
                                    <div className="relative mt-9">
                                        <h3 className="text-2xl font-bold leading-tight tracking-tight text-gray-950">
                                            {article.title}
                                        </h3>

                                        <p className="mt-2 font-semibold text-yellow-600">
                                            {article.highlight}
                                        </p>

                                        <p className="mt-5 text-sm leading-7 text-gray-500">
                                            {article.description}
                                        </p>
                                    </div>

                                    <img src={article.img} alt="WhyLong Blog Image" className="mt-5 h-48 rounded-2xl" />

                                    {/* Footer */}
                                    <div className="mt-auto flex items-center justify-between gap-3 border-t border-gray-100 pt-5 mt-7">
                                        <span className="inline-flex items-center gap-2 text-xs font-medium text-gray-400">
                                            <FiClock size={14} />
                                            {article.readTime}
                                        </span>

                                        <span className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 transition-colors group-hover:text-yellow-700">
                                            Read article
                                            <FiArrowUpRight
                                                size={17}
                                                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                            />
                                        </span>
                                    </div>
                                </article>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
