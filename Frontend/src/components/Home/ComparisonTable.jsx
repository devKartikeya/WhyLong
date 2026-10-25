import {
    Check,
    X,
    Minus,
    ArrowRight,
    Sparkles,
    BarChart3,
    QrCode,
    Link2,
    ShieldCheck,
} from "lucide-react";

const comparisonGroups = [
    {
        title: "Link management",
        icon: Link2,
        rows: [
            ["Free URL shortening", "yes", "yes"],
            ["Unlimited link creation", "yes", "5 links/month"],
            ["Unlimited clicks", "check", "yes"],
        ],
    },
    {
        title: "Analytics & insights",
        icon: BarChart3,
        rows: [
            ["Click-through rate (CTR)", "yes", "paid"],
            ["Click timestamps & graphs", "yes", "paid"],
            ["Country & geographic insights", "yes", "paid"],
            ["Device analytics", "yes", "paid"],
        ],
    },
    {
        title: "QR code customization",
        icon: QrCode,
        rows: [
            ["QR code generation", "yes", "2 codes/month"],
            ["Logo insertion", "yes", "paid"],
            ["Custom colors & backgrounds", "yes", "limited"],
            ["Custom dots & corners", "yes", "plan-dependent"],
            ["Reusable design presets", "yes", "plan-dependent"],
            ["SVG QR downloads", "yes", "yes"],
        ],
    },
];

function FeatureValue({ value, isWhyLong }) {
    if (value === "yes") {
        return (
            <span className="inline-flex items-center gap-2 font-medium text-emerald-700">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100">
                    <Check size={12} strokeWidth={3} />
                </span>
                <span>Available</span>
            </span>
        );
    }

    if (value === "check") {
        return (
            <span className="text-sm text-slate-500">
                Unlimited clicks
            </span>
        );
    }

    if (value === "limited") {
        return (
            <span className="text-sm font-medium text-amber-700">
                Limited on Free
            </span>
        );
    }

    if (value === "paid") {
        return (
            <span className="text-sm font-medium text-slate-600">
                Paid plan
            </span>
        );
    }

    return (
        <span className="text-sm text-slate-600">
            {value}
        </span>
    );
}

export default function ComparisonTable() {
    return (
        <section
            id="comparison"
            aria-labelledby="comparison-heading"
            className="relative overflow-hidden bg-[#fcfcfb] px-4 py-20 sm:px-8 lg:px-12 lg:py-24"
        >
            <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-200/20 blur-3xl" />

            <div className="relative mx-auto max-w-6xl">
                {/* Section heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-amber-800">
                        <Sparkles size={14} />
                        The feature breakdown
                    </span>

                    <h2
                        id="comparison-heading"
                        className="mt-6 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
                    >
                        WhyLong vs Bitly 
                        <span className="mt-2 block text-amber-600">
                            Compare what matters.
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                        Short links are just the beginning. Compare link creation,
                        analytics, and QR customization before choosing your tool.
                    </p>
                </div>

                {/* Comparison table */}
                <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_70px_-35px_rgba(15,23,42,0.25)] sm:mt-14">
                    {/* Table header */}
                    <div className="grid grid-cols-[minmax(150px,1.4fr)_minmax(125px,1fr)_minmax(115px,1fr)] border-b border-slate-200 sm:grid-cols-[minmax(240px,1.5fr)_minmax(180px,1fr)_minmax(160px,1fr)]">
                        <div className="flex items-center px-4 py-5 sm:px-7">
                            <span className="text-sm font-semibold text-slate-500">
                                Features
                            </span>
                        </div>

                        <div className="relative border-x border-amber-200 bg-amber-50/80 px-3 py-5 sm:px-6">
                            <div className="absolute inset-x-0 top-0 h-1 bg-amber-400" />
                            <div className="flex flex-col items-center gap-1.5 text-center">
                                <span className="text-base font-extrabold tracking-tight text-slate-950 sm:text-lg">
                                    WhyLong
                                </span>
                                <span className="inline-flex items-center gap-1 rounded-full bg-amber-200/70 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-900 sm:text-xs">
                                    <Sparkles size={11} />
                                    Feature-rich
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center justify-center px-3 py-5 sm:px-6">
                            <span className="text-base font-bold text-slate-800 sm:text-lg">
                                Bitly
                            </span>
                        </div>
                    </div>

                    {/* Grouped rows */}
                    {comparisonGroups.map((group) => {
                        const Icon = group.icon;

                        return (
                            <div key={group.title}>
                                <div className="flex items-center gap-2.5 bg-slate-50 px-4 py-3.5 sm:px-7">
                                    <Icon size={16} className="text-slate-500" />
                                    <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600">
                                        {group.title}
                                    </h3>
                                </div>

                                {group.rows.map(([feature, whyLong, bitly]) => (
                                    <div
                                        key={feature}
                                        className="grid grid-cols-[minmax(150px,1.4fr)_minmax(125px,1fr)_minmax(115px,1fr)] border-t border-slate-100 transition hover:bg-slate-50/70 sm:grid-cols-[minmax(240px,1.5fr)_minmax(180px,1fr)_minmax(160px,1fr)]"
                                    >
                                        <div className="flex items-center px-4 py-4 sm:px-7">
                                            <span className="text-xs font-medium leading-5 text-slate-700 sm:text-sm">
                                                {feature}
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-center border-x border-amber-100 bg-amber-50/30 px-2 py-4 sm:px-4">
                                            <FeatureValue value={whyLong} isWhyLong />
                                        </div>

                                        <div className="flex items-center justify-center px-2 py-4 sm:px-4">
                                            <FeatureValue value={bitly} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        );
                    })}

                    {/* Bottom CTA */}
                    <div className="border-t border-slate-200 bg-white p-5 sm:p-7">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="font-bold text-slate-950">
                                    Read the difference in detail?
                                </p>
                                {/* <p className="mt-1 text-sm leading-6 text-slate-500">
                                    Try WhyLong's link management and QR tools.
                                </p> */}
                            </div>

                            <a
                                href="/blogs/whylong-vs-bitly"
                                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-amber-400 hover:text-slate-950"
                            >
                                WhyLong vs bitly
                                <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                </div>

                <p className="mx-auto mt-5 max-w-3xl text-center text-xs leading-6 text-slate-500">
                    Feature availability and plan limits can change. Bitly's analytics
                    and QR customization depend on the plan. Review its official pricing
                    page for the latest details. WhyLong features reflect the current
                    product offering and should be reviewed periodically.
                </p>
            </div>
        </section>
    );
}