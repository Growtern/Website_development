const parseJobCourseFields = (req, res, next) => {
  try {
    const jsonFields = ["plans", "modules", "roles"];

    jsonFields.forEach((field) => {
      if (req.body[field] && typeof req.body[field] === "string") {
        req.body[field] = JSON.parse(req.body[field]);
      }
    });

    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Invalid JSON format in course data.",
    });
  }
};

export default parseJobCourseFields;