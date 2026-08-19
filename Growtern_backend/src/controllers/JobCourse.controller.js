import { validationResult } from "express-validator";
import slugify from "slugify";

import JobCourseModel from "../models/JobCourse.model.js";
import cloudinary from "../config/cloudinary.js";

const MAX_IMAGE_SIZE = 1 * 1024 * 1024; // 1 MB
const MAX_PDF_SIZE = 4 * 1024 * 1024;   // 4 MB

// Upload PDF Buffer to Cloudinary
const uploadPdfToCloudinary = (
  buffer,
  publicId
) => {
  return new Promise((resolve, reject) => {
    const uploadStream =
      cloudinary.uploader.upload_stream(
        {
          folder:
            "growtern/job-courses/syllabus",
          public_id: publicId,
          resource_type: "raw",
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );

    uploadStream.end(buffer);
  });
};

// Upload Course Image to Cloudinary
const uploadCourseImageToCloudinary = (
  buffer,
  publicId
) => {
  return new Promise((resolve, reject) => {
    const uploadStream =
      cloudinary.uploader.upload_stream(
        {
          folder:
            "growtern/job-courses/images",
          public_id: publicId,
          resource_type: "image",
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );

    uploadStream.end(buffer);
  });
};

// Delete PDF from Cloudinary
const deletePdfFromCloudinary = async (
  publicId
) => {
  if (!publicId) return;

  try {
    await cloudinary.uploader.destroy(
      publicId,
      {
        resource_type: "raw",
      }
    );
  } catch (error) {
    console.error(
      "Cloudinary PDF Delete Error:",
      error
    );
  }
};

// Delete Course Image from Cloudinary
const deleteCourseImageFromCloudinary = async (publicId) => {
    if (!publicId) return;

    try {
      await cloudinary.uploader.destroy(
        publicId,
        {
          resource_type: "image",
        }
      );
    } catch (error) {
      console.error(
        "Cloudinary Course Image Delete Error:",
        error
      );
    }
  };

// Create Job Course
export const createJobCourse = async (
  req,
  res
) => {
  try {
    // Validation
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed.",
        errors: errors.array(),
      });
    }

    // Check duplicate course title
    const existingCourse =
      await JobCourseModel.findOne({
        courseTitle: req.body.courseTitle,
      });

    if (existingCourse) {
      return res.status(409).json({
        success: false,
        message: "Course already exists.",
      });
    }

    // ============================================
    // Upload Syllabus PDF
    // ============================================

    let syllabusPdf = {
      public_id: "",
      url: "",
    };

    const syllabusFile =
      req.files?.syllabusPdf?.[0];

    if (syllabusFile) {

      // check pdf size
      if (syllabusFile.size > MAX_PDF_SIZE) {
        return res.status(400).json({
          success: false,
          message: "Syllabus PDF must be 4 MB or smaller.",
        });
      }

      const slug = slugify(
        req.body.courseTitle,
        {
          lower: true,
          strict: true,
        }
      );

      const publicId = `${slug}-syllabus-${Date.now()}`;

      const uploadedFile =
        await uploadPdfToCloudinary(
          syllabusFile.buffer,
          publicId
        );

      syllabusPdf = {
        public_id:
          uploadedFile.public_id,
        url: uploadedFile.secure_url,
      };
    }

    // ============================================
    // Upload Course Image
    // ============================================

    let image = {
      public_id: "",
      url: "",
    };

    const courseImageFile =
      req.files?.courseImage?.[0];

    if (courseImageFile) {

      // course image
      if (courseImageFile.size > MAX_IMAGE_SIZE) {
        return res.status(400).json({
          success: false,
          message: "Course image must be 1 MB or smaller.",
        });
      }

      const slug = slugify(
        req.body.courseTitle,
        {
          lower: true,
          strict: true,
        }
      );

      const publicId = `${slug}-image-${Date.now()}`;

      const uploadedImage =
        await uploadCourseImageToCloudinary(
          courseImageFile.buffer,
          publicId
        );

      image = {
        public_id:
          uploadedImage.public_id,
        url: uploadedImage.secure_url,
      };
    }

    // ============================================
    // Create Course
    // ============================================

    const course =
      await JobCourseModel.create({
        ...req.body,
        syllabusPdf,
        image,
      });

    return res.status(201).json({
      success: true,
      message:
        "Course created successfully.",
      data: course,
    });
  } catch (error) {
    console.error(
      "Create Job Course Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

// Get All Job Courses
export const getAllJobCourses = async (
  req,
  res
) => {
  try {
    const courses =
      await JobCourseModel.find().sort({
        displayOrder: 1,
      });

    return res.status(200).json({
      success: true,
      count: courses.length,
      data: courses,
    });
  } catch (error) {
    console.error(
      "Get All Job Courses Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

// Get Single Job Course
export const getJobCourseById = async (
  req,
  res
) => {
  try {
    const course =
      await JobCourseModel.findById(
        req.params.id
      );

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: course,
    });
  } catch (error) {
    console.error(
      "Get Job Course Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

// Update Job Course
export const updateJobCourse = async (
  req,
  res
) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed.",
        errors: errors.array(),
      });
    }

    const existingCourse =
      await JobCourseModel.findById(
        req.params.id
      );

    if (!existingCourse) {
      return res.status(404).json({
        success: false,
        message: "Course not found.",
      });
    }

    // Keep old PDF public ID
    const oldPdfPublicId =
      existingCourse.syllabusPdf?.public_id;

    // Keep old image public ID
    const oldImagePublicId =
      existingCourse.image?.public_id;

    // Update normal course fields
    Object.assign(
      existingCourse,
      req.body
    );

    // ============================================
    // Replace Syllabus PDF
    // ============================================

    const syllabusFile =
      req.files?.syllabusPdf?.[0];

    if (syllabusFile) {

      // check pdf size
      if (syllabusFile.size > MAX_PDF_SIZE) {
        return res.status(400).json({
          success: false,
          message: "Syllabus PDF must be 4 MB or smaller.",
        });
      }

      const slug = slugify(
        existingCourse.courseTitle,
        {
          lower: true,
          strict: true,
        }
      );

      const publicId = `${slug}-syllabus-${Date.now()}`;

      const uploadedFile =
        await uploadPdfToCloudinary(
          syllabusFile.buffer,
          publicId
        );

      existingCourse.syllabusPdf = {
        public_id:
          uploadedFile.public_id,
        url: uploadedFile.secure_url,
      };

      // Delete old PDF
      if (oldPdfPublicId) {
        await deletePdfFromCloudinary(
          oldPdfPublicId
        );
      }
    }

    // ============================================
    // Replace Course Image
    // ============================================

    const courseImageFile =
      req.files?.courseImage?.[0];

    if (courseImageFile) {
      
      // check image size
      if (courseImageFile.size > MAX_IMAGE_SIZE) {
        return res.status(400).json({
          success: false,
          message: "Course image must be 1 MB or smaller.",
        });
      }

      const slug = slugify(
        existingCourse.courseTitle,
        {
          lower: true,
          strict: true,
        }
      );

      const publicId = `${slug}-image-${Date.now()}`;

      const uploadedImage =
        await uploadCourseImageToCloudinary(
          courseImageFile.buffer,
          publicId
        );

      existingCourse.image = {
        public_id:
          uploadedImage.public_id,
        url: uploadedImage.secure_url,
      };

      // Delete old image
      if (oldImagePublicId) {
        await deleteCourseImageFromCloudinary(
          oldImagePublicId
        );
      }
    }

    // pre("save") runs here
    // and automatically regenerates slug
    const course =
      await existingCourse.save();

    return res.status(200).json({
      success: true,
      message:
        "Course updated successfully.",
      data: course,
    });
  } catch (error) {
    console.error(
      "Update Job Course Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

// Delete Job Course
export const deleteJobCourse = async (
  req,
  res
) => {
  try {
    const course =
      await JobCourseModel.findById(
        req.params.id
      );

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found.",
      });
    }

    // Delete syllabus PDF
    if (course.syllabusPdf?.public_id) {
      await deletePdfFromCloudinary(
        course.syllabusPdf.public_id
      );
    }

    // Delete course image
    if (course.image?.public_id) {
      await deleteCourseImageFromCloudinary(
        course.image.public_id
      );
    }

    // Delete course from MongoDB
    await JobCourseModel.findByIdAndDelete(
      req.params.id
    );

    return res.status(200).json({
      success: true,
      message:
        "Course deleted successfully.",
    });
  } catch (error) {
    console.error(
      "Delete Job Course Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

// Get All Active Job Courses - Public
export const getPublicJobCourses = async (
  req,
  res
) => {
  try {
    const courses =
      await JobCourseModel.find({
        status: "Active",
      })
        .sort({ displayOrder: 1 })
        .select("-__v");

    return res.status(200).json({
      success: true,
      count: courses.length,
      data: courses,
    });
  } catch (error) {
    console.error(
      "Get Public Job Courses Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

// Get Single Active Job Course By Slug - Public
export const getPublicJobCourseBySlug = async (req, res) => {
    try {
      const course =
        await JobCourseModel.findOne({
          slug: req.params.slug,
          status: "Active",
        }).select("-__v");

      if (!course) {
        return res.status(404).json({
          success: false,
          message: "Course not found.",
        });
      }

      return res.status(200).json({
        success: true,
        data: course,
      });
    } catch (error) {
      console.error(
        "Get Public Job Course By Slug Error:",
        error
      );

      return res.status(500).json({
        success: false,
        message: "Internal Server Error.",
      });
    }
  };