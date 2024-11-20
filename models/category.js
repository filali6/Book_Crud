import mongoose from "mongoose";
const categorySchema = mongoose.Schema(
  //     {title: { type: String, enum: ["Horror", "Mystery"], required: true },
  // });
  { title: { type: String, required: true } }
);
export default mongoose.model("Category", categorySchema);