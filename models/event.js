import mongoose from "mongoose";
const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});
eventSchema.pre("save", function (next) {
  if (this.startDate >= this.endDate) {
    const error = new Error("La date de début doit être avant la date de fin.");
    return next(error);
  }
  next();
});

export default mongoose.model("Event", eventSchema);