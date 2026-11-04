import { Link } from "react-router-dom";
import {
    ArrowRight,
    Store,
    Video,
    Megaphone,
    CheckCircle2,
    ExternalLink,
} from "lucide-react";

const solutions = [
    {
        id: "small-businesses",
        number: "01",
        category: "For Small Businesses",
        title: "Grow your business with smarter links.",
        description:
            "Make it easier for customers to discover your business. Manage promotional links, create branded QR codes, and understand how people interact with your digital presence.",
        features: [
            "Business link management",
            "Branded QR codes for promotions",
            "Customer engagement insights",
        ],
        path: "/solutions/small-businesses",
        icon: Store,
        accent: "bg-amber-100 text-amber-700",
        img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
    },
    {
        id: "content-creators",
        number: "02",
        category: "For Content Creators",
        title: "Turn every share into an opportunity.",
        description:
            "Bring your digital presence together with shareable links and customized QR codes. Make your content easier to access while understanding how your audience engages.",
        features: [
            "Organize content destinations",
            "Custom QR codes for your brand",
            "Track engagement across links",
        ],
        path: "/solutions/content-creators",
        icon: Video,
        accent: "bg-purple-100 text-purple-700",
        img: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=85'
    },
    {
        id: "agencies-marketing-teams",
        number: "03",
        category: "For Agencies & Marketing Teams",
        title: "Bring your campaign operations together.",
        description:
            "Simplify campaign link management from one dashboard. Organize marketing destinations, distribute branded QR experiences, and explore engagement insights.",
        features: [
            "Centralized campaign link management",
            "QR experiences for online and offline campaigns",
            "Campaign engagement analytics",
        ],
        path: "/solutions/agencies-marketing-teams",
        icon: Megaphone,
        accent: "bg-yellow-100 text-amber-800",
        img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
    },
];

const Solutions = () => {
    return (
        <section
            id="solutions"
            className="relative overflow-hidden bg-white py-20 sm:py-24"
        >
            {/* Background accents */}
            <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-yellow-100/60 blur-3xl" />
            <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-amber-100/50 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

                {/* Section heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-sm font-semibold text-amber-800">
                        Solutions for every workflow
                    </span>

                    <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                        See how other businesses
                        <span className="block text-amber-600">
                            use WhyLong
                        </span>
                    </h2>

                    <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                        Whether you're building a business, creating content,
                        or managing marketing campaigns, WhyLong gives you
                        the tools to create better digital
                        experiences.
                    </p>
                </div>

                {/* Solution cards */}
                <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
                    {solutions.map((solution) => {
                        const Icon = solution.icon;

                        return (
                            <article
                                key={solution.id}
                                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-amber-50 p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-100/50 sm:p-8"
                            >
                                {/* Card top */}
                                <div className="flex items-center justify-between">
                                    <span
                                        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${solution.accent}`}
                                    >
                                        <Icon size={26} />
                                    </span>

                                    <span className="text-sm font-bold tracking-widest text-slate-300">
                                        {solution.number}
                                    </span>
                                </div>

                                {/* Content */}
                                <p className="mt-8 text-sm font-bold uppercase tracking-wider text-amber-700">
                                    {solution.category}
                                </p>

                                <h3 className="mt-3 text-2xl font-extrabold leading-snug tracking-tight text-slate-950">
                                    {solution.title}
                                </h3>

                                {solution.img && (
                                    <img
                                    src={solution.img}
                                    alt={solution.title}
                                    className="mt-5 h-56 w-full rounded-2xl object-cover"
                                    />
                                )}

                                {/* Features */}
                                <ul className="mt-7 space-y-3">
                                    {solution.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-start gap-3 text-sm font-medium text-slate-700"
                                        >
                                            <CheckCircle2
                                                size={18}
                                                className="mt-0.5 shrink-0 text-amber-600"
                                            />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <div className="mt-auto pt-8">
                                    <Link
                                        to={solution.path}
                                        className="inline-flex items-center gap-2 font-bold text-slate-900 transition-all duration-300 group-hover:gap-3 group-hover:text-amber-700"
                                    >
                                        Explore solution
                                        <ExternalLink size={18} />
                                    </Link>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Solutions;