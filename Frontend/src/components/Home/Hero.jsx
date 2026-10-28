import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthPanel from "../Auth/AuthPanel";
import { useAuth } from "../../context/AuthContext";

const ArrowIcon = ({ className = "h-4 w-4" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className={className}
        aria-hidden="true"
    >
        <path
            fillRule="evenodd"
            d="M3 10a.75.75 0 0 1 .75-.75h10.69l-3.22-3.22a.75.75 0 1 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H3.75A.75.75 0 0 1 3 10Z"
            clipRule="evenodd"
        />
    </svg>
);

const Hero = () => {
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [copied, setCopied] = useState(false);
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const { user, authLoading } = useAuth();

    const navigate = useNavigate();

    const openAuth = () => {
        setIsAuthOpen(true);
    };

    // =========================
    // DASHBOARD
    // =========================

    const goToDashboard = () => {
        navigate("/dashboard");
    };

    // =========================
    // SHORTEN URL
    // =========================

    const handleClick = async () => {
        if (!url.trim()) {
            setError("Please enter a URL first.");
            return;
        }

        setError("");
        setShortUrl("");
        setCopied(false);
        setIsLoading(true);

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/urls/shorten`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        originalUrl: url.trim()
                    })
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result.message ||
                    "Unable to shorten this URL."
                );
            }

            setShortUrl(result.data.shortUrl);
            setUrl("");

        } catch (error) {
            setError(
                error.message ||
                "Something went wrong. Please try again."
            );

        } finally {
            setIsLoading(false);
        }
    };

    // =========================
    // COPY SHORT URL
    // =========================

    const handleCopy = async () => {
        if (!shortUrl) return;

        try {
            await navigator.clipboard.writeText(shortUrl);

            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 2000);

        } catch (error) {
            console.error("Copy failed:", error);
        }
    };

    return (
        <>
            <section
                className="relative overflow-hidden bg-white"
                id="hero"
            >
                {/* ================= BACKGROUND DECORATION ================= */}

                <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-yellow-100/60 blur-3xl" />
                <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-yellow-50 blur-3xl" />
                <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-8 lg:pb-32 lg:pt-28">
                    <div className="mx-auto max-w-4xl text-center">
                        {/* ================= EYEBROW ================= */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-3.5 py-3 md:py-4">
                            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                            <span className="text-xs font-semibold tracking-wide text-yellow-700">
                                UNLIMITED LINKS. CUSTOM QR CODES. CLEAR INSIGHTS.
                            </span>
                        </div>

                        {/* ================= HERO HEADING ================= */}
                        <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
                            Free URL Shortener &amp;
                            <span className="relative mt-1 block pb-1">
                                <span className="relative z-10 text-yellow-500">
                                    Custom QR Code Generator
                                </span>
                                <span
                                    aria-hidden="true"
                                    className="absolute bottom-1 left-0 -z-0 h-3 w-full bg-yellow-100 sm:h-4"
                                />
                            </span>
                        </h1>
                        <h2 className="mt-5 text-xl font-semibold leading-snug tracking-tight text-gray-900 sm:text-2xl lg:text-3xl">
                            Short links.
                            <span className="text-gray-400"> Better sharing.</span>
                            <span className="block">
                                <span className="text-gray-900">One simple platform.</span>
                            </span>
                        </h2>

                        {/* ================= DESCRIPTION ================= */}
                        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                            Shorten long URLs, create branded QR codes, and track link
                            performance—all with WhyLong. Free link shortening, no
                            subscription required.
                        </p>

                        {/* ================= URL SHORTENER ================= */}
                        <div className="mx-auto mt-10 max-w-2xl">
                            <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-2 shadow-[0_15px_50px_rgba(0,0,0,0.07)] sm:flex-row">
                                {/* Input */}
                                <div className="flex flex-1 items-center gap-3 px-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.7"
                                        stroke="currentColor"
                                        className="h-5 w-5 shrink-0 text-gray-400"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13.19 8.688a4.5 4.5 0 0 0-6.38 0l-3 3a4.5 4.5 0 0 0 6.38 6.364l1.5-1.5"
                                        />

                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10.81 15.312a4.5 4.5 0 0 0 6.38 0l3-3a4.5 4.5 0 0 0-6.38-6.364l-1.5 1.5"
                                        />
                                    </svg>
                                    <input
                                        type="url"
                                        value={url}
                                        inputMode="url"
                                        autoComplete="off"
                                        aria-label="Paste your long URL"
                                        onChange={(e) => {
                                            setUrl(e.target.value);
                                            setError("");
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                handleClick();
                                            }
                                        }}
                                        placeholder="Paste your long URL here..."
                                        className="w-full bg-transparent py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400"
                                    />
                                </div>

                                {/* Button */}
                                <button
                                    onClick={handleClick}
                                    disabled={isLoading}
                                    className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-gray-950 px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-gray-800 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
                                >
                                    {isLoading ? (
                                        <>
                                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                                            Shortening...
                                        </>
                                    ) : (
                                        <>
                                            Shorten URL

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="h-4 w-4"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M3 10a.75.75 0 01.75-.75h10.69l-3.22-3.22a.75.75 0 111.06-1.06l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 01-1.06 1.06l3.22-3.22H3.75A.75.75 0 013 10Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* ================= ERROR ================= */}
                            {error && (
                                <div className="mt-3 flex items-center justify-center gap-2 text-sm text-red-500">

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M18 10a8 8 0 1 1-16 0 8 8 0 0116 0ZM8.28 7.22a.75.75 0 011.06 0L10 7.88l.66-.66a.75.75 0 111.06 1.06l-.66.66.66.66a.75.75 0 11-1.06 1.06L10 8.94l-.66.66a.75.75 0 11-1.06-1.06L9.34 7.88l-.66-.66a.75.75 0 010-1.06Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    {error}
                                </div>
                            )}

                            {/* ================= SHORT URL RESULT ================= */}
                            {shortUrl && (
                                <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                                    <div className="p-4 sm:p-5">
                                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                            {/* Short URL */}
                                            <div className="min-w-0 flex-1">
                                                <div className="mb-2 flex items-center gap-2">
                                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-50 text-green-600">
                                                        <svg
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                            className="h-4 w-4"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M16.704 4.153a.75.75 0 01.143 1.052l-7.25 9a.75.75 0 01-1.127.075l-4.25-4.25a.75.75 0 111.06-1.06l3.665 3.665 6.738-8.364a.75.75 0 011.021-.118Z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </span>

                                                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                                        Your short link is ready
                                                    </span>
                                                </div>

                                                <a
                                                    href={shortUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block truncate text-base font-bold text-gray-950 transition-colors hover:text-yellow-700 sm:text-lg"
                                                    title={shortUrl}
                                                >
                                                    {shortUrl}
                                                </a>

                                                <p className="mt-1 text-xs text-gray-500">
                                                    Ready to copy and share anywhere.
                                                </p>
                                            </div>

                                            {/* Copy action */}
                                            <button
                                                type="button"
                                                onClick={handleCopy}
                                                className={`inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all active:scale-[0.98] ${copied
                                                    ? "bg-green-50 text-green-700 ring-1 ring-green-200"
                                                    : "bg-gray-950 text-white hover:bg-gray-800"
                                                    }`}
                                            >
                                                {copied ? (
                                                    <>
                                                        <svg
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                            className="h-4 w-4"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M16.704 4.153a.75.75 0 01.143 1.052l-7.25 9a.75.75 0 01-1.127.075l-4.25-4.25a.75.75 0 111.06-1.06l3.665 3.665 6.738-8.364a.75.75 0 011.021-.118Z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                        Copied
                                                    </>
                                                ) : (
                                                    <>
                                                        <svg
                                                            viewBox="0 0 20 20"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="1.5"
                                                            className="h-4 w-4"
                                                            aria-hidden="true"
                                                        >
                                                            <rect x="6.5" y="6.5" width="10" height="11" rx="2" />
                                                            <path
                                                                d="M13.5 6.5v-1a2 2 0 00-2-2h-6a2 2 0 00-2 2v8a2 2 0 002 2h1"
                                                                strokeLinecap="round"
                                                            />
                                                        </svg>
                                                        Copy link
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    {/* QR action */}
                                    <div className="flex flex-col gap-3 border-t border-gray-100 bg-gradient-to-r from-yellow-50/80 via-white to-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-yellow-200 bg-yellow-100/80 text-gray-900">
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.7"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="h-5 w-5"
                                                    aria-hidden="true"
                                                >
                                                    <rect x="3" y="3" width="7" height="7" rx="1" />
                                                    <rect x="14" y="3" width="7" height="7" rx="1" />
                                                    <rect x="3" y="14" width="7" height="7" rx="1" />
                                                    <path d="M14 14h3v3h-3zM20 14v2M14 20h2M20 19v2M18 21h3" />
                                                </svg>
                                            </div>

                                            <div>
                                                <p className="text-sm font-semibold text-gray-900">
                                                    Need a QR code too?
                                                </p>
                                                <p className="mt-0.5 text-xs leading-5 text-gray-500">
                                                    Create a QR code for your short link.
                                                </p>
                                            </div>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={openAuth}
                                            className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-yellow-300 bg-yellow-400 px-5 py-3 text-sm font-semibold text-gray-950 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-yellow-400 hover:bg-yellow-300 hover:shadow-md active:translate-y-0 sm:w-auto"
                                        >
                                            Generate QR
                                            <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* ================= HERO AUTH DETAIL ================= */}

                            {!shortUrl &&
                                !error &&
                                !authLoading &&
                                !user && (
                                    <div className="mt-5 space-y-3">

                                        <p className="text-xs text-gray-400">
                                            Free to use · No credit card required
                                        </p>

                                        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-gray-400">

                                            <span className="flex items-center gap-1.5">
                                                <span className="h-1 w-1 rounded-full bg-yellow-400" />
                                                Instant shortening
                                            </span>

                                            <span className="flex items-center gap-1.5">
                                                <span className="h-1 w-1 rounded-full bg-yellow-400" />
                                                Simple link management
                                            </span>

                                            <span className="flex items-center gap-1.5">
                                                <span className="h-1 w-1 rounded-full bg-yellow-400" />
                                                Track your links
                                            </span>

                                        </div>

                                        <p className="pt-1 text-sm text-gray-500">
                                            Want more from WhyLong?
                                            {" "}

                                            <button
                                                type="button"
                                                onClick={openAuth}
                                                className="cursor-pointer font-semibold text-gray-950 underline decoration-yellow-400 decoration-2 underline-offset-4 transition-colors hover:text-yellow-600"
                                            >
                                                Log in to access all features
                                            </button>
                                        </p>

                                    </div>
                                )}

                            {/* ================= LOGGED-IN USER ================= */}

                            {!shortUrl &&
                                !error &&
                                !authLoading &&
                                user && (
                                    <div className="mt-5 space-y-3">

                                        <p className="text-xs text-gray-400">
                                            Your links are ready to be managed from your workspace.
                                        </p>

                                        <button
                                            type="button"
                                            onClick={goToDashboard}
                                            className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-gray-950 underline decoration-yellow-400 decoration-2 underline-offset-4 transition-colors hover:text-yellow-600"
                                        >
                                            Go to your dashboard

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="h-4 w-4"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M3 10a.75.75 0 01.75-.75h10.69l-3.22-3.22a.75.75 0 111.06-1.06l4.5 4.5a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.22-3.22H3.75A.75.75 0 013 10Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>

                                    </div>
                                )}
                        </div>
                    </div>

                    {/* ================= PRODUCT PREVIEW ================= */}

                    <div className="mx-auto mt-20 max-w-5xl">
                        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-2 shadow-[0_20px_70px_rgba(0,0,0,0.08)]">
                            <div className="rounded-xl border border-gray-200 bg-white">
                                {/* Fake browser header */}
                                <div className="flex h-12 items-center gap-2 border-b border-gray-100 px-5">
                                    <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
                                    <div className="mx-auto hidden h-7 w-80 rounded-md bg-gray-50 sm:block" />
                                </div>

                                {/* Dashboard preview */}
                                <div className="grid min-h-[280px] grid-cols-1 md:grid-cols-[180px_1fr]">
                                    <div className="hidden border-r border-gray-100 p-5 md:block">
                                        <div className="mb-8 h-6 w-24 rounded bg-gray-950" />
                                        <div className="space-y-3">
                                            <div className="h-8 rounded-lg bg-yellow-50" />
                                            <div className="h-8 rounded-lg bg-gray-50" />
                                            <div className="h-8 rounded-lg bg-gray-50" />
                                            <div className="h-8 rounded-lg bg-gray-50" />
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="h-5 w-32 rounded bg-gray-900" />
                                                <div className="mt-2 h-3 w-48 rounded bg-gray-100" />
                                            </div>
                                            <div className="h-9 w-24 rounded-lg bg-yellow-400" />
                                        </div>
                                        <div className="mt-8 grid gap-4 sm:grid-cols-3">
                                            <div className="rounded-xl border border-gray-100 p-4">
                                                <div className="h-3 w-16 rounded bg-gray-100" />
                                                <div className="mt-3 h-6 w-12 rounded bg-gray-900" />
                                            </div>
                                            <div className="rounded-xl border border-gray-100 p-4">
                                                <div className="h-3 w-20 rounded bg-gray-100" />
                                                <div className="mt-3 h-6 w-16 rounded bg-gray-900" />
                                            </div>
                                            <div className="rounded-xl border border-gray-100 p-4">
                                                <div className="h-3 w-16 rounded bg-gray-100" />
                                                <div className="mt-3 h-6 w-14 rounded bg-yellow-500" />
                                            </div>
                                        </div>
                                        <div className="mt-5 h-24 rounded-xl bg-gray-50" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* ================= AUTH PANEL ================= */}

            < AuthPanel
                isOpen={isAuthOpen}
                onClose={() => setIsAuthOpen(false)}
            />
        </>
    );
};

export default Hero;