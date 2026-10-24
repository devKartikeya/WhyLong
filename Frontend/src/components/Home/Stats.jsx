import { useEffect, useRef, useState } from "react";

const stats = [
  {
    target: 10000,
    label: "Links shortened",
    suffix: "+",
    format: (value) => Math.floor(value).toLocaleString("en-IN"),
  },
  {
    target: 99.9,
    label: "Service uptime",
    suffix: "%",
    format: (value) => value.toFixed(1),
  },
  {
    target: 100,
    label: "Average redirect",
    suffix: "ms",
    prefix: "< ",
    format: (value) => Math.floor(value).toString(),
  },
  {
    target: 24,
    label: "Link availability",
    suffix: "/7",
    format: (value) => Math.floor(value).toString(),
  },
];

const DURATION = 1600;

const Stats = () => {
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  const [hasStarted, setHasStarted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] =
    useState(false);
  const [values, setValues] = useState(() =>
    stats.map(() => 0)
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();

    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updateMotionPreference
      );
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setHasStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    if (prefersReducedMotion) {
      setValues(stats.map((stat) => stat.target));
      return;
    }

    let animationFrame;
    let startTime;

    const animate = (timestamp) => {
      if (startTime === undefined) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / DURATION, 1);

      // Ease-out: starts quickly and smoothly slows at the end.
      const easedProgress = 1 - Math.pow(1 - progress, 4);

      setValues(
        stats.map((stat) => stat.target * easedProgress)
      );

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setValues(stats.map((stat) => stat.target));
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      aria-label="WhyLong statistics"
      className="border-y border-gray-100 bg-gray-50"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-gray-100 px-6 lg:grid-cols-4 lg:divide-y-0 lg:px-8">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="px-4 py-8 text-center sm:px-6 lg:py-10"
          >
            <p
              className="text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl"
              aria-label={`${stat.prefix || ""}${stat.format(
                stat.target
              )}${stat.suffix || ""}`}
            >
              {stat.prefix || ""}
              {stat.format(values[index])}
              {stat.suffix || ""}
            </p>

            <p className="mt-1.5 text-xs font-medium text-gray-500 sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;