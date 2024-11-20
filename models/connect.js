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
  const connectObject = this.toObject({ virtuals: true }); 
  delete connectObject.pwd;  
  connectObject.name = this.name;  
  return connectObject;
};
connectSchema.set("toJSON", { virtuals: true });
//Lors de la conversion d'un document mongoose en json
// par défaut les champs virtuels sont exclus
// donc si on veut les inclure  dans l'objet json retourné
// on doit définir l'option toJSON: { virtuals: true }
connectSchema.set("toObject", { virtuals: true });
// Lors de la conversion d'un document mongoose en objet javascript
// par défaut les champs virtuels sont exclus
// donc si on veut inclure les champs virtuels dans l'objet retourné
// on doit définir l'option toObject: { virtuals: true }.
export default mongoose.model("Connect", connectSchema);
