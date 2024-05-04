import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const validateError = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({
        status: 422,
        success: false,
        message: "Unprocessable Entity",
        errors: errors.array(),
      });
  }
  next();
};
