async function getGeoLocation(ip) {
    const unknownLocation = {
        country: "unknown",
        region: "unknown",
        city: "unknown",
    };

    try {
        if (!ip || typeof ip !== "string" || ip === "unknown") {
            return unknownLocation;
        }

        // Handle IPv4-mapped IPv6 addresses.
        ip = ip.trim().replace(/^::ffff:/i, "");

        const net = require("node:net");

        // Local/private IPs cannot provide visitor geolocation.
        if (
            !net.isIP(ip) ||
            ip === "::1" ||
            ip === "::" ||
            ip.startsWith("127.") ||
            ip.startsWith("10.") ||
            ip.startsWith("192.168.") ||
            ip.startsWith("172.16.") ||
            ip.startsWith("172.17.") ||
            ip.startsWith("172.18.") ||
            ip.startsWith("172.19.") ||
            ip.startsWith("172.20.") ||
            ip.startsWith("172.21.") ||
            ip.startsWith("172.22.") ||
            ip.startsWith("172.23.") ||
            ip.startsWith("172.24.") ||
            ip.startsWith("172.25.") ||
            ip.startsWith("172.26.") ||
            ip.startsWith("172.27.") ||
            ip.startsWith("172.28.") ||
            ip.startsWith("172.29.") ||
            ip.startsWith("172.30.") ||
            ip.startsWith("172.31.") ||
            ip.startsWith("169.254.")
        ) {
            console.log("Geo lookup skipped for private/local IP");
            return unknownLocation;
        }

        const response = await fetch(
            `https://ipwho.is/${encodeURIComponent(ip)}`,
            { signal: AbortSignal.timeout(5000) }
        );

        const data = await response.json();

        if (!response.ok || data.success === false) {
            console.error("ipwho.is lookup failed:", {
                status: response.status,
                message: data.message || "Unknown provider error",
            });

            return unknownLocation;
        }

        const geo = {
            country: data.country || "unknown",
            region: data.region || "unknown",
            city: data.city || "unknown",
        };

        console.log("Geolocation result:", geo);

        return geo;
    } catch (error) {
        console.error("Geolocation lookup error:", error.message);
        return unknownLocation;
    }
}

module.exports = getGeoLocation;