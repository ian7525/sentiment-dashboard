import { Request, Response, NextFunction } from "express";
import logger from "../utils/loggers";

export const apiLogger = (req: Request, res: Response, next: NextFunction) => {
  const startTime = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - startTime;

    logger.http(
      `[${req.id}] ${req.method} ${req.url} ${res.statusCode} - ${duration}ms`,
      {
        method: req.method,
        url: req.url,
        statusCode: res.statusCode,
        duration,
        userAgent: req.headers["user-agent"],
        ip: req.ip,
      }
    );
  });
  next();
};
