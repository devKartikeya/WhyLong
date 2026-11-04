
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const SolutionsFAQ = ({ solution, faqs }) => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="bg-[#fff9e9] px-5 py-16 sm:py-20">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">

                {/* Left Content */}
                <div>
                    <span className="inline-flex rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-semibold text-amber-700">
                        Frequently Asked Questions
                    </span>

                    <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                        Questions about{" "}
                        <span className="text-amber-500">
                            WhyLong for {solution}?
                        </span>
                    </h2>

                    <p className="mt-5 max-w-md leading-8 text-gray-600">
                        Everything you need to know about using free short links,
                        custom business QR codes and link analytics to simplify
                        your business workflows.
                    </p>

                    <div className="mt-8 rounded-2xl border border-amber-100 bg-white p-5">
                        <p className="font-semibold text-yellow-500">
                            Still have questions?
                        </p>
                        <p className="mt-2 text-sm leading-6 text-gray-500">
                            Reach out to WhyLong's FAQS to resolve all your conflicts 
                        </p>
                        <Link
                            to="/faqs"
                            className="mt-4 inline-flex font-semibold text-amber-600 hover:text-amber-700"
                        >
                            Explore WhyLong FAQS →
                        </Link>
                    </div>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-3">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={faq.question}
                                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen
                                    ? "border-amber-300 bg-white shadow-sm"
                                    : "border-amber-100 bg-white/70 hover:bg-white"
                                    }`}
                            >
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenIndex(isOpen ? -1 : index)
                                    }
                                    aria-expanded={isOpen}
                                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                                >
                                    <span className="font-semibold leading-6 text-gray-900">
                                        {faq.question}
                                    </span>

                                    <ChevronDown
                                        size={20}
                                        className={`shrink-0 text-amber-600 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${isOpen
                                        ? "grid-rows-[1fr] opacity-100"
                                        : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-5 pb-5 text-sm leading-7 text-gray-600 sm:px-6">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SolutionsFAQ;