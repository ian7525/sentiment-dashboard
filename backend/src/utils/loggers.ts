import winston from "winston";
import path from "path";
import { debug, error } from "console";

const logLevels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const logLevel = () => {
  const env = process.env.NODE_ENV || "develop";
  return env === "develop" ? "debug" : "info";
};

const logColors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "white",
};

winston.addColors(logColors);

const logFormat = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    ({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`
  )
);

const logTransports = [
  new winston.transports.Console(),
  // error log
  new winston.transports.File({
    filename: path.join("logs", "error.log"),
    level: "error",
  }),
  // all log
  new winston.transports.File({
    filename: path.join("logs", "all.log"),
  }),
];

const logger = winston.createLogger({
  level: logLevel(),
  levels: logLevels,
  format: logFormat,
  transports: logTransports,
});

export default logger;
