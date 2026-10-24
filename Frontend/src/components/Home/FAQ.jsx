export const faqs = [
    {
        question: "Is WhyLong a free URL shortener?",
        answer:
            "Yes! WhyLong lets you create unlimited short links without a subscription or credit card. Shorten long URLs instantly and share them anywhere."
    },
    {
        question: "Can I shorten a URL without creating an account?",
        answer:
            "Yes. You can shorten links directly from the WhyLong homepage without signing in. Create an account to manage your links, create custom QR codes, and access analytics."
    },
    {
        question: "Can I create a custom QR code with my logo?",
        answer:
            "Yes. Personalize QR codes with custom colors and a logo, then download them for business cards, posters, social media, and other materials."
    },
    {
        question: "Does WhyLong provide click analytics?",
        answer:
            "Yes. Track link activity and explore available information about visitors' devices, operating systems, browsers, and approximate locations."
    },
    {
        question: "Can I create QR codes for Instagram or GitHub?",
        answer:
            "Absolutely. Create a short link for your Instagram profile, GitHub profile, portfolio, or another URL, then generate a QR code people can scan to visit it."
    },
    {
        question: "Where can I share my short links?",
        answer:
            "Share WhyLong links through social media, emails, messages, websites, documents, and online campaigns. QR codes can also be printed on business cards, flyers, packaging, and posters."
    },
    {
        question: "Can I track visits from a QR code?",
        answer:
            "When a QR code points to a WhyLong short link, visits through that link can appear in its analytics. This helps you understand engagement with your shared links."
    },
    {
        question: "Why choose WhyLong over other URL shorteners?",
        answer:
            "WhyLong brings URL shortening, link management, custom QR code creation, and click analytics together in one platform, with free link shortening and no subscription required."
    }
];

const FAQ = () => {
    return (
        <section
            id="faq"
            aria-labelledby="faq-heading"
            className="relative isolate overflow-hidden border-y border-yellow-100/80 bg-gradient-to-br from-yellow-50 via-[#fffdf5] to-white py-20 sm:py-24 lg:py-28"
        >
            {/* Soft ambient background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-yellow-200/25 blur-3xl"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl"
            />

            <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
                <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

                    {/* Left content */}
                    <div className="lg:sticky lg:top-28">
                        <span className="inline-flex items-center gap-2 rounded-full border border-yellow-200/90 bg-white/80 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-yellow-800 shadow-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                            Frequently asked questions
                        </span>

                        <h2
                            id="faq-heading"
                            className="mt-6 max-w-lg text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-[2.75rem]"
                        >
                            Got questions?
                            <span className="mt-2 block text-gray-500">
                                We've got answers.
                            </span>
                        </h2>

                        <p className="mt-5 max-w-md text-sm leading-7 text-gray-600 sm:text-base">
                            Everything you need to know about shortening
                            links, creating custom QR codes, and understanding
                            your link analytics with WhyLong.
                        </p>

                        <div className="mt-8 hidden h-px w-16 bg-yellow-400 lg:block" />

                        <p className="mt-7 hidden max-w-sm text-sm leading-6 text-gray-500 lg:block">
                            Still curious? Explore WhyLong and discover a
                            simpler way to share your links.
                        </p>
                    </div>

                    {/* Right FAQ accordion */}
                    <div className="space-y-3">
                        {faqs.map((item, index) => (
                            <details
                                key={item.question}
                                className="group rounded-xl border border-gray-200/80 bg-white/85 shadow-[0_2px_10px_rgba(0,0,0,0.025)] transition-all duration-200 hover:border-yellow-300/90 hover:bg-white open:border-yellow-300 open:bg-white open:shadow-[0_8px_28px_rgba(202,138,4,0.07)]"
                            >
                                <summary className="flex cursor-pointer list-none items-center gap-4 px-4 py-5 sm:px-5">
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-yellow-50 text-[11px] font-semibold tabular-nums text-yellow-800 transition-colors group-open:bg-yellow-400 group-open:text-gray-950">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span className="flex-1 text-sm font-semibold leading-6 text-gray-800 sm:text-[15px]">
                                        {item.question}
                                    </span>

                                    <span
                                        aria-hidden="true"
                                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-gray-400 transition-all duration-200 group-hover:text-gray-900 group-open:rotate-45 group-open:bg-yellow-50 group-open:text-gray-900"
                                    >
                                        <svg
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            className="h-4 w-4"
                                        >
                                            <path
                                                d="M10 4.5V15.5M4.5 10H15.5"
                                                stroke="currentColor"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </span>
                                </summary>

                                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-200 group-open:grid-rows-[1fr]">
                                    <div className="overflow-hidden">
                                        <p className="border-t border-gray-100 px-4 pb-5 pl-[3.75rem] pt-3.5 text-sm leading-7 text-gray-600 sm:px-5 sm:pb-5 sm:pl-[4rem]">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>

                {/* Minimal bottom CTA */}
                <div className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-yellow-200/70 pt-8 sm:flex-row sm:items-center lg:mt-20">
                    <div>
                        <h3 className="text-base font-semibold text-gray-950">
                            Ready to simplify your links?
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            Start using WhyLong for free. No subscription needed.
                        </p>
                    </div>

                    <a
                        href="#hero"
                        className="inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
                    >
                        Get started
                        <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            className="h-4 w-4"
                            aria-hidden="true"
                        >
                            <path
                                d="M4 10H16M10.5 4.5L16 10L10.5 15.5"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;