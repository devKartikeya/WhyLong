import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
    FiArrowRight,
    FiCheck,
    FiDownload,
    FiDroplet,
    FiGrid,
    FiImage,
    FiLayout,
    FiSave,
    FiType
} from "react-icons/fi";
import AuthPanel from "../../components/Auth/AuthPanel";
import { useAuth } from "../../context/AuthContext";
import {
    META,
    COPY,
    PAGE_URL,
    SITE_URL,
    WHY,
    FEATURES,
    STEPS,
    FORMATS,
    ERROR_LEVELS,
    BEST_PRACTICES,
    USE_CASES,
    FAQS,
    buildSchemas
} from "../../content/qrLanding";
import MoreThanShortener from "../../components/Home/MoreThanShortener";

const FEATURE_ICONS = [FiImage, FiDroplet, FiGrid, FiLayout, FiType, FiSave];

const OG_IMAGE = `${SITE_URL}/og-image.png`;

/* ------------------------------------------------------------------ */
/* Live demo                                                           */
/* ------------------------------------------------------------------ */

const DEMO_TEMPLATES = [
    { id: "classic", name: "Classic", qr: "#111827", bg: "#ffffff", eye: "#111827", gradient: null },
    { id: "midnight", name: "Midnight", qr: "#f8fafc", bg: "#111827", eye: "#facc15", gradient: null },
    { id: "sunrise", name: "Sunrise", qr: "#7c2d12", bg: "#fff7ed", eye: "#7c2d12", gradient: "#eab308" },
    { id: "ocean", name: "Ocean", qr: "#0f766e", bg: "#f0fdfa", eye: "#0f766e", gradient: "#2563eb" },
    { id: "violet", name: "Violet", qr: "#6d28d9", bg: "#faf5ff", eye: "#6d28d9", gradient: "#db2777" }
];

const DEMO_DOT_STYLES = [
    { value: "square", label: "Square" },
    { value: "dots", label: "Dots" },
    { value: "rounded", label: "Rounded" },
    { value: "classy-rounded", label: "Soft classy" }
];

const LOGO_SVG =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">' +
    '<rect width="64" height="64" rx="14" fill="#facc15"/>' +
    '<g fill="none" stroke="#111827" stroke-width="5" stroke-linecap="round">' +
    '<path d="M27 35a11 11 0 0 0 16 1l6-6a11 11 0 0 0-16-16l-3 3"/>' +
    '<path d="M37 29a11 11 0 0 0-16-1l-6 6a11 11 0 0 0 16 16l3-3"/>' +
    "</g></svg>";

const LOGO_DATA_URI = `data:image/svg+xml;utf8,${encodeURIComponent(LOGO_SVG)}`;

const QRDemo = () => {
    const containerRef = useRef(null);
    const qrRef = useRef(null);

    const [templateId, setTemplateId] = useState("sunrise");
    const [dotStyle, setDotStyle] = useState("rounded");
    const [showLogo, setShowLogo] = useState(true);

    const template = DEMO_TEMPLATES.find((item) => item.id === templateId);

    useEffect(() => {
        let cancelled = false;

        const options = {
            width: 300,
            height: 300,
            type: "canvas",
            data: `${SITE_URL}/`,
            margin: 12,
            qrOptions: { errorCorrectionLevel: "H" },
            image: showLogo ? LOGO_DATA_URI : undefined,
            imageOptions: {
                hideBackgroundDots: true,
                imageSize: 0.22,
                margin: 6
            },
            dotsOptions: template.gradient
                ? {
                    type: dotStyle,
                    gradient: {
                        type: "linear",
                        rotation: 0,
                        colorStops: [
                            { offset: 0, color: template.qr },
                            { offset: 1, color: template.gradient }
                        ]
                    }
                }
                : { type: dotStyle, color: template.qr },
            cornersSquareOptions: {
                type: dotStyle === "square" ? "square" : "extra-rounded",
                color: template.eye
            },
            cornersDotOptions: {
                type: dotStyle === "square" ? "square" : "dot",
                color: template.eye
            },
            backgroundOptions: { color: template.bg }
        };

        const render = async () => {
            if (!qrRef.current) {
                // Loaded on demand so it does not bloat the main bundle.
                const { default: QRCodeStyling } = await import("qr-code-styling");

                if (cancelled || !containerRef.current) return;

                qrRef.current = new QRCodeStyling(options);
                qrRef.current.append(containerRef.current);
            } else {
                qrRef.current.update(options);
            }
        };

        render();

        return () => {
            cancelled = true;
        };
    }, [template, dotStyle, showLogo]);

    return (
        <div className="relative mx-auto w-full max-w-md">
            <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2rem] bg-yellow-200/40 blur-2xl"
            />

            <div className="relative rounded-3xl border border-gray-200 bg-white p-5 shadow-xl shadow-gray-950/5 sm:p-6">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-bold text-gray-950">
                        Try the design tools
                    </p>

                    <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-gray-900">
                        Live demo
                    </span>
                </div>

                <div
                    className="mt-4 flex items-center justify-center rounded-2xl p-3 transition-colors"
                    style={{ backgroundColor: template.bg }}
                >
                    <div
                        ref={containerRef}
                        role="img"
                        aria-label="Live preview of a branded QR code"
                        className="flex aspect-square w-full max-w-[300px] items-center justify-center [&>canvas]:!h-auto [&>canvas]:!w-full"
                    />
                </div>

                <p className="mt-3 text-center text-xs text-gray-500">
                    This sample code opens whylong.vercel.app. Scan it to test.
                </p>

                <div className="mt-5 space-y-4">
                    <div>
                        <p className="text-xs font-medium text-gray-600">Template</p>

                        <div className="mt-2 grid grid-cols-5 gap-2">
                            {DEMO_TEMPLATES.map((item) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => setTemplateId(item.id)}
                                    aria-pressed={templateId === item.id}
                                    className={`flex flex-col items-center gap-1.5 rounded-xl border px-1 py-2 text-[11px] font-semibold transition ${templateId === item.id
                                        ? "border-yellow-400 bg-yellow-50 text-gray-950"
                                        : "border-gray-200 bg-gray-50 text-gray-500 hover:bg-white"
                                        }`}
                                >
                                    <span
                                        aria-hidden="true"
                                        className="h-4 w-4 rounded-full border border-black/10"
                                        style={{
                                            background: item.gradient
                                                ? `linear-gradient(135deg, ${item.qr}, ${item.gradient})`
                                                : item.qr
                                        }}
                                    />
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="text-xs font-medium text-gray-600">Dot pattern</p>

                        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                            {DEMO_DOT_STYLES.map((item) => (
                                <button
                                    key={item.value}
                                    type="button"
                                    onClick={() => setDotStyle(item.value)}
                                    aria-pressed={dotStyle === item.value}
                                    className={`rounded-xl border px-2 py-2 text-xs font-semibold transition ${dotStyle === item.value
                                        ? "border-yellow-400 bg-yellow-50 text-gray-950"
                                        : "border-gray-200 bg-gray-50 text-gray-500 hover:bg-white"
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <label className="flex cursor-pointer items-center gap-2 text-xs font-medium text-gray-700">
                        <input
                            type="checkbox"
                            checked={showLogo}
                            onChange={(event) => setShowLogo(event.target.checked)}
                            className="h-4 w-4 accent-yellow-500"
                        />
                        Show a logo in the center
                    </label>
                </div>
            </div>
        </div>
    );
};

/* ------------------------------------------------------------------ */
/* Small shared pieces                                                 */
/* ------------------------------------------------------------------ */

const SectionHeading = ({ id, eyebrow, title, intro, center = false }) => (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
        {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow-600">
                {eyebrow}
            </p>
        )}

        <h2
            id={id}
            className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl"
        >
            {title}
        </h2>

        {intro && (
            <p className="mt-5 text-base leading-7 text-gray-500">{intro}</p>
        )}
    </div>
);

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const QRCodeGeneratorPage = () => {
    const navigate = useNavigate();
    const [openFaq, setOpenFaq] = useState(null);
    const { user, authLoading } = useAuth();
    const [isAuthOpen, setIsAuthOpen] = useState(false);

    const handleCreate = () => {
        if (authLoading) return;

        if (user) {
            navigate("/dashboard/qr-codes");
        } else {
            setIsAuthOpen(true);
        }
    };

    const ctaLabel = user ? "Open the QR studio" : "Create your QR code free";

    return (
        <div className="min-h-screen bg-white text-gray-950">
            <Helmet>
                <title>{META.title}</title>
                <meta name="description" content={META.description} />
                <meta
                    name="robots"
                    content="index, follow, max-image-preview:large"
                />
                <link rel="canonical" href={PAGE_URL} />

                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="WhyLong" />
                <meta property="og:title" content={META.title} />
                <meta property="og:description" content={META.description} />
                <meta property="og:url" content={PAGE_URL} />
                <meta property="og:image" content="https://whylong.vercel.app/og-image.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={META.title} />
                <meta name="twitter:description" content={META.description} />
                <meta name="twitter:image" content="https://whylong.vercel.app/og-image.png" />

                {buildSchemas().map((schema) => (
                    <script key={schema["@type"]} type="application/ld+json">
                        {JSON.stringify(schema)}
                    </script>
                ))}
            </Helmet>

            <main>
                {/* ================= HERO ================= */}
                <section className="relative overflow-hidden bg-white">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-yellow-100/60 blur-3xl"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-yellow-50 blur-3xl"
                    />

                    <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-36">
                        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
                            <div>
                                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-3.5 py-1.5">
                                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                                    <span className="text-xs font-semibold tracking-wide text-yellow-700">
                                        WHYLONG QR STUDIO
                                    </span>
                                </div>

                                <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-gray-950 sm:text-5xl">
                                    Free QR code generator with
                                    <span className="relative mx-2 inline-block">
                                        <span className="relative z-10 text-yellow-500">
                                            logo
                                        </span>
                                        <span
                                            aria-hidden="true"
                                            className="absolute bottom-1 left-0 -z-0 h-3 w-full bg-yellow-100"
                                        />
                                    </span>
                                    and custom branding
                                </h1>

                                <p className="mt-6 max-w-xl text-base leading-7 text-gray-500 sm:text-lg">
                                    {META.intro}
                                </p>

                                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                                    <button
                                        type="button"
                                        onClick={handleCreate}
                                        className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-gray-950 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-gray-800 active:scale-[0.98]"
                                    >
                                        {ctaLabel}
                                        <FiArrowRight
                                            aria-hidden="true"
                                            className="transition-transform group-hover:translate-x-0.5"
                                        />
                                    </button>

                                    <a
                                        href="#steps"
                                        className="inline-flex items-center justify-center rounded-xl border border-gray-200 px-6 py-3.5 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-50"
                                    >
                                        See how it works
                                    </a>
                                </div>

                                <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-500">
                                    {[
                                        "Free account",
                                        "Unlimited QR codes",
                                        "PNG and SVG export",
                                        "Logo up to 2 MB"
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-1.5">
                                            <FiCheck
                                                aria-hidden="true"
                                                className="text-yellow-500"
                                            />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <QRDemo />
                        </div>
                    </div>
                </section>

                {/* ================= WHY BRANDED ================= */}
                <section
                    aria-labelledby="why-heading"
                    className="border-t border-gray-100 bg-gray-50 py-24 lg:py-28"
                >
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <SectionHeading
                            id="why-heading"
                            eyebrow="Why branded"
                            title={COPY.whyTitle}
                            intro={COPY.whyIntro}
                            center
                        />

                        <div className="mt-14 grid gap-6 md:grid-cols-3">
                            {WHY.map((item, index) => (
                                <article
                                    key={item.title}
                                    className="rounded-2xl border border-gray-200 bg-white p-7"
                                >
                                    <span className="text-xs font-semibold text-gray-300">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <h3 className="mt-4 text-lg font-bold text-gray-950">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-gray-500">
                                        {item.text}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ================= DESIGN OPTIONS ================= */}
                <section
                    id="design"
                    aria-labelledby="design-heading"
                    className="border-t border-gray-100 bg-white py-24 lg:py-28"
                >
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <SectionHeading
                            id="design-heading"
                            eyebrow="Design options"
                            title={COPY.designTitle}
                            intro={COPY.designIntro}
                        />

                        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {FEATURES.map((feature, index) => {
                                const Icon = FEATURE_ICONS[index];

                                return (
                                    <article
                                        key={feature.title}
                                        className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
                                    >
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-50 text-yellow-600 transition-all group-hover:bg-yellow-400 group-hover:text-gray-950">
                                            <Icon size={20} aria-hidden="true" />
                                        </div>

                                        <h3 className="mt-6 text-lg font-bold text-gray-950">
                                            {feature.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-gray-500">
                                            {feature.text}
                                        </p>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ================= STEPS ================= */}
                <section
                    id="steps"
                    aria-labelledby="steps-heading"
                    className="border-t border-gray-100 bg-gray-50 py-24 lg:py-28"
                >
                    <div className="mx-auto max-w-4xl px-6 lg:px-8">
                        <SectionHeading
                            id="steps-heading"
                            eyebrow="Step by step"
                            title={COPY.stepsTitle}
                            intro={COPY.stepsIntro}
                            center
                        />

                        <ol className="mt-14 space-y-5">
                            {STEPS.map((step, index) => (
                                <li
                                    key={step.title}
                                    className="flex gap-5 rounded-2xl border border-gray-200 bg-white p-6 sm:p-7"
                                >
                                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-sm font-bold text-gray-950 shadow-sm ring-4 ring-yellow-50">
                                        {index + 1}
                                    </span>

                                    <div>
                                        <h3 className="text-lg font-bold text-gray-950">
                                            {step.title}
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-gray-500">
                                            {step.text}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ol>

                        <div className="mt-10 text-center">
                            <button
                                type="button"
                                onClick={handleCreate}
                                className="font-semibold inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-yellow-400 px-7 py-3.5 text-sm font-bold text-gray-950 transition-all hover:bg-yellow-300 active:scale-[0.98]"
                            >
                                {ctaLabel}
                                <FiArrowRight aria-hidden="true" />
                            </button>
                            <button
                                type="button"
                                onClick={() => navigate("/blogs/how-to-create-customized-qr-code")}
                                className="font-semibold inline-flex mx-5 cursor-pointer items-center justify-center gap-2 rounded-xl bg-yellow-400 px-7 py-3.5 text-sm font-bold text-gray-950 transition-all hover:bg-yellow-300 active:scale-[0.98]"
                            >
                                Learn More
                                <FiArrowRight aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </section>

                {/* ================= DOWNLOADS ================= */}
                <section
                    id="downloads"
                    aria-labelledby="downloads-heading"
                    className="border-t border-gray-100 bg-white py-24 lg:py-28"
                >
                    <div className="mx-auto max-w-5xl px-6 lg:px-8">
                        <SectionHeading
                            id="downloads-heading"
                            eyebrow="Download options"
                            title={COPY.formatsTitle}
                            intro={COPY.formatsIntro}
                        />

                        <div className="mt-12 overflow-x-auto rounded-2xl border border-gray-200">
                            <table className="w-full min-w-[560px] text-left text-sm">
                                <caption className="sr-only">
                                    QR code download formats compared
                                </caption>

                                <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
                                    <tr>
                                        <th scope="col" className="px-5 py-3 font-semibold">Format</th>
                                        <th scope="col" className="px-5 py-3 font-semibold">Best for</th>
                                        <th scope="col" className="px-5 py-3 font-semibold">Details</th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-100">
                                    {FORMATS.map((row) => (
                                        <tr key={row.format}>
                                            <th scope="row" className="px-5 py-4 font-bold text-gray-950">
                                                <span className="inline-flex items-center gap-2">
                                                    <FiDownload aria-hidden="true" className="text-yellow-600" />
                                                    {row.format}
                                                </span>
                                            </th>
                                            <td className="px-5 py-4 text-gray-600">{row.bestFor}</td>
                                            <td className="px-5 py-4 text-gray-500">{row.details}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <h3 className="mt-14 text-xl font-bold text-gray-950">
                            {COPY.errorTitle}
                        </h3>

                        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500">
                            {COPY.errorIntro}
                        </p>

                        <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200">
                            <table className="w-full min-w-[560px] text-left text-sm">
                                <caption className="sr-only">
                                    QR code error correction levels
                                </caption>

                                <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
                                    <tr>
                                        <th scope="col" className="px-5 py-3 font-semibold">Level</th>
                                        <th scope="col" className="px-5 py-3 font-semibold">Can recover</th>
                                        <th scope="col" className="px-5 py-3 font-semibold">Good for</th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-100">
                                    {ERROR_LEVELS.map((row) => (
                                        <tr key={row.level}>
                                            <th scope="row" className="px-5 py-4 font-bold text-gray-950">
                                                {row.level}
                                            </th>
                                            <td className="px-5 py-4 text-gray-600">{row.recovery}</td>
                                            <td className="px-5 py-4 text-gray-500">{row.goodFor}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* ================= SCAN TIPS ================= */}
                <section
                    id="tips"
                    aria-labelledby="tips-heading"
                    className="border-t border-gray-100 bg-gray-50 py-24 lg:py-28"
                >
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
                            <SectionHeading
                                id="tips-heading"
                                eyebrow="Scan reliability"
                                title={COPY.tipsTitle}
                                intro={COPY.tipsIntro}
                            />

                            <ul className="space-y-4">
                                {BEST_PRACTICES.map((tip) => (
                                    <li key={tip} className="flex items-start gap-3">
                                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-400">
                                            <FiCheck
                                                aria-hidden="true"
                                                className="h-3.5 w-3.5 text-gray-950"
                                            />
                                        </span>

                                        <span className="text-sm leading-6 text-gray-700">
                                            {tip}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ================= USE CASES ================= */}
                <section
                    id="use-cases"
                    aria-labelledby="use-cases-heading"
                    className="border-t border-gray-100 bg-white py-24 lg:py-28"
                >
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <SectionHeading
                            id="use-cases-heading"
                            eyebrow="Use cases"
                            title={COPY.useCasesTitle}
                            center
                        />

                        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {USE_CASES.map((item) => (
                                <article
                                    key={item.title}
                                    className="rounded-2xl border border-gray-200 bg-gray-50 p-7"
                                >
                                    <h3 className="text-lg font-bold text-gray-950">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-gray-500">
                                        {item.text}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <MoreThanShortener />

                {/* ================= FAQ ================= */}
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
                            WhyLong's QR Studio FAQs
                        </h2>
                        <p className="mt-4 leading-7 text-slate-600">
                            Clear answers to common questions about creating, using and
                            sharing QR Codes.
                        </p>
                    </div>

                    <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
                        {FAQS.map((faq, index) => {
                            const isOpen = openFaq === index;
                            const answerId = `url-faq-answer-${index}`;

                            return (
                                <article key={faq.question} className="py-1 px-4 hover:border-2 rounded-xl hover:border-yellow-400">
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
                </section>

                {/* ================= FINAL CTA ================= */}
                <section className="border-t border-gray-100 bg-white py-10">
                    <div className="mx-auto max-w-5xl px-6 lg:px-8">
                        <div className="flex flex-col gap-6 rounded-3xl bg-gray-950 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
                            <div className="max-w-xl">
                                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                    Ready to make a QR code that looks like your brand?
                                </h2>

                                <p className="mt-3 text-sm leading-6 text-gray-400">
                                    Start free. Add your logo, pick your colors, and
                                    download in minutes. Need a short link first?{" "}
                                    <Link
                                        to="/"
                                        className="font-semibold text-yellow-400 underline underline-offset-4"
                                    >
                                        Shorten a URL on the home page
                                    </Link>
                                    .
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={handleCreate}
                                className="group inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-bold text-gray-950 transition-all hover:bg-yellow-300 active:scale-[0.98]"
                            >
                                {ctaLabel}
                                <FiArrowRight
                                    aria-hidden="true"
                                    className="transition-transform group-hover:translate-x-0.5"
                                />
                            </button>
                        </div>
                    </div>
                    <p className="mt-8 text-center text-sm text-slate-500">
                        Don't have a short link yet?{" "}
                        <Link
                            to="/products/url-shortener"
                            className="font-semibold text-amber-700 underline underline-offset-4 hover:text-amber-800"
                        >
                            Shorten URL now
                        </Link>
                        .
                    </p>
                </section>
            </main>


            <AuthPanel
                isOpen={isAuthOpen}
                onClose={() => setIsAuthOpen(false)}
            />
        </div>
    );
};

export default QRCodeGeneratorPage;