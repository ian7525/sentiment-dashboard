import { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";

// To generate a unique request ID for each incoming request and set it in the response header
export const requestIdMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.id = uuidv4();

  res.setHeader("X-Request-ID", req.id);
  next();
};
