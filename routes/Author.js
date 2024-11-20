
import express from "express";
import { addAuthor } from "../controllers/author.js";

const router = express.Router();
//routes
 
router.post("/", addAuthor);
 
export default router;
