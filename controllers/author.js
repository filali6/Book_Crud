import Author from "../models/author.js";

export const addAuthor = async (req, res) => {
  try {
    const author = new Author (req.body);
      console.log(author);

    await author.save();
    res.status(201).json({ model: author, message: "added succesfully" });
  } catch (e) {
    res.status(400).json({ error: e.message, message: "donné invalide" });
  }
};
