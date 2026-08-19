import mongoose from "mongoose";

const offerSchema = new mongoose.Schema(
  {
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },

        url: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const OfferModel = mongoose.model(
  "Offer",
  offerSchema
);

export default OfferModel;