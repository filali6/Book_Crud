import express from "express";
import { addEvent } from "../controllers/event.js";
import { validateEvent } from "../middlewares/middlewares.js";

const router = express.Router();

router.post("/event", validateEvent, addEvent);

export default router;
