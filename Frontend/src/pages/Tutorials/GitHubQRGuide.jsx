import QRTutorialPage from "../../components/Tutorials/QRTutorialPage";

const faqs = [
  {
    question: "How do I create a QR code for my GitHub profile?",
    answer:
      "Copy your GitHub profile URL, open WhyLong's QR code generator, enter the profile URL, customize the code using the available options, and download it. Scan the downloaded code to verify that it opens your GitHub profile.",
  },
  {
    question: "Can I create a GitHub QR code for free?",
    answer:
      "WhyLong offers free QR code creation. Available customization and export formats depend on the options provided by the current generator.",
  },
  {
    question: "Which GitHub URL should I use?",
    answer:
      "Use your public GitHub profile URL, such as https://github.com/yourusername/. Replace yourusername with your actual GitHub username.",
  },
  {
    question: "Where can I use my GitHub profile QR code?",
    answer:
      "You can add it to your developer portfolio, resume, business card, presentation, event badge, or project documentation to make your public GitHub profile easier to access.",
  },
  {
    question: "Does scanning a GitHub QR code give access to private repositories?",
    answer:
      "No. A QR code only directs someone to the encoded URL. Access to private repositories remains controlled by GitHub's permissions and authentication settings.",
  },
];

const steps = [
  {
    title: "Copy your GitHub profile URL",
    description:
      "Open GitHub and visit your profile page. Copy the profile URL from your browser and make sure it points to your account.",
    example: true,
  },
  {
    title: "Open WhyLong's QR code generator",
    description:
      "Visit WhyLong and open its QR code creation feature. Sign in if prompted by the application.",
  },
  {
    title: "Paste your GitHub profile link",
    description:
      "Enter your GitHub profile URL into the destination field. Check that the URL uses your correct GitHub username.",
  },
  {
    title: "Customize the QR code",
    description:
      "Use the customization options available in the generator, such as colors or a logo if supported. Choose a design with enough contrast to scan reliably.",
  },
  {
    title: "Download and scan your QR code",
    description:
      "Download the QR code in an available format and scan it using a phone camera. Confirm that it opens the intended GitHub profile before adding it to your resume or portfolio.",
  },
];

const benefits = [
  "Help recruiters and collaborators reach your public GitHub profile quickly.",
  "Include a scannable link on your resume or developer portfolio.",
  "Share your profile at hackathons, interviews, and tech events.",
  "Use available customization options to create a QR code that fits your personal brand.",
  "Create a QR code using WhyLong's free QR code creation feature.",
];

export default function GitHubQRGuide() {
  return (
    <QRTutorialPage
      title="How to Create a GitHub QR Code Free | WhyLong"
      description="Learn how to create a QR code for your GitHub profile with WhyLong. Follow a simple guide to enter your profile URL, customize your QR code, download it, and share it on your resume or portfolio."
      keyword="How to Create a GitHub QR Code"
      profileType="GitHub"
      profileUrlExample="https://github.com/devKartikeya/"
      intro="Make your developer profile easier to discover. Learn how to turn your GitHub profile URL into a scannable QR code for your resume, portfolio, business card, or next tech event."
      steps={steps}
      image="/GitHub_QR.jpeg"
      logo={"/images/GitHub.png"}
      platformName={"GitHub"}
      benefits={benefits}
      faqs={faqs}
      canonicalUrl="https://whylong.vercel.app/tutorials/create-github-qr-code"
      imageAlt="Example of a GitHub profile QR code created with WhyLong"
    />
  );
}