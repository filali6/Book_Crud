import {
  addBook,
  deleteBook,
  fetchBooks,
  getBookById,
  getBooksByAuthor,
  updateBook,
} from "../controllers/book.js";
import Book from "../models/book.js";

import express from "express";

const router = express.Router();
//routes
router.get("/", fetchBooks);

router.get("/:id",getBookById);
router.get("/author/:id", getBooksByAuthor);
router.post("/", addBook);
// router.get("/:title",getBookByTitle);
router.patch("/:id", updateBook);
router.delete("/:id", deleteBook);
export default router;
