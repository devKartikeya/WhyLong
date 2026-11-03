
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScrollReveal = (options = {}) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const {
            selector = ".reveal",
            y = 45,
            duration = 0.8,
            stagger = 0.15,
            start = "top 85%",
        } = options;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                selector,
                {
                    opacity: 0,
                    y,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration,
                    stagger,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start,
                        once: true,
                    },
                }
            );
        }, section);

        return () => ctx.revert();
    }, []);

    return sectionRef;
};

export default useScrollReveal;