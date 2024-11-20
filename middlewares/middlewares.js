import jwt from "jsonwebtoken";
import Connect from "../models/connect.js";
import { JWT_SECRET } from "../controllers/connect.js";

export const loggedMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log("token: ", token);
    const decodedToken = jwt.verify(token, JWT_SECRET);
    const userId = decodedToken.userId;
    try {
      const auth = await Connect.findOne({ _id: userId });
      if (auth) {
        req.cnx = {
          userId: userId,
          role: auth.role,
        };
        next();
      } else {
        res.status(401).json({ error: "user doesn't exist" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

export const isAdmin = (req, res, next) => {
  try {
    if (req.cnx.role === "admin") {
      next();
    } else {
      res.status(403).json({ error: "no access to this route" });
    }
  } catch (e) {
    res.status(401).json({ error: error.message });
  }
};
