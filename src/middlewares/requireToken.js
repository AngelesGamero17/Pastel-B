import jwt from "jsonwebtoken";
import config from "../config.js";
export const requireToken = (req, res, next) => {
  try {
    let token = req.headers?.authorization;
    if (!token) throw new Error("Token not found");
    token = token.split(" ")[1];
    const { id } = jwt.verify(token, config.JWT_SECRET);
    req.user = id;
    next();
  } catch (error) {
    res.status(401).json({ error });
  }
};