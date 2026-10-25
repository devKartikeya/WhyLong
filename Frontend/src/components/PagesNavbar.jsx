import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthPanel from "./Auth/AuthPanel";
import { useAuth } from "../context/AuthContext";
import { FaGithub, FaInstagram, FaBlog } from "react-icons/fa";
import {
    Link2,
    QrCode,
    ChartNoAxesCombined,
    LayoutDashboard,
    ChevronDown,
} from "lucide-react";

const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Help", path: "/help" },
    { name: "Contact", path: "/contact" },
    { name: "Blogs", path: "/blogs" },
];

const guideItems = [
    {
        name: "Instagram QR Code",
        description: "Create a QR code for your Instagram profile.",
        path: "/tutorials/create-instagram-qr-code",
        Icon: FaInstagram,
    },
    {
        name: "GitHub QR Code",
        description: "Share your GitHub profile with one scan.",
        path: "/tutorials/create-github-qr-code",
        Icon: FaGithub,
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
            d="M3 10a.75.75 0 0 1 .75-.75h10.69l-3.22-3.22a.75.75 0 1 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H3.75A.75.75 0 0 1 3 10Z"
            clipRule="evenodd"
        />
    </svg>
);

const PagesNavbar = () => {
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobilePlatformOpen, setIsMobilePlatformOpen] = useState(false);
    const [isMobileGuidesOpen, setIsMobileGuidesOpen] = useState(false);

    const { user, authLoading } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const isHomePage = location.pathname === "/";
    const isGuideActive = guideItems.some(
        (item) => location.pathname === item.path
    );

    const isPlatformActive = (path) => {
        if (path === "/qr-code-generator") {
            return location.pathname === path;
        }

        if (path === "/dashboard") {
            return location.pathname.startsWith("/dashboard");
        }

        if (path.startsWith("/#")) {
            return isHomePage && location.hash === path.substring(1);
        }

        return false;
    };

    const isNavActive = (path) => {
        if (path === "/") return isHomePage && !location.hash;
        return location.pathname === path;
    };

    // Close menus and auth panel on Escape.
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsMobileMenuOpen(false);
                setIsMobilePlatformOpen(false);
                setIsMobileGuidesOpen(false);
                setIsAuthOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    // Prevent background scrolling while the mobile menu is open.
    useEffect(() => {
        if (!isMobileMenuOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isMobileMenuOpen]);

    // Close the mobile menu whenever the route or hash changes.
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsMobilePlatformOpen(false);
        setIsMobileGuidesOpen(false);
    }, [location.pathname, location.hash]);

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setIsMobilePlatformOpen(false);
        setIsMobileGuidesOpen(false);
    };

    const openAuth = () => {
        closeMobileMenu();
        setIsAuthOpen(true);
    };

    const goToDashboard = () => {
        closeMobileMenu();
        navigate("/dashboard");
    };

    const goHome = () => {
        closeMobileMenu();

        if (isHomePage) {
            window.scrollTo({ top: 0, behavior: "smooth" });
            navigate("/", { replace: false });
        } else {
            navigate("/");
        }
    };

    // Handles homepage section links from any page.
    const handlePlatformNavigation = (event, path) => {
        if (!path.startsWith("/#")) {
            closeMobileMenu();
            return;
        }

        event.preventDefault();
        const sectionId = path.substring(2);

        closeMobileMenu();

        if (isHomePage) {
            const section = document.getElementById(sectionId);

            if (section) {
                navigate(`/#${sectionId}`, { replace: true });
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            } else {
                navigate(`/#${sectionId}`);
            }

            return;
        }

        navigate("/", { state: { scrollToSection: sectionId } });

        // The homepage renders after navigation, so retry briefly.
        window.setTimeout(() => {
            document.getElementById(sectionId)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }, 200);
    };

    const renderPlatformLinks = (mobile = false) =>
        platformItems.map(({ name, description, path, Icon }) => {
            const active = isPlatformActive(path);

            return (
                <Link
                    key={name}
                    to={path}
                    onClick={(event) => handlePlatformNavigation(event, path)}
                    aria-current={active ? "page" : undefined}
                    className={`group flex items-start gap-3 rounded-xl p-3 transition-colors ${active
                        ? "bg-yellow-50"
                        : "hover:bg-gray-300"
                        }`}
                >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-gray-900 transition-colors group-hover:bg-yellow-200">
                        <Icon size={19} aria-hidden="true" />
                    </span>

                    <span className="min-w-0">
                        <span className="block text-sm font-semibold text-gray-900">
                            {name}
                        </span>
                        <span
                            className={`mt-1 block leading-5 text-gray-500 ${mobile ? "text-sm" : "text-xs"
                                }`}
                        >
                            {description}
                        </span>
                    </span>
                </Link>
            );
        });

    const renderGuideLinks = (mobile = false) =>
        guideItems.map(({ name, description, path, Icon }) => {
            const active = location.pathname === path;

            return (
                <Link
                    key={path}
                    to={path}
                    onClick={closeMobileMenu}
                    aria-current={active ? "page" : undefined}
                    className={`group flex items-start gap-3 rounded-xl p-3 transition-colors ${active ? "bg-yellow-50" : "hover:bg-gray-300"
                        }`}
                >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-gray-900 transition-colors group-hover:bg-yellow-200">
                        <Icon size={19} aria-hidden="true" />
                    </span>

                    <span className="min-w-0">
                        <span className="block text-sm font-semibold text-gray-900">
                            {name}
                        </span>
                        {mobile && (
                            <span className="mt-1 block text-sm leading-5 text-gray-500">
                                {description}
                            </span>
                        )}
                        {!mobile && (
                            <span className="mt-1 block text-xs leading-5 text-gray-500">
                                {description}
                            </span>
                        )}
                    </span>
                </Link>
            );
        });

    return (
        <>
            <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-xl">
                <nav
                    aria-label="Main navigation"
                    className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
                >
                    {/* Logo */}
                    <Link
                        to="/"
                        onClick={(event) => {
                            if (isHomePage) {
                                event.preventDefault();
                                goHome();
                            } else {
                                closeMobileMenu();
                            }
                        }}
                        aria-label="WhyLong home"
                        className="flex shrink-0 items-center gap-3"
                    >
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 shadow-sm shadow-yellow-200">
                            <Link2
                                size={22}
                                strokeWidth={2.2}
                                className="text-gray-950"
                                aria-hidden="true"
                            />
                        </span>

                        <span className="text-xl font-bold tracking-tight text-gray-950">
                            WhyLong
                        </span>
                    </Link>

                    {/* Desktop navigation */}
                    <div className="hidden items-center gap-6 lg:flex xl:gap-8">
                        {navItems.map((item) => {
                            const active = isNavActive(item.path);

                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    aria-current={active ? "page" : undefined}
                                    className={`relative py-2 text-md font-medium transition-colors ${active
                                        ? "text-gray-950"
                                        : "text-gray-500 hover:text-gray-950"
                                        }`}
                                >
                                    {item.name}
                                    <span
                                        aria-hidden="true"
                                        className={`absolute -bottom-[18px] left-0 h-0.5 rounded-full bg-yellow-400 transition-all duration-200 ${active ? "w-full" : "w-0"
                                            }`}
                                    />
                                </Link>
                            );
                        })}

                        {/* Platform dropdown */}
                        <div className="group relative">
                            <button
                                type="button"
                                aria-haspopup="true"
                                className={`flex items-center gap-1.5 py-2 text-sm font-medium transition-colors ${platformItems.some(({ path }) =>
                                    isPlatformActive(path)
                                )
                                    ? "text-gray-950"
                                    : "text-gray-700 hover:text-gray-950"
                                    }`}
                            >
                                Platform
                                <ChevronDown
                                    size={16}
                                    className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                                    aria-hidden="true"
                                />
                            </button>

                            <div className="invisible absolute right-0 top-full z-50 mt-3 w-96 translate-y-2 rounded-2xl border border-gray-100 bg-white p-5 opacity-0 shadow-xl shadow-gray-200/60 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                                <p className="px-3 pb-2 pt-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                                    Explore the platform
                                </p>

                                {renderPlatformLinks()}

                                <div className="mt-2 border-t border-gray-100 px-3 pb-1 pt-3">
                                    <p className="text-xs leading-5 text-gray-500">
                                        Everything you need to share links smarter.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Guides dropdown */}
                        <div className="group relative">
                            <button
                                type="button"
                                aria-haspopup="true"
                                className={`flex items-center gap-1.5 py-2 text-sm font-medium transition-colors ${isGuideActive
                                    ? "text-gray-950"
                                    : "text-gray-700 hover:text-gray-950"
                                    }`}
                            >
                                Resources
                                <ChevronDown
                                    size={16}
                                    className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                                    aria-hidden="true"
                                />
                            </button>

                            <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-80 -translate-x-1/2 translate-y-2 rounded-2xl border border-gray-100 bg-white p-3 opacity-0 shadow-xl shadow-gray-200/60 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                                <p className="px-3 pb-2 pt-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                                    QR code guides
                                </p>

                                {renderGuideLinks()}

                                <div className="mt-2 border-t border-gray-100 px-3 pb-1 pt-3">
                                    <p className="text-xs leading-5 text-gray-500">
                                        Practical guides to help you get more from QR codes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop actions */}
                    <div className="hidden items-center gap-3 md:flex">
                        {authLoading ? (
                            <div
                                className="h-10 w-28 animate-pulse rounded-xl bg-gray-100"
                                aria-label="Loading account"
                            />
                        ) : user ? (
                            <button
                                type="button"
                                onClick={goToDashboard}
                                className="group flex items-center gap-2 rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
                            >
                                Dashboard
                                <ArrowIcon />
                            </button>
                        ) : (
                            <>
                                <button
                                    type="button"
                                    onClick={openAuth}
                                    className="rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-950"
                                >
                                    Log in
                                </button>

                                <button
                                    type="button"
                                    onClick={openAuth}
                                    className="group flex items-center gap-2 rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-gray-800"
                                >
                                    Get started
                                    <ArrowIcon />
                                </button>
                            </>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        onClick={() =>
                            setIsMobileMenuOpen((previous) => !previous)
                        }
                        aria-label={
                            isMobileMenuOpen ? "Close menu" : "Open menu"
                        }
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="pages-mobile-menu"
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-800 transition-colors hover:bg-gray-50 md:hidden"
                    >
                        {isMobileMenuOpen ? (
                            <CloseIcon />
                        ) : (
                            <MenuIcon />
                        )}
                    </button>
                </nav>

                {/* Mobile navigation */}
                <div
                    id="pages-mobile-menu"
                    aria-hidden={!isMobileMenuOpen}
                    className={`absolute inset-x-0 top-full z-[60] border-t border-gray-100 bg-white shadow-xl transition-all duration-200 md:hidden ${isMobileMenuOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-2 opacity-0"
                        }`}
                    style={{
                        maxHeight: isMobileMenuOpen
                            ? "calc(100dvh - 5rem)"
                            : "0",
                        overflowY: isMobileMenuOpen ? "auto" : "hidden",
                    }}
                >
                    <div className="px-4 pb-6 pt-4 sm:px-6">
                        {/* Main links */}
                        <nav aria-label="Mobile navigation" className="space-y-1">
                            {navItems.map((item) => {
                                const active = isNavActive(item.path);

                                return (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        onClick={closeMobileMenu}
                                        aria-current={active ? "page" : undefined}
                                        tabIndex={isMobileMenuOpen ? 0 : -1}
                                        className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-colors ${active
                                            ? "bg-yellow-50 text-gray-950"
                                            : "text-gray-700 hover:bg-gray-50"
                                            }`}
                                    >
                                        {item.name}
                                        {active && (
                                            <span
                                                className="h-2 w-2 rounded-full bg-yellow-400"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Platform accordion */}
                        <div className="mt-4 border-t border-gray-100 pt-3">
                            <button
                                type="button"
                                aria-expanded={isMobilePlatformOpen}
                                onClick={() =>
                                    setIsMobilePlatformOpen((previous) => !previous)
                                }
                                tabIndex={isMobileMenuOpen ? 0 : -1}
                                className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold text-gray-900 transition-colors hover:bg-yellow-50"
                            >
                                Platform
                                <ChevronDown
                                    size={18}
                                    className={`text-gray-500 transition-transform ${isMobilePlatformOpen ? "rotate-180" : ""
                                        }`}
                                    aria-hidden="true"
                                />
                            </button>

                            {isMobilePlatformOpen && (
                                <div className="mt-1 space-y-1 px-1 pb-2">
                                    {renderPlatformLinks(true)}
                                </div>
                            )}
                        </div>

                        {/* Guides accordion */}
                        <div className="border-t border-gray-100 pt-2">
                            <button
                                type="button"
                                aria-expanded={isMobileGuidesOpen}
                                onClick={() =>
                                    setIsMobileGuidesOpen((previous) => !previous)
                                }
                                tabIndex={isMobileMenuOpen ? 0 : -1}
                                className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold text-gray-900 transition-colors hover:bg-yellow-50"
                            >
                                Guides
                                <ChevronDown
                                    size={18}
                                    className={`text-gray-500 transition-transform ${isMobileGuidesOpen ? "rotate-180" : ""
                                        }`}
                                    aria-hidden="true"
                                />
                            </button>

                            {isMobileGuidesOpen && (
                                <div className="mt-1 space-y-1 px-1 pb-2">
                                    {renderGuideLinks(true)}
                                </div>
                            )}
                        </div>

                        {/* Account actions */}
                        <div className="mt-4 border-t border-gray-100 pt-5">
                            {authLoading ? (
                                <div className="h-12 animate-pulse rounded-xl bg-gray-100" />
                            ) : user ? (
                                <button
                                    type="button"
                                    onClick={goToDashboard}
                                    tabIndex={isMobileMenuOpen ? 0 : -1}
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
                                        tabIndex={isMobileMenuOpen ? 0 : -1}
                                        className="rounded-xl border border-gray-200 px-4 py-3.5 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-50"
                                    >
                                        Log in
                                    </button>

                                    <button
                                        type="button"
                                        onClick={openAuth}
                                        tabIndex={isMobileMenuOpen ? 0 : -1}
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

const MenuIcon = () => (
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
            d="M4 6h16M4 12h16M4 18h16"
        />
    </svg>
);

const CloseIcon = () => (
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
            d="M6 6l12 12M18 6L6 18"
        />
    </svg>
);

export default PagesNavbar;