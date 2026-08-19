import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { createOffer } from "./services/offer.service";

const MAX_IMAGE_SIZE = 1 * 1024 * 1024; // 1 MB

const AddOffer = () => {
  const navigate = useNavigate();

  const { token } = useSelector(
    (state) => state.auth
  );

  const [images, setImages] = useState([]);

  const [loading, setLoading] =
    useState(false);

  // ============================================
  // Image Change
  // ============================================

  const handleImageChange = (e) => {
    const selectedImages = Array.from(
      e.target.files || []
    );

    if (selectedImages.length === 0) {
      return;
    }

    // Validate every image
    const invalidImage =
      selectedImages.find(
        (image) =>
          image.size > MAX_IMAGE_SIZE
      );

    if (invalidImage) {
      toast.error(
        "Each offer image must be 1 MB or smaller."
      );

      e.target.value = "";
      setImages([]);

      return;
    }

    setImages(selectedImages);
  };

  // ============================================
  // Submit
  // ============================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (images.length === 0) {
      toast.error(
        "Please select at least one offer image."
      );

      return;
    }

    if (!token) {
      toast.error(
        "Authentication token not found."
      );

      return;
    }

    const data = new FormData();

    images.forEach((image) => {
      data.append(
        "offerImages",
        image
      );
    });

    setLoading(true);

    try {
      const response =
        await createOffer(
          data,
          token
        );

      if (response.success) {
        toast.success(
          "Offer created successfully."
        );

        navigate("/admin/offers");
      }
    } catch (error) {
      console.error(
        "Create Offer Error:",
        error
      );

      toast.error(
        error.response?.data?.message ||
          "Failed to create offer."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid py-4">

      {/* Header */}
      <div className="mb-4">
        <h2 className="fw-bold mb-1">
          Add Offer
        </h2>

        <p className="text-muted mb-0">
          Upload multiple images for the
          offer carousel.
        </p>
      </div>

      {/* Form */}
      <div className="row">
        <div className="col-12 col-lg-8">

          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">

              <form onSubmit={handleSubmit}>

                {/* Offer Images */}
                <div className="mb-4">

                  <label
                    htmlFor="offerImages"
                    className="form-label fw-semibold"
                  >
                    Offer Images
                  </label>

                  <input
                    type="file"
                    id="offerImages"
                    className="form-control"
                    accept="image/*"
                    multiple
                    onChange={
                      handleImageChange
                    }
                    disabled={loading}
                  />

                  <div className="form-text">
                    You can select multiple
                    images. Each image must be
                    1 MB or smaller.
                  </div>

                </div>

                {/* Preview */}
                {images.length > 0 && (
                  <div className="mb-4">

                    <label className="form-label fw-semibold">
                      Selected Images
                    </label>

                    <div className="row g-3">

                      {images.map(
                        (image, index) => (
                          <div
                            className="col-12 col-sm-6 col-md-4"
                            key={`${image.name}-${index}`}
                          >

                            <div className="border rounded p-2 h-100">

                              <img
                                src={URL.createObjectURL(
                                  image
                                )}
                                alt={`Offer ${
                                  index + 1
                                }`}
                                className="img-fluid rounded"
                                style={{
                                  width:
                                    "100%",
                                  height:
                                    "160px",
                                  objectFit:
                                    "cover",
                                }}
                              />

                              <div className="small text-muted mt-2 text-truncate">
                                {image.name}
                              </div>

                            </div>

                          </div>
                        )
                      )}

                    </div>

                  </div>
                )}

                {/* Buttons */}
                <div className="d-flex justify-content-end gap-2 pt-3 border-top">

                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() =>
                      navigate(
                        "/admin/offers"
                      )
                    }
                    disabled={loading}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading
                      ? "Creating..."
                      : "Create Offer"}
                  </button>

                </div>

              </form>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default AddOffer;