import Joi from "joi";

export const validateSignup = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required().messages({
      "string.email": "L'email doit être valide.",
      "any.required": "L'email est obligatoire.",
    }),
    pwd: Joi.string().min(6).required().messages({
      "string.min": "Le mot de passe doit contenir au moins 6 caractères.",
      "any.required": "Le mot de passe est obligatoire.",
    }),
    name: Joi.object({
      First: Joi.string().required().messages({
        "any.required": "Le prénom est obligatoire.",
      }),
      Last: Joi.string().required().messages({
        "any.required": "Le nom de famille est obligatoire.",
      }),
    }).required(),
  });

  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    return res
      .status(400)
      .json({ errors: error.details.map((err) => err.message) });
  }

  next(); // Passe à la fonction `signup` si la validation réussit
};
export const validateEvent = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required().messages({
      "any.required": "Le titre est obligatoire.",
    }),
    startDate: Joi.date().iso().required().messages({
      "date.base": "La date de début doit être une date valide.",
      "any.required": "La date de début est obligatoire.",
    }),
    endDate: Joi.date()
      .iso()
      .greater(Joi.ref("startDate"))
      .required()
      .messages({
        "date.base": "La date de fin doit être une date valide.",
        "date.greater": "La date de fin doit être après la date de début.",
        "any.required": "La date de fin est obligatoire.",
      }),
  });

  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    return res
      .status(400)
      .json({ errors: error.details.map((err) => err.message) });
  }

  next(); // Passe à la fonction de création si la validation réussit
};
