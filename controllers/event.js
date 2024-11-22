import Event from "../models/event.js";

export const addEvent = async (req, res) => {
  // #swagger.tags=['Event']

  try {
    const event = new Event(req.body);
    console.log(event);

    await event.save();
    res.status(201).json({ model: event, message: "added succesfully" });
  } catch (e) {
    res.status(400).json({ error: e.message, message: "donné invalide" });
  }
};
