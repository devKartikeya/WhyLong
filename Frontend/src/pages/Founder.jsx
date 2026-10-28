import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";

const ArrowUpRight = ({ className = "h-4 w-4" }) => (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M5.5 14.5 14 6m0 0H6.5M14 6v7.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ArrowRight = ({ className = "h-4 w-4" }) => (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3.5 10h12m0 0-4.5-4.5M15.5 10 11 14.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const SparkIcon = ({ className = "h-5 w-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m12 2 1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" fill="currentColor" />
    </svg>
);

const principles = [
    {
        number: "01",
        title: "Build for real people",
        description: "The best feature is not the most complicated one. It is the one that removes friction from someone's day.",
    },
    {
        number: "02",
        title: "Understand the why",
        description: "I want to know why a system is designed a certain way—not just which library or command makes it work.",
    },
    {
        number: "03",
        title: "Keep getting better",
        description: "Ship, learn from what breaks, improve the design, and repeat. Progress matters more than pretending to know everything.",
    },
];

const capabilities = [
    { title: "Full-stack development", detail: "React, JavaScript, Node.js, Express, MongoDB and Laravel" },
    { title: "Backend engineering", detail: "REST APIs, authentication, authorization, data modelling and application logic" },
    { title: "DevOps & delivery", detail: "Docker, CI/CD pipelines, GitHub Actions, deployments and environment configuration" },
    { title: "Systems thinking", detail: "System design, caching, scaling concepts, SQL/NoSQL trade-offs and maintainable architecture" },
];

const selectedWork = [
    {
        name: "Xpense Tracker",
        type: "Personal finance platform",
        description: "A full-stack expense and income management experience with analytics, protected access, admin controls and exportable reports.",
        stack: ["React", "Node.js", "MongoDB", "JWT"],
        href: "https://expense-tracker-mern-project-seven.vercel.app",
        linkLabel: "Explore the platform",
    },
    {
        name: "Multiplayer Tic-Tac-Toe",
        type: "Real-time web application",
        description: "A multiplayer game built to explore client-server communication, game state, and the details that make a shared experience feel responsive.",
        stack: ["JavaScript", "Node.js", "Express", "Web"],
        href: "https://github.com/Multiplayer-Tifc-Tac-Toe",
        linkLabel: "Play the game",
    },
    {
        name: "CI/CD Pipeline",
        type: "Automation & deployment",
        description: "A practical delivery workflow using GitHub Actions and Docker to turn code changes into a repeatable build-and-deploy process.",
        stack: ["Docker", "GitHub Actions", "CI/CD"],
        href: "https://github.com/devKartikeya/Nodejs-Github-actions-CI-CD-Pipeline",
        linkLabel: "View the workflow",
    },
];

const Founder = () => {
    const [visibleSections, setVisibleSections] = useState({});
    const sectionRefs = useRef([]);

    useEffect(() => {
        if (typeof IntersectionObserver === "undefined") return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const key = entry.target.dataset.reveal;
                        if (key) setVisibleSections((current) => ({ ...current, [key]: true }));
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -35px 0px" }
        );
        sectionRefs.current.filter(Boolean).forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    const reveal = (key) => ({
        ref: (element) => {
            if (element) sectionRefs.current[Number(key)] = element;
        },
        "data-reveal": key,
        className: `transition-all duration-700 ease-out ${visibleSections[key] ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`,
    });

    return (
        <main className="relative isolate overflow-hidden bg-[#090909] text-white">

            <Helmet>
                <title>Meet the Founder of WhyLong | Kartikeya Mishra</title>

                <meta
                    name="description"
                    content="Meet Kartikeya Mishra, the founder and builder behind WhyLong. Discover the vision behind making URL shortening, custom QR codes, link analytics, and link management accessible in one platform."
                />

                <meta
                    name="robots"
                    content="index, follow"
                />

                <link
                    rel="canonical"
                    href="https://whylong.vercel.app/founder/kartikeya-mishra"
                />

                <meta
                    property="og:type"
                    content="profile"
                />
                <meta
                    property="og:title"
                    content="Meet the Founder of WhyLong | Kartikeya Mishra"
                />
                <meta
                    property="og:description"
                    content="The story, vision, and engineering thinking behind WhyLong — built to make link sharing and QR codes simpler."
                />
                <meta
                    property="og:url"
                    content="https://whylong.vercel.app/founder/kartikeya-mishra"
                />
                <meta
                    property="og:site_name"
                    content="WhyLong"
                />

                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />
                <meta
                    name="twitter:title"
                    content="Meet the Founder of WhyLong | Kartikeya Mishra"
                />
                <meta
                    name="twitter:description"
                    content="Discover the story and vision behind WhyLong, built by Kartikeya Mishra."
                />
            </Helmet>
            {/* Ambient background */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
                <div className="absolute -left-40 top-24 h-80 w-80 rounded-full bg-yellow-400/[0.07] blur-[100px]" />
                <div className="absolute -right-40 top-[35rem] h-96 w-96 rounded-full bg-amber-300/[0.06] blur-[120px]" />
                <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.45)_1px,transparent_1px)] [background-size:56px_56px]" />
            </div>

            {/* Opening story */}
            <section className="mx-auto grid min-h-[82vh] max-w-7xl items-center gap-14 px-5 pb-20 pt-24 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:px-12 lg:pb-28 lg:pt-28">
                <div className="relative z-10">
                    <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-yellow-300/20 bg-yellow-300/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-200 sm:text-sm">
                        <span className="h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_12px_rgba(253,224,71,.8)]" />
                        The person behind the build
                    </div>
                    <p className="mb-4 text-sm font-medium tracking-wide text-zinc-400">Hey, I’m Kartikeya Mishra.</p>
                    <p className="mb-4 text-xs font-medium tracking-wide text-yellow-400">a.k.a devKartikeya</p>
                    <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl md:text-7xl xl:text-[5.6rem]">
                        I like turning
                        <span className="block text-zinc-500">“what if?”</span>
                        into <span className="text-yellow-300">something real.</span>
                    </h1>
                    <h2 className="text-3xl md:text-4xl text-yellow-300 font-semibold mt-4 text-right">
                        ~ by devKartikeya
                    </h2>
                    <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
                        I’m a developer who enjoys building useful products, understanding what happens behind the interface, and making the whole thing work—from the first idea to deployment.
                    </p>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
                        My interests sit where product thinking meets software engineering: full-stack development, backend systems, DevOps, automation and system design.
                    </p>
                    <div className="mt-9 flex flex-wrap items-center gap-3">
                        <a href="https://github.com/devKartikeya" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full bg-yellow-300 px-5 py-3 text-sm font-bold text-black transition hover:bg-yellow-200">
                            Explore my GitHub <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </a>
                        <a href="https://kartikeyamishra.vercel.app" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:border-yellow-200/50 hover:text-yellow-200">
                            Visit my portfolio <ArrowUpRight className="h-4 w-4" />
                        </a>
                    </div>
                </div>

                <div className="relative mx-auto w-full max-w-[470px] lg:ml-auto">
                    <div className="absolute -inset-5 rounded-[2.5rem] border border-yellow-200/10 rotate-3" />
                    <div className="absolute -inset-2 rounded-[2.2rem] bg-yellow-300/[0.05] blur-2xl" />
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111] p-6 shadow-2xl shadow-black/40 sm:p-8">
                        <div className="flex items-center justify-between border-b border-white/10 pb-5">
                            <div className="flex items-center gap-3">
                                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-yellow-300 text-lg font-black text-black">KM</div>
                                <div>
                                    <p className="font-semibold text-white">Kartikeya Mishra</p>
                                    <p className="mt-0.5 text-xs text-zinc-500">devKartikeya</p>
                                </div>
                            </div>
                            <SparkIcon className="h-6 w-6 text-yellow-300" />
                        </div>
                        <div className="py-7">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Current mindset</p>
                            <p className="mt-3 text-2xl font-medium leading-snug tracking-tight sm:text-3xl">Don’t just make it work. <span className="text-yellow-300">Understand it.</span></p>
                            <p className="mt-4 text-sm leading-7 text-zinc-400">A product is more than code. It is a problem understood clearly, a thoughtful experience, a reliable system and the willingness to keep improving it.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                                <p className="text-2xl font-semibold text-yellow-300">Build</p>
                                <p className="mt-1 text-xs leading-5 text-zinc-500">Useful things people can use</p>
                            </div>
                            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                                <p className="text-2xl font-semibold text-yellow-300">Improve</p>
                                <p className="mt-1 text-xs leading-5 text-zinc-500">Systems, details and decisions</p>
                            </div>
                        </div>
                        <div className="mt-5 flex items-center gap-2 text-xs text-zinc-500">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> Always learning. Always building.
                        </div>
                    </div>
                </div>
            </section>

            {/* WhyLong origin story — treated as a product, not a project */}
            <section className="border-y border-white/[0.07] bg-white/[0.018]">
                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
                    <div {...reveal("0")}>
                        <div className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
                            <span className="h-px w-8 bg-yellow-300" /> A product born from a simple frustration
                        </div>
                        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
                            <div>
                                <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">The internet had a link problem. <span className="text-zinc-500">I wanted to make it simpler.</span></h2>
                                <p className="mt-6 max-w-lg text-base leading-8 text-zinc-400">We’ve all copied a long, messy URL and hesitated before sharing it. It looks awkward, it is hard to remember, and it does not always feel like our own.</p>
                                <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-yellow-300 text-black"><SparkIcon className="h-5 w-5" /></div>
                                    <div>
                                        <p className="text-sm font-bold tracking-wide"><span className="text-yellow-300">WHY</span>LONG</p>
                                        <p className="mt-0.5 text-xs text-zinc-500">Link. Scan. Connect.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:pt-2">
                                <p className="text-lg leading-8 text-zinc-200">There were already established solutions. But I kept asking a different question:</p>
                                <p className="mt-2 text-xl font-semibold leading-8 text-white sm:text-2xl">What if the useful tools people need were brought together—and people didn’t have to keep reaching for their wallets just to use them?</p>
                                <div className="mt-8 space-y-3">
                                    {[
                                        { yes: false, question: "Do existing tools shorten links?", answer: "Yes. That part is solved." },
                                        { yes: true, question: "Can every link have a QR code without an extra paywall?", answer: "That should be part of the experience." },
                                        { yes: true, question: "Can people understand clicks by location and device?", answer: "Useful insights should be within reach." },
                                        { yes: true, question: "Can link management and analytics live in one dashboard?", answer: "One place. A clearer picture." },
                                    ].map((item) => (
                                        <div key={item.question} className="group rounded-2xl border border-white/[0.08] bg-[#111] p-4 transition hover:border-yellow-300/25 sm:p-5">
                                            <div className="flex items-start gap-3">
                                                <span className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs font-black ${item.yes ? "bg-yellow-300 text-black" : "bg-white/10 text-zinc-300"}`}>{item.yes ? "✓" : "↗"}</span>
                                                <div>
                                                    <p className="font-medium leading-6 text-zinc-100">{item.question}</p>
                                                    <p className="mt-1 text-sm leading-6 text-zinc-500">{item.answer}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-7 text-base leading-8 text-zinc-300">That question became the starting point for <span className="font-semibold text-yellow-300">WhyLong</span>—a product built around making links easier to share, QR codes easier to create, and link performance easier to understand.</p>
                            </div>
                        </div>
                    </div>

                    <div {...reveal("1")} className={`mt-14 overflow-hidden rounded-[2rem] border border-yellow-200/20 bg-gradient-to-br from-yellow-300/[0.12] via-[#15140f] to-[#101010] p-6 transition-all duration-700 ease-out sm:p-9 lg:p-12 ${visibleSections["1"] ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}>
                        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
                            <div>
                                <div className="inline-flex items-center gap-2 rounded-full border border-yellow-200/20 bg-black/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-yellow-200">
                                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-300" /> Augues 2026
                                </div>
                                <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">WhyLong began taking shape</h3>
                                <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">The goal was never to add another name to a crowded category. It was to bring together the things that make a link genuinely useful: shortening, QR creation, link management and analytics—in one experience, with a strong focus on keeping the core tools accessible.</p>
                            </div>
                            <a href="https://whylong.vercel.app" target="_blank" rel="noreferrer" className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-yellow-300 px-6 py-4 text-sm font-bold text-black transition hover:bg-yellow-200">
                                Experience WhyLong <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        </div>
                        <div className="mt-8 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2 lg:grid-cols-4">
                            {[
                                ["01", "Shorten", "Make long URLs easier to share"],
                                ["02", "Create", "Generate QR codes for your links"],
                                ["03", "Understand", "Explore click and audience insights"],
                                ["04", "Manage", "Keep links organised in one place"],
                            ].map(([number, title, description]) => (
                                <div key={number} className="rounded-xl px-2 py-3">
                                    <p className="text-xs font-bold tracking-[0.18em] text-yellow-300">{number}</p>
                                    <p className="mt-2 font-semibold text-white">{title}</p>
                                    <p className="mt-1 text-sm leading-6 text-zinc-500">{description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* How I think */}
            <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
                <div {...reveal("2")}>
                    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">How I approach the work</p>
                    <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
                        <h2 className="max-w-lg text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Code is the tool. <span className="text-zinc-500">Value is the point.</span></h2>
                        <div>
                            <p className="max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">I enjoy the full journey: understanding a problem, shaping the experience, designing the API, thinking about data and security, deploying the application, and improving it after it meets the real world.</p>
                            <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-500 sm:text-base">I’m still learning—and I think that is part of doing this seriously. I’d rather understand a concept properly, test an assumption, and improve a system than pretend every answer is already obvious.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-12 grid gap-4 md:grid-cols-3">
                    {principles.map((principle, index) => (
                        <article key={principle.number} {...reveal(String(index + 3))} className={`rounded-[1.6rem] border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-700 ease-out hover:-translate-y-1 hover:border-yellow-300/25 sm:p-7 ${visibleSections[String(index + 3)] ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}>
                            <p className="text-sm font-bold tracking-[0.18em] text-yellow-300">{principle.number}</p>
                            <h3 className="mt-7 text-xl font-semibold tracking-tight text-white">{principle.title}</h3>
                            <p className="mt-3 text-sm leading-7 text-zinc-400">{principle.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            {/* Capabilities */}
            <section className="border-y border-white/[0.07] bg-white/[0.018]">
                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
                    <div {...reveal("6")} className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
                        <div>
                            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">What I work with</p>
                            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">From the interface to the infrastructure.</h2>
                            <p className="mt-5 max-w-lg text-sm leading-7 text-zinc-500 sm:text-base">I like connecting the pieces—not treating frontend, backend and deployment as completely separate worlds.</p>
                        </div>
                        <div className="divide-y divide-white/[0.09] border-y border-white/[0.09]">
                            {capabilities.map((capability, index) => (
                                <div key={capability.title} className="group grid gap-3 py-5 sm:grid-cols-[.8fr_1.2fr] sm:items-center sm:py-6">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-bold text-yellow-300/70">0{index + 1}</span>
                                        <h3 className="font-semibold text-white transition group-hover:text-yellow-200">{capability.title}</h3>
                                    </div>
                                    <p className="text-sm leading-7 text-zinc-400">{capability.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div {...reveal("7")} className="mt-10 flex flex-wrap gap-2">
                        {["JavaScript", "React", "Node.js", "Express", "MongoDB", "Mongoose", "Laravel", "PHP", "MySQL", "REST APIs", "JWT & Auth", "Docker", "GitHub Actions", "Git & GitHub", "Redis concepts", "System Design", "Tailwind CSS", "Deployment"].map((skill) => (
                            <span key={skill} className="rounded-full border border-white/10 bg-black/20 px-3.5 py-2 text-xs font-medium text-zinc-300 transition hover:border-yellow-300/30 hover:text-yellow-200 sm:text-sm">{skill}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Selected work */}
            <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
                <div {...reveal("8")} className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div>
                        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">A few things I’ve built</p>
                        <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Different problems. <span className="text-zinc-500">One habit: keep building.</span></h2>
                    </div>
                    <a href="https://github.com/devKartikeya" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-zinc-300 transition hover:text-yellow-200">More on GitHub <ArrowRight /></a>
                </div>
                <div className="grid gap-4 lg:grid-cols-3">
                    {selectedWork.map((project, index) => (
                        <article key={project.name} {...reveal(String(index + 9))} className={`group flex h-full flex-col rounded-[1.7rem] border border-white/[0.09] bg-[#111] p-6 transition-all duration-700 ease-out hover:-translate-y-1 hover:border-yellow-300/30 sm:p-7 ${visibleSections[String(index + 9)] ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}>
                            <div className="flex items-start justify-between gap-4">
                                <span className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-400">{project.type}</span>
                                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 text-zinc-400 transition group-hover:border-yellow-300/40 group-hover:text-yellow-200"><ArrowUpRight /></span>
                            </div>
                            <h3 className="mt-7 text-2xl font-semibold tracking-tight text-white">{project.name}</h3>
                            <p className="mt-3 flex-1 text-sm leading-7 text-zinc-400">{project.description}</p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {project.stack.map((item) => <span key={item} className="rounded-md bg-white/[0.05] px-2.5 py-1.5 text-[11px] font-medium text-zinc-300">{item}</span>)}
                            </div>
                            <a href={project.href} target="_blank" rel="noreferrer" className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-yellow-300 transition hover:gap-3">{project.linkLabel} <ArrowRight /></a>
                        </article>
                    ))}
                </div>
            </section>

            {/* Interests + closing */}
            <section className="border-t border-white/[0.07] bg-white/[0.018]">
                <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
                    <div {...reveal("12")} className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
                        <div>
                            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">What keeps me curious</p>
                            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">I’m interested in what happens <span className="text-zinc-500">after “it works.”</span></h2>
                        </div>
                        <div>
                            <p className="text-base leading-8 text-zinc-300 sm:text-lg">How does it scale? How do we keep it secure? What happens when a service fails? Can the deployment be repeated reliably? Is the experience clear to someone using it for the first time?</p>
                            <p className="mt-4 text-sm leading-7 text-zinc-500 sm:text-base">Those questions pull me toward backend engineering, DevOps, cloud infrastructure, automation, system design, product growth and SEO. I also enjoy documenting what I learn and sharing the process—not only the polished result.</p>
                            <div className="mt-7 flex flex-wrap gap-2">
                                {["Backend & APIs", "DevOps", "Cloud", "System Design", "Automation", "Product Building", "SEO", "Technical Writing", "Open Source"].map((interest) => (
                                    <span key={interest} className="rounded-full border border-yellow-200/15 bg-yellow-200/[0.04] px-3.5 py-2 text-xs font-medium text-yellow-100/80 sm:text-sm">{interest}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div {...reveal("13")} className="relative mt-20 overflow-hidden rounded-[2rem] border border-yellow-200/20 bg-[#0b0b0b] p-7 sm:p-10 lg:mt-28 lg:p-14">
                        <div className="pointer-events-none absolute -right-12 -top-24 h-72 w-72 rounded-full bg-yellow-300/[0.10] blur-[90px]" />
                        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                            <div>
                                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">The story is still being written</p>
                                <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">I’m not here just to learn technologies. <span className="text-zinc-500">I’m here to build things that matter.</span></h2>
                                <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">If you’re building something useful, solving an interesting engineering problem, or believe good products should create real value, I’d love to connect.</p>
                            </div>
                            <div className="flex flex-wrap gap-3 lg:flex-col">
                                <a href="https://github.com/devKartikeya" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-300 px-5 py-3.5 text-sm font-bold text-black transition hover:bg-yellow-200">Let’s connect <ArrowUpRight /></a>
                                <a href="https://whylong.vercel.app" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3.5 text-sm font-semibold text-white transition hover:border-yellow-200/40 hover:text-yellow-200">Try WhyLong <ArrowUpRight /></a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-col gap-3 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
                        <p>Made with curiosity, care, and a lot of iteration.</p>
                        <p><span className="font-semibold text-zinc-400">KARTIKEYA MISHRA</span> <span className="mx-2 text-zinc-700">/</span> BUILDER IN PROGRESS</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Founder;