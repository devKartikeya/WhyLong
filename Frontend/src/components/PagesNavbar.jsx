import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthPanel from "./Auth/AuthPanel";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const navItems = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About",
        path: "/about",
    },
    {
        name: "Help",
        path: "/help",
    },
    {
        name: "Contact",
        path: "/contact",
    },
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
];

const PagesNavbar = () => {
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] =
        useState(false);
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);

    const location = useLocation();
    const navigate = useNavigate();

    // =========================
    // CHECK AUTHENTICATION
    // =========================
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/users/me`,
                    {
                        method: "GET",
                        credentials: "include",
                    }
                );

                if (!response.ok) {
                    setUser(null);
                    return;
                }

                const result = await response.json();
                setUser(result.user);
            } catch (error) {
                console.error(
                    "PagesNavbar authentication check failed:",
                    error
                );

                setUser(null);
            } finally {
                setAuthLoading(false);
            }
        };

        checkAuth();
    }, []);

    // =========================
    // MOBILE MENU
    // =========================
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    // =========================
    // NAVIGATION
    // =========================
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
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
        navigate("/");
    };

    return (
        <>
            {/* ================= NAVBAR ================= */}
            <nav className="fixed left-0 top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md">
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

                    {/* ================= LOGO ================= */}
                    <button
                        onClick={goHome}
                        className="flex items-center gap-3"
                        aria-label="Go to WhyLong home"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="h-5 w-5 text-gray-950"
                            >
                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />

                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                            </svg>
                        </div>

                        <span className="text-xl font-bold tracking-tight text-gray-950">
                            WhyLong
                        </span>
                    </button>

                    {/* ================= DESKTOP NAV ================= */}
                    <div className="hidden items-center gap-8 md:flex">
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path;

                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`relative py-2 text-sm font-medium transition-colors ${isActive
                                            ? "text-gray-950"
                                            : "text-gray-500 hover:text-gray-950"
                                        }`}
                                >
                                    {item.name}

                                    <span
                                        className={`absolute -bottom-[18px] left-0 h-0.5 bg-yellow-400 transition-all duration-300 ${isActive ? "w-full" : "w-0"
                                            }`}
                                    />
                                </Link>
                            );
                        })}

                        {/* Guides Dropdown */}
                        <div className="group relative">
                            <button
                                type="button"
                                aria-haspopup="true"
                                className={`flex items-center gap-2 py-2 text-sm font-medium transition-colors ${guideItems.some((item) => location.pathname === item.path)
                                        ? "text-gray-950"
                                        : "text-gray-500 hover:text-gray-950"
                                    }`}
                            >
                                Guides

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

                                {guideItems.map(({name, description, path, Icon}) => (
                                    <Link
                                        key={name}
                                        to={path}
                                        className={`flex items-start gap-3 rounded-xl p-3 transition-colors ${location.pathname === path
                                                ? "bg-yellow-50"
                                                : "hover:bg-gray-50"
                                            }`}
                                    >
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-lg text-gray-900">
                                            <Icon size={20} aria-hidden="true"/>
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
                            <>
                                <button
                                    onClick={goToDashboard}
                                    className="cursor-pointer px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:text-gray-950"
                                >
                                    Dashboard
                                </button>

                                <button
                                    onClick={goToDashboard}
                                    className="group flex cursor-pointer items-center gap-2 rounded-lg bg-gray-950 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-gray-800"
                                >
                                    Get started

                                    <ArrowIcon />
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    onClick={openAuth}
                                    className="cursor-pointer px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:text-gray-950"
                                >
                                    Log in
                                </button>

                                <button
                                    onClick={openAuth}
                                    className="group flex cursor-pointer items-center gap-2 rounded-lg bg-gray-950 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-gray-800"
                                >
                                    Get started

                                    <ArrowIcon />
                                </button>
                            </>
                        )}
                    </div>

                    {/* ================= MOBILE HAMBURGER ================= */}
                    <button
                        onClick={() =>
                            setIsMobileMenuOpen(
                                (prev) => !prev
                            )
                        }
                        aria-label={
                            isMobileMenuOpen
                                ? "Close menu"
                                : "Open menu"
                        }
                        aria-expanded={isMobileMenuOpen}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-gray-200 text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50 md:hidden"
                    >
                        {isMobileMenuOpen ? (
                            <CloseIcon />
                        ) : (
                            <MenuIcon />
                        )}
                    </button>
                </div>

                {/* ================= MOBILE MENU ================= */}
                <div
                    className={`absolute left-0 top-full z-[60] w-full overflow-hidden border-t border-gray-100 bg-white shadow-lg transition-all duration-300 md:hidden ${isMobileMenuOpen
                        ? "visible max-h-[600px] translate-y-0 opacity-100"
                        : "invisible max-h-0 -translate-y-2 opacity-0"
                        }`}
                >
                    <div className="px-6 pb-6 pt-4">

                        {/* Navigation */}
                        <div className="space-y-1">
                            {navItems.map((item) => {
                                const isActive =
                                    location.pathname ===
                                    item.path;

                                return (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        onClick={
                                            closeMobileMenu
                                        }
                                        className={`flex w-full items-center justify-between rounded-lg px-4 py-3.5 text-left text-sm font-medium transition-all ${isActive
                                            ? "bg-yellow-50 text-gray-950"
                                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-950"
                                            }`}
                                    >
                                        <span>{item.name}</span>

                                        {isActive && (
                                            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                                        )}
                                    </Link>
                                );
                            })}
                            {/* Mobile Guides */}
                            <div className="py-2">
                                <p className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                                    Guides
                                </p>

                                {guideItems.map((item) => {
                                    const isActive = location.pathname === item.path;

                                    return (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            onClick={closeMobileMenu}
                                            className={`flex items-center gap-3 rounded-lg px-4 py-3 ${isActive
                                                    ? "bg-yellow-50 text-gray-950"
                                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-950"
                                                }`}
                                        >
                                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yellow-100 text-gray-900">
                                                {item.icon}
                                            </span>

                                            <span className="text-sm font-medium">
                                                {item.name}
                                            </span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="my-5 h-px bg-gray-100" />

                        {/* Mobile Auth */}
                        {authLoading ? (
                            <div className="h-12 animate-pulse rounded-lg bg-gray-100" />
                        ) : user ? (
                            <button
                                onClick={goToDashboard}
                                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-gray-950 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
                            >
                                Dashboard
                                <ArrowIcon />
                            </button>
                        ) : (
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={openAuth}
                                    className="cursor-pointer rounded-lg border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-50"
                                >
                                    Log in
                                </button>

                                <button
                                    onClick={openAuth}
                                    className="cursor-pointer rounded-lg bg-gray-950 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
                                >
                                    Get started
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            {/* ================= AUTH PANEL ================= */}
            <AuthPanel
                isOpen={isAuthOpen}
                onClose={() => setIsAuthOpen(false)}
            />
        </>
    );
};

/* =========================================
   ICONS
========================================= */

const ArrowIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
    >
        <path
            fillRule="evenodd"
            d="M3 10a.75.75 0 0 1 .75-.75h10.69l-3.22-3.22a.75.75 0 1 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06 1.06l3.22-3.22H3.75A.75.75 0 0 1 3 10Z"
            clipRule="evenodd"
        />
    </svg>
);

const MenuIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
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
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 6l12 12M18 6L6 18"
        />
    </svg>
);

export default PagesNavbar;