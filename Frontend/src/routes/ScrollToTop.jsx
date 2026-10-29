import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Instantly scroll to the top left of the document
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // Optional: use "smooth" for animated scrolling
        });
    }, [pathname]);

    return null;
}