import Connect from "../models/connect.js";
import bcrypt from "bcrypt";
//import jwt from "jsonwebtoken";

export const JWT_SECRET = "ISAMM_SECRET";
export const signup = async (req, res, next) => {
  try {
    const hashedPWD = await bcrypt.hash(req.body.pwd, 10);
    const auth = new Connect({
      ...req.body,
      pwd: hashedPWD,
    });
    await auth.save();
    
    const userPublic=auth.toPublic();
    //delete user password
    // const { pwd, ...newauth } = auth.toObject();

    res.status(200).json({
      model: userPublic,
      message: "success",
    });
  } catch (e) {
    res.status(400).json({ error: e.message, message: "acessproblem" });
  }
};
// export const login = async (req, res, next) => {
//   try {
//     //find the user by email
//     const auth = await Connect.findOne({ email: req.body.email });

//     //if not foundreturn error
//     if (!auth) {
//       return res.status(401).json({ message: "login incorrect" });
//     }
//     //else compare password
//     const valid = await bcrypt.compare(req.body.pwd, auth.pwd);
//     //if not match error
//     if (!auth) {
//       return res
//         .status(401)
//         .json({ message: "login ou mot de passe  incorrect" });
//     }
//     //else create token return it
// //     res.status(200).json({
// //       token: jwt.sign({ userId: auth._id }, JWT_SECRET, { expiresIn: "24h" }),
// //     });
//   } catch (e) {
//     res.status(400).json({ error: e.message });
//  }
// };
