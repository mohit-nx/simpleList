import { checkSchema, validationResult } from "express-validator/check";

export default (schema) => {
  return [
    checkSchema(schema),
    (req, res, next) => {
      const errors = validationResult(req);
      console.log( errors.array());
      if (!errors.isEmpty()) {
        return next({error : errors.array()});
      }
      next();
    },
  ];
};