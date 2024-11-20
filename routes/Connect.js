import { signup } from "../controllers/connect.js";
import Connect from "../models/connect.js";
//import { toPublic } from "../models/connect.js";


import express from "express";

const router = express.Router();
//routes

router.post("/signup", signup);
 

export default router;
