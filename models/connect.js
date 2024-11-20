import mongoose from "mongoose";
const connectSchema = new mongoose.Schema({
  email: { type: String, unique: true, trim: true, required: true },
  pwd: { type: String, required: true },
  name: {
    First: { type: String, required: true },
    Last: { type: String, required: true },
  },
});
connectSchema.virtual("fullName").get(function () {
  return `${this.name.First} ${this.name.Last}`;//mtaa el cours ma habetch tekhdem ***
});
connectSchema.methods.toPublic = function () {
  const connectObject = this.toObject({ virtuals: true }); ;  
  delete connectObject.pwd;  
  connectObject.name = this.name;  
  return connectObject;
};

export default mongoose.model("Connect", connectSchema);
