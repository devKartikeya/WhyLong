const startServer = require("./server");
const startWelcomeEmailWorker = require("./workers/welcome_email.worker");
const startClickAnalyticsWorker = require("./workers/click_analytics.worker");

async function bootstrap() {
    try {
        // Start the analytics consumer
        startServer();
        await startWelcomeEmailWorker();
        await startClickAnalyticsWorker();
        // Start the Express HTTP server
    } catch (error) {
        console.error("Application startup failed:", error);
        process.exit(1);
    }
}

bootstrap();