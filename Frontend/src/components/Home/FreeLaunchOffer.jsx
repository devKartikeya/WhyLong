import { Link } from "react-router-dom";

const CheckIcon = () => (
    <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5 shrink-0 text-yellow-500"
        aria-hidden="true"
    >
        <path
            fillRule="evenodd"
            d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.25 7.333a1 1 0 0 1-1.42.006L3.29 9.293a1 1 0 0 1 1.42-1.414l4.038 4.06 6.542-6.617a1 1 0 0 1 1.414-.032Z"
            clipRule="evenodd"
        />
    </svg>
);

const FreeLaunchOffer = () => {
    const benefits = [
        "Unlimited short links",
        "QR codes for every link",
        "Click analytics and insights",
        "A personal link management dashboard",
    ];

    return (
        <section
            aria-labelledby="free-offer-heading"
            className="relative overflow-hidden border-y border-gray-100 bg-gray-50 py-20 sm:py-24 lg:py-28"
        >
            {/* Subtle background accents */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-yellow-200/40 blur-3xl"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-yellow-100/70 blur-3xl"
            />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
                    {/* Offer copy */}
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-500 opacity-50" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-500" />
                            </span>

                            <span className="text-xs font-bold uppercase tracking-[0.14em] text-gray-800 sm:text-sm">
                                The WhyLong free experience
                            </span>
                        </div>

                        <h2
                            id="free-offer-heading"
                            className="mt-7 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl"
                        >
                            Unlimited means{" "}
                            <span className="relative inline-block">
                                unlimited.
                                <span
                                    aria-hidden="true"
                                    className="absolute -bottom-1 left-0 -z-0 h-3 w-full bg-yellow-300/70"
                                />
                            </span>
                        </h2>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
                            Create as many short links as you need. Generate
                            QR codes for your links and understand how people
                            interact with them — without paying for every
                            feature you use.
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            {benefits.map((benefit) => (
                                <div
                                    key={benefit}
                                    className="flex items-start gap-3"
                                >
                                    <CheckIcon />

                                    <span className="text-sm font-medium leading-6 text-gray-800 sm:text-base">
                                        {benefit}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">

                            <span className="text-sm text-gray-500">
                                No payment required to get started.
                            </span>
                        </div>
                    </div>

                    {/* Visual offer card */}
                    <div className="lg:col-span-5">
                        <div className="relative mx-auto max-w-md">
                            <div
                                aria-hidden="true"
                                className="absolute -inset-4 rounded-[2rem] bg-yellow-200/40 blur-2xl"
                            />

                            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-gray-950/5">
                                <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
                                    <div>
                                        <p className="text-sm font-bold text-gray-950">
                                            Your link toolkit
                                        </p>

                                        <p className="mt-1 text-xs text-gray-500">
                                            Everything to get started
                                        </p>
                                    </div>

                                    <span className="rounded-full bg-yellow-100 px-3 py-1.5 text-xs font-bold text-gray-900">
                                        Free
                                    </span>
                                </div>

                                <div className="space-y-3 p-5 sm:p-6">
                                    <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-4">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-gray-950">
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                            >
                                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                            </svg>
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <p className="text-sm font-semibold text-gray-950">
                                                Short links
                                            </p>
                                            <p className="mt-1 text-xs text-gray-500">
                                                Create without a link quota
                                            </p>
                                        </div>

                                        <span className="text-sm font-bold text-gray-950">
                                            ∞
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-4">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-gray-950">
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                            >
                                                <rect x="3" y="3" width="7" height="7" rx="1" />
                                                <rect x="14" y="3" width="7" height="7" rx="1" />
                                                <rect x="3" y="14" width="7" height="7" rx="1" />
                                                <path d="M14 14h3v3h-3zM20 14v3M14 20h3M20 20h.01" />
                                            </svg>
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <p className="text-sm font-semibold text-gray-950">
                                                QR codes
                                            </p>
                                            <p className="mt-1 text-xs text-gray-500">
                                                A QR code for every link
                                            </p>
                                        </div>

                                        <span className="text-sm font-bold text-gray-950">
                                            ∞
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-4">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-gray-950">
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                            >
                                                <path d="M3 3v18h18" />
                                                <path d="m7 14 4-4 3 3 5-7" />
                                            </svg>
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <p className="text-sm font-semibold text-gray-950">
                                                Click analytics
                                            </p>
                                            <p className="mt-1 text-xs text-gray-500">
                                                Learn how your links perform
                                            </p>
                                        </div>

                                        <svg
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-5 w-5 text-green-600"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.25 7.333a1 1 0 0 1-1.42.006L3.29 9.293a1 1 0 0 1 1.42-1.414l4.038 4.06 6.542-6.617a1 1 0 0 1 1.414-.032Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>

                                <div className="border-t border-gray-100 px-6 py-5">
                                    <p className="text-center text-sm font-medium text-gray-600">
                                        One account. No link limits.
                                    </p>
                                </div>
                            </div>

                            <div className="absolute -right-3 -top-4 hidden rounded-2xl border border-yellow-200 bg-white px-4 py-3 shadow-lg sm:block">
                                <p className="text-xs font-semibold text-gray-500">
                                    Your creativity
                                </p>
                                <p className="mt-1 text-lg font-bold text-gray-950">
                                    No limits.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FreeLaunchOffer;