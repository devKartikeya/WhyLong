import { useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaDev, FaReddit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import AuthPanel from "./Auth/AuthPanel";
import { useAuth } from "../context/AuthContext";

const productLinks = [
    { name: "URL Shortener", href: "/#hero" },
    { name: "Dashboard", protected: true, path: "/dashboard" },
    { name: "QR Generator", protected: true, path: "/dashboard/qr-codes" },
    { name: "Analytics", protected: true, path: "/dashboard/analytics" },
    { name: "Link Management", protected: true, path: "/dashboard/my-links" }
];

const companyLinks = [
    { name: "Contact Us", href: "/contact" },
    { name: "About WhyLong", href: "/about" },
    { name: "Help & Support", href: "/help" }
];

const resourceLinks = [
    { name: "URL Shortener", href: "/products/url-shortener" },
    { name: "QR Codes", href: "/products/qr-code-generator" },
    { name: "Link Analytics", href: "/products/analytics" },
    { name: "Blogs", href: "/blogs" },
    { name: "FAQs", href: "/faqs" }
];

const tutorialsLinks = [
    { name: "Create QR for Instagram", href: "/tutorials/create-instagram-qr-code" },
    { name: "Create QR for GitHub", href: "/tutorials/create-github-qr-code" }
];

const blogLinks = [
    { name: "WhyLong vs Bitly", href: "/blogs/whylong-vs-bitly" },
    { name: "WhyLong vs TinyURL", href: "/blogs/whylong-vs-tinyurl" },
    { name: "How to shorten a long URL", href: "/blogs/how-to-shorten-a-long-url" },
];

const legalLinks = [
    { name: "Privacy Policy", href: "/legal/privacy-policy" },
    { name: "Terms of Service", href: "/legal/terms-and-conditions" },
    { name: "Cookie Policy", href: "/legal/cookie-policy" }
];

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/devKartikeya",
        Icon: FaGithub
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/kartikeya-mishra-8199973a9",
        Icon: FaLinkedin
    },
    {
        name: "Instagram",
        href: "https://instagram.com/devKartikeya",
        Icon: FaInstagram
    },
    {
        name: "Facebook",
        href: "https://www.facebook.com/share/1GS5r2C9xc/",
        Icon: FaFacebook
    },
    {
        name: "DEV",
        href: "https://dev.to/devKartikeya",
        Icon: FaDev
    },
    {
        name: "Reddit",
        href: "https://www.reddit.com/user/devKartikeya/",
        Icon: FaReddit
    }
];

const linkClass =
    "text-sm text-gray-400 transition-colors hover:text-yellow-400";

const Footer = () => {
    const navigate = useNavigate();
    const { user, authLoading } = useAuth();
    const [isAuthOpen, setIsAuthOpen] = useState(false);

    const handleProtectedNavigation = (path) => {
        if (authLoading) return;

        if (user) {
            navigate(path);
        } else {
            setIsAuthOpen(true);
        }
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        // TODO: connect this to your newsletter API.
        // Until then, consider hiding the whole newsletter block.
    };

    return (
        <>
            <footer className="border-t border-gray-200 bg-gray-950 text-white">
                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-7 lg:py-20">
                    <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1fr]">

                        {/* ================= BRAND ================= */}
                        <div className="max-w-sm mr-3">
                            <Link
                                to="/"
                                aria-label="WhyLong home"
                                className="inline-flex items-center gap-3"
                            >
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className="h-5 w-5 text-gray-950"
                                        aria-hidden="true"
                                    >
                                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                    </svg>
                                </span>

                                <span className="text-xl font-bold tracking-tight">
                                    WhyLong
                                </span>
                            </Link>

                            <p className="mt-6 text-sm leading-7 text-gray-400">
                                A free URL shortener with QR codes and click
                                analytics. Create, organize, and track your
                                short links in one place.
                            </p>

                            <ul className="mt-7 flex flex-wrap items-center gap-3">
                                {socialLinks.map(({ name, href, Icon }) => (
                                    <li key={name}>
                                        <a
                                            href={href}
                                            aria-label={`WhyLong on ${name}`}
                                            target="_blank"
                                            rel="noopener noreferrer me"
                                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-800 text-gray-400 transition-all hover:border-gray-700 hover:bg-gray-900 hover:text-white"
                                        >
                                            <Icon size={20} aria-hidden="true" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* ================= PRODUCT ================= */}
                        <nav aria-label="Product">
                            <p className="text-sm font-semibold text-white">
                                Product
                            </p>

                            <ul className="mt-6 space-y-4">
                                {productLinks.map((link) => (
                                    <li key={link.name}>
                                        {link.protected ? (
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleProtectedNavigation(link.path)
                                                }
                                                className={`cursor-pointer text-left ${linkClass}`}
                                            >
                                                {link.name}
                                            </button>
                                        ) : (
                                            <a href={link.href} className={linkClass}>
                                                {link.name}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* ================= RESOURCES ================= */}
                        <nav aria-label="Resources">
                            <p className="text-sm font-semibold text-white">
                                Resources
                            </p>

                            <ul className="mt-6 space-y-4">
                                {resourceLinks.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className={linkClass}>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* ================= COMPANY ================= */}
                        <nav aria-label="Company">
                            <p className="text-sm font-semibold text-white">
                                Company
                            </p>

                            <ul className="mt-6 space-y-4">
                                {companyLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.href} className={linkClass}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* ================= TUTORIALS ================= */}
                        <nav aria-label="Tutorials">
                            <p className="text-sm font-semibold text-white">
                                Tutorials
                            </p>

                            <ul className="mt-6 space-y-4">
                                {tutorialsLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.href} className={linkClass}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <nav aria-label="Blogs">
                            <p className="text-sm font-semibold text-white">
                                Blogs
                            </p>

                            <ul className="mt-6 space-y-4">
                                {blogLinks.map((link) => (
                                    <li key={link.name} className="hover:text-yellow-500">
                                        <Link to={link.href} className={linkClass}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* ================= NEWSLETTER ================= */}
                    <div className="mt-16 border-t border-gray-800 pt-12">
                        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                            <div>
                                <p className="text-lg font-semibold">
                                    Stay in the loop.
                                </p>

                                <p className="mt-2 max-w-lg text-sm leading-6 text-gray-400">
                                    Get product updates, useful tips, and
                                    occasional news from WhyLong.
                                </p>
                            </div>

                            <form
                                onSubmit={handleSubscribe}
                                className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
                            >
                                <label htmlFor="newsletter-email" className="sr-only">
                                    Email address
                                </label>

                                <input
                                    id="newsletter-email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    placeholder="Enter your email"
                                    className="min-w-0 flex-1 rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-gray-500 focus:border-yellow-400"
                                />

                                <button
                                    type="submit"
                                    className="rounded-lg bg-yellow-400 px-5 py-3 text-sm font-semibold text-gray-950 transition-colors hover:bg-yellow-300"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* ================= BOTTOM BAR ================= */}
                <div className="border-t border-gray-800">
                    <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
                        <p className="text-xs text-gray-400">
                            © {new Date().getFullYear()} WhyLong. All rights reserved.
                        </p>

                        <nav aria-label="Legal">
                            <ul className="flex flex-wrap gap-x-6 gap-y-2">
                                {legalLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.href}
                                            className="text-xs text-gray-400 transition-colors hover:text-yellow-500"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </footer>

            <AuthPanel
                isOpen={isAuthOpen}
                onClose={() => setIsAuthOpen(false)}
            />
        </>
    );
};

export default Footer;