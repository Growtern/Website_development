import OfferModel from "../models/Offer.model.js";
import cloudinary from "../config/cloudinary.js";

const MAX_IMAGE_SIZE = 1 * 1024 * 1024; // 1 MB

// ============================================
// Upload Offer Image to Cloudinary
// ============================================

const uploadOfferImageToCloudinary = (
  buffer,
  publicId
) => {
  return new Promise((resolve, reject) => {
    const uploadStream =
      cloudinary.uploader.upload_stream(
        {
          folder:
            "growtern/offers/images",
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

// ============================================
// Delete Offer Image from Cloudinary
// ============================================

const deleteOfferImageFromCloudinary =
  async (publicId) => {
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
        "Cloudinary Offer Image Delete Error:",
        error
      );
    }
  };

// ============================================
// Create Offer
// ============================================

export const createOffer = async (
  req,
  res
) => {
  try {
    // ============================================
    // Only ONE Offer document is allowed
    // ============================================

    const existingOffer =
      await OfferModel.findOne();

    if (existingOffer) {
      return res.status(409).json({
        success: false,
        message:
          "An offer already exists. Please edit the existing offer.",
      });
    }

    // ============================================
    // Get uploaded images
    // ============================================

    const files = req.files || [];

    if (files.length === 0) {
      return res.status(400).json({
        success: false,
        message:
          "At least one offer image is required.",
      });
    }

    // ============================================
    // Validate image sizes
    // ============================================

    for (const file of files) {
      if (file.size > MAX_IMAGE_SIZE) {
        return res.status(400).json({
          success: false,
          message:
            "Each offer image must be 1 MB or smaller.",
        });
      }
    }

    // ============================================
    // Upload all images
    // ============================================

    const uploadedImages = [];

    for (const file of files) {
      const publicId =
        `offer-${Date.now()}-${Math.random()
          .toString(36)
          .substring(2, 8)}`;

      const uploadedImage =
        await uploadOfferImageToCloudinary(
          file.buffer,
          publicId
        );

      uploadedImages.push({
        public_id:
          uploadedImage.public_id,
        url:
          uploadedImage.secure_url,
      });
    }

    // ============================================
    // Create Offer
    // ============================================

    const offer =
      await OfferModel.create({
        images: uploadedImages,
      });

    return res.status(201).json({
      success: true,
      message:
        "Offer created successfully.",
      data: offer,
    });
  } catch (error) {
    console.error(
      "Create Offer Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Internal Server Error.",
    });
  }
};

// ============================================
// Get All Offers
// ============================================

export const getAllOffers = async (
  req,
  res
) => {
  try {
    const offers =
      await OfferModel.find().sort({
        createdAt: -1,
      });

    return res.status(200).json({
      success: true,
      count: offers.length,
      data: offers,
    });
  } catch (error) {
    console.error(
      "Get All Offers Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Internal Server Error.",
    });
  }
};

// ============================================
// Get Offer By ID
// ============================================

export const getOfferById = async (
  req,
  res
) => {
  try {
    const offer =
      await OfferModel.findById(
        req.params.id
      );

    if (!offer) {
      return res.status(404).json({
        success: false,
        message:
          "Offer not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: offer,
    });
  } catch (error) {
    console.error(
      "Get Offer By ID Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Internal Server Error.",
    });
  }
};

// ============================================
// Update Offer
// Replace ENTIRE image collection
// ============================================

export const updateOffer = async (
  req,
  res
) => {
  try {
    const offer =
      await OfferModel.findById(
        req.params.id
      );

    if (!offer) {
      return res.status(404).json({
        success: false,
        message:
          "Offer not found.",
      });
    }

    // ============================================
    // New image collection is required
    // ============================================

    const files = req.files || [];

    if (files.length === 0) {
      return res.status(400).json({
        success: false,
        message:
          "At least one offer image is required.",
      });
    }

    // ============================================
    // Validate each image size
    // ============================================

    for (const file of files) {
      if (file.size > MAX_IMAGE_SIZE) {
        return res.status(400).json({
          success: false,
          message:
            "Each offer image must be 1 MB or smaller.",
        });
      }
    }

    // ============================================
    // Keep old images
    // ============================================

    const oldImages =
      offer.images || [];

    // ============================================
    // Upload new image collection
    // ============================================

    const newImages = [];

    for (const file of files) {
      const publicId =
        `offer-${Date.now()}-${Math.random()
          .toString(36)
          .substring(2, 8)}`;

      const uploadedImage =
        await uploadOfferImageToCloudinary(
          file.buffer,
          publicId
        );

      newImages.push({
        public_id:
          uploadedImage.public_id,
        url:
          uploadedImage.secure_url,
      });
    }

    // ============================================
    // Replace image collection
    // ============================================

    offer.images = newImages;

    await offer.save();

    // ============================================
    // Delete old Cloudinary images
    // AFTER successful MongoDB update
    // ============================================

    for (const image of oldImages) {
      if (image.public_id) {
        await deleteOfferImageFromCloudinary(
          image.public_id
        );
      }
    }

    return res.status(200).json({
      success: true,
      message:
        "Offer updated successfully.",
      data: offer,
    });
  } catch (error) {
    console.error(
      "Update Offer Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Internal Server Error.",
    });
  }
};

// ============================================
// Delete Offer
// ============================================

export const deleteOffer = async (
  req,
  res
) => {
  try {
    const offer =
      await OfferModel.findById(
        req.params.id
      );

    if (!offer) {
      return res.status(404).json({
        success: false,
        message:
          "Offer not found.",
      });
    }

    // ============================================
    // Delete ALL images from Cloudinary
    // ============================================

    for (const image of offer.images ||
      []) {
      if (image.public_id) {
        await deleteOfferImageFromCloudinary(
          image.public_id
        );
      }
    }

    // ============================================
    // Delete MongoDB document
    // ============================================

    await OfferModel.findByIdAndDelete(
      req.params.id
    );

    return res.status(200).json({
      success: true,
      message:
        "Offer deleted successfully.",
    });
  } catch (error) {
    console.error(
      "Delete Offer Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Internal Server Error.",
    });
  }
};

// ============================================
// Get Offer - Public
// ============================================

export const getPublicOffer = async (
  req,
  res
) => {
  try {
    const offer =
      await OfferModel.findOne().select(
        "-__v"
      );

    return res.status(200).json({
      success: true,
      data: offer || null,
    });
  } catch (error) {
    console.error(
      "Get Public Offer Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Internal Server Error.",
    });
  }
};