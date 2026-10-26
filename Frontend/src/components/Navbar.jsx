import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthPanel from "./Auth/AuthPanel";
import { useAuth } from "../context/AuthContext";
import { FaGithub, FaInstagram , FaBlog} from "react-icons/fa";
import { Link2, QrCode, ChartNoAxesCombined, LayoutDashboard, } from "lucide-react";

const navItems = [
    { name: "Home", id: "hero" },
    { name: "Features", id: "features" },
    { name: "How it works", id: "how-it-works" },
    { name: "About", id: "about" }
];

const guideItems = [
    {
        name: "Instagram QR Code",
        description: "Create a QR code for your Instagram profile",
        path: "/tutorials/create-instagram-qr-code",
        Icon: FaInstagram,
    },
    {
        name: "GitHub QR Code",
        description: "Share your GitHub profile with one scan",
        path: "/tutorials/create-github-qr-code",
        Icon: FaGithub,
    },
    {
        name: "Blogs",
        description: "Practical guides and useful insights about WhyLong",
        path: "/blogs",
        Icon: FaBlog,
    }
];

const platformItems = [
    {
        name: "URL Shortener",
        description: "Turn long URLs into short, shareable links.",
        path: "/products/url-shortener",
        Icon: Link2,
    },
    {
        name: "QR Code Generator",
        description: "Create and customize QR codes.",
        path: "/products/qr-code-generator",
        Icon: QrCode,
    },
    {
        name: "Link Analytics",
        description: "Understand clicks and link performance.",
        path: "/products/analytics",
        Icon: ChartNoAxesCombined,
    },
    {
        name: "Link Management",
        description: "Manage your links from one dashboard.",
        path: "/dashboard",
        Icon: LayoutDashboard,
    },
];

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

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("hero");
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [isMobilePlatformOpen, setIsMobilePlatformOpen] = useState(false);
    const [isMobileGuidesOpen, setIsMobileGuidesOpen] = useState(false);


    const { user, authLoading } = useAuth();
    const navigate = useNavigate();

    // =========================
    // SECTION OBSERVER
    // =========================
    useEffect(() => {
        const sections = navItems
            .map((item) => document.getElementById(item.id))
            .filter(Boolean);

        if (sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visible.length > 0) {
                    setActiveSection(visible[0].target.id);
                }
            },
            {
                rootMargin: "-80px 0px -45% 0px",
                threshold: [0.1, 0.25, 0.5]
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    // =========================
    // MOBILE MENU (scroll lock + Escape key)
    // =========================
    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

        const onKeyDown = (e) => {
            if (e.key === "Escape") setIsMobileMenuOpen(false);
        };

        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isMobileMenuOpen]);

    // =========================
    // NAVIGATION
    // =========================
    const handleNavClick = (e, id) => {
        setIsMobileMenuOpen(false);

        const section = document.getElementById(id);

        // Not on the home page: let the real href ("/#id") navigate.
        if (!section) return;

        e.preventDefault();
        setActiveSection(id);

        // Wait one tick so the body scroll-lock is released first.
        setTimeout(() => {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 0);
    };

    const handleLogoClick = () => {
        setIsMobileMenuOpen(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const openAuth = () => {
        setIsMobileMenuOpen(false);
        setIsAuthOpen(true);
    };

    const goToDashboard = () => {
        setIsMobileMenuOpen(false);
        navigate("/dashboard");
    };

    return (
        <>
            <header className="fixed left-0 top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md">
                <nav
                    aria-label="Main navigation"
                    className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8"
                >
                    {/* ================= LOGO ================= */}
                    <Link
                        to="/"
                        onClick={handleLogoClick}
                        aria-label="WhyLong home"
                        className="flex items-center gap-3"
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

                        <span className="text-xl font-bold tracking-tight text-gray-950">
                            WhyLong
                        </span>
                    </Link>

                    {/* ================= DESKTOP NAV ================= */}
                    <div className="hidden items-center gap-8 md:flex">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.id;

                            return (
                                <a
                                    key={item.id}
                                    href={`/#${item.id}`}
                                    onClick={(e) => handleNavClick(e, item.id)}
                                    aria-current={isActive ? "true" : undefined}
                                    className={`relative cursor-pointer py-2 text-md font-medium transition-colors ${isActive
                                        ? "text-gray-950"
                                        : "text-gray-500 hover:text-gray-950"
                                        }`}
                                >
                                    {item.name}

                                    <span
                                        aria-hidden="true"
                                        className={`absolute -bottom-[18px] left-0 h-0.5 bg-yellow-400 transition-all duration-300 ${isActive ? "w-full" : "w-0"
                                            }`}
                                    />
                                </a>
                            );
                        })}

                        {/* ================= PLATFORM DROPDOWN ================= */}
                        <div className="group relative">
                            <button
                                type="button"
                                aria-haspopup="true"
                                className="flex items-center gap-2 py-2 text-sm font-medium text-gray-800 transition-colors hover:text-gray-950"
                            >
                                Platform

                                <svg
                                    className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="m5 7.5 5 5 5-5"
                                        stroke="currentColor"
                                        strokeWidth="1.7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>

                            <div className="invisible absolute right-0 top-full z-50 mt-3 w-96 translate-y-2 rounded-2xl border border-gray-100 bg-white p-6 opacity-0 shadow-xl shadow-gray-200/60 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                                <div className="px-3 pb-2 pt-3">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                        Explore the Platform
                                    </p>
                                </div>

                                {platformItems.map(({ name, description, path, Icon }) => (
                                    <Link
                                        key={name}
                                        to={path}
                                        onClick={(e) => {
                                            if (path.startsWith("/#")) {
                                                handleNavClick(
                                                    e,
                                                    path.substring(2)
                                                );
                                            }
                                        }}
                                        className="flex items-start gap-6 rounded-xl p-3 transition-colors hover:bg-gray-300"
                                    >
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-gray-900">
                                            <Icon size={20} aria-hidden="true" />
                                        </span>

                                        <span>
                                            <span className="block text-sm font-semibold text-gray-900">
                                                {name}
                                            </span>
                                            <span className="mt-1 block text-xs leading-5 text-gray-500">
                                                {description}
                                            </span>
                                        </span>
                                    </Link>
                                ))}

                                <div className="mt-1 border-t border-gray-100 px-3 py-3">
                                    <p className="text-xs text-gray-500">
                                        Everything you need to share links smarter.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="group relative">
                            <button
                                type="button"
                                aria-haspopup="true"
                                className={`flex items-center gap-2 py-2 text-sm font-medium transition-colors ${guideItems.some((item) => location.pathname === item.path)
                                    ? "text-gray-950"
                                    : "text-gray-800 hover:text-gray-950"
                                    }`}
                            >
                                Resources

                                <svg
                                    className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="m5 7.5 5 5 5-5"
                                        stroke="currentColor"
                                        strokeWidth="1.7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>

                            <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-80 -translate-x-1/2 translate-y-2 rounded-2xl border border-gray-100 bg-white p-2 opacity-0 shadow-xl shadow-gray-200/60 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                                <div className="px-3 pb-2 pt-3">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                        QR Code Guides
                                    </p>
                                </div>

                                {guideItems.map(({ name, description, path, Icon }) => (
                                    <Link
                                        key={name}
                                        to={path}
                                        className={`flex items-start gap-3 rounded-xl p-3 transition-colors ${location.pathname === path
                                            ? "bg-yellow-300"
                                            : "hover:bg-gray-300"
                                            }`}
                                    >
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-lg text-gray-900">
                                            <Icon size={20} aria-hidden="true" />
                                        </span>

                                        <span>
                                            <span className="block text-sm font-semibold text-gray-900">
                                                {name}
                                            </span>
                                            <span className="mt-1 block text-xs leading-5 text-gray-500">
                                                {description}
                                            </span>
                                        </span>
                                    </Link>
                                ))}

                                <div className="mt-1 border-t border-gray-100 px-3 py-3">
                                    <p className="text-xs text-gray-500">
                                        More helpful guides coming soon.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ================= DESKTOP ACTIONS ================= */}
                    <div className="hidden items-center gap-3 md:flex">
                        {authLoading ? (
                            <div className="h-9 w-24 animate-pulse rounded-lg bg-gray-100" />
                        ) : user ? (
                            <button
                                type="button"
                                onClick={goToDashboard}
                                className="group flex cursor-pointer items-center gap-2 rounded-lg bg-gray-950 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-gray-800"
                            >
                                Dashboard
                                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                            </button>
                        ) : (
                            <>
                                <button
                                    type="button"
                                    onClick={openAuth}
                                    className="cursor-pointer px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:text-gray-950"
                                >
                                    Log in
                                </button>

                                <button
                                    type="button"
                                    onClick={openAuth}
                                    className="group flex cursor-pointer items-center gap-2 rounded-lg bg-gray-950 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-gray-800"
                                >
                                    Get started
                                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                </button>
                            </>
                        )}
                    </div>

                    {/* ================= MOBILE HAMBURGER ================= */}
                    <button
                        type="button"
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-menu"
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-gray-200 text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50 md:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            className="h-5 w-5"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d={
                                    isMobileMenuOpen
                                        ? "M6 6l12 12M18 6L6 18"
                                        : "M4 6h16M4 12h16M4 18h16"
                                }
                            />
                        </svg>
                    </button>
                </nav>


                {/* ================= MOBILE MENU ================= */}
                <div
                    id="mobile-menu"
                    className={`absolute left-0 top-full z-[60] w-full border-t border-gray-100 bg-white shadow-xl transition-all duration-300 md:hidden ${isMobileMenuOpen
                        ? "visible max-h-[calc(100dvh-5rem)] translate-y-0 overflow-y-auto opacity-100"
                        : "invisible max-h-0 -translate-y-2 overflow-hidden opacity-0"
                        }`}
                >
                    <div className="px-5 pb-6 pt-4 sm:px-6">
                        {/* Main navigation */}
                        <nav aria-label="Mobile navigation" className="space-y-1">
                            {navItems.map((item) => {
                                const isActive = activeSection === item.id;

                                return (
                                    <a
                                        key={item.id}
                                        href={`/#${item.id}`}
                                        onClick={(e) => handleNavClick(e, item.id)}
                                        aria-current={isActive ? "page" : undefined}
                                        className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-base font-medium transition-colors ${isActive
                                            ? "bg-yellow-50 text-gray-950"
                                            : "text-gray-700 hover:bg-gray-50"
                                            }`}
                                    >
                                        {item.name}

                                        {isActive && (
                                            <span
                                                aria-hidden="true"
                                                className="h-2 w-2 rounded-full bg-yellow-400"
                                            />
                                        )}
                                    </a>
                                );
                            })}
                        </nav>

                        {/* Platform accordion */}
                        <div className="mt-4 border-t border-gray-100 pt-3">
                            <button
                                type="button"
                                aria-expanded={isMobilePlatformOpen}
                                onClick={() =>
                                    setIsMobilePlatformOpen((prev) => !prev)
                                }
                                className="flex w-full items-center justify-between rounded-xl px-4 py-4 text-left font-semibold text-gray-900 transition-colors hover:bg-yellow-50"
                            >
                                <span>Platform</span>

                                <svg
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isMobilePlatformOpen ? "rotate-180" : ""
                                        }`}
                                    aria-hidden="true"
                                >
                                    <path
                                        d="m5 7.5 5 5 5-5"
                                        stroke="currentColor"
                                        strokeWidth="1.7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>

                            {isMobilePlatformOpen && (
                                <div className="space-y-1 px-1 pb-3">
                                    {platformItems.map(
                                        ({ name, description, path, Icon }) => (
                                            <Link
                                                key={name}
                                                to={path}
                                                onClick={(e) => {
                                                    setIsMobileMenuOpen(false);

                                                    if (path.startsWith("/#")) {
                                                        handleNavClick(
                                                            e,
                                                            path.substring(2)
                                                        );
                                                    }
                                                }}
                                                className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-gray-50"
                                            >
                                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-gray-900">
                                                    <Icon size={19} aria-hidden="true" />
                                                </span>

                                                <span className="min-w-0">
                                                    <span className="block text-sm font-semibold text-gray-900">
                                                        {name}
                                                    </span>
                                                    <span className="mt-1 block text-sm leading-5 text-gray-500">
                                                        {description}
                                                    </span>
                                                </span>
                                            </Link>
                                        )
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Guides accordion */}
                        <div className="border-t border-gray-100 pt-1">
                            <button
                                type="button"
                                aria-expanded={isMobileGuidesOpen}
                                onClick={() =>
                                    setIsMobileGuidesOpen((prev) => !prev)
                                }
                                className="flex w-full items-center justify-between rounded-xl px-4 py-4 text-left font-semibold text-gray-900 transition-colors hover:bg-yellow-50"
                            >
                                <span>Resources</span>

                                <svg
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isMobileGuidesOpen ? "rotate-180" : ""
                                        }`}
                                    aria-hidden="true"
                                >
                                    <path
                                        d="m5 7.5 5 5 5-5"
                                        stroke="currentColor"
                                        strokeWidth="1.7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>

                            {isMobileGuidesOpen && (
                                <div className="space-y-1 px-1 pb-3">
                                    {guideItems.map(
                                        ({ name, description, path, Icon }) => (
                                            <Link
                                                key={path}
                                                to={path}
                                                onClick={() =>
                                                    setIsMobileMenuOpen(false)
                                                }
                                                className={`flex items-start gap-3 rounded-xl p-3 transition-colors ${window.location.pathname === path
                                                    ? "bg-yellow-50"
                                                    : "hover:bg-gray-50"
                                                    }`}
                                            >
                                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-gray-900">
                                                    <Icon size={19} aria-hidden="true" />
                                                </span>

                                                <span className="min-w-0">
                                                    <span className="block text-sm font-semibold text-gray-900">
                                                        {name}
                                                    </span>
                                                    <span className="mt-1 block text-sm leading-5 text-gray-500">
                                                        {description}
                                                    </span>
                                                </span>
                                            </Link>
                                        )
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Authentication / dashboard actions */}
                        <div className="mt-4 border-t border-gray-100 pt-5">
                            {authLoading ? (
                                <div className="h-12 animate-pulse rounded-xl bg-gray-100" />
                            ) : user ? (
                                <button
                                    type="button"
                                    onClick={goToDashboard}
                                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-950 px-4 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
                                >
                                    Dashboard
                                    <ArrowIcon />
                                </button>
                            ) : (
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        type="button"
                                        onClick={openAuth}
                                        className="rounded-xl border border-gray-200 px-4 py-3.5 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-50"
                                    >
                                        Log in
                                    </button>

                                    <button
                                        type="button"
                                        onClick={openAuth}
                                        className="rounded-xl bg-gray-950 px-4 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
                                    >
                                        Get started
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </header>

            <AuthPanel
                isOpen={isAuthOpen}
                onClose={() => setIsAuthOpen(false)}
            />
        </>
    );
};

export default Navbar;