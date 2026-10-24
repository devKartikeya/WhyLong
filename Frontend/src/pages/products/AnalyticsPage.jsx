import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import AuthPanel from "../../components/Auth/AuthPanel";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Globe2,
  Link2,
  MapPin,
  MousePointer2,
  Monitor,
  Smartphone,
  Tablet,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const SITE_URL = "https://whylong.vercel.app";
const PAGE_URL = `${SITE_URL}/products/analytics`;

const faqs = [
  {
    question: "What is link analytics?",
    answer:
      "Link analytics is the process of measuring how people interact with a link. Depending on the metrics a service collects, it can show click totals, activity over time, device categories, approximate geographic distribution and other useful information about link engagement.",
  },
  {
    question: "What can I track with WhyLong Analytics?",
    answer:
      "WhyLong's analytics experience is designed around link engagement, including click activity, timestamps, time-based trends, device categories and geographic insights. The metrics available for a particular link depend on the data collected by the current WhyLong implementation.",
  },
  {
    question: "What does click-through rate (CTR) mean?",
    answer:
      "Click-through rate is generally the percentage of impressions that result in clicks. For example, 20 clicks from 500 measured impressions would equal a 4% CTR. A link shortener that records clicks but does not measure impressions cannot calculate a true impression-based CTR on its own. Clicks and CTR should therefore be treated as different metrics.",
  },
  {
    question: "Can I see when a short link was clicked?",
    answer:
      "Timestamped click records can help you understand when link activity occurred. Depending on the available reporting detail, you may be able to inspect individual events or review activity grouped by hour, day or another time interval.",
  },
  {
    question: "Can link analytics show which devices people use?",
    answer:
      "Device analytics can classify recorded visits into categories such as desktop, mobile and tablet when the required request information is available. Classification may not be perfect because browsers, privacy tools and automated traffic can affect the information a service receives.",
  },
  {
    question: "Does link analytics reveal a visitor's exact location?",
    answer:
      "Geographic analytics generally estimates a visitor's location from network information such as an IP address. Results can be inaccurate because of VPNs, proxies, mobile networks and shared internet connections. Location reports should not be treated as a person's precise physical location.",
  },
  {
    question: "Can I filter link analytics by date?",
    answer:
      "Date-range filters are useful for narrowing reports to a period such as the last 7 days, last 30 days or a custom range, provided those options are supported by the dashboard. Filtering makes it easier to compare activity across reporting periods.",
  },
  {
    question: "Why might my click count differ from another analytics tool?",
    answer:
      "Different tools can count requests differently. Redirect requests, preview bots, crawlers, repeated clicks, privacy restrictions and filtering rules may all affect reported totals. Compare the definitions and time zones used by each tool before treating two numbers as directly equivalent.",
  },
  {
    question: "Does link analytics identify individual people?",
    answer:
      "Aggregate link analytics is not the same as identifying a person. Device and geographic details are generally estimates or technical classifications, not proof of an individual's identity. Avoid collecting or exposing personal information without a valid purpose and appropriate legal basis.",
  },
  {
    question: "Do I need an account to view link analytics?",
    answer:
      "Access to detailed reports depends on the way a link and its analytics are managed in WhyLong. Sign in and check your dashboard for the reporting options available to your account and links.",
  },
];

const chartData = [
  { label: "Mon", height: 30 },
  { label: "Tue", height: 48 },
  { label: "Wed", height: 39 },
  { label: "Thu", height: 65 },
  { label: "Fri", height: 52 },
  { label: "Sat", height: 82 },
  { label: "Sun", height: 68 },
];

const featureCards = [
  {
    icon: TrendingUp,
    title: "Click activity over time",
    description:
      "Understand when a link receives attention with activity trends across a selected reporting period. Spot changes without relying on a single lifetime total.",
  },
  {
    icon: Clock3,
    title: "Timestamped activity",
    description:
      "Use available click timestamps to investigate when activity happened and connect link engagement with the time a campaign or post was shared.",
  },
  {
    icon: Monitor,
    title: "Device breakdown",
    description:
      "Understand the broad device mix behind recorded clicks, such as desktop, mobile and tablet, when the relevant device information is available.",
  },
  {
    icon: MapPin,
    title: "Geographic insights",
    description:
      "Explore approximate geographic patterns to understand where link activity appears to originate. Location is estimated and may not be exact.",
  },
  {
    icon: CalendarDays,
    title: "Date-range filters",
    description:
      "Narrow reports to a useful period so you can focus on recent activity, compare different time windows and avoid mixing unrelated reporting periods.",
  },
  {
    icon: BarChart3,
    title: "Performance at a glance",
    description:
      "Bring the available metrics together to understand link engagement more easily and decide what deserves a closer look.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-600">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}

function AnalyticsPreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-5 py-4">
        <div>
          <p className="font-semibold text-slate-950">Link performance</p>
          <p className="mt-1 text-xs text-slate-500">
            Example dashboard preview
          </p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600">
          <CalendarDays size={14} />
          Last 7 days
          <ChevronDown size={14} />
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-3 sm:p-5">
        {[
          { label: "Total clicks", value: "1,284", Icon: MousePointer2 },
          { label: "Unique visitors", value: "—", Icon: Users },
          { label: "CTR", value: "—", Icon: TrendingUp },
        ].map(({ label, value, Icon }) => (
          <div
            key={label}
            className="rounded-xl border border-slate-100 bg-slate-50 p-3 sm:p-4"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs text-slate-500">{label}</p>
              <Icon size={15} className="text-amber-600" />
            </div>
            <p className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
              {value}
            </p>
          </div>
        ))}
      </div>

      <div className="mx-4 rounded-xl border border-slate-100 p-4 sm:mx-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-semibold text-slate-900">Clicks over time</p>
            <p className="mt-1 text-xs text-slate-500">
              Illustrative chart — not live data
            </p>
          </div>
          <BarChart3 size={18} className="text-amber-600" />
        </div>

        <div
          className="mt-6 flex h-36 items-end justify-between gap-2 border-b border-l border-slate-100 px-2 sm:gap-4"
          aria-label="Illustrative weekly click activity chart"
          role="img"
        >
          {chartData.map((item) => (
            <div
              key={item.label}
              className="flex h-full flex-1 flex-col items-center justify-end gap-2"
            >
              <div
                className="w-full max-w-8 rounded-t-md bg-amber-400"
                style={{ height: `${item.height}%` }}
              />
              <span className="translate-y-5 text-[10px] text-slate-500">
                {item.label}
              </span>
            </div>
          ))}
        </div>
        <div className="h-5" />
      </div>

      <div className="grid gap-4 p-4 sm:grid-cols-2 sm:p-5">
        <div className="rounded-xl border border-slate-100 p-4">
          <div className="flex items-center gap-2">
            <Smartphone size={16} className="text-amber-600" />
            <p className="font-semibold text-slate-900">Devices</p>
          </div>
          <div className="mt-4 space-y-3">
            {[
              { label: "Mobile", width: "72%" },
              { label: "Desktop", width: "48%" },
              { label: "Tablet", width: "18%" },
            ].map((item) => (
              <div key={item.label}>
                <div className="mb-1 flex justify-between text-xs text-slate-500">
                  <span>{item.label}</span>
                  <span>Example</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100">
                  <div
                    className="h-2 rounded-full bg-amber-400"
                    style={{ width: item.width }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-100 p-4">
          <div className="flex items-center gap-2">
            <Globe2 size={16} className="text-amber-600" />
            <p className="font-semibold text-slate-900">Geographic insights</p>
          </div>
          <div className="mt-4 flex min-h-24 items-center gap-3 rounded-lg bg-slate-50 p-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
              <MapPin size={21} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-800">
                Location overview
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Illustrative panel for approximate location data
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 bg-slate-50 px-5 py-3">
        <p className="text-xs leading-5 text-slate-500">
          All chart values and visual breakdowns above are illustrative.
          Dashes indicate metrics that should only be displayed when the
          backend actually measures them.
        </p>
      </div>
    </div>
  );
}

export default function AnalyticsPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const navigate = useNavigate();
  const { user, authLoading } = useAuth();

  const openAuth = () => {
    setIsAuthOpen(true);
  };

  const goToDashboard = () => {
    navigate("/dashboard");
  };

  const title = "Link Analytics & Click Tracking | WhyLong";
  const description =
    "Understand short-link performance with click activity, time-based trends, device insights, approximate geolocation and date-range reporting with WhyLong.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: title,
        description,
        isPartOf: {
          "@type": "WebSite",
          name: "WhyLong",
          url: `${SITE_URL}/`,
        },
        breadcrumb: {
          "@id": `${PAGE_URL}#breadcrumb`,
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${PAGE_URL}#software`,
        name: "WhyLong Link Analytics",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Any",
        url: PAGE_URL,
        description,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Products",
            item: `${SITE_URL}/products`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Link Analytics",
            item: PAGE_URL,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={PAGE_URL} />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="WhyLong" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <main className="min-h-screen bg-white text-slate-900">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-amber-50/80 via-white to-white">
          <div className="pointer-events-none absolute -left-28 top-20 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-yellow-100/70 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:py-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                <BarChart3 size={16} className="text-amber-600" />
                Link analytics by WhyLong
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.1]">
                Understand your links.
                <span className="mt-2 block text-amber-500">
                  Learn from every click.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                Go beyond creating short links. Explore click activity,
                understand when engagement happens, review device
                categories and use available geographic insights to get a
                clearer picture of how your links are being used.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {authLoading ? (
                  <div className="h-12 w-40 shrink-0 animate-pulse rounded-xl bg-gray-800" />
                ) : user ? (
                  <button
                    type="button"
                    onClick={goToDashboard}
                    className="group inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-sm font-bold text-gray-950 transition-all hover:bg-yellow-300 active:scale-[0.98]"
                  >
                    Explore your Dashboard

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 01.75-.75h10.69l-3.22-3.22a.75.75 0 01.1-1.06.75.75 0 011.06.1l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 01-1.06.1.75.75 0 01-.1-1.06l3.22-3.22H3.75A.75.75 0 013 10Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={openAuth}
                    className="group inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-sm font-bold text-gray-950 transition-all hover:bg-yellow-300 active:scale-[0.98]"
                  >
                    Sign in to get started

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 01.75-.75h10.69l-3.22-3.22a.75.75 0 111.06-1.06l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 01-1.06 1.06l-3.22-3.22H3.75A.75.75 0 013 10Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                )}

                <Link
                  to="/products/url-shortener"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-800 transition hover:border-amber-300 hover:bg-amber-50"
                >
                  Shorten a URL
                  <Link2 size={18} />
                </Link>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/products/qr-code-generator"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-700 px-6 py-3.5 font-semibold text-gray-200 transition hover:bg-gray-800"
                >
                  Generate QR
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2">
                  <Check size={16} className="text-amber-600" />
                  Click activity
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check size={16} className="text-amber-600" />
                  Time-based trends
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check size={16} className="text-amber-600" />
                  Device insights
                </span>
              </div>
            </div>

            <AnalyticsPreview />
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow="Why link analytics matters"
              title="A click count is a starting point, not the whole story."
              description="A link can be shared across different channels and visited at different times. Looking at activity over a reporting period helps put individual clicks into context."
            />

            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                Link analytics helps you understand how people interact
                with a shortened URL after it has been shared. Instead of
                looking only at a single number, you can examine the
                available activity over time and explore patterns in the
                recorded visits.
              </p>
              <p>
                For example, a click timeline may help you identify when
                a shared link received attention. Device categories can
                give a broad view of how people accessed it, while
                approximate geographic reporting can help you explore
                where requests appear to originate.
              </p>
              <p>
                These signals are useful for reviewing link engagement,
                but they are not the same as sales, conversions or proof
                of a person's identity. Interpret the data in context,
                especially when comparing different tools or campaigns.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="border-y border-slate-100 bg-slate-50/70">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
            <SectionHeading
              eyebrow="Analytics features"
              title="Explore the signals behind your short links."
              description="Each view answers a different question about link activity. Use the available metrics together rather than treating one number as the complete picture."
            />

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featureCards.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/60 sm:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                    <Icon size={23} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-950">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTR EXPLAINER */}
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Measure the right thing"
                title="Clicks, CTR and conversions are not interchangeable."
                description="Understanding the difference helps you interpret your reports accurately and avoid drawing conclusions from metrics that measure different things."
              />

              <div className="mt-7 space-y-4">
                <div className="rounded-xl border border-slate-200 p-5">
                  <h3 className="font-semibold">Total clicks</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    The number of click events recorded under the service's
                    counting rules. Depending on those rules, repeated
                    requests and automated traffic may affect the total.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-5">
                  <h3 className="font-semibold">Click-through rate (CTR)</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Clicks divided by measured impressions, multiplied by
                    100. A valid CTR requires an impression count for the
                    same reporting context.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-5">
                  <h3 className="font-semibold">Conversions</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    A desired action after a click, such as a signup or
                    purchase. Click tracking alone does not prove that a
                    conversion occurred.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-amber-800">
                A simple CTR example
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                Imagine a campaign receives 20 clicks from 500 measured
                impressions.
              </p>

              <div className="mt-6 rounded-xl border border-amber-200 bg-white p-5">
                <p className="text-sm text-slate-500">
                  Click-through rate
                </p>
                <p className="mt-2 text-4xl font-bold tracking-tight text-slate-950">
                  4%
                </p>
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[4%] rounded-full bg-amber-400" />
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  (20 clicks ÷ 500 impressions) × 100 = 4%
                </p>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-700">
                This is an example, not WhyLong customer data. If WhyLong
                records clicks without measuring the corresponding
                impressions, the dashboard should show clicks rather than
                claim to calculate an impression-based CTR.
              </p>
            </div>
          </div>
        </section>

        {/* TIMESTAMPS AND FILTERS */}
        <section className="border-y border-slate-100 bg-slate-50/70">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Time-based reporting"
                title="See when activity happens, not just how much."
                description="A timeline and clear date filters help you investigate link activity across a selected reporting period."
              />

              <div className="mt-7 space-y-5">
                {[
                  {
                    icon: Clock3,
                    title: "Timestamps with context",
                    text: "Use recorded timestamps to understand when events occurred. Check the reporting time zone before comparing data across systems.",
                  },
                  {
                    icon: CalendarDays,
                    title: "Focused reporting periods",
                    text: "Use the date-range options actually supported by your dashboard to narrow the report to the period you want to investigate.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Compare activity patterns",
                    text: "Look for changes across periods, while accounting for differences in promotion timing, audience size and link distribution.",
                  },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-amber-700 shadow-sm ring-1 ring-slate-200">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-950">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/40 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-semibold">Activity timeline</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Illustrative visualization
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-600">
                  <CalendarDays size={14} />
                  Reporting period
                </div>
              </div>

              <div className="mt-7 space-y-5">
                {[
                  {
                    time: "Morning",
                    width: "36%",
                    note: "Example activity level",
                  },
                  {
                    time: "Afternoon",
                    width: "78%",
                    note: "Example activity level",
                  },
                  {
                    time: "Evening",
                    width: "55%",
                    note: "Example activity level",
                  },
                ].map((item) => (
                  <div key={item.time}>
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <span className="text-sm font-medium text-slate-800">
                        {item.time}
                      </span>
                      <span className="text-xs text-slate-500">
                        {item.note}
                      </span>
                    </div>
                    <div className="h-3 rounded-full bg-slate-100">
                      <div
                        className="h-3 rounded-full bg-amber-400"
                        style={{ width: item.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                This graphic explains the concept of time-based activity.
                It does not represent a real link's traffic or actual
                timestamp records.
              </div>
            </div>
          </div>
        </section>

        {/* DEVICES AND GEOLOCATION */}
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <SectionHeading
            eyebrow="Understand access patterns"
            title="Explore device and geographic insights."
            description="Knowing the broad context of recorded visits can help you understand how and where links are accessed. These signals are estimates, not definitive information about individual people."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <Monitor size={23} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    Device analytics
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Understand broad device categories
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                A device breakdown can help you understand whether recorded
                link requests mainly come from mobile, desktop or tablet
                environments. This can provide useful context when reviewing
                a landing page's mobile experience or the way a link is
                distributed.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  { icon: Smartphone, label: "Mobile" },
                  { icon: Monitor, label: "Desktop" },
                  { icon: Tablet, label: "Tablet" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-xl bg-slate-50 p-3"
                  >
                    <Icon size={19} className="text-amber-700" />
                    <span className="text-sm font-medium text-slate-800">
                      {label}
                    </span>
                    <span className="ml-auto text-xs text-slate-500">
                      Category example
                    </span>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <Globe2 size={23} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    Geographic analytics
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Explore approximate location patterns
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                Geographic reporting can group link activity by available
                location estimates. These patterns may help you understand
                where requests originate, but IP-based location can be
                affected by VPNs, proxies, mobile carriers and network
                routing.
              </p>

              <div className="mt-6 flex min-h-40 flex-col items-center justify-center rounded-xl border border-dashed border-amber-300 bg-amber-50 px-5 text-center">
                <MapPin size={30} className="text-amber-700" />
                <p className="mt-3 font-semibold text-slate-900">
                  Approximate location insights
                </p>
                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">
                  Geographic summaries should be based on available
                  location data, not invented city or country statistics.
                </p>
              </div>

              <p className="mt-4 text-xs leading-5 text-slate-500">
                Location information is not a person's exact physical
                position or a verified identity.
              </p>
            </article>
          </div>
        </section>

        {/* HOW TO USE */}
        <section className="border-y border-slate-100 bg-slate-50/70">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
            <SectionHeading
              eyebrow="A practical workflow"
              title="How to use link analytics effectively"
              description="A consistent process makes reports easier to interpret and helps you avoid comparing metrics that measure different things."
            />

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Create and share a link",
                  text: "Use the WhyLong URL shortener to create a link for the destination you intend to share.",
                },
                {
                  number: "02",
                  title: "Open the available report",
                  text: "Go to your dashboard and select the relevant link or reporting view, where supported.",
                },
                {
                  number: "03",
                  title: "Choose a time period",
                  text: "Use the available date filters and confirm the reporting time zone before interpreting trends.",
                },
                {
                  number: "04",
                  title: "Interpret the results",
                  text: "Review click activity and the available breakdowns. Treat correlations as signals, not proof of causation.",
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 font-bold text-amber-800">
                    {item.number}
                  </span>
                  <h3 className="mt-5 font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
              <div className="flex gap-3">
                <div className="mt-0.5 text-amber-700">
                  <Zap size={21} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    A note on data quality
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    Automated previews, crawlers, repeated requests and
                    privacy protections can affect link analytics. Before
                    making a business decision, understand what the
                    service counts as a click and which fields it actually
                    records.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRIVACY */}
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Responsible analytics"
                title="Useful insights should come with sensible expectations."
                description="Analytics works best when the limits of the data are clear. Use reports to understand aggregate activity rather than trying to infer more than the data can support."
              />
            </div>

            <div className="space-y-4">
              {[
                "Treat geographic results as estimates, not exact locations.",
                "Do not equate click counts with unique people or successful conversions.",
                "Check reporting definitions before comparing different analytics tools.",
                "Follow applicable privacy rules when collecting, retaining or using analytics data.",
              ].map((text) => (
                <div key={text} className="flex gap-3">
                  <Check
                    size={19}
                    className="mt-1 shrink-0 text-amber-600"
                  />
                  <p className="text-sm leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ — LAST MAIN CONTENT SECTION */}
        <section
          id="analytics-faqs"
          className="border-t border-slate-100 bg-slate-50/70"
        >
          <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-600">
                Frequently asked questions
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Link Analytics FAQs
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Answers about click tracking, CTR, timestamps, devices,
                geographic reporting and interpreting link performance.
              </p>
            </div>

            <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200 bg-white px-5 sm:px-7">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                const answerId = `analytics-faq-answer-${index}`;

                return (
                  <article key={faq.question}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                      }
                      className="flex w-full items-center justify-between gap-5 py-5 text-left"
                    >
                      <span className="font-semibold leading-7 text-slate-900">
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`shrink-0 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {isOpen && (
                      <div
                        id={answerId}
                        className="max-w-3xl pb-5 pr-5 text-sm leading-7 text-slate-600"
                      >
                        {faq.answer}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>

            <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center sm:p-8">
              <h3 className="text-xl font-bold text-slate-950">
                Ready to begin?
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Start with a short URL, then explore the reporting
                capabilities available in your WhyLong dashboard.
              </p>
              <Link
                to="/products/url-shortener"
                className="mt-5 mx-2 inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-amber-300"
              >
                Shorten a URL
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/products/qr-code-generator"
                className="inline-flex mx-2 items-center justify-center gap-2 rounded-xl bg-gray-700 px-6 py-3.5 font-semibold text-gray-200 transition hover:bg-gray-800"
              >
                Generate QR
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
        {/* ================= AUTH PANEL ================= */}

        < AuthPanel
          isOpen={isAuthOpen}
          onClose={() => setIsAuthOpen(false)}
        />
      </main>
    </>
  );
}