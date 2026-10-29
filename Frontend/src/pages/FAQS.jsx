import { ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "../components/ui/SearchIcon";
import MoreThanShortener from "../components/Home/MoreThanShortener";


export const faqCategories = [
    {
        id: "getting-started",
        title: "Getting Started",
        description:
            "Learn what WhyLong does, how it works, and how to get started.",
        icon: "✦",
        questions: [
            {
                q: "What is WhyLong?",
                a: (
                    <>
                        WhyLong is a URL-shortening and link-management platform
                        that helps you turn long web addresses into short, shareable
                        links. Instead of sharing a lengthy URL, you can create a
                        cleaner link that is easier to copy, remember, and distribute
                        across websites, social media, messages, and marketing
                        materials. WhyLong also offers tools for generating QR codes
                        and understanding link performance through analytics. Whether
                        you are sharing a personal project, promoting a business, or
                        organizing links for a campaign, WhyLong brings useful link
                        tools together in one place. Explore the{" "}
                        <Link className="faq-inline-link font-semibold" to="/products/url-shortener">
                            URL shortener
                        </Link>{" "}
                        to create your first short link.
                    </>
                ),
                keywords:
                    "about whylong url shortener link management platform qr code generator",
            },
            {
                q: "Who made WhyLong?",
                a: (
                    <>
                        WhyLong is a URL-shortening and link-management platform
                        built by Kartikeya Mishra. A software developer and a system-design engineer based in Uttar Pradesh, India.
                        He started developing Whylong in August 2026. The aim behind building it was to encompass different functionalities like URL Shortening, QR Code generation, link analysis, enterprise level management together at a single platform with minimal charges. Read more about{" "}
                        <Link className="faq-inline-link font-semibold" to="/founder/kartikeya-mishra">
                            Kartikeya Mishra
                        </Link>{" "}
                        to know his story and perception.
                    </>
                ),
                keywords:
                    "about whylong url shortener link management platform qr code generator",
            },
            {
                q: "How do I use WhyLong?",
                a: (
                    <>
                        Getting started with WhyLong is straightforward. Open the{" "}
                        <Link className="faq-inline-link font-semibold" to="/products/url-shortener">
                            URL shortener
                        </Link>
                        , enter the complete destination URL you want people to
                        visit, and use the shortening action to generate a short
                        link. Copy the generated URL and share it wherever links
                        are accepted, such as WhatsApp, social media, emails, websites,
                        or documents. If you want to create a QR code instead, visit
                        the{" "}
                        <Link
                            className="faq-inline-link font-semibold"
                            to="/products/qr-code-generator"
                        >
                            QR code generator
                        </Link>
                        . For account-based link management and any available
                        analytics, sign in and explore your WhyLong dashboard.
                        Always open your generated link once to confirm that it
                        redirects to the intended destination.
                    </>
                ),
                keywords:
                    "how to use whylong create first short link beginner guide qr code",
            },
            {
                q: "Do I need an account to shorten a URL?",
                a: (
                    <>
                        No. You can use WhyLong's public URL-shortening experience
                        without signing in, making it convenient when you simply
                        need to shorten a link quickly. An account is useful when
                        you want to access account-based features, such as your
                        personal workspace and saved-link management. Depending on
                        the feature, signing in may also be required to access
                        additional tools or information associated with your links.
                        If you plan to create and manage links regularly, opening
                        an account can make it easier to return to your workspace
                        and find the links associated with it. Check the relevant
                        product page for any account requirements before getting
                        started.
                    </>
                ),
                keywords:
                    "whylong account required sign up login guest url shortening free account",
            },
        ],
    },
    {
        id: "url-shortening",
        title: "URL Shortening",
        description:
            "Understand short links, redirects, sharing, and URL shortening.",
        icon: "↗",
        questions: [
            {
                q: "What is a URL shortener?",
                a: (
                    <>
                        A URL shortener is a tool that converts a long web address
                        into a shorter link that is easier to share. Long URLs can
                        contain lengthy paths, query parameters, and tracking
                        information, which may make them awkward to use in messages,
                        social media posts, printed materials, and other places
                        where space matters. A shortener creates a compact URL
                        associated with the original destination. When someone
                        opens the short link, the service redirects them to the
                        configured destination website. Short links can make
                        communication cleaner and can support link management and
                        click analytics when those features are available. Learn
                        more on the{" "}
                        <Link className="faq-inline-link font-semibold" to="/products/url-shortener">
                            WhyLong URL shortener
                        </Link>{" "}
                        page.
                        <div className="my-3">
                            <Link
                                className="inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-yellow-600"
                                to="/products/url-shortener"
                            >
                                Shorten a URL Now <ArrowRight size={16} />
                            </Link>
                        </div>
                    </>
                ),
                keywords:
                    "what is a URL shortener short URL shortened link redirect long website address",
            },
            {
                q: "How do I create a short URL with WhyLong?",
                a: (
                    <>
                        To create a short URL, first copy the complete address of
                        the page you want to share. Open the{" "}
                        <Link className="faq-inline-link font-semibold" to="/products/url-shortener">
                            WhyLong URL shortener
                        </Link>
                        , paste the original URL into the input field, and use
                        the shortening action. Once WhyLong generates your short
                        link, copy it and open it once to make sure it redirects
                        correctly. You can then share it through messaging apps,
                        social networks, email, websites, presentations, or other
                        channels. If you are signed in and want to manage your links
                        later, check your dashboard for the account-based features
                        available to you. Make sure the original address is correct
                        before shortening it, because the short link is intended
                        to direct visitors to that destination.
                    </>
                ),
                keywords:
                    "how to create generate shorten long URL with WhyLong step by step",
            },
            {
                q: "Is WhyLong free to use?",
                a: (
                    <>
                        Yes. WhyLong currently offers free URL shortening, including
                        the ability to create unlimited short URLs as part of its
                        offering. This makes it useful for everyday sharing,
                        personal projects, creators, and businesses that need
                        convenient links without paying for each URL created.
                        WhyLong also provides QR code generation and other link
                        tools, with access requirements depending on the feature.
                        Some tools may require you to create a free account before
                        using them. For the most accurate information about current
                        features and any usage conditions, review the relevant
                        product page. Free availability does not mean that every
                        third-party service or destination linked through WhyLong
                        is free.
                    </>
                ),
                keywords:
                    "is WhyLong free free URL shortener unlimited links pricing cost",
            },
            {
                q: "Where can I share my WhyLong links?",
                a: (
                    <>
                        You can share a WhyLong short link anywhere that accepts
                        a URL. Common examples include WhatsApp messages, Instagram
                        bios where links are supported, Facebook posts, LinkedIn
                        updates, emails, text messages, websites, blogs, online
                        communities, presentations, and digital documents. Short
                        links can also be included in promotional materials that
                        direct people to a website or landing page. For printed
                        materials, you can use a QR code that points to your
                        WhyLong short link, allowing people to reach the destination
                        by scanning it with a compatible device. Before distributing
                        a link widely, test it and make sure the destination is
                        relevant, accessible, and appropriate for your audience.
                    </>
                ),
                keywords:
                    "where to share short links WhatsApp Instagram LinkedIn email website marketing",
            },
            {
                q: "Will shortening a URL change the destination website?",
                a: (
                    <>
                        No. Shortening a URL does not, by itself, change the content
                        or ownership of the destination website. The short link
                        acts as a redirect to the destination configured for it.
                        For example, if you shorten a link to a particular article,
                        opening the short link should take visitors to that article
                        rather than create a different copy of it. The destination
                        website still controls its own content, availability, and
                        behavior. If the original page is deleted, moved, restricted,
                        or temporarily unavailable, visitors may still encounter
                        an error after following the short link. Always verify the
                        destination before sharing your URL, especially when using
                        it in campaigns or printed materials.
                    </>
                ),
                keywords:
                    "does URL shortening change destination original URL redirect website",
            },
        ],
    },
    {
        id: "qr-codes",
        title: "QR Code Generator",
        description:
            "Learn how to create, customize, scan, and use QR codes.",
        icon: "▦",
        questions: [
            {
                q: "What is a QR code?",
                a: (
                    <>
                        A QR code, short for Quick Response code, is a two-dimensional
                        barcode that a compatible smartphone camera or QR scanner
                        can read. It stores information in a pattern of dark and
                        light elements. When that information contains a web address,
                        scanning the code can let someone open the destination
                        without manually typing the URL. QR codes are widely used
                        on business cards, restaurant menus, posters, product
                        packaging, event materials, advertisements, and social
                        media promotions. Depending on how the code is generated,
                        it may contain a destination URL directly or point to a
                        short link that redirects visitors elsewhere. The destination
                        and the code's design both matter, so test your QR code
                        before sharing or printing it.
                    </>
                ),
                keywords:
                    "what is a QR code Quick Response barcode scan how QR codes work",
            },
            {
                q: "How can I generate a QR code with WhyLong?",
                a: (
                    <>
                        To generate a QR code with WhyLong, open the{" "}
                        <Link
                            className="faq-inline-link font-semibold"
                            to="/products/qr-code-generator"
                        >
                            WhyLong QR code generator
                        </Link>{" "}
                        and follow the instructions and options available in the
                        QR Studio. Enter or select the information that your code
                        should open, then customize the design using the available
                        settings. Depending on the supported options, you may be
                        able to personalize its appearance with colors, a logo,
                        or other design elements. When your QR code is ready,
                        download it in a suitable format and scan it with a
                        compatible phone to verify that it opens the intended
                        destination. If you plan to print it, test the final
                        downloaded version at a realistic size before distributing
                        it.
                        <div className="my-3">
                            <Link
                                className="inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-yellow-600"
                                to="/products/qr-code-generator"
                            >
                                Generate a QR Code <ArrowRight size={16} />
                            </Link>
                        </div>
                    </>
                ),
                keywords:
                    "how to generate make create QR code with WhyLong QR Studio",
            },
            {
                q: "Where can I use a QR code?",
                a: (
                    <>
                        QR codes are useful wherever people need quick access to
                        digital information from a physical or digital surface.
                        Businesses can place them on menus, packaging, business
                        cards, product labels, receipts, flyers, posters, signs,
                        and promotional displays. Creators can use them in event
                        materials, presentations, portfolios, or other content
                        that directs audiences to a web page. You can also include
                        a QR code in a digital document or display it on a screen
                        for someone to scan. For printed use, choose a size suitable
                        for the scanning distance, maintain good contrast, leave
                        clear space around the code, and avoid stretching or
                        covering important elements. Always test the code on the
                        material and under lighting conditions similar to those
                        expected during actual use.
                    </>
                ),
                keywords:
                    "where to use QR codes business cards posters packaging menus marketing print",
            },
        ],
    },
    {
        id: "analytics",
        title: "Link Analytics",
        description:
            "Understand click activity and learn how to troubleshoot link statistics.",
        icon: "⌁",
        questions: [
            {
                q: "What is link analytics?",
                a: (
                    <>
                        Link analytics refers to information that helps you
                        understand how people interact with a link. Depending on
                        the platform and the analytics available, this may include
                        recorded clicks and other details about link activity.
                        These insights can help you evaluate whether a shared
                        link is receiving attention and compare the performance
                        of links used in different contexts. For example, if you
                        share a short link in a campaign, click data can help you
                        understand whether people are opening it. Analytics should
                        be interpreted carefully: recorded clicks are not always
                        equivalent to unique people, and repeated visits or automated
                        activity may affect the numbers. Explore the{" "}
                        <Link
                            className="faq-inline-link font-semibold"
                            to="/products/link-analytics"
                        >
                            WhyLong link analytics
                        </Link>{" "}
                        page to learn about the available insights.
                    </>
                ),
                keywords:
                    "what is link analytics click tracking link performance statistics",
            },
            {
                q: "How can I access my link analytics?",
                a: (
                    <>
                        Start by visiting the{" "}
                        <Link
                            className="faq-inline-link font-semibold"
                            to="/products/link-analytics"
                        >
                            WhyLong analytics page
                        </Link>{" "}
                        to learn about the link performance features available on
                        the platform. If the analytics you need are associated
                        with your personal links, sign in and open your WhyLong
                        dashboard. Locate the relevant saved link and check the
                        analytics or statistics displayed for it. The information
                        available depends on the product's current implementation
                        and the link you are viewing. If you cannot find the
                        expected data, confirm that you are signed in to the
                        correct account, that you selected the right link, and
                        that the link has received activity. Allow for any delay
                        in the interface before checking again.
                        <div className="my-3">
                            <Link
                                className="inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-yellow-600"
                                to="/products/link-analytics"
                            >
                                Explore Link Analytics <ArrowRight size={16} />
                            </Link>
                        </div>
                    </>
                ),
                keywords:
                    "how to view link analytics click statistics data dashboard WhyLong",
            },
            {
                q: "Why might my link show no clicks?",
                a: (
                    <>
                        A link may show zero recorded clicks for several reasons.
                        Nobody may have opened it yet, or people may have received
                        the link without actually visiting it. You might also be
                        viewing a different link or account, or the analytics
                        interface may not have updated with recent activity.
                        To troubleshoot, copy the complete short URL, open it
                        yourself in a browser, and confirm that it redirects to
                        the intended destination. Then return to your dashboard
                        and check the analytics for that exact link. If the
                        number still does not change, allow a little time for
                        the interface to update and verify that the link is
                        eligible for the analytics you expect. Remember that
                        opening a link yourself may also contribute to recorded
                        activity, depending on how the system tracks clicks.
                    </>
                ),
                keywords:
                    "why short link shows zero clicks analytics not updating click statistics",
            },
        ],
    },
    {
        id: "account-management",
        title: "Account & Link Management",
        description:
            "Learn about your WhyLong dashboard, account features, and saved links.",
        icon: "◎",
        questions: [
            {
                q: "What is the WhyLong dashboard?",
                a: (
                    <>
                        The WhyLong dashboard is your personal workspace for
                        account-based link management. After signing in, you can
                        use the features available to your account to return to
                        your saved links and manage them in one place. Depending
                        on the tools available, your workspace may also provide
                        access to link activity, statistics, and other management
                        options. This is particularly useful if you create links
                        regularly and want a central place to find the ones you
                        have saved. If you created a link through the public
                        shortening experience, check whether that link is associated
                        with your account before expecting it to appear in your
                        dashboard. Available features may vary according to the
                        platform's current functionality.
                    </>
                ),
                keywords:
                    "WhyLong dashboard personal workspace saved links account management",
            },
            {
                q: "Why should I sign in to WhyLong?",
                a: (
                    <>
                        You can use the public URL-shortening tool without signing
                        in, but an account gives you access to the account-based
                        features available in your WhyLong workspace. Signing in
                        helps you return to your saved links and use the management
                        tools provided for your account. It can be especially
                        convenient if you regularly create short links, organize
                        campaigns, or want to review link activity where analytics
                        are available. Some features, including the QR Studio,
                        may require an account to access their full interface.
                        Creating an account is not the same as making every
                        feature automatically available, so check the relevant
                        product page for specific requirements.
                    </>
                ),
                keywords:
                    "why sign in login WhyLong account benefits registered user",
            },
            {
                q: "Can I manage my shortened links later?",
                a: (
                    <>
                        WhyLong's account-based link management is designed to
                        help you return to your saved links after creating them.
                        Sign in using the account associated with your links and
                        open your dashboard to see the management options currently
                        available. Depending on the features supported for a
                        particular link, you may be able to review its details,
                        access available analytics, or perform other management
                        actions. Keep in mind that a link created without signing
                        in may not automatically appear among your account's
                        saved links. If you cannot find a link, verify that you
                        are using the correct account and that the link was
                        saved or associated with it. Check the dashboard for
                        the options supported by your current version of WhyLong.
                    </>
                ),
                keywords:
                    "manage saved short links later dashboard edit organize delete WhyLong",
            },
        ],
    },
    {
        id: "privacy-security",
        title: "Privacy, Security & Troubleshooting",
        description:
            "Learn how to use links responsibly and troubleshoot common problems.",
        icon: "◇",
        questions: [
            {
                q: "Is every shortened link automatically safe?",
                a: (
                    <>
                        No. A shortened URL is not automatically safe simply
                        because it was created with a URL-shortening service.
                        Short links can conceal the full destination from their
                        visible text, so it may be harder to tell where they
                        lead before opening them. Be cautious with unexpected
                        links, messages that create urgency, unfamiliar senders,
                        and pages asking for passwords, payment details, or other
                        sensitive information. Verify the sender and destination
                        whenever possible, and avoid entering private information
                        on a page you do not trust. If you are sharing your own
                        WhyLong links, use them responsibly and direct visitors
                        to legitimate destinations. A short link is a sharing
                        convenience, not a guarantee that the destination is
                        trustworthy.
                    </>
                ),
                keywords:
                    "are shortened links safe security malicious phishing suspicious URLs",
            },
            {
                q: "Why is my short link not opening?",
                a: (
                    <>
                        If your short link does not open, first check that you
                        copied the complete URL without accidentally removing
                        characters or including unwanted punctuation. Open the
                        link in a browser and check whether the short URL is
                        correct and whether the destination website is accessible.
                        If the destination itself is offline, restricted, or
                        has been moved, the short link may not be able to take
                        you to the page you expect. Also check your internet
                        connection and try another browser or device if necessary.
                        If you manage the link through WhyLong, sign in and
                        check whether the link is still active and whether its
                        destination is configured correctly. If the problem
                        continues, record the error message and the affected
                        link details before seeking support.
                    </>
                ),
                keywords:
                    "WhyLong short link not opening broken URL redirect error troubleshooting",
            },
            {
                q: "What should I do if a QR code does not scan?",
                a: (
                    <>
                        If a QR code does not scan, start by checking that the
                        entire code is visible, sharp, and free from folds,
                        glare, damage, or obstructions. Make sure the code is
                        large enough for the camera to recognize and that there
                        is sufficient contrast between the code and its background.
                        Hold your phone steady, improve the lighting, and try
                        scanning from a comfortable distance. If the code contains
                        a logo or decorative design, the customization may be
                        interfering with readability, so try a simpler design
                        or reduce the logo size. For printed codes, avoid cropping
                        the clear margin around the code. Test the downloaded
                        file with more than one compatible device before printing
                        large quantities. If it scans but opens the wrong page,
                        check the destination associated with the QR code or
                        the short link it uses.
                    </>
                ),
                keywords:
                    "QR code won't scan camera blurry not working troubleshooting fix",
            },
        ],
    },
];


const allQuestions = faqCategories.flatMap((category) =>
    category.questions.map((question) => ({
        ...question,
        categoryId: category.id,
        categoryTitle: category.title,
    }))
);

function ChevronIcon({ open }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className={`h-5 w-5 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""
                }`}
        >
            <path
                d="m6 9 6 6 6-6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function FAQ() {
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");
    const [openQuestion, setOpenQuestion] = useState(null);

    useEffect(() => {
        const previousTitle = document.title;
        const description =
            "Find answers about WhyLong, the free URL shortener, QR code generator, link analytics, account management, and troubleshooting.";

        document.title = "FAQs – WhyLong | URL Shortener & Link Tools";

        let metaDescription = document.querySelector('meta[name="description"]');
        const createdDescription = !metaDescription;

        if (!metaDescription) {
            metaDescription = document.createElement("meta");
            metaDescription.name = "description";
            document.head.appendChild(metaDescription);
        }

        const previousDescription = metaDescription.content;
        metaDescription.content = description;

        let canonical = document.querySelector('link[rel="canonical"]');
        const createdCanonical = !canonical;

        if (!canonical) {
            canonical = document.createElement("link");
            canonical.rel = "canonical";
            document.head.appendChild(canonical);
        }

        const previousCanonical = canonical.href;
        canonical.href = `${window.location.origin}/faq`;

        const structuredData = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: allQuestions.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        typeof item.a === "string"
                            ? item.a
                            : item.q === "What is WhyLong?"
                                ? "WhyLong is a URL-shortening and link-management platform with tools such as QR code generation and link analytics."
                                : item.q === "What is a URL shortener?"
                                    ? "A URL shortener converts a long web address into a shorter link that redirects visitors to its destination."
                                    : item.q === "What is a QR code?"
                                        ? "A QR code is a two-dimensional barcode that a compatible phone or scanner can read."
                                        : item.q === "What is link analytics?"
                                            ? "Link analytics refers to data about how a link performs, such as recorded click activity."
                                            : "Visit the WhyLong FAQ page for guidance on this topic.",
                },
            })),
        };

        let jsonLd = document.querySelector('script[data-whylong-faq="true"]');
        const createdJsonLd = !jsonLd;

        if (!jsonLd) {
            jsonLd = document.createElement("script");
            jsonLd.type = "application/ld+json";
            jsonLd.dataset.whylongFaq = "true";
            document.head.appendChild(jsonLd);
        }

        jsonLd.textContent = JSON.stringify(structuredData);

        return () => {
            document.title = previousTitle;
            if (createdDescription) metaDescription.remove();
            else metaDescription.content = previousDescription;

            if (createdCanonical) canonical.remove();
            else canonical.href = previousCanonical;

            if (createdJsonLd) jsonLd.remove();
        };
    }, []);

    const filteredQuestions = useMemo(() => {
        const query = search.trim().toLowerCase();

        return allQuestions.filter((item) => {
            const matchesCategory =
                activeCategory === "all" || item.categoryId === activeCategory;

            const searchableText =
                `${item.q} ${item.keywords} ${item.categoryTitle}`.toLowerCase();

            return matchesCategory && (!query || searchableText.includes(query));
        });
    }, [search, activeCategory]);

    const groupedQuestions = faqCategories
        .map((category) => ({
            ...category,
            questions: filteredQuestions.filter(
                (question) => question.categoryId === category.id
            ),
        }))
        .filter((category) => category.questions.length > 0);

    const selectCategory = (id) => {
        setActiveCategory(id);
        setOpenQuestion(null);
    };

    return (
        <main className="min-h-screen bg-white text-slate-900">
            {/* Hero */}
            <section className="relative overflow-hidden border-b border-slate-200 bg-[#fffdf6]">
                <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-yellow-200/40 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
                    <nav
                        aria-label="Breadcrumb"
                        className="mb-8 flex items-center gap-2 text-sm text-slate-500"
                    >
                        <Link to="/" className="transition hover:text-slate-950">
                            Home
                        </Link>
                        <span aria-hidden="true">/</span>
                        <span className="font-medium text-slate-800">FAQs</span>
                    </nav>

                    <div className="max-w-3xl">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-yellow-800">
                            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                            WhyLong Help Center
                        </div>

                        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                            Frequently Asked{" "}
                            <span className="relative inline-block">
                                Questions
                                <span className="absolute -bottom-1 left-0 -z-0 h-2 w-full bg-yellow-300/70 sm:h-3" />
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                            Everything you need to know about WhyLong — from shortening long
                            URLs and generating QR codes to understanding link analytics and
                            managing your links.
                        </p>

                        <form
                            className="mt-8 flex max-w-2xl items-center gap-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm transition focus-within:border-yellow-400 focus-within:ring-4 focus-within:ring-yellow-100"
                            role="search"
                            onSubmit={(event) => {
                                event.preventDefault();
                                document.getElementById("faq-answers")?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                });
                            }}
                        >
                            <span className="ml-2 h-5 w-5 shrink-0 text-slate-400">
                                <SearchIcon />
                            </span>
                            <input
                                type="search"
                                value={search}
                                onChange={(event) => {
                                    setSearch(event.target.value);
                                    setOpenQuestion(null);
                                }}
                                placeholder="Search questions or topics..."
                                aria-label="Search frequently asked questions"
                                className="min-w-0 flex-1 bg-transparent py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400 sm:text-base"
                            />
                            {search && (
                                <button
                                    type="button"
                                    onClick={() => setSearch("")}
                                    className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-500 hover:bg-slate-100"
                                >
                                    Clear
                                </button>
                            )}
                        </form>

                        <p className="mt-3 text-sm text-slate-500">
                            Search across {allQuestions.length} questions in{" "}
                            {faqCategories.length} help topics.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main help center */}
            <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
                <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">
                    {/* Category sidebar */}
                    <aside className="lg:sticky lg:top-24">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                                Browse by topic
                            </h2>
                            <span className="text-xs text-slate-400">
                                {faqCategories.length} topics
                            </span>
                        </div>

                        <nav aria-label="FAQ categories" className="space-y-1.5">
                            <button
                                type="button"
                                onClick={() => selectCategory("all")}
                                aria-pressed={activeCategory === "all"}
                                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${activeCategory === "all"
                                    ? "bg-slate-950 text-white shadow-sm"
                                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                                    }`}
                            >
                                <span>All questions</span>
                                <span
                                    className={`text-xs ${activeCategory === "all" ? "text-slate-300" : "text-slate-400"
                                        }`}
                                >
                                    {allQuestions.length}
                                </span>
                            </button>

                            {faqCategories.map((category) => {
                                const selected = activeCategory === category.id;

                                return (
                                    <button
                                        key={category.id}
                                        type="button"
                                        onClick={() => selectCategory(category.id)}
                                        aria-pressed={selected}
                                        className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition ${selected
                                            ? "bg-yellow-50 font-bold text-slate-950 ring-1 ring-yellow-300"
                                            : "font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                                            }`}
                                    >
                                        <span
                                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-base ${selected
                                                ? "bg-yellow-300 text-slate-950"
                                                : "bg-slate-100 text-slate-600"
                                                }`}
                                        >
                                            {category.icon}
                                        </span>
                                        <span className="min-w-0 flex-1">{category.title}</span>
                                        {selected && (
                                            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                                        )}
                                    </button>
                                );
                            })}
                        </nav>

                        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-300 text-lg font-bold text-slate-950">
                                ?
                            </div>
                            <h3 className="mt-4 font-bold text-slate-900">
                                Looking for a tool?
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Go directly to a WhyLong tool and explore its available
                                features.
                            </p>
                            <Link
                                to="/"
                                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-slate-900 underline decoration-yellow-400 decoration-2 underline-offset-4 transition hover:text-yellow-700"
                            >
                                Open URL shortener <span aria-hidden="true">↗</span>
                            </Link>
                        </div>
                    </aside>

                    {/* FAQ content */}
                    <div id="faq-answers" className="min-w-0 scroll-mt-24">
                        <div className="mb-8 flex flex-col justify-between gap-3 border-b border-slate-200 pb-6 sm:flex-row sm:items-end">
                            <div>
                                <p className="text-sm font-semibold text-yellow-700">
                                    Help & documentation
                                </p>
                                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                                    {search
                                        ? "Search results"
                                        : activeCategory === "all"
                                            ? "How can we help?"
                                            : faqCategories.find((c) => c.id === activeCategory)?.title}
                                </h2>
                                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                                    {search
                                        ? `Showing ${filteredQuestions.length} matching ${filteredQuestions.length === 1 ? "answer" : "answers"
                                        }.`
                                        : activeCategory === "all"
                                            ? "Browse answers by topic or expand a question to learn more."
                                            : faqCategories.find((c) => c.id === activeCategory)?.description}
                                </p>
                            </div>
                            <span className="shrink-0 text-sm font-medium text-slate-400">
                                {filteredQuestions.length}{" "}
                                {filteredQuestions.length === 1 ? "result" : "results"}
                            </span>
                        </div>

                        {groupedQuestions.length > 0 ? (
                            <div className="space-y-10">
                                {groupedQuestions.map((category) => (
                                    <section key={category.id} aria-labelledby={`heading-${category.id}`}>
                                        {activeCategory === "all" && !search && (
                                            <div className="mb-4 flex items-start gap-3">
                                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-xl text-slate-900">
                                                    {category.icon}
                                                </span>
                                                <div>
                                                    <h3
                                                        id={`heading-${category.id}`}
                                                        className="text-lg font-bold text-slate-950"
                                                    >
                                                        {category.title}
                                                    </h3>
                                                    <p className="mt-1 text-sm leading-6 text-slate-500">
                                                        {category.description}
                                                    </p>
                                                </div>
                                            </div>
                                        )}

                                        <div className="divide-y divide-slate-200 border-y border-slate-200">
                                            {category.questions.map((item, index) => {
                                                const questionId = `${category.id}-${item.q}`;
                                                const isOpen = openQuestion === questionId;

                                                return (
                                                    <article key={item.q} className="py-1">
                                                        <h3>
                                                            <button
                                                                type="button"
                                                                aria-expanded={isOpen}
                                                                aria-controls={`answer-${category.id}-${index}`}
                                                                onClick={() =>
                                                                    setOpenQuestion(isOpen ? null : questionId)
                                                                }
                                                                className="group flex w-full items-center gap-4 py-5 text-left"
                                                            >
                                                                <span
                                                                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition ${isOpen
                                                                        ? "bg-yellow-300 text-slate-950"
                                                                        : "bg-slate-100 text-slate-500 group-hover:bg-yellow-100 group-hover:text-slate-900"
                                                                        }`}
                                                                >
                                                                    {String(index + 1).padStart(2, "0")}
                                                                </span>
                                                                <span className="flex-1 text-[15px] font-semibold leading-6 text-slate-800 transition group-hover:text-slate-950 sm:text-base">
                                                                    {item.q}
                                                                </span>
                                                                <span
                                                                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${isOpen
                                                                        ? "bg-yellow-100 text-slate-900"
                                                                        : "bg-slate-50 text-slate-500 group-hover:bg-slate-100"
                                                                        }`}
                                                                >
                                                                    <ChevronIcon open={isOpen} />
                                                                </span>
                                                            </button>
                                                        </h3>

                                                        <div
                                                            id={`answer-${category.id}-${index}`}
                                                            hidden={!isOpen}
                                                            className="pb-6 pl-12 pr-2 text-sm leading-7 text-slate-600 sm:pl-16 sm:text-[15px]"
                                                        >
                                                            {item.a}
                                                        </div>
                                                    </article>
                                                );
                                            })}
                                        </div>
                                    </section>
                                ))}
                            </div>
                        ) : (
                            <div className="rounded-2xl border border-dashed border-slate-300 px-6 py-16 text-center">
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
                                    <span className="h-6 w-6">
                                        <SearchIcon />
                                    </span>
                                </div>
                                <h3 className="mt-5 text-lg font-bold text-slate-950">
                                    No matching questions found
                                </h3>
                                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                                    Try another keyword or browse all topics to find the answer
                                    you're looking for.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setSearch("");
                                        setActiveCategory("all");
                                        setOpenQuestion(null);
                                    }}
                                    className="mt-5 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
                                >
                                    Show all questions
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <MoreThanShortener/>s

            {/* Related tools */}
            <section className="border-t border-slate-200 bg-slate-50">
                <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-widest text-yellow-700">
                            Explore WhyLong
                        </p>
                        <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                            The right tools for every link
                        </h2>
                        <p className="mt-3 leading-7 text-slate-600">
                            Explore the tools and resources available on WhyLong to make
                            sharing and managing links easier.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <Link
                            to="/products/url-shortener"
                            className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-lg hover:shadow-slate-200/60"
                        >
                            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-100 text-xl">
                                ↗
                            </span>
                            <h3 className="mt-5 text-lg font-bold text-slate-950">
                                URL Shortener
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Create concise, shareable URLs from long web addresses.
                            </p>
                            <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-yellow-700">
                                Shorten a URL <span aria-hidden="true">→</span>
                            </span>
                        </Link>

                        <Link
                            to="/products/qr-code-generator"
                            className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-lg hover:shadow-slate-200/60"
                        >
                            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-100 text-xl">
                                ▦
                            </span>
                            <h3 className="mt-5 text-lg font-bold text-slate-950">
                                QR Code Generator
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Turn URLs into scannable codes for digital and printed
                                materials.
                            </p>
                            <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-yellow-700">
                                Generate a QR code <span aria-hidden="true">→</span>
                            </span>
                        </Link>

                        <Link
                            to="/products/analytics"
                            className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-lg hover:shadow-slate-200/60"
                        >
                            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-100 text-xl">
                                ⌁
                            </span>
                            <h3 className="mt-5 text-lg font-bold text-slate-950">
                                Link Analytics
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Explore link performance and the analytics available in
                                WhyLong.
                            </p>
                            <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-yellow-700">
                                Explore analytics <span aria-hidden="true">→</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}