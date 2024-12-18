import express from "express";
import cors from "cors";
import mongoose from "mongoose";
 
import routerConnect from "./routes/Connect.js";
import routerBook from "./routes/Book.js"
import routerAuthor from "./routes/Author.js"
import routerCategory from "./routes/Category.js";
import routerEvent from "./routes/Event.js"
//////
import swaggerUi from "swagger-ui-express"
import {readFile} from "fs/promises"
/////////-
const app = express();
mongoose.connect("mongodb://localhost:27017/dbisamm").then(()=>{
  console.log("connection a la BD reussite")
}).catch((e) =>{
    console.log("connection a la BD echouée  " );
  });
  ////begin swagger
  const json=JSON.parse(await readFile(new URL("./swagger-output.json",import.meta.url)))
  app.use("/api/doc",swaggerUi.serve,swaggerUi.setup(json))
/// end swagger 

//middlewares
app.use(cors());
app.use(express.json());

app.use("/api/book",routerBook); 
app.use("/api/author", routerAuthor); 
app.use("/api/category", routerCategory);
app.use("/api/auth", routerConnect);
app.use("/api/ev", routerEvent);


 
export default app;