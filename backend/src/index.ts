import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";

import analysisRoutes from "./routes/analysisRoutes";
import logger from "./utils/loggers";

import { requestIdMiddleware } from "./middleware/requestId";
import { apiLogger } from "./middleware/apiLogger";
import { errorHander } from "./middleware/errorHandler";
import { request } from "http";

dotenv.config;

const logDir = path.join(process.cwd(), "logs");
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(requestIdMiddleware);
app.use(apiLogger);

app.use("/api/vi", analysisRoutes);

app.get("/", (req, res) => {
  res.send("Sentiment Analysis Dashboard API is running!");
});

// Error handling middleware should be defined after all routes
app.use(errorHander);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: {
      code: "NOT_FOUND",
      message: "Not Found",
    },
    request: req.id,
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
