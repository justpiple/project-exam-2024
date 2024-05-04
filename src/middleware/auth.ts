import { Request, Response, NextFunction } from "express";
import { RequestWithSession, Token } from "@/types/middleware";
import jwt from "jsonwebtoken";
import { Unauthorize } from "@/utils/apiResponse";

declare global {
  namespace Express {
    interface Request {
      token?: Token;
    }
  }
}

export const auth =
  (...akses: ("USER" | "ADMIN" | "ALL")[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const token =
        req.cookies.token || req.headers.authorization?.split("Bearer ")[1];

      if (!token) {
        return res.status(401).json(Unauthorize("Unauthorized"));
      }

      const JWTSecret = process.env.JWT_SECRET;
      const decoded = jwt.verify(token, JWTSecret) as unknown as Token;

      if (!akses.includes(decoded.role) && !akses.includes("ALL")) {
        return res.status(401).json(Unauthorize("Unauthorized"));
      }

      (req as RequestWithSession).token = decoded;
      next();
    } catch {
      return res.status(401).json(Unauthorize("Unauthorized"));
    }
  };
