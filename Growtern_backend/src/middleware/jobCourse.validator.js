import { body } from "express-validator";

export const validateJobCourse = [
  body("courseTitle")
    .trim()
    .notEmpty()
    .withMessage("Course title is required."),

  body("nextBatchStartFrom")
    .notEmpty()
    .withMessage("Next batch start date is required.")
    .isISO8601()
    .withMessage("Invalid date format."),

  body("curriculum")
    .trim()
    .notEmpty()
    .withMessage("Curriculum is required."),

  body("plans")
    .isArray({ min: 1 })
    .withMessage("At least one plan is required."),

  body("modules")
    .isArray({ min: 1 })
    .withMessage("At least one module is required."),

  body("roles")
    .isArray({ min: 1 })
    .withMessage("At least one career role is required."),

  body("featured")
    .optional()
    .isBoolean()
    .withMessage("Featured must be true or false."),

  body("status")
    .optional()
    .isIn(["Active", "Inactive"])
    .withMessage("Status must be either Active or Inactive."),

  body("displayOrder")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Display order must be a positive number."),
];