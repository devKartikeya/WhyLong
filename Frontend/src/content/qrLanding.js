// Plain JS (no JSX, no import.meta) so both the React page
// and scripts/prerender.mjs (Node) can import it.

export const SITE_URL = "https://whylong.vercel.app";
export const PAGE_PATH = "/products/qr-code-generator";
export const PAGE_URL = `$${SITE_URL}/${PAGE_PATH}`;

export const META = {
    title: "Free QR Code Generator with Logo & Custom Branding | WhyLong",
    description:
        "Create a free custom QR code with your logo, colors, and brand text. Download print-ready PNG or SVG files. Design branded QR codes with WhyLong.",
    h1: "Free QR Code Generator with Logo and Custom Branding",
    intro:
        "Design a QR code that looks like your brand. Add your logo, pick your colors, choose a pattern, and download a print-ready PNG or SVG. It is free, and there is no limit on how many QR codes you make."
};

export const COPY = {
    whyTitle: "Why use a branded QR code generator?",
    whyIntro:
        "A plain black-and-white code works. A branded one works better. Here is what you get with WhyLong.",
    designTitle: "Custom QR code with logo, colors, and style",
    designIntro:
        "All the design tools live in one QR studio. You do not need another design app.",
    stepsTitle: "How to make a branded QR code in 5 steps",
    stepsIntro:
        "The whole flow takes a few minutes. This is exactly what you will do inside the QR studio.",
    formatsTitle: "Download your QR code as PNG or SVG",
    formatsIntro: "Pick the file that fits where your QR code will live.",
    errorTitle: "Error correction levels",
    errorIntro:
        "Error correction lets a code still scan when part of it is covered, for example by a logo.",
    tipsTitle: "How to keep a branded QR code easy to scan",
    tipsIntro:
        "A good design still has to scan. Follow these rules before you print.",
    useCasesTitle: "Where to use your custom QR code",
    faqTitle: "Free QR code generator FAQ"
};

export const WHY = [
    {
        title: "It looks like your brand",
        text: "Your colors, your logo, your pattern. People notice a QR code that matches the rest of your design, and they are more likely to scan it."
    },
    {
        title: "You can change the destination later",
        text: "Your QR code points to a WhyLong short link. Update where that link goes, and the printed code keeps working. No reprint needed."
    },
    {
        title: "You can see how it performs",
        text: "Every scan opens your short link, so it counts as a click. Check your link analytics to see when people scan."
    }
];

export const FEATURES = [
    {
        title: "Add your logo",
        text: "Upload a PNG, JPG, WebP, or SVG logo up to 2 MB. Use the size slider to keep the code easy to scan."
    },
    {
        title: "Pick your brand colors",
        text: "Choose the code color, the background, and the corner color. Turn on a two-color gradient for a bolder look."
    },
    {
        title: "Shape the pattern",
        text: "Choose from six dot styles: square, dots, rounded, classy, soft classy, and extra rounded. Style the corner frame and inner dot too."
    },
    {
        title: "Start from a template",
        text: "Five ready-made looks are included: Classic, Midnight, Sunrise, Ocean, and Violet. Start with one, then fine-tune it."
    },
    {
        title: "Add brand name and call to action",
        text: "Put your brand name and a short line, such as \"Scan to see the menu\", under the code. Both appear in your PNG and SVG files."
    },
    {
        title: "Save your brand kit",
        text: "Save your design as a preset and load it any time. Presets are stored in your browser for now."
    }
];

export const STEPS = [
    {
        title: "Sign in for free",
        text: "Create a free WhyLong account. You do not need a credit card."
    },
    {
        title: "Choose a short link",
        text: "Pick one of your short links, or shorten a new URL first. Your QR code points to this short link."
    },
    {
        title: "Pick a template",
        text: "Start with Classic, Midnight, Sunrise, Ocean, or Violet. The live preview updates as you click."
    },
    {
        title: "Add your logo and colors",
        text: "Upload your logo, set your colors, choose a dot pattern, and add a brand name or call to action."
    },
    {
        title: "Test and download",
        text: "Scan the preview with your phone. Then download a PNG for screens or an SVG for print."
    }
];

export const FORMATS = [
    {
        format: "PNG",
        bestFor: "Websites, social posts, slides, and email",
        details:
            "Choose 256, 512, or 1024 px. Your brand text and call to action are included."
    },
    {
        format: "SVG",
        bestFor: "Print, packaging, signs, and posters",
        details:
            "Scales to any size without losing sharpness. Your brand text and call to action are included."
    }
];

export const ERROR_LEVELS = [
    { level: "L (Low)", recovery: "7%", goodFor: "Clean digital use without a logo" },
    { level: "M (Medium)", recovery: "15%", goodFor: "General everyday use" },
    { level: "Q (Quartile)", recovery: "25%", goodFor: "Printed material" },
    { level: "H (High)", recovery: "30%", goodFor: "QR codes with a logo" }
];

export const BEST_PRACTICES = [
    "Use strong contrast. Dark code on a light background is the safest choice.",
    "Keep a clear margin around the code. Do not let other graphics touch it.",
    "Keep the logo small. A modest logo scans better than a big one.",
    "Use High error correction when your code has a logo.",
    "Avoid very light colors for the code itself.",
    "Print it at least about 2 cm (0.8 in) wide.",
    "Scan the final file on more than one phone before you print."
];

export const USE_CASES = [
    {
        title: "Restaurant menus",
        text: "Put the code on tables and windows. Add a line like \"Scan to see the menu\" so guests know what to do."
    },
    {
        title: "Business cards",
        text: "Link to your portfolio or contact page. Use an SVG file so the code stays sharp when printed small."
    },
    {
        title: "Product packaging",
        text: "Match the code to your pack colors. Link to setup guides, offers, or reviews."
    },
    {
        title: "Events and posters",
        text: "Use a bold template with high contrast. Make the code large enough to scan from a distance."
    },
    {
        title: "Social posts and slides",
        text: "Export a PNG and drop it into your design. The brand text under the code builds recognition."
    }
];


export const FAQS = [
    {
        question: "Is this free QR code generator really free?",
        answer:
            "Yes! WhyLong's QR Code Generator is free to use, so you can create QR codes without paying for every code you generate. You can create multiple QR codes for your website, social media profiles, business, marketing campaigns, and personal projects. To access the QR Studio and its customization tools, you need a free WhyLong account. You can use the available features to design QR codes that match your brand and download them for use online or in print. Always check the options available in QR Studio for the latest supported features."
    },
    {
        question: "Can I make a custom QR code with my logo?",
        answer:
            "Yes! WhyLong's QR Studio lets you personalize your QR code by adding your own logo and customizing its appearance. You can upload a PNG, JPG, WebP, or SVG logo file up to 2 MB and adjust its size using the logo size slider. For the best scanning results, keep your logo centered, avoid covering too much of the QR code's data pattern, and maintain enough contrast between the code and its background. After customizing your design, scan-test the downloaded QR code with multiple phones before sharing it or sending it to print."
    },
    {
        question: "What is a branded QR code?",
        answer:
            "A branded QR code is a customized QR code designed to match your business or personal identity instead of using a plain black-and-white appearance. Depending on the available customization options, you can incorporate your brand colors, logo, patterns, and text to make the code more recognizable and visually consistent with your marketing materials. With WhyLong's QR Studio, you can create branded QR codes for business cards, product packaging, restaurant menus, posters, flyers, social media, and promotional campaigns. Remember that a QR code must remain easy to scan, so prioritize strong contrast and test the final design before publishing it."
    },
    {
        question: "Can I change where my QR code points after I print it?",
        answer:
            "Yes, provided your QR code was created using a WhyLong short link and that short link supports destination editing. Instead of encoding the final website address directly into the QR code, the code opens your WhyLong short link, which then redirects visitors to the destination you configured. If you need to update the destination later, you can edit the short link rather than replacing the printed QR code. This can be useful for menus, product packaging, posters, business cards, and marketing campaigns that remain in circulation for a long time. Direct QR codes that encode a destination URL itself cannot be redirected this way, and your WhyLong short link must remain active for the printed code to work."
    },
    {
        question: "Which file should I download, PNG or SVG?",
        answer:
            "Choose PNG when you need a convenient image for websites, presentations, social media posts, emails, or other digital content. PNG is a raster image, so it works well for everyday use, but enlarging it too much can make its edges appear pixelated. Choose SVG when you need a scalable graphic for professional printing, product packaging, posters, banners, signage, or other materials that may require different sizes. SVG uses vector graphics, which can remain sharp when resized. Whichever format you choose, make sure the QR code has sufficient resolution or scale, clear edges, adequate white space around it, and enough contrast to scan reliably."
    },
    {
        question: "Which error correction level should I use with a logo?",
        answer:
            "High (H) error correction is generally a good starting point when adding a logo to a QR code because it allows the code to recover from a greater amount of damaged or obscured data. However, error correction cannot guarantee that a code will scan if the logo covers too much of the pattern, the colors have insufficient contrast, or the image is blurry. Keep your logo relatively small, preserve the QR code's three recognizable corner markers, and avoid placing other graphics over important code elements. Test the final downloaded design at its intended size and from a realistic scanning distance before printing or distributing it."
    },
    {
        question: "Can I see how many people scan my QR code?",
        answer:
            "Yes, when your QR code uses a WhyLong short link, scans can be measured through visits to that link. Each successful scan that opens the short link can register as a click, allowing you to monitor engagement through your WhyLong dashboard. This is useful for understanding whether QR codes on flyers, menus, packaging, business cards, or campaigns are generating visits. The recorded click count represents link activity, not necessarily the number of unique people: the same person may scan more than once, and some scanning or preview behavior can affect recorded visits. Available analytics and details depend on the information WhyLong collects and displays for your links."
    },
    {
        question: "Will my QR code stop working?",
        answer:
            "A QR code is an image containing information, so it does not normally expire simply because time has passed. However, what happens when someone scans it depends on the destination encoded in the code. If your QR code uses a WhyLong short link, it will continue to work while that link remains active and the WhyLong service is available. If the link is deleted, disabled, expired, or otherwise becomes unavailable, scanning the QR code may no longer take visitors to the intended destination. For long-term use, keep your short link active, verify that its destination is correct, and periodically test QR codes that appear on printed materials."
    }
];


export const buildSchemas = () => [
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${SITE_URL}/`
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "QR Code Generator",
                item: PAGE_URL
            }
        ]
    },
    {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "WhyLong QR Code Generator",
        url: PAGE_URL,
        description: META.description,
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        browserRequirements: "Requires JavaScript",
        featureList: FEATURES.map((feature) => feature.title),
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
    },
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer }
        }))
    }
];