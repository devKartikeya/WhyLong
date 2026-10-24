import QRTutorialPage from "../../components/Tutorials/QRTutorialPage";

const faqs = [
    {
        question: "How do I create a QR code for my Instagram profile?",
        answer:
            "Copy your Instagram profile URL, open WhyLong, navigate to its QR code generator, and use your profile URL as the destination. Customize the QR code if the available options suit your design, then download and test it.",
    },
    {
        question: "Can I create an Instagram QR code for free?",
        answer:
            "WhyLong offers free QR code creation. Check the current generator for the available customization and download options.",
    },
    {
        question: "What Instagram URL should I use?",
        answer:
            "Use the full URL of your Instagram profile, such as https://www.instagram.com/yourusername/. Replace yourusername with your actual Instagram username.",
    },
    {
        question: "Can I print my Instagram QR code?",
        answer:
            "Yes. After downloading your QR code, test it and place it on suitable materials such as business cards, posters, packaging, or a portfolio. Use a sufficiently large, high-quality image for printing.",
    },
    {
        question: "Will the QR code work for anyone who scans it?",
        answer:
            "The QR code directs people to the Instagram profile URL you encoded. Whether they can view the profile and its content depends on Instagram's access rules and the profile's privacy settings.",
    },
];

const steps = [
    {
        title: "Copy your Instagram profile link",
        description:
            "Open Instagram, visit your profile, and copy its profile link. Double-check that the link points to your account rather than a post or Reel.",
        example: true,
    },
    {
        title: "Open WhyLong's QR code generator",
        description:
            "Visit WhyLong and open the QR code creation feature. Sign in if the application asks you to do so.",
    },
    {
        title: "Enter your Instagram URL",
        description:
            "Paste your copied profile URL into the destination field. Check the URL carefully so the QR code leads to the correct account.",
    },
    {
        title: "Customize your QR code",
        description:
            "Choose from the available appearance options, such as colors or a logo, if supported by the current generator. Keep enough contrast between the code and its background.",
    },
    {
        title: "Download and test it",
        description:
            "Download the QR code in an available format. Scan it with a phone camera and confirm that it opens your Instagram profile before sharing or printing it.",
    },
];

const benefits = [
    "Make your Instagram profile easier to share in person.",
    "Add a scannable profile link to business cards, posters, and portfolios.",
    "Give customers and visitors a convenient way to reach your profile.",
    "Use available QR customization options to match your brand.",
    "Create a QR code with WhyLong without paying for a QR-code subscription.",
];

export default function InstagramQRGuide() {
    return (
        <QRTutorialPage
            title="How to Create an Instagram QR Code Free | WhyLong"
            description="Learn how to create a QR code for your Instagram profile with WhyLong. Follow simple steps to add your profile URL, customize your QR code, download it, and test it."
            keyword="How to Create an Instagram QR Code"
            profileType="Instagram"
            profileUrlExample="https://www.instagram.com/devKartikeya/"
            intro="Want to share your Instagram profile without asking people to search for your username? Learn how to turn your Instagram profile link into a scannable QR code using WhyLong."
            steps={steps}
            image="/Insta_QR.jpeg"
            logo={"/images/Insta.avif"}
            platformName={"Instagram"}
            benefits={benefits}
            faqs={faqs}
            canonicalUrl="https://whylong.vercel.app/tutorials/create-instagram-qr-code"
            imageAlt="Example of an Instagram profile QR code created with WhyLong"
        />
    );
}