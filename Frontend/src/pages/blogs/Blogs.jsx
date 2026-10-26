import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../../content/blogPosts";
import { categories } from "../../content/blogPosts";

function SearchIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle
                cx="10.8"
                cy="10.8"
                r="6.8"
                stroke="currentColor"
                strokeWidth="1.7"
            />
            <path
                d="m16 16 4.2 4.2"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
            />
        </svg>
    );
}

function ArrowIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
        >
            <path
                d="M5 12h14m-6-6 6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function Blogs() {
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("All articles");

    useEffect(() => {
        const previousTitle = document.title;
        const description =
            "Explore the WhyLong blog for URL-shortening guides, QR code tips, link analytics, platform comparisons, and practical link management advice.";

        document.title = "WhyLong Blog | URL Shortening, QR Codes & Link Analytics";

        let meta = document.querySelector('meta[name="description"]');
        const createdMeta = !meta;

        if (!meta) {
            meta = document.createElement("meta");
            meta.name = "description";
            document.head.appendChild(meta);
        }

        const previousDescription = meta.content;
        meta.content = description;

        let canonical = document.querySelector('link[rel="canonical"]');
        const createdCanonical = !canonical;

        if (!canonical) {
            canonical = document.createElement("link");
            canonical.rel = "canonical";
            document.head.appendChild(canonical);
        }

        const previousCanonical = canonical.href;
        canonical.href = `${window.location.origin}/blogs`;

        const structuredData = {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "WhyLong Blog",
            description,
            url: `${window.location.origin}/blogs`,
            publisher: {
                "@type": "Organization",
                name: "WhyLong",
                url: window.location.origin,
            },
            mainEntity: {
                "@type": "ItemList",
                itemListElement: blogPosts.map((post, index) => ({
                    "@type": "ListItem",
                    position: index + 1,
                    name: post.title,
                    url: `${window.location.origin}/blogs/${post.slug}`,
                })),
            },
        };

        let jsonLd = document.querySelector('script[data-whylong-blog="true"]');
        const createdJsonLd = !jsonLd;

        if (!jsonLd) {
            jsonLd = document.createElement("script");
            jsonLd.type = "application/ld+json";
            jsonLd.dataset.whylongBlog = "true";
            document.head.appendChild(jsonLd);
        }

        jsonLd.textContent = JSON.stringify(structuredData);

        return () => {
            document.title = previousTitle;

            if (createdMeta) meta.remove();
            else meta.content = previousDescription;

            if (createdCanonical) canonical.remove();
            else canonical.href = previousCanonical;

            if (createdJsonLd) jsonLd.remove();
        };
    }, []);

    const filteredPosts = useMemo(() => {
        const query = search.trim().toLowerCase();

        return blogPosts.filter((post) => {
            const matchesCategory =
                activeCategory === "All articles" ||
                post.category === activeCategory;

            const searchable = [
                post.title,
                post.excerpt,
                post.category,
                post.keywords,
            ]
                .join(" ")
                .toLowerCase();

            return matchesCategory && (!query || searchable.includes(query));
        });
    }, [search, activeCategory]);

    const featuredPost = blogPosts.find((post) => post.featured);

    return (
        <main className="min-h-screen bg-white text-slate-900">
            {/* Blog hero */}
            <section className="relative overflow-hidden border-b border-slate-200 bg-[#fffdf6]">
                <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-yellow-200/40 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
                    <nav
                        aria-label="Breadcrumb"
                        className="mb-8 flex items-center gap-2 text-sm text-slate-500"
                    >
                        <Link to="/" className="hover:text-slate-950">
                            Home
                        </Link>
                        <span aria-hidden="true">/</span>
                        <span className="font-medium text-slate-800">Blog</span>
                    </nav>

                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-yellow-800">
                            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                            The WhyLong Blog
                        </span>

                        <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                            Better links.
                            <br />
                            <span className="text-yellow-600">Smarter sharing.</span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                            Practical guides, honest comparisons, and useful insights about
                            URL shorteners, QR codes, link analytics, and managing links
                            effectively.
                        </p>

                        <form
                            role="search"
                            className="mt-8 flex max-w-2xl items-center gap-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm focus-within:border-yellow-400 focus-within:ring-4 focus-within:ring-yellow-100"
                            onSubmit={(event) => {
                                event.preventDefault();
                                document.getElementById("blog-articles")?.scrollIntoView({
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
                                onChange={(event) => setSearch(event.target.value)}
                                aria-label="Search blog articles"
                                placeholder="Search guides, comparisons, and topics..."
                                className="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-slate-400 sm:text-base"
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
                            Explore {blogPosts.length} articles across{" "}
                            {categories.length - 1} topics.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured article */}
            {!search && activeCategory === "All articles" && featuredPost && (
                <section className="mx-auto max-w-7xl px-5 pt-12 sm:px-8 lg:px-12 border border-black">
                    <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white md:grid-cols-[1.2fr_0.8fr]">
                        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                            <span className="w-fit rounded-full bg-yellow-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-yellow-800">
                                Featured article
                            </span>

                            <p className="mt-6 text-sm font-semibold text-slate-500">
                                {featuredPost.category}
                            </p>

                            <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-3xl">
                                {featuredPost.title}
                            </h2>w

                            <p className="mt-4 max-w-xl leading-7 text-slate-600">
                                {featuredPost.excerpt}
                            </p>

                            <Link
                                to={`/blogs/${featuredPost.slug}`}
                                className="group mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-slate-500 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-slate-600"
                            >
                                Read the article <ArrowIcon />
                            </Link>
                        </div>

                        <div className="relative flex min-h-64 flex-col justify-between overflow-hidden p-5 sm:p-7 rounded-2xl text-white">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpYIJBEPWSbU7YeHaP1Bs_9-MaJLO4o8N6r7Njhe8XJ_vl_A3bXOP_6sry&s=10" alt="Bitly vs WhyLong comparsion" className="rounded-2xl" />
                        </div>
                    </div>
                </section>
            )}

            {/* Articles and categories */}
            <section
                id="blog-articles"
                className="mx-auto max-w-7xl scroll-mt-24 px-5 py-14 sm:px-8 sm:py-16 lg:px-12"
            >
                <div className="flex flex-col justify-between gap-5 border-b border-slate-200 pb-7 lg:flex-row lg:items-end">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-widest text-yellow-700">
                            Explore the library
                        </p>
                        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                            {search ? "Search results" : "Latest from WhyLong"}
                        </h2>
                        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                            {search
                                ? `Found ${filteredPosts.length} matching ${filteredPosts.length === 1 ? "article" : "articles"
                                }.`
                                : "Explore practical knowledge about link management, URL shortening, QR codes, and analytics."}
                        </p>
                    </div>

                    <span className="text-sm font-medium text-slate-400">
                        {filteredPosts.length}{" "}
                        {filteredPosts.length === 1 ? "article" : "articles"}
                    </span>
                </div>

                <div className="mt-7 flex gap-2 overflow-x-auto pb-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            onClick={() => setActiveCategory(category)}
                            aria-pressed={activeCategory === category}
                            className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-semibold transition ${activeCategory === category
                                ? "border-slate-950 bg-slate-950 text-white"
                                : "border-slate-200 bg-white text-slate-600 hover:border-yellow-400 hover:text-slate-950"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {filteredPosts.length > 0 ? (
                    <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                        {filteredPosts.map((post, index) => (
                            <article
                                key={post.slug}
                                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-xl hover:shadow-slate-200/50 sm:p-7"
                            >
                                <div className="flex items-center justify-between gap-3">
                                    <span className="rounded-full bg-yellow-50 px-3 py-1.5 text-xs font-bold text-yellow-800">
                                        {post.category}
                                    </span>
                                    <span className="text-xs font-semibold tracking-widest text-slate-300">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                <h3 className="mt-6 text-xl font-bold leading-snug tracking-tight text-slate-950 transition group-hover:text-yellow-800">
                                    <Link
                                        to={`/blogs/${post.slug}`}
                                        className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                                    >
                                        {post.title}
                                    </Link>
                                </h3>

                                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                                    {post.excerpt}
                                </p>

                                <img src={post.img} alt="" className="mt-5 h-48"/>

                                <div className="mt-2 border-t border-slate-100 pt-5">
                                    <Link
                                        to={`/blogs/${post.slug}`}
                                        aria-label={`Read ${post.title}`}
                                        className="group/link inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition hover:text-yellow-800"
                                    >
                                        Read article <ArrowIcon />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="mt-8 rounded-2xl border border-dashed border-slate-300 px-6 py-16 text-center">
                        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
                            <span className="h-6 w-6">
                                <SearchIcon />
                            </span>
                        </span>
                        <h3 className="mt-5 text-lg font-bold text-slate-950">
                            No articles found
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-500">
                            Try a different keyword or browse all topics.
                        </p>
                        <button
                            type="button"
                            onClick={() => {
                                setSearch("");
                                setActiveCategory("All articles");
                            }}
                            className="mt-5 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800"
                        >
                            View all articles
                        </button>
                    </div>
                )}
            </section>

            {/* Closing CTA */}
            <section className="border-t border-slate-200 bg-[#fffdf6]">
                <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
                    <div className="max-w-2xl">
                        <h2 className="text-2xl font-extrabold tracking-tight text-slate-950">
                            Ready to put better links to work?
                        </h2>
                        <p className="mt-3 leading-7 text-slate-600">
                            Create a short link with WhyLong and make your next URL easier
                            to share.
                        </p>
                    </div>

                    <Link
                        to="/products/url-shortener"
                        className="inline-flex w-fit shrink-0 items-center gap-2 rounded-xl bg-yellow-300 px-6 py-3.5 text-sm font-extrabold text-slate-950 transition hover:bg-yellow-400"
                    >
                        Try the URL shortener <ArrowIcon />
                    </Link>
                </div>
            </section>
        </main>
    );
}