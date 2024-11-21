import mongoose from "mongoose";
const bookSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
    // yearPublished: { type: Number, required: true },
    //genre: { type: String, required: true },
    //availableCopies: { type: Number, required: true },
  },
  { timestamps: true }
);
bookSchema.statics.findByAuthor = function (authorId) {
  return this.find({ author: authorId });
};
bookSchema.statics.hasOtherBooks = function (authorId) {
  return this.exists({ author: authorId });
};
export default mongoose.model("Book", bookSchema);
