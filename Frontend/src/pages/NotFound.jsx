import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <main className="relative flex min-h-screen flex-col overflow-hidden bg-white text-gray-950">

            <Helmet>
                <title>Page Not Found (404) | WhyLong</title>

                <meta
                    name="description"
                    content="The page you're looking for couldn't be found. Return to WhyLong to shorten URLs, generate QR codes, and manage your links."
                />

                <meta name="robots" content="noindex, follow" />

                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="WhyLong" />
                <meta property="og:title" content="Page Not Found | WhyLong" />
                <meta
                    property="og:description"
                    content="This page doesn't exist or may have been moved. Visit WhyLong to get back on track."
                />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Page Not Found | WhyLong" />
                <meta
                    name="twitter:description"
                    content="This page doesn't exist or may have been moved. Return to WhyLong."
                />
            </Helmet>
            {/* Background decoration */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-yellow-100/60 blur-3xl" />
                <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl" />

                <div
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage:
                            "radial-gradient(#111827 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                    }}
                />
            </div>

            {/* Minimal navbar */}
            <header className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
                <Link
                    to="/"
                    className="group flex items-center gap-2.5"
                    aria-label="WhyLong home"
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 text-gray-950 shadow-sm transition-transform duration-300 group-hover:rotate-[-8deg]">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                            />
                        </svg>
                    </div>

                    <span className="text-xl font-extrabold tracking-tight">
                        WhyLong<span className="text-yellow-500">.</span>
                    </span>
                </Link>

                <span className="hidden text-sm text-gray-400 sm:block">
                    Lost? Let's get you back.
                </span>
            </header>

            {/* Main content */}
            <section className="relative z-10 flex flex-1 items-center justify-center px-6 py-16">
                <div className="mx-auto w-full max-w-3xl text-center">
                    {/* 404 visual */}
                    <div className="relative mx-auto mb-8 flex w-fit items-center justify-center">
                        <span className="select-none text-[clamp(8rem,25vw,17rem)] font-black leading-none tracking-[-0.09em] text-gray-100">
                            404
                        </span>

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex h-20 w-20 -rotate-12 items-center justify-center rounded-3xl border border-yellow-300 bg-yellow-400 shadow-[0_16px_45px_rgba(250,204,21,0.3)] transition-transform duration-500 hover:rotate-0 sm:h-24 sm:w-24">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    className="h-10 w-10 text-gray-950 sm:h-12 sm:w-12"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                                    />
                                </svg>
                            </div>
                        </div>

                        <span className="absolute -right-3 top-3 h-3 w-3 rounded-full bg-yellow-400 sm:-right-5 sm:top-8" />
                        <span className="absolute -left-2 bottom-4 h-2.5 w-2.5 rounded-full bg-gray-300 sm:-left-5 sm:bottom-10" />
                    </div>

                    {/* Message */}
                    <div className="mx-auto max-w-2xl">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-yellow-800">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-yellow-500" />
                            Page not found
                        </div>

                        <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                            Looks like this link
                            <span className="block text-gray-400">
                                went a little too far.
                            </span>
                        </h1>

                        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-gray-500 sm:text-base">
                            The page you're looking for doesn't exist,
                            may have moved, or the URL might be incorrect.
                            No worries — let's get you back on track.
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Link
                            to="/"
                            className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 text-sm font-bold text-gray-950 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-200/60 sm:w-auto"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="h-4 w-4 transition-transform group-hover:-translate-x-1"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m15 18-6-6 6-6M9 12h12"
                                />
                            </svg>
                            Back to homepage
                        </Link>

                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50 hover:text-gray-950 sm:w-auto"
                        >
                            Go back
                        </button>
                    </div>

                    {/* Brand message */}
                    <div className="mx-auto mt-14 flex max-w-sm items-center justify-center gap-3 border-t border-gray-100 pt-6">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-950 text-yellow-400">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                                />
                            </svg>
                        </div>

                        <div className="text-left">
                            <p className="text-xs font-bold text-gray-800">
                                WhyLong
                            </p>
                            <p className="mt-0.5 text-xs text-gray-400">
                                Long links? Not anymore.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 px-6 py-5 text-center">
                <p className="text-xs text-gray-400">
                    © {new Date().getFullYear()} WhyLong. Built to keep things simple.
                </p>
            </footer>
        </main>
    );
}