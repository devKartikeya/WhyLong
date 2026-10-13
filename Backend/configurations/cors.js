const cors = require("cors");

const corsOptions = {
  origin: ["https://whylong.vercel.app", "http://localhost:8080", "http://localhost:5173"],
  credentials: true,
};

module.exports = cors(corsOptions);