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
            <section className="border-b border-yellow-100 bg-gradient-to-b from-yellow-50 to-white">
                <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
                    <nav
                        aria-label="Breadcrumb"
                        className="mb-8 text-sm text-gray-500"
                    >
                        <a href="/" className="transition hover:text-gray-950">
                            Home
                        </a>
                        <span className="mx-2" aria-hidden="true">
                            /
                        </span>
                        <span className="text-gray-700">QR Code Guides</span>
                    </nav>

                    <span className="inline-flex rounded-full border border-yellow-200 bg-white px-4 py-2 text-sm font-medium text-gray-700">
                        Free QR Code Guide
                    </span>

                    <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                        {keyword}
                        <span className="text-yellow-500"> with WhyLong</span>
                    </h1>

                    <p className="mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
                        {intro}
                    </p>

                    {authLoading ? (
                        <div className="h-12 w-40 shrink-0 animate-pulse rounded-xl bg-gray-800" />
                    ) : user ? (
                        <button
                            type="button"
                            onClick={goToDashboard}
                            className="group inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-sm font-bold text-gray-950 transition-all hover:bg-yellow-300 active:scale-[0.98] m-3"
                        >
                            Create your own {profileType} QR

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 10a.75.75 0 01.75-.75h10.69l-3.22-3.22a.75.75 0 01.1-1.06.75.75 0 011.06.1l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 01-1.06.1.75.75 0 01-.1-1.06l3.22-3.22H3.75A.75.75 0 013 10Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={openAuth}
                            className="group inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-sm font-bold text-gray-950 transition-all hover:bg-yellow-300 active:scale-[0.98] m-3"
                        >
                            Create your own {profileType} QR

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 10a.75.75 0 01.75-.75h10.69l-3.22-3.22a.75.75 0 111.06-1.06l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 01-1.06 1.06l-3.22-3.22H3.75A.75.75 0 013 10Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    )}

                    <p className="mt-3 text-sm text-gray-500">
                        Create a scannable QR code for your {profileType} profile.
                    </p>
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