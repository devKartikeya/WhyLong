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
            className="relative isolate overflow-hidden border-t border-gray-100 bg-gradient-to-b from-white via-white to-yellow-50/40 py-20 sm:py-24 lg:py-32"
        >
            {/* Subtle background accents */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-200/20 blur-3xl"
            />

            <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
                {/* Section heading */}
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-yellow-800">
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                        Got questions?
                    </span>

                    <h2
                        id="faq-heading"
                        className="mt-6 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl"
                    >
                        Everything you need to know <span> </span>
                        <span className="mt-2 text-gray-400">
                            about WhyLong.
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                        From shortening your first link to creating branded QR
                        codes, here are answers to the questions you may have.
                    </p>
                </div>

                {/* FAQ accordion */}
                <div className="mx-auto mt-12 max-w-3xl space-y-3 sm:mt-14">
                    {faqs.map((item, index) => (
                        <details
                            key={item.question}
                            className="group overflow-hidden rounded-2xl border border-gray-200/80 bg-white/90 shadow-sm transition-all duration-300 hover:border-yellow-300 hover:shadow-md open:border-yellow-300 open:bg-white open:shadow-md"
                        >
                            <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-5 sm:px-6">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-xs font-bold text-gray-500 transition-colors duration-300 group-open:bg-yellow-100 group-open:text-yellow-800">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <span className="flex-1 text-sm font-semibold leading-6 text-gray-900 sm:text-base">
                                    {item.question}
                                </span>

                                <span
                                    aria-hidden="true"
                                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all duration-300 group-hover:border-yellow-300 group-hover:text-gray-900 group-open:rotate-45 group-open:border-yellow-300 group-open:bg-yellow-400 group-open:text-gray-950"
                                >
                                    <svg
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            d="M10 4.5V15.5M4.5 10H15.5"
                                            stroke="currentColor"
                                            strokeWidth="1.7"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-open:grid-rows-[1fr]">
                                <div className="overflow-hidden">
                                    <p className="border-t border-gray-100 px-5 pb-5 pt-4 pl-[4.25rem] text-sm leading-7 text-gray-600 sm:px-6 sm:pb-6 sm:pl-[4.5rem]">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </details>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center justify-between gap-5 rounded-2xl border border-yellow-200/80 bg-yellow-50/70 p-6 text-center sm:mt-14 sm:flex-row sm:px-8 sm:text-left">
                    <div>
                        <h3 className="text-base font-bold text-gray-950 sm:text-lg">
                            Ready to make your links work smarter?
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            Start shortening links for free with WhyLong.
                        </p>
                    </div>

                    <a
                        href="#hero"
                        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-yellow-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
                    >
                        Try WhyLong
                        <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            className="h-4 w-4"
                            aria-hidden="true"
                        >
                            <path
                                d="M4 10H16M10.5 4.5L16 10L10.5 15.5"
                                stroke="currentColor"
                                strokeWidth="1.7"
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