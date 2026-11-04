
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import MoreThanShortener from "../../components/Home/MoreThanShortener";
import SolutionsFAQ from "../../components/SolutionsFAQS";
import { CheckCircle2 } from "lucide-react";

const images = {
    hero: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
    links: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    qr: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
};

const faqs = [
    {
        question: "How can WhyLong help small businesses?",
        answer:
            "WhyLong helps small businesses simplify their online presence with free URL shortening, custom QR code generation, link management and click analytics. You can share cleaner links, connect offline customers to digital experiences and understand how people interact with your content.",
    },
    {
        question: "Is WhyLong a free URL shortener for small businesses?",
        answer:
            "Yes! WhyLong offers free URL shortening with unlimited short links and QR code generation. You can create and share links without a subscription or credit card.",
    },
    {
        question: "Can I create QR codes for my business?",
        answer:
            "Absolutely. With WhyLong's QR Code Generator, you can create customized QR codes for your website, products, business cards, packaging, posters and promotional materials. You can customize colors, styles and add your brand logo.",
    },
    {
        question: "Can I use short links for marketing campaigns?",
        answer:
            "Yes. You can use WhyLong short links across social media, email campaigns, advertisements, product promotions and other marketing channels. Short URLs make sharing easier and help keep your campaigns organized.",
    },
    {
        question: "Does WhyLong provide link analytics?",
        answer:
            "Yes. WhyLong provides link analytics that help you understand click activity, devices, browsers and available geographic information. These insights can help small businesses better understand audience engagement.",
    },
    {
        question: "Can I manage multiple business links in one place?",
        answer:
            "Yes. You can manage your shortened URLs from the WhyLong dashboard, making it easier to organize, access and monitor your business links.",
    },
    {
        question: "Do customers need to install an app to scan my QR codes?",
        answer:
            "No. Customers can scan your QR codes using their smartphone camera or a compatible QR scanner. They can access the linked destination directly through their browser.",
    },
    {
        question: "Is WhyLong suitable for startups and growing businesses?",
        answer:
            "Yes. WhyLong is useful for startups, local businesses, online stores, freelancers and growing teams that need simple tools to manage links, create QR codes and monitor engagement without investing in expensive link management subscriptions.",
    },
];

const benefits = [
    {
        icon: "🔗",
        title: "Branded Short Links",
        description:
            "Turn long, complicated URLs into clean, shareable short links for your business.",
    },
    {
        icon: "▦",
        title: "Custom QR Codes",
        description:
            "Create customized QR codes for product packaging, business cards, posters and more.",
    },
    {
        icon: "📊",
        title: "Link Analytics",
        description:
            "Understand how people interact with your links through click and engagement insights.",
    },
];

const SmallBusinesses = () => {
    return (
        <>
            <Helmet>
                <title>
                    WhyLong for Small Businesses | Boost your business with us
                </title>
                <meta
                    name="description"
                    content="Grow your small business with WhyLong. Create free short links, customized QR codes and track link engagement with built-in analytics."
                />
                <meta
                    name="keywords"
                    content="free URL shortener for small businesses, business QR code generator, branded short links, link analytics, marketing campaign tracking"
                />
                <link
                    rel="canonical"
                    href="https://whylong.vercel.app/solutions/small-businesses"
                />
                <meta property="og:title" content="WhyLong for Small Businesses" />
                <meta
                    property="og:description"
                    content="Simplify business links, create custom QR codes and understand audience engagement with WhyLong."
                />
                <meta
                    property="og:url"
                    content="https://whylong.vercel.app/solutions/small-businesses"
                />
            </Helmet>

            <main className="overflow-hidden bg-white text-gray-950">

                {/* Hero */}
                <section className="relative bg-[#fff9e9] px-5 py-16 sm:py-20 lg:py-24">
                    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
                        <div>
                            <span className="inline-flex rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-semibold text-amber-700  mt-8">
                                Solutions / Small Businesses
                            </span>

                            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                                Smarter Links for{" "}
                                <span className="text-amber-500">
                                    Growing Businesses.
                                </span>
                            </h1>

                            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
                                Make every link count. Create free short URLs,
                                design custom QR codes and track audience
                                engagement — all from one simple platform.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <Link
                                    to="/"
                                    className="rounded-xl bg-amber-500 px-7 py-3.5 font-semibold text-white transition hover:bg-amber-700"
                                >
                                    Get Started for Free →
                                </Link>

                                <Link
                                    to="/"
                                    className="rounded-xl border border-gray-300 bg-white px-7 py-3.5 font-semibold text-gray-800 transition hover:border-amber-400"
                                >
                                    Explore WhyLong
                                </Link>
                            </div>

                            <p className="mt-5 text-sm text-gray-500">
                                No credit card. No subscription. Just free link tools.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 rounded-[2rem] bg-amber-200/40 blur-2xl" />
                            <img
                                src={images.hero}
                                alt="Small business team working together on digital marketing"
                                className="relative h-[300px] w-full rounded-3xl object-cover shadow-xl sm:h-[420px]"
                            />

                            <div className="absolute -bottom-5 left-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-lg sm:left-8">
                                <p className="text-sm font-semibold text-gray-800">
                                    Everything in one place
                                </p>
                                <p className="mt-1 text-xs text-gray-500">
                                    Short links · QR codes · Analytics
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="px-5 py-16 sm:py-20">
                    <div className="mx-auto max-w-7xl">
                        <div className="mx-auto max-w-2xl text-center">
                            <span className="text-sm font-bold uppercase tracking-wider text-amber-600">
                                Built for everyday business needs
                            </span>
                            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                                The tools your business needs to share smarter
                            </h2>
                            <p className="mt-4 leading-7 text-gray-600">
                                From sharing a product link to measuring campaign
                                engagement, manage your digital links without
                                juggling multiple tools.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-6 md:grid-cols-3">
                            {benefits.map((item) => (
                                <div
                                    key={item.title}
                                    className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-2xl">
                                        {item.icon}
                                    </div>
                                    <h3 className="mt-5 text-xl font-bold">
                                        {item.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-7 text-gray-600">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Short Links */}
                <section className="bg-gray-50 px-5 py-16 sm:py-20">
                    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
                        <div className="order-2 lg:order-1">
                            <img
                                src={images.links}
                                alt="Business owner reviewing digital marketing and link performance"
                                className="h-[280px] w-full rounded-3xl object-cover shadow-md sm:h-[390px]"
                            />
                        </div>

                        <div className="order-1 lg:order-2">
                            <span className="text-sm font-bold uppercase tracking-wider text-amber-600">
                                Share with confidence
                            </span>
                            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                                Long URLs don't belong in your marketing.
                            </h2>
                            <p className="mt-5 leading-8 text-gray-600">
                                Whether you're sharing product pages, promotional
                                offers or contact details, WhyLong helps you create
                                short, clean and easy-to-share URLs for your
                                business.
                            </p>
                            <ul className="mt-6 space-y-3 text-sm text-gray-700">
                                <li><CheckCircle2 size={20} className="inline text-green-500 mr-2" /> Create short links without complicated setup</li>
                                <li><CheckCircle2 size={20} className="inline text-green-500 mr-2" /> Organize and manage your links</li>
                                <li><CheckCircle2 size={20} className="inline text-green-500 mr-2" />Share links across social media, email and print</li>
                                <li><CheckCircle2 size={20} className="inline text-green-500 mr-2" /> Get started without paying for a subscription</li>
                            </ul>
                            <Link
                                href="/products/url-shortener"
                                className="mt-8 inline-flex font-semibold text-amber-600 hover:text-amber-700"
                            >
                                Create Your First Short Link →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* QR Codes */}
                <section className="px-5 py-16 sm:py-20">
                    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
                        <div>
                            <span className="text-sm font-bold uppercase tracking-wider text-amber-600">
                                Bridge offline and online
                            </span>
                            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                                Turn everyday touchpoints into digital experiences.
                            </h2>
                            <p className="mt-5 leading-8 text-gray-600">
                                Give customers an easy way to reach your website,
                                products, offers or social profiles. Create
                                customized business QR codes with your own colors
                                and branding using WhyLong's QR Code Generator.
                            </p>
                            <ul className="mt-6 space-y-3 text-sm text-gray-700">
                                <li><CheckCircle2 size={20} className="inline text-green-500 mr-2"/> Add QR codes to packaging and business cards</li>
                                <li><CheckCircle2 size={20} className="inline text-green-500 mr-2"/> Customize colors and visual styles</li>
                                <li><CheckCircle2 size={20} className="inline text-green-500 mr-2"/> Add your brand logo</li>
                                <li><CheckCircle2 size={20} className="inline text-green-500 mr-2"/> Download and share your QR codes</li>
                            </ul>
                            <Link
                                to="/products/qr-code-generator"
                                className="mt-8 inline-flex font-semibold text-amber-600 hover:text-amber-700"
                            >
                                Create a Custom QR Code →
                            </Link>
                        </div>

                        <div>
                            <img
                                src={images.qr}
                                alt="Digital tools and QR code technology for business"
                                className="h-[280px] w-full rounded-3xl object-cover shadow-md sm:h-[390px]"
                            />
                        </div>
                    </div>
                </section>

                {/* Analytics */}
                <section className="bg-[#fff9e9] px-5 py-16 sm:py-20">
                    <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
                        <div>
                            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                                Don't just share links. Understand their impact.
                            </h2>
                            <p className="mt-5 leading-8 text-gray-600">
                                See how your shared links perform with WhyLong
                                Link Analytics. Explore click activity, devices,
                                browsers and available geographic insights to
                                better understand your audience.
                            </p>
                            <Link
                                to="/products/analytics"
                                className="mt-7 inline-flex rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white transition hover:bg-amber-600"
                            >
                                Explore Link Analytics →
                            </Link>
                        </div>

                        <div className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm sm:p-8">
                            <p className="text-sm font-semibold text-gray-500">
                                Understand your link performance
                            </p>
                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <div className="rounded-2xl bg-amber-50 p-5">
                                    <p className="text-sm text-gray-500">Click activity</p>
                                    <p className="mt-2 text-xl font-bold">Track clicks</p>
                                </div>
                                <div className="rounded-2xl bg-gray-50 p-5">
                                    <p className="text-sm text-gray-500">Audience</p>
                                    <p className="mt-2 text-xl font-bold">Device insights</p>
                                </div>
                                <div className="rounded-2xl bg-gray-50 p-5">
                                    <p className="text-sm text-gray-500">Technology</p>
                                    <p className="mt-2 text-xl font-bold">Browser insights</p>
                                </div>
                                <div className="rounded-2xl bg-amber-50 p-5">
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="mt-2 text-xl font-bold">Geo insights</p>
                                </div>
                            </div>
                            <p className="mt-5 text-xs text-gray-400">
                                Analytics availability depends on the information
                                provided by each click and browser.
                            </p>
                        </div>
                    </div>
                </section>

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
                <SolutionsFAQ solution={"Small Businesses"} faqs={faqs} />
                <MoreThanShortener />
            </main>
        </>
    );
};

export default SmallBusinesses;