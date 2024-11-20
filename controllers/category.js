import Category from "../models/category.js";

export const addCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    console.log(category);

    await category.save();
    res.status(201).json({ model: category, message: "added succesfully" });
  } catch (e) {
    res.status(400).json({ error: e.message, message: "donné invalide" });
  }
};
