import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import AuthPanel from "../Auth/AuthPanel";

export default function QRTutorialPage({
    title,
    description,
    keyword,
    profileType,
    profileUrlExample,
    intro,
    steps,
    image,
    logo,
    platformName,
    benefits,
    faqs,
    canonicalUrl,
    imageAlt,
}) {
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const navigate = useNavigate();
    const { user, authLoading } = useAuth();

    const openAuth = () => {
        setIsAuthOpen(true);
    };

    const goToDashboard = () => {
        navigate("/dashboard");
    };

    useEffect(() => {
        document.title = title;

        const setMeta = (name, content) => {
            let element = document.head.querySelector(
                `meta[name="${name}"]`
            );

            if (!element) {
                element = document.createElement("meta");
                element.setAttribute("name", name);
                document.head.appendChild(element);
            }

            element.setAttribute("content", content);
        };

        setMeta("description", description);

        let canonical = document.head.querySelector(
            'link[rel="canonical"]'
        );

        if (!canonical) {
            canonical = document.createElement("link");
            canonical.setAttribute("rel", "canonical");
            document.head.appendChild(canonical);
        }

        canonical.setAttribute("href", canonicalUrl);

        const structuredData = {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "WebPage",
                    name: title,
                    description,
                    url: canonicalUrl,
                    isPartOf: {
                        "@type": "WebSite",
                        name: "WhyLong",
                        url: "https://whylong.vercel.app/",
                    },
                },
                {
                    "@type": "FAQPage",
                    mainEntity: faqs.map((faq) => ({
                        "@type": "Question",
                        name: faq.question,
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: faq.answer,
                        },
                    })),
                },
            ],
        };

        let script = document.getElementById(
            "qr-tutorial-structured-data"
        );

        if (!script) {
            script = document.createElement("script");
            script.id = "qr-tutorial-structured-data";
            script.type = "application/ld+json";
            document.head.appendChild(script);
        }

        script.textContent = JSON.stringify(structuredData);

        return () => {
            // Remove page-specific structured data when leaving the page.
            document
                .getElementById("qr-tutorial-structured-data")
                ?.remove();
        };
    }, [title, description, canonicalUrl, faqs]);

    return (
        <main className="min-h-screen my-8 bg-white text-gray-900">
            {/* Hero */}
            <section className="relative overflow-hidden border-b border-yellow-100 bg-gradient-to-br from-yellow-50 via-white to-amber-50">
                <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:py-24">

                    {/* Left: Content */}
                    <div className="relative z-10">
                        <span className="inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-white/90 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
                            <span className="h-2 w-2 rounded-full bg-yellow-400" />
                            Free {platformName} QR Code Guide
                        </span>

                        <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
                            {keyword}
                            <span className="text-yellow-500">
                                {" "}with WhyLong
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
                            {intro}
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            {authLoading ? (
                                <div className="h-12 w-48 animate-pulse rounded-xl bg-gray-200" />
                            ) : user ? (
                                <button
                                    type="button"
                                    onClick={goToDashboard}
                                    className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-bold text-gray-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-md"
                                >
                                    Create {platformName} QR Code
                                    <span aria-hidden="true">→</span>
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    onClick={openAuth}
                                    className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-bold text-gray-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-md"
                                >
                                    Create {platformName} QR Code
                                    <span aria-hidden="true">→</span>
                                </button>
                            )}

                        </div>

                        <p className="mt-4 text-sm text-gray-500">
                            Create a scannable QR code for your {profileType} profile.
                        </p>
                    </div>

                    {/* Right: Platform Identity Card */}
                    <div className="relative mx-auto w-full max-w-md">
                        {/* Decorative background */}
                        <div
                            aria-hidden="true"
                            className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-yellow-200/60 blur-2xl"
                        />
                        <div
                            aria-hidden="true"
                            className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-amber-100 blur-2xl"
                        />

                        {/* Diagonal Platform + WhyLong Logos */}
                        <div className="relative mx-auto mt-10 h-72 w-full max-w-md sm:h-80">

                            {/* Decorative glow */}
                            <div
                                aria-hidden="true"
                                className="absolute right-8 top-2 h-40 w-40 rounded-full bg-yellow-200/60 blur-3xl"
                            />

                            {/* Platform Logo — Top Right */}
                            <div className="absolute right-4 top-0 z-10 flex h-36 w-36 items-center justify-center rounded-full border border-gray-200 bg-white p-5 shadow-xl shadow-gray-900/10 sm:right-8 sm:h-44 sm:w-44 sm:p-6">
                                <img
                                    src={logo}
                                    alt={`${platformName} logo`}
                                    className="h-full w-full rounded-full object-contain"
                                    loading="eager"
                                    decoding="async"
                                />
                            </div>

                            {/* WhyLong Logo — Bottom Left */}
                            <div className="absolute bottom-0 left-4 z-20 flex h-36 w-36 items-center justify-center rounded-full border-4 border-white bg-yellow-400 p-5 shadow-xl shadow-yellow-900/15 sm:left-8 sm:h-44 sm:w-44 sm:p-6">
                                <span className="flex h-20 w-20 items-center justify-center rounded-xl bg-yellow-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className="h-80 w-80 text-gray-950"
                                        aria-hidden="true"
                                    >
                                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                    </svg>
                                </span>
                            </div>

                            {/* Connection accent */}
                            <div
                                aria-hidden="true"
                                className="absolute left-1/2 top-1/2 z-30 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-gray-950 text-xl font-semibold text-yellow-400 shadow-md"
                            >
                                +
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main article */}
            <article className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-16">
                <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
                    <div className="min-w-0">
                        <section id="why">
                            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                                Why create a QR code for your {profileType}?
                            </h2>

                            <p className="mt-4 leading-8 text-gray-600">
                                {description}
                            </p>

                            <p className="mt-4 leading-8 text-gray-600">
                                Instead of asking people to search for your profile
                                or type a long web address, you can share a QR code
                                that takes them directly to your profile when scanned.
                                Add it to business cards, portfolios, presentations,
                                posters, or other relevant materials.
                            </p>
                        </section>

                        {/* QR Code Example */}
                        <section className="mt-10" id="example">
                            <h2 className="text-2xl font-bold tracking-tight">
                                Example: {profileType} QR code made with WhyLong
                            </h2>

                            <div className="mt-5 flex flex-col items-center justify-center rounded-2xl border border-yellow-200 bg-yellow-50 p-6 sm:p-8">
                                <img
                                    src={image}
                                    alt={imageAlt}
                                    className="h-auto w-full max-w-xs rounded-xl border border-gray-200 bg-white object-contain p-3 shadow-sm"
                                    loading="lazy"
                                    decoding="async"
                                />

                                <p className="mt-4 text-center text-sm leading-6 text-gray-600">
                                    Scan this QR code to visit the example {profileType} profile.
                                </p>
                            </div>

                            <p className="mt-3 text-sm leading-6 text-gray-500">
                                Scan the QR code with your phone camera to verify that it
                                opens the correct profile.
                            </p>
                        </section>

                        {/* Steps */}
                        <section className="mt-12" id="steps">
                            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                                How to create a QR code for your {profileType}
                            </h2>

                            <p className="mt-4 leading-8 text-gray-600">
                                Follow these steps to create a QR code for your
                                profile using WhyLong.
                            </p>

                            <ol className="mt-7 space-y-6">
                                {steps.map((step, index) => (
                                    <li
                                        key={step.title}
                                        className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6"
                                    >
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-100 font-bold text-gray-900">
                                            {index + 1}
                                        </span>

                                        <div>
                                            <h3 className="text-lg font-semibold">
                                                {step.title}
                                            </h3>

                                            <p className="mt-2 leading-7 text-gray-600">
                                                {step.description}
                                            </p>

                                            {step.example && (
                                                <div className="mt-3 break-all rounded-lg bg-gray-50 p-3 font-mono text-sm text-gray-700">
                                                    {profileUrlExample}
                                                </div>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </section>

                        {/* Benefits */}
                        <section className="mt-12" id="benefits">
                            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                                Benefits of using WhyLong
                            </h2>

                            <ul className="mt-6 space-y-3">
                                {benefits.map((benefit) => (
                                    <li key={benefit} className="flex gap-3 leading-7 text-gray-600">
                                        <span
                                            className="mt-1 font-bold text-yellow-600"
                                            aria-hidden="true"
                                        >
                                            ✓
                                        </span>
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* FAQs */}
                        <section className="mt-12" id="faqsa">
                            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                                Frequently asked questions
                            </h2>

                            <div className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
                                {faqs.map((faq) => (
                                    <details key={faq.question} className="group py-5">
                                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-gray-900 marker:hidden">
                                            {faq.question}
                                            <span className="text-xl text-yellow-600 transition group-open:rotate-45">
                                                +
                                            </span>
                                        </summary>

                                        <p className="mt-3 pr-6 leading-7 text-gray-600">
                                            {faq.answer}
                                        </p>
                                    </details>
                                ))}
                            </div>
                        </section>

                        {/* Final CTA */}
                        <section className="mt-12 rounded-3xl bg-gray-950 p-7 text-white sm:p-10">
                            <p className="text-sm font-semibold uppercase tracking-wider text-yellow-400">
                                Ready to share your profile?
                            </p>

                            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                                Make your {profileType} profile easier to share.
                            </h2>

                            <p className="mt-4 leading-7 text-gray-300">
                                Create a QR code with WhyLong and make it easier for
                                people to reach your profile.
                            </p>

                            <a
                                href="/"
                                className="mt-6 inline-flex rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-gray-950 transition hover:bg-yellow-300"
                            >
                                Try WhyLong for Free →
                            </a>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="h-fit rounded-2xl border border-gray-200 bg-gray-50 p-6 lg:sticky lg:top-8">
                        <h2 className="text-lg font-bold">In this guide</h2>

                        <ul className="mt-4 space-y-3 text-sm text-gray-600">
                            <li>
                                <a href="#why" className="hover:text-gray-950">
                                    Why use a profile QR code?
                                </a>
                            </li>
                            <li>
                                <a href="#example" className="hover:text-gray-950">
                                    QR code example
                                </a>
                            </li>
                            <li>
                                <a href="#steps" className="hover:text-gray-950">
                                    Step-by-step instructions
                                </a>
                            </li>
                            <li>
                                <a href="#benefits" className="hover:text-gray-950">
                                    WhyLong benefits
                                </a>
                            </li>
                            <li>
                                <a href="#faqs" className="hover:text-gray-950">
                                    FAQs
                                </a>
                            </li>
                        </ul>

                        <div className="mt-6 rounded-xl bg-yellow-100 p-4">
                            <p className="font-semibold text-gray-900">
                                One scan. Direct access.
                            </p>
                            <p className="mt-2 text-sm leading-6 text-gray-700">
                                Share your profile with a QR code people can scan
                                using a compatible phone camera.
                            </p>
                        </div>
                    </aside>
                </div>
            </article>
            {/* ================= AUTH PANEL ================= */}

            < AuthPanel
                isOpen={isAuthOpen}
                onClose={() => setIsAuthOpen(false)}
            />
        </main>
    );
}