import { useEffect, useMemo, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import QRCodeStyling from "qr-code-styling";

const API_URL = import.meta.env.VITE_API_URL;
const PRESETS_KEY = "WhyLong-qr-presets-v2";

const DEFAULT_SETTINGS = {
    logo: null,
    qrColor: "#111827",
    bgColor: "#ffffff",
    gradientEnabled: false,
    gradientColor: "#eab308",
    eyeColor: "#111827",
    dotStyle: "square",
    cornerSquareStyle: "square",
    cornerDotStyle: "square",
    qrSize: 512,
    logoSize: 0.22,
    brandText: "",
    ctaText: "",
    errorCorrection: "H",
    margin: 16,
    template: "classic",
};

const TEMPLATES = [
    {
        id: "classic",
        name: "Classic",
        description: "Clean and professional",
        settings: { qrColor: "#111827", bgColor: "#ffffff", gradientEnabled: false, dotStyle: "square", cornerSquareStyle: "square", cornerDotStyle: "square", eyeColor: "#111827" },
    },
    {
        id: "midnight",
        name: "Midnight",
        description: "Dark, high-contrast",
        settings: { qrColor: "#f8fafc", bgColor: "#111827", gradientEnabled: false, dotStyle: "rounded", cornerSquareStyle: "extra-rounded", cornerDotStyle: "dot", eyeColor: "#facc15" },
    },
    {
        id: "sunrise",
        name: "Sunrise",
        description: "Warm brand colors",
        settings: { qrColor: "#7c2d12", bgColor: "#fff7ed", gradientEnabled: true, gradientColor: "#eab308", dotStyle: "rounded", cornerSquareStyle: "extra-rounded", cornerDotStyle: "dot", eyeColor: "#7c2d12" },
    },
    {
        id: "ocean",
        name: "Ocean",
        description: "Modern blue gradient",
        settings: { qrColor: "#0f766e", bgColor: "#f0fdfa", gradientEnabled: true, gradientColor: "#2563eb", dotStyle: "dots", cornerSquareStyle: "extra-rounded", cornerDotStyle: "dot", eyeColor: "#0f766e" },
    },
    {
        id: "violet",
        name: "Violet",
        description: "Bold creative style",
        settings: { qrColor: "#6d28d9", bgColor: "#faf5ff", gradientEnabled: true, gradientColor: "#db2777", dotStyle: "classy-rounded", cornerSquareStyle: "extra-rounded", cornerDotStyle: "dot", eyeColor: "#6d28d9" },
    },
];

const DOT_STYLES = [
    { value: "square", label: "Square" },
    { value: "dots", label: "Dots" },
    { value: "rounded", label: "Rounded" },
    { value: "classy", label: "Classy" },
    { value: "classy-rounded", label: "Soft classy" },
    { value: "extra-rounded", label: "Extra rounded" },
];

const CORNER_STYLES = [
    { value: "square", label: "Square" },
    { value: "dot", label: "Dot" },
    { value: "extra-rounded", label: "Rounded" },
];

function ColorControl({ label, value, onChange }) {
    return (
        <label className="block min-w-0">
            <span className="text-xs font-medium text-gray-600">{label}</span>
            <span className="mt-2 flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 p-2">
                <input type="color" value={value} onChange={(event) => onChange(event.target.value)} className="h-8 w-8 cursor-pointer rounded-lg border-0 bg-transparent p-0" />
                <span className="truncate text-xs font-medium uppercase text-gray-500">{value}</span>
            </span>
        </label>
    );
}

function OptionButtons({ label, value, options, onChange, columns = 3 }) {
    return (
        <div>
            <p className="text-xs font-medium text-gray-600">{label}</p>
            <div className="mt-2 grid gap-2" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
                {options.map((option) => (
                    <button key={option.value} type="button" onClick={() => onChange(option.value)} className={`rounded-xl border px-2 py-2.5 text-xs font-semibold transition ${value === option.value ? "border-yellow-400 bg-yellow-50 text-gray-950" : "border-gray-200 bg-gray-50 text-gray-500 hover:bg-white"}`}>
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

const QRCodes = () => {
    const { user } = useOutletContext();
    const [links, setLinks] = useState([]);
    const [selectedLink, setSelectedLink] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");
    const [notice, setNotice] = useState("");
    const [settings, setSettings] = useState(DEFAULT_SETTINGS);
    const [presets, setPresets] = useState([]);
    const [presetName, setPresetName] = useState("");
    const qrContainerRef = useRef(null);
    const qrInstanceRef = useRef(null);

    const updateSetting = (key, value) => setSettings((current) => ({ ...current, [key]: value }));

    const fetchLinks = async () => {
        try {
            setLoading(true);
            setError("");
            const response = await fetch(`${API_URL}/urls/my-links`, { method: "GET", credentials: "include" });
            const result = await response.json();
            if (!response.ok) throw new Error(result.message || "Failed to fetch links");
            const fetchedLinks = result.data || [];
            setLinks(fetchedLinks);
            setSelectedLink((current) => current ? fetchedLinks.find((item) => item._id === current._id) || fetchedLinks[0] || null : fetchedLinks[0] || null);
        } catch (fetchError) {
            console.error("Failed to fetch links:", fetchError);
            setError(fetchError.message || "Unable to load your links");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchLinks(); }, []);

    useEffect(() => {
        try {
            const saved = localStorage.getItem(PRESETS_KEY);
            if (saved) setPresets(JSON.parse(saved));
        } catch (presetError) {
            console.error("Failed to load QR presets:", presetError);
        }
    }, []);

    const filteredLinks = useMemo(() => {
        const query = search.trim().toLowerCase();
        if (!query) return links;
        return links.filter((link) => link.shortCode?.toLowerCase().includes(query) || link.originalUrl?.toLowerCase().includes(query));
    }, [links, search]);

    const getShortUrl = (link) => `${API_URL}/${link.shortCode}`;

    const applySettings = (changes, templateId) => {
        setSettings((current) => ({ ...current, ...changes, ...(templateId ? { template: templateId } : {}) }));
    };

    const applyTemplate = (template) => applySettings(template.settings, template.id);

    const resetCustomization = () => setSettings(DEFAULT_SETTINGS);

    const handleLogoUpload = (event) => {
        const file = event.target.files?.[0];
        if (!file) return;
        if (!file.type.startsWith("image/")) {
            setNotice("Please choose an image file for your logo.");
            return;
        }
        if (file.size > 2 * 1024 * 1024) {
            setNotice("Logo must be 2 MB or smaller.");
            event.target.value = "";
            return;
        }
        const reader = new FileReader();
        reader.onload = () => updateSetting("logo", reader.result);
        reader.readAsDataURL(file);
    };

    const getQrOptions = (type = "canvas") => {
        const dotOptions = settings.gradientEnabled
            ? { type: settings.dotStyle, gradient: { type: "linear", rotation: 0, colorStops: [{ offset: 0, color: settings.qrColor }, { offset: 1, color: settings.gradientColor }] } }
            : { type: settings.dotStyle, color: settings.qrColor };
        return {
            width: settings.qrSize,
            height: settings.qrSize,
            type,
            data: selectedLink ? getShortUrl(selectedLink) : "https://example.com",
            margin: settings.margin,
            qrOptions: { errorCorrectionLevel: settings.errorCorrection },
            image: settings.logo || undefined,
            imageOptions: { hideBackgroundDots: true, imageSize: settings.logoSize, margin: 8, crossOrigin: "anonymous" },
            dotsOptions: dotOptions,
            cornersSquareOptions: { type: settings.cornerSquareStyle, color: settings.eyeColor },
            cornersDotOptions: { type: settings.cornerDotStyle, color: settings.eyeColor },
            backgroundOptions: { color: settings.bgColor },
        };
    };

    useEffect(() => {
        if (!selectedLink || !qrContainerRef.current) return undefined;
        let cancelled = false;
        const options = getQrOptions("canvas");
        if (!qrInstanceRef.current) {
            qrInstanceRef.current = new QRCodeStyling(options);
        } else {
            qrInstanceRef.current.update(options);
        }
        const container = qrContainerRef.current;
        container.innerHTML = "";
        qrInstanceRef.current.append(container);
        return () => { cancelled = true; void cancelled; };
    }, [selectedLink, settings]);

    const copyShortUrl = async () => {
        if (!selectedLink) return;
        try {
            await navigator.clipboard.writeText(getShortUrl(selectedLink));
            setNotice("Short link copied to clipboard.");
        } catch (copyError) {
            console.error("Failed to copy URL:", copyError);
            setNotice("Couldn't copy the link. Check browser clipboard permissions.");
        }
    };

    const loadImage = (src) => new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = reject;
        image.src = src;
    });

    const downloadPng = async () => {
        if (!selectedLink || !qrInstanceRef.current) return;
        try {
            const blob = await qrInstanceRef.current.getRawData("png");
            if (!blob) throw new Error("QR image could not be generated");
            const image = await loadImage(URL.createObjectURL(blob));
            const padding = 36;
            const hasText = settings.brandText.trim() || settings.ctaText.trim();
            const lineCount = Number(Boolean(settings.brandText.trim())) + Number(Boolean(settings.ctaText.trim()));
            const footerHeight = hasText ? 30 + lineCount * 36 : 0;
            const canvas = document.createElement("canvas");
            canvas.width = image.width + padding * 2;
            canvas.height = image.height + padding * 2 + footerHeight;
            const context = canvas.getContext("2d");
            if (!context) throw new Error("Canvas is unavailable");
            context.fillStyle = settings.bgColor;
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.drawImage(image, padding, padding, image.width, image.height);
            let y = image.height + padding + 24;
            context.textAlign = "center";
            context.textBaseline = "middle";
            if (settings.brandText.trim()) {
                context.fillStyle = settings.qrColor;
                context.font = "700 28px Arial, sans-serif";
                context.fillText(settings.brandText.trim(), canvas.width / 2, y, canvas.width - 32);
                y += 36;
            }
            if (settings.ctaText.trim()) {
                context.fillStyle = settings.qrColor;
                context.font = "500 20px Arial, sans-serif";
                context.fillText(settings.ctaText.trim(), canvas.width / 2, y, canvas.width - 32);
            }
            canvas.toBlob((output) => {
                if (!output) return;
                const url = URL.createObjectURL(output);
                const anchor = document.createElement("a");
                anchor.href = url;
                anchor.download = `WhyLong-${selectedLink.shortCode}-branded.png`;
                anchor.click();
                URL.revokeObjectURL(url);
            }, "image/png");
        } catch (downloadError) {
            console.error("PNG export failed:", downloadError);
            setNotice("Couldn't export PNG. Try again with a smaller logo.");
        }
    };

    const downloadSvg = async () => {
        if (!selectedLink || !qrInstanceRef.current) return;
        try {
            const blob = await qrInstanceRef.current.getRawData("svg");
            if (!blob) throw new Error("QR SVG could not be generated");
            const source = await blob.text();
            const parser = new DOMParser();
            const svgDocument = parser.parseFromString(source, "image/svg+xml");
            const svg = svgDocument.documentElement;
            const namespace = "http://www.w3.org/2000/svg";
            const width = settings.qrSize;
            const padding = 36;
            const hasBrand = settings.brandText.trim();
            const hasCta = settings.ctaText.trim();
            const footerHeight = (hasBrand ? 48 : 0) + (hasCta ? 36 : 0);
            const totalWidth = width + padding * 2;
            const totalHeight = width + padding * 2 + footerHeight;
            svg.setAttribute("width", String(totalWidth));
            svg.setAttribute("height", String(totalHeight));
            svg.setAttribute("viewBox", `0 0 ${totalWidth} ${totalHeight}`);
            const background = svgDocument.createElementNS(namespace, "rect");
            background.setAttribute("width", String(totalWidth));
            background.setAttribute("height", String(totalHeight));
            background.setAttribute("fill", settings.bgColor);
            svg.insertBefore(background, svg.firstChild);
            const group = svgDocument.createElementNS(namespace, "g");
            group.setAttribute("transform", `translate(${padding}, ${padding})`);
            const nodes = Array.from(svg.childNodes).filter((node) => node !== background);
            nodes.forEach((node) => group.appendChild(node));
            svg.appendChild(group);
            let y = padding + width + 30;
            const addText = (text, fontSize, weight) => {
                const node = svgDocument.createElementNS(namespace, "text");
                node.setAttribute("x", String(totalWidth / 2));
                node.setAttribute("y", String(y));
                node.setAttribute("text-anchor", "middle");
                node.setAttribute("font-family", "Arial, sans-serif");
                node.setAttribute("font-size", String(fontSize));
                node.setAttribute("font-weight", String(weight));
                node.setAttribute("fill", settings.qrColor);
                node.textContent = text;
                svg.appendChild(node);
                y += fontSize + 14;
            };
            if (hasBrand) addText(settings.brandText.trim(), 26, 700);
            if (hasCta) addText(settings.ctaText.trim(), 18, 500);
            const output = new Blob([new XMLSerializer().serializeToString(svg)], { type: "image/svg+xml;charset=utf-8" });
            const url = URL.createObjectURL(output);
            const anchor = document.createElement("a");
            anchor.href = url;
            anchor.download = `WhyLong-${selectedLink.shortCode}-branded.svg`;
            anchor.click();
            URL.revokeObjectURL(url);
        } catch (downloadError) {
            console.error("SVG export failed:", downloadError);
            setNotice("Couldn't export SVG. Please try again.");
        }
    };

    const savePreset = () => {
        const name = presetName.trim();
        if (!name) return;
        const newPreset = { id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, name, settings };
        const updated = [...presets, newPreset];
        setPresets(updated);
        localStorage.setItem(PRESETS_KEY, JSON.stringify(updated));
        setPresetName("");
        setNotice(`Brand preset “${name}” saved on this browser.`);
    };

    const loadPreset = (preset) => {
        setSettings({ ...DEFAULT_SETTINGS, ...preset.settings });
        setNotice(`Loaded “${preset.name}” branding preset.`);
    };

    const deletePreset = (id) => {
        const updated = presets.filter((preset) => preset.id !== id);
        setPresets(updated);
        localStorage.setItem(PRESETS_KEY, JSON.stringify(updated));
    };

    return (
        <div className="mx-auto max-w-[1600px] space-y-8">
            <Helmet>
                <title>QR Studio | WhyLong</title>
                <meta name="description" content="Create branded QR codes with custom patterns, gradients, logos, brand presets, and print-ready exports." />
            </Helmet>

            <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="mb-1 text-sm font-semibold text-yellow-600">WHYLONG QR STUDIO</p>
                    <h1 className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">Make every scan feel like your brand.</h1>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">Design branded QR codes with custom patterns, gradients, corner styles, logos, and reusable brand presets.</p>
                </div>
                <span className="inline-flex w-fit items-center rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">Unlimited QR creation</span>
            </header>

            {notice && <div role="status" className="flex items-center justify-between gap-3 rounded-xl border border-yellow-200 bg-yellow-50 px-4 py-3 text-sm text-yellow-900"><span>{notice}</span><button type="button" onClick={() => setNotice("")} className="font-semibold">Dismiss</button></div>}

            <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(360px,480px)]">
                <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
                    <div className="border-b border-gray-100 p-5 sm:p-6">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div><h2 className="font-semibold text-gray-950">Choose a short link</h2><p className="mt-1 text-xs text-gray-400">Your QR points to the WhyLong link, so its destination can be updated later.</p></div>
                            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search links..." className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm outline-none focus:border-yellow-400 focus:bg-white sm:max-w-64" />
                        </div>
                    </div>
                    {loading ? <div className="space-y-3 p-5">{[1, 2, 3, 4].map((item) => <div key={item} className="h-16 animate-pulse rounded-xl bg-gray-100" />)}</div> : error ? <div className="p-8 text-sm text-red-600">{error} <button type="button" onClick={fetchLinks} className="ml-2 font-semibold underline">Retry</button></div> : links.length === 0 ? <div className="p-10 text-center"><p className="font-semibold text-gray-900">No short links yet</p><p className="mt-2 text-sm text-gray-500">Create a short link first, then design its QR code here.</p></div> : filteredLinks.length === 0 ? <div className="p-10 text-center text-sm text-gray-500">No matching links found.</div> : <div className="divide-y divide-gray-100">{filteredLinks.map((link) => {
                        const selected = selectedLink?._id === link._id;
                        return <button type="button" key={link._id} onClick={() => setSelectedLink(link)} className={`flex w-full items-center gap-3 p-4 text-left transition ${selected ? "bg-yellow-50" : "hover:bg-gray-50"}`}>
                            <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${selected ? "bg-yellow-400 text-gray-950" : "bg-gray-100 text-gray-500"}`}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path strokeLinecap="round" strokeLinejoin="round" d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg></span>
                            <span className="min-w-0 flex-1"><span className="block truncate text-sm font-semibold text-gray-950">/{link.shortCode}</span><span className="mt-1 block truncate text-xs text-gray-400">{link.originalUrl}</span></span>
                            <span className="hidden text-right sm:block"><span className="block text-sm font-semibold text-gray-900">{link.clicks || 0}</span><span className="text-[11px] text-gray-400">clicks</span></span>
                        </button>;
                    })}</div>}
                </section>

                <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
                    <div className="border-b border-gray-100 p-5"><h2 className="font-semibold text-gray-950">Live brand preview</h2><p className="mt-1 text-xs text-gray-400">Changes update the QR preview instantly.</p></div>
                    {!selectedLink ? <div className="p-10 text-center text-sm text-gray-500">Select a link to start designing.</div> : <div className="p-5 sm:p-6">
                        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5 sm:p-8">
                            <div className="mx-auto flex max-w-[340px] flex-col items-center rounded-2xl p-4 shadow-sm" style={{ backgroundColor: settings.bgColor }}>
                                <div ref={qrContainerRef} className="flex w-full items-center justify-center [&>canvas]:!h-auto [&>canvas]:!w-full [&>svg]:!h-auto [&>svg]:!w-full" />
                                {settings.brandText.trim() && <p className="mt-3 max-w-full break-words text-center text-lg font-bold" style={{ color: settings.qrColor }}>{settings.brandText.trim()}</p>}
                                {settings.ctaText.trim() && <p className="mt-1 max-w-full break-words text-center text-sm font-medium" style={{ color: settings.qrColor }}>{settings.ctaText.trim()}</p>}
                            </div>
                            <p className="mt-4 truncate text-center text-xs text-gray-500">{getShortUrl(selectedLink)}</p>
                        </div>

                        <div className="mt-6 space-y-6">
                            <div><div className="flex items-center justify-between"><div><h3 className="text-sm font-semibold text-gray-950">Quick-start brand templates</h3><p className="mt-1 text-xs text-gray-400">Start with a look, then fine-tune it.</p></div><button type="button" onClick={resetCustomization} className="text-xs font-semibold text-gray-500 hover:text-gray-950">Reset</button></div>
                                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">{TEMPLATES.map((template) => <button type="button" key={template.id} onClick={() => applyTemplate(template)} className={`rounded-xl border p-3 text-left transition ${settings.template === template.id ? "border-yellow-400 bg-yellow-50" : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"}`}><span className="flex items-center gap-2"><span className="h-4 w-4 rounded-full border border-black/10" style={{ background: template.settings.gradientEnabled ? `linear-gradient(135deg, ${template.settings.qrColor}, ${template.settings.gradientColor})` : template.settings.qrColor }} /><span className="text-xs font-semibold text-gray-900">{template.name}</span></span><span className="mt-1 block text-[11px] leading-4 text-gray-400">{template.description}</span></button>)}</div>
                            </div>

                            <div className="border-t border-gray-100 pt-5"><h3 className="text-sm font-semibold text-gray-950">Brand identity</h3>
                                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                                    <div><label className="text-xs font-medium text-gray-600">Logo (max 2 MB)</label><div className="mt-2 flex flex-wrap items-center gap-2"><label className="cursor-pointer rounded-xl border border-dashed border-gray-300 bg-gray-50 px-3 py-2.5 text-xs font-semibold text-gray-600 hover:border-yellow-400 hover:bg-yellow-50">Upload logo<input type="file" accept="image/png,image/jpeg,image/webp,image/svg+xml" onChange={handleLogoUpload} className="hidden" /></label>{settings.logo && <button type="button" onClick={() => updateSetting("logo", null)} className="text-xs font-semibold text-red-500">Remove</button>}</div></div>
                                    <div><label className="text-xs font-medium text-gray-600">Brand name</label><input value={settings.brandText} maxLength={40} onChange={(event) => updateSetting("brandText", event.target.value)} placeholder="e.g. Your Brand" className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm outline-none focus:border-yellow-400 focus:bg-white" /></div>
                                    <div className="sm:col-span-2"><label className="text-xs font-medium text-gray-600">Call-to-action text</label><input value={settings.ctaText} maxLength={60} onChange={(event) => updateSetting("ctaText", event.target.value)} placeholder="e.g. Scan to explore our collection" className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm outline-none focus:border-yellow-400 focus:bg-white" /><p className="mt-1 text-[11px] text-gray-400">Displayed below the QR in the preview and exported files.</p></div>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 pt-5"><h3 className="text-sm font-semibold text-gray-950">Colors & gradients</h3>
                                <div className="mt-4 grid grid-cols-2 gap-3"><ColorControl label="QR color" value={settings.qrColor} onChange={(value) => updateSetting("qrColor", value)} /><ColorControl label="Background" value={settings.bgColor} onChange={(value) => updateSetting("bgColor", value)} /></div>
                                <label className="mt-4 flex items-center gap-2 text-xs font-medium text-gray-700"><input type="checkbox" checked={settings.gradientEnabled} onChange={(event) => updateSetting("gradientEnabled", event.target.checked)} className="h-4 w-4 accent-yellow-500" /> Use a two-color QR gradient</label>
                                {settings.gradientEnabled && <div className="mt-3"><ColorControl label="Gradient end color" value={settings.gradientColor} onChange={(value) => updateSetting("gradientColor", value)} /></div>}
                                <div className="mt-4"><ColorControl label="Corner / eye color" value={settings.eyeColor} onChange={(value) => updateSetting("eyeColor", value)} /></div>
                            </div>

                            <div className="border-t border-gray-100 pt-5"><h3 className="text-sm font-semibold text-gray-950">QR pattern & corners</h3>
                                <div className="mt-4 space-y-4"><OptionButtons label="Dot pattern" value={settings.dotStyle} options={DOT_STYLES} onChange={(value) => updateSetting("dotStyle", value)} columns={3} /><OptionButtons label="Corner frame" value={settings.cornerSquareStyle} options={CORNER_STYLES} onChange={(value) => updateSetting("cornerSquareStyle", value)} /><OptionButtons label="Inner corner dot" value={settings.cornerDotStyle} options={CORNER_STYLES} onChange={(value) => updateSetting("cornerDotStyle", value)} /></div>
                            </div>

                            <div className="border-t border-gray-100 pt-5"><h3 className="text-sm font-semibold text-gray-950">Output & scan reliability</h3>
                                <div className="mt-4"><p className="text-xs font-medium text-gray-600">Export resolution</p><div className="mt-2 grid grid-cols-3 gap-2">{[256, 512, 1024].map((size) => <button type="button" key={size} onClick={() => updateSetting("qrSize", size)} className={`rounded-xl border px-3 py-2.5 text-xs font-semibold ${settings.qrSize === size ? "border-yellow-400 bg-yellow-50 text-gray-950" : "border-gray-200 bg-gray-50 text-gray-500 hover:bg-white"}`}>{size}px</button>)}</div></div>
                                <div className="mt-4"><p className="text-xs font-medium text-gray-600">Error correction</p><div className="mt-2 grid grid-cols-4 gap-2">{[{ value: "L", label: "Low", pct: "7%" }, { value: "M", label: "Medium", pct: "15%" }, { value: "Q", label: "Quartile", pct: "25%" }, { value: "H", label: "High", pct: "30%" }].map((option) => <button type="button" key={option.value} onClick={() => updateSetting("errorCorrection", option.value)} className={`rounded-xl border px-2 py-2 ${settings.errorCorrection === option.value ? "border-yellow-400 bg-yellow-50 text-gray-950" : "border-gray-200 bg-gray-50 text-gray-500"}`}><span className="block text-xs font-semibold">{option.value}</span><span className="mt-0.5 block text-[10px]">{option.pct}</span></button>)}</div><p className="mt-2 text-[11px] leading-4 text-gray-400">Higher correction can help when a logo covers part of the code, but may make the QR denser. Always test scans before printing.</p></div>
                                <div className="mt-4"><label className="text-xs font-medium text-gray-600">Quiet zone / outer margin: {settings.margin}px</label><input type="range" min="8" max="40" step="4" value={settings.margin} onChange={(event) => updateSetting("margin", Number(event.target.value))} className="mt-2 w-full accent-yellow-500" /></div>
                                <div className="mt-4"><label className="text-xs font-medium text-gray-600">Logo size: {Math.round(settings.logoSize * 100)}%</label><input type="range" min="0.12" max="0.28" step="0.01" value={settings.logoSize} onChange={(event) => updateSetting("logoSize", Number(event.target.value))} className="mt-2 w-full accent-yellow-500" /><p className="mt-1 text-[11px] text-gray-400">Keep logos modest for better scanning reliability.</p></div>
                            </div>

                            <div className="border-t border-gray-100 pt-5"><h3 className="text-sm font-semibold text-gray-950">Save your brand kit</h3><p className="mt-1 text-xs text-gray-400">Presets are currently saved in this browser only.</p>
                                <div className="mt-3 flex gap-2"><input value={presetName} onChange={(event) => setPresetName(event.target.value)} onKeyDown={(event) => event.key === "Enter" && savePreset()} placeholder="e.g. My business branding" className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-xs outline-none focus:border-yellow-400 focus:bg-white" /><button type="button" onClick={savePreset} disabled={!presetName.trim()} className="rounded-xl bg-gray-950 px-4 py-2.5 text-xs font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40">Save</button></div>
                                {presets.length > 0 && <div className="mt-3 space-y-2">{presets.map((preset) => <div key={preset.id} className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2.5"><span className="min-w-0 flex-1 truncate text-xs font-medium text-gray-700">{preset.name}</span><button type="button" onClick={() => loadPreset(preset)} className="text-xs font-semibold text-gray-600 hover:text-gray-950">Load</button><button type="button" onClick={() => deletePreset(preset.id)} className="text-xs font-semibold text-red-500">Delete</button></div>)}</div>}
                            </div>

                            <div className="grid grid-cols-2 gap-2 border-t border-gray-100 pt-5"><button type="button" onClick={copyShortUrl} className="rounded-xl border border-gray-200 px-3 py-3 text-xs font-semibold text-gray-700 hover:bg-gray-50">Copy short link</button><button type="button" onClick={downloadPng} className="rounded-xl bg-gray-950 px-3 py-3 text-xs font-semibold text-white hover:bg-gray-800">Download PNG</button><button type="button" onClick={downloadSvg} className="col-span-2 rounded-xl border border-gray-200 px-3 py-3 text-xs font-semibold text-gray-700 hover:bg-gray-50">Download SVG (scalable for print)</button></div>
                            <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-4"><p className="text-xs font-semibold text-yellow-900">Before printing</p><p className="mt-1 text-xs leading-5 text-yellow-800">Use strong contrast, keep a clear margin around the QR, and scan-test the final exported file on multiple phones. Very light colors and oversized logos can reduce reliability.</p></div>
                        </div>
                    </div>}
                </section>
            </div>
        </div>
    );
};

export default QRCodes;
