import express from "express";
import cors from "cors";
import mongoose from "mongoose";
 
import routerConnect from "./routes/Connect.js";
import routerBook from "./routes/Book.js"
import routerAuthor from "./routes/Author.js"
import routerCategory from "./routes/Category.js";

const app = express();
mongoose.connect("mongodb://localhost:27017/dbisamm").then(()=>{
  console.log("connection a la BD reussite")
}).catch((e) =>{
    console.log("connection a la BD echouée  " );
  });


//middlewares
app.use(cors());
app.use(express.json());

app.use("/api/book",routerBook); 
app.use("/api/author", routerAuthor); 
app.use("/api/category", routerCategory);
app.use("/api/auth", routerConnect);

 
export default app;