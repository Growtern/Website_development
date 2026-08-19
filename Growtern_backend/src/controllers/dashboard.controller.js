import JobCourseModel from "../models/JobCourse.model.js";
import OfferModel from "../models/Offer.model.js";

export const getDashboardSummary = async (
  req,
  res
) => {
  try {
    const [
      totalJobGuaranteedCourses,
      totalOffers,
    ] = await Promise.all([
      JobCourseModel.countDocuments(),
      OfferModel.countDocuments(),
    ]);

    return res.status(200).json({
      success: true,
      data: {
        totalJobGuaranteedCourses,
        totalOffers,
      },
    });
  } catch (error) {
    console.error(
      "Get Dashboard Summary Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};