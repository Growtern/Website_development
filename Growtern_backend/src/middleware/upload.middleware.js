import multer from "multer";

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  // Allow PDF files
  if (file.mimetype === "application/pdf") {
    cb(null, true);
    return;
  }

  // Allow image files
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
    return;
  }

  cb(
    new Error(
      "Only PDF and image files are allowed."
    ),
    false
  );
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 4 * 1024 * 1024, // 4 MB
  },
});

export default upload;