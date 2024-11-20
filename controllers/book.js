import Book from "../models/book.js";

export const fetchBooks = async (req, res) => {
  const books= await Book.find();
  res
    .status(200)
    .json({ model: books, message: "ce message n'esr pas obligatoire==acces" });
};
export const getBookById = async (req, res) => {
  try {
    console.log("id:", req.params.id);
    console.log(req.body.categories);
    const book = await Book.findOne({ _id: req.params.id })
      .populate("author")
      .populate("categories"); 
    console.log(book.title)
    
    if (book) {
      res.status(200).json({ 
        model: book, message: "success" 
      })
    }
    else { 
      res.status(404).json({ message: "not found" })
    }
  } catch (e) {
    res.status(400).json({ error: e.message, message: "acessproblem" });
  }
};
export const getBooksByAuthor = async (req, res) => {
  try {
    const book = await Book.findByAuthor({ _id: req.params.id }); 
    //console.log(book.title);

    if (book) {
      res.status(200).json({
        model: book,
        message: "success",
      });
    } else {
      res.status(404).json({ message: "not found" });
    }
  } catch (e) {
    res.status(400).json({ error: e.message, message: "acessproblem" });
  }
};

export const addBook = async (req, res) => {
  // console.log("body:", req.body);
    console.log(req.body.categories);

  try{
  const book = new Book(req.body);
  await book.save();
  res.status(201).json({ model: book, message: "added succesfully" });
}
catch(e){
  res.status(400).json({ error: e.message, message: "donné invalide" });
}
};
export const updateBook = async (req, res) => {

  console.log("body:", req.body);
  console.log("id:", req.params.id);
  try {
  const book = await Book.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  });
if (book){
  res.status(200).json({ message: "success" });
}
    else { 
      res.status(404).json({ message: "not found" })
    }
  } catch (e) {
    res.status(400).json({ error: e.message, message: "acessproblem" });
  }
  
};
export const deleteBook = async (req, res) => {
  console.log("body:", req.body);
  console.log("id:", req.params.id);
  try{
  const task = await Book.deleteOne({ _id: req.params.id }, req.body, {
    new: true,
  });
  res.status(200).json({ message: "success" });}
  catch(e){
    res.status(400).json({ error: e.message, message: "acessproblem" });
  }
};
