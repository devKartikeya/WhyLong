import { ArrowRight } from "lucide-react";
import { FiCheck, FiDownload, FiGrid } from "react-icons/fi";
import { Link } from "react-router-dom";

const QRCodePromo = () => {
    return (
        <section className="border-t border-gray-100 bg-gray-950 py-24 lg:py-32" id="qr-codes">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Heading */}
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow-600">
                        WhyLong's QR Studio
                    </p>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                        Turn your links into
                        <span className="block text-gray-500">
                            branded QR codes.
                        </span>
                    </h2>

                    <p className="mt-5 text-base leading-7 text-gray-500">
                        Explore WhyLong's QR Studio and customize your QRs with branded logos, texts, CTA, shapes and presets and share them with varios formats.
                    </p>
                </div>

                {/* Main Feature */}
                <div className="mt-16 overflow-hidden rounded-3xl border border-gray-200 bg-gray-50">
                    <div className="grid items-center lg:grid-cols-2">

                        {/* Left — QR Preview */}
                        <div className="flex justify-center p-8 sm:p-12 lg:p-16">
                            <div className="relative">

                                {/* Decorative background */}
                                <div className="absolute -inset-6 rounded-[2rem] bg-yellow-100/60 blur-2xl" />

                                {/* QR Card */}
                                <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

                                    <p className="mt-4 text-center text-md font-semibold text-gray-950">
                                        Try this One ! 😊
                                    </p>
                                    <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-xl bg-white sm:h-72 sm:w-72">
                                        <img
                                            src="/WhyLong.png"
                                            alt="Sample WhyLong QR code that opens the WhyLong homepage"
                                            width="288"
                                            height="288"
                                            loading="lazy"
                                            decoding="async"
                                            className="h-full w-full object-contain"
                                        />

                                    </div>

                                    {/* Brand name */}
                                    {/* <p className="mt-4 text-center text-sm font-semibold text-gray-950">
                                        WhyLong
                                    </p> */}
                                </div>

                                {/* Floating download badge */}
                                <div className="absolute -bottom-4 -right-4 flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-md">
                                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-yellow-400 text-gray-950">
                                        <FiDownload className="h-3.5 w-3.5" />
                                    </span>
                                    Download ready
                                </div>
                            </div>
                        </div>

                        {/* Right — Content */}
                        <div className="border-t border-gray-200 bg-white p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-16">

                            <p className="text-sm font-semibold text-gray-950">
                                More than just a short link
                            </p>

                            <h3 className="mt-3 text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
                                Make every scan feel like your brand.
                            </h3>

                            <p className="mt-5 text-base leading-7 text-gray-500">
                                WhyLong gives you control over how your QR
                                codes look and feel — without needing another
                                design tool.
                            </p>

                            {/* Features */}
                            <div className="mt-8 space-y-5">

                                <div className="flex gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-yellow-700">
                                        <FiGrid className="h-5 w-5" />
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-bold text-gray-950">
                                            Customize your QR
                                        </h4>

                                        <p className="mt-1 text-sm leading-6 text-gray-500">
                                            Choose QR and background colors,
                                            styles, and error correction.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-yellow-700">
                                        <FiCheck className="h-5 w-5" />
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-bold text-gray-950">
                                            Add your identity
                                        </h4>

                                        <p className="mt-1 text-sm leading-6 text-gray-500">
                                            Place your logo and brand text
                                            directly into the QR code.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-yellow-700">
                                        <FiDownload className="h-5 w-5" />
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-bold text-gray-950">
                                            Download and share
                                        </h4>

                                        <p className="mt-1 text-sm leading-6 text-gray-500">
                                            Export your finished QR code and
                                            use it anywhere your audience can
                                            scan it.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom reassurance */}
                <div className="mx-auto mt-12 flex max-w-2xl flex-col sm:flex-row items-center justify-center gap-3 text-center">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow-400">
                        <FiCheck className="h-3.5 w-3.5 text-gray-950" />
                    </div>

                    <p className="text-sm text-gray-300">
                        Your QR code stays connected to your WhyLong link,
                        so you can manage the destination from your dashboard.
                    </p>
                    <button
                        type="button"
                        className="group inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-sm font-bold text-gray-950 transition-all hover:bg-yellow-300 active:scale-[0.98]"
                    >
                        <Link to={"/products/qr-code-generator"}>Learn more about QRs</Link>
                        <ArrowRight size={18} className="inline" />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default QRCodePromo;