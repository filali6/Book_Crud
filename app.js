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
//code bd en ligne 
// mongoose
//   .connect("mongodb+srv://chaimafilali6:123456789Chaima@cluster0.qf9pv.mongodb.net/Dbnode")
//   .then(function () {
//     console.log("connection a la BD reussite ");
//   })
//   .catch(function () {
//     console.log("connection a la BD echouée  " );
//   });
// app.use((req,res,next) => {
//     console.log("first")
//     next()
// })

//app.use((req,res,next) => {
//  res.status(200).json({message:"hello world"})
// next()
//})

// app.use((req,res) => {
// console.log("first")
// })
// app.get("/api/tasks", (req, res) => {
//   const tasks = [
//     {
//       id: 1,
//       name: "Chaima",
//     },
//     {
//       id: 2,
//       name: "Mariem",
//     },
//   ];
//   res;
//   res
//     .status(200)
//     .json({ model: tasks, message: "ce message n'esr pas obligatoire==acces" });
// });
// app.get("/api/tasks/:id", (req, res) => {
//   console.log("id:", req.params.id);
//   res.status(200).json({ message: "success" });
// });