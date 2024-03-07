import { errorHandler } from "./errorHandler.js";
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return next(errorHandler(401, "Unauthorized"));

  jwt.verify(token, process.env.JWT_SECREET, (err, user) => {
    if (err) return next(errorHandler(403, "Forhibiden"));

    req.user = user;
    next();
  });
};
