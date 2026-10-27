export const blogPosts = [
    {
        slug: "whylong-vs-bitly",
        category: "Comparisons",
        title: "WhyLong vs Bitly: Which URL Shortener Should You Choose?",
        excerpt:
            "Compare WhyLong and Bitly across link shortening, QR codes, analytics, usability, and pricing. Find the right tool for your needs.",
        img: "https://mkt-bitly-media.qrcg.net/wp-content/uploads/2026/09/14150141/hero_digital_marketing_v6-1024x597.png",
        keywords: "WhyLong vs Bitly, Bitly alternative, URL shortener comparison",
        featured: true,
    },
    {
        slug: "whylong-vs-tinyurl",
        category: "Comparisons",
        title: "WhyLong vs TinyURL: Features, Usability, and Value Compared",
        excerpt:
            "Explore the differences between WhyLong and TinyURL and learn what to consider when choosing a URL-shortening platform.",
        img: "https://adespresso.com/wp-content/uploads/2022/06/url-shortener.jpg",
        keywords: "WhyLong vs TinyURL, TinyURL alternative, compare URL shorteners",
    },
    {
        slug: "how-to-shorten-a-long-url",
        category: "URL Shortening",
        title: "How to shorten a long URL?",
        excerpt:
            "Understand how URL shortening works and how to easily convert long links into short ones.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPs44Af3ozmbm5WfKzAlmTaJdGoC7vEw6Mrqh9JlbLPQ&s=10",
        keywords: "How to shorten a long url, url shortener, how url shortener works",
    }
    // {
    //     slug: "why-use-whylong",
    //     category: "WhyLong",
    //     title: "Why Use WhyLong? A Guide to Short Links, QR Codes, and Analytics",
    //     excerpt:
    //         "Discover how short links, QR codes, and link performance insights can make sharing and managing URLs easier.",
    //     keywords: "Why use WhyLong, WhyLong features, link management",
    // },
    // {
    //     slug: "best-free-url-shorteners",
    //     category: "Guides",
    //     title: "How to Choose a Free URL Shortener: What Actually Matters",
    //     excerpt:
    //         "Learn which factors to evaluate when choosing a URL shortener, from ease of use and link management to analytics and limitations.",
    //     keywords: "best free URL shortener, free link shortener, URL tools",
    // },
    // {
    //     slug: "qr-codes-for-business",
    //     category: "QR Codes",
    //     title: "How Businesses Can Use QR Codes to Connect Offline and Online",
    //     excerpt:
    //         "Explore practical ways to use QR codes on packaging, flyers, menus, business cards, and other customer touchpoints.",
    //     keywords: "QR codes for business, QR code marketing, QR code generator",
    // },
    // {
    //     slug: "understanding-link-analytics",
    //     category: "Analytics",
    //     title: "Link Analytics Explained: Understanding Clicks and Performance",
    //     excerpt:
    //         "Learn what link analytics can tell you, how click data can support decisions, and what metrics cannot tell you on their own.",
    //     keywords: "link analytics, URL click tracking, link performance",
    // },
    // {
    //     slug: "how-to-create-a-shareable-short-link",
    //     category: "URL Shortening",
    //     title: "How to Create and Share a Short URL",
    //     excerpt:
    //         "A practical guide to turning long web addresses into shareable links for messages, websites, social media, and campaigns.",
    //     keywords: "create short URL, shorten a link, shareable URL",
    // },
];

export const categories = [
    "All articles",
    ...new Set(blogPosts.map((post) => post.category)),
];