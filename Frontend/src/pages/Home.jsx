import FAQ from "../components/Home/FAQ";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Home/Hero";
import { Helmet } from "react-helmet-async";
import Stats from "../components/Home/Stats";
import About from "../components/Home/About";
import Features from "../components/Home/Features";
import HowItWorks from "../components/Home/HowItWorks";
import QRCodePromo from "../components/Home/QRCodePromo";
import FreeLaunchOffer from "../components/Home/FreeLaunchOffer";
import MoreThanShortener from "../components/Home/MoreThanShortener";
import ComparisonTable from "../components/Home/ComparisonTable";
import Blogs from "../components/Home/Blogs";

const Home = () => {
    return (
        <div className="min-h-screen bg-white text-gray-950">
            <Helmet>
                <title>WhyLong — Free URL Shortener & QR Code Generator</title>

                <meta
                    name="description"
                    content="Shorten URLs, generate QR codes, and manage your links with WhyLong. Create and share links for free."
                />

                <meta name="robots" content="index, follow" />

                <link
                    rel="canonical"
                    href="https://whylong.vercel.app/"
                />

                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="WhyLong" />
                <meta
                    property="og:title"
                    content="WhyLong — Free URL Shortener & QR Code Generator"
                />
                <meta
                    property="og:description"
                    content="Shorten URLs, generate QR codes, and manage your links with WhyLong."
                />
                <meta
                    property="og:url"
                    content="https://whylong.vercel.app/"
                />
                <meta
                    property="og:image"
                    content="https://whylong.vercel.app/og-image.png"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="WhyLong — Free URL Shortener & QR Code Generator"
                />
                <meta
                    name="twitter:description"
                    content="Shorten URLs, generate QR codes, and manage your links with WhyLong."
                />
                <meta
                    name="twitter:image"
                    content="https://whylong.vercel.app/og-image.png"
                />
            </Helmet>
            <Navbar />
            <main>
                <Hero />
                <FreeLaunchOffer />
                <Stats />
                <About />
                <Features />
                <Blogs />
                <HowItWorks />
                <QRCodePromo />
                <ComparisonTable />
                <MoreThanShortener />
                <FAQ />
            </main>
            <Footer />
        </div >
    );
};

export default Home;