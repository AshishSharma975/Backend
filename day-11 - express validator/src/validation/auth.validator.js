import { body, validationResult } from "express-validator";

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  res.status(400).json({
    errors: errors.array(),
  });
};

export const registerValidation = [
  body("username")
    .isString()
    .withMessage("Username should be string")
    .withMessage("Username is required"),

  body("email").isEmail().withMessage("Email should be valid"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password should be at least 6 characters"),

  body("userid").isMongoId(),

  validate,
];
