import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import {
  getOfferById,
  updateOffer,
} from "./services/offer.service";

const MAX_IMAGE_SIZE = 1 * 1024 * 1024; // 1 MB

const EditOffer = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { token } = useSelector(
    (state) => state.auth
  );

  const [existingImages, setExistingImages] =
    useState([]);

  const [images, setImages] = useState([]);

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  // ============================================
  // Fetch Offer
  // ============================================

  useEffect(() => {
    const fetchOffer = async () => {
      if (!token || !id) return;

      try {
        setLoading(true);

        const response =
          await getOfferById(id, token);

        if (response.success) {
          setExistingImages(
            response.data?.images || []
          );
        }
      } catch (error) {
        console.error(
          "Fetch Offer Error:",
          error
        );

        toast.error(
          error.response?.data?.message ||
            "Failed to load offer."
        );

        navigate("/admin/offers");
      } finally {
        setLoading(false);
      }
    };

    fetchOffer();
  }, [id, token, navigate]);

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
        "Please select the new offer images."
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

    setSaving(true);

    try {
      const response =
        await updateOffer(
          id,
          data,
          token
        );

      if (response.success) {
        toast.success(
          "Offer updated successfully."
        );

        navigate("/admin/offers");
      }
    } catch (error) {
      console.error(
        "Update Offer Error:",
        error
      );

      toast.error(
        error.response?.data?.message ||
          "Failed to update offer."
      );
    } finally {
      setSaving(false);
    }
  };

  // ============================================
  // Loading
  // ============================================

  if (loading) {
    return (
      <div className="container-fluid py-4">
        <div className="d-flex justify-content-center py-5">
          <div
            className="spinner-border"
            role="status"
          >
            <span className="visually-hidden">
              Loading...
            </span>
          </div>
        </div>
      </div>
    );
  }

  // ============================================
  // Render
  // ============================================

  return (
    <div className="container-fluid py-4">

      {/* Header */}
      <div className="mb-4">
        <h2 className="fw-bold mb-1">
          Edit Offer
        </h2>

        <p className="text-muted mb-0">
          Replace the existing offer images
          with a new image collection.
        </p>
      </div>

      <div className="row">
        <div className="col-12 col-lg-9">

          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">

              <form onSubmit={handleSubmit}>

                {/* Existing Images */}
                <div className="mb-4">

                  <label className="form-label fw-semibold">
                    Current Offer Images
                  </label>

                  {existingImages.length >
                  0 ? (

                    <div className="row g-3">

                      {existingImages.map(
                        (image, index) => (
                          <div
                            className="col-12 col-sm-6 col-md-4"
                            key={
                              image.public_id ||
                              index
                            }
                          >

                            <div className="border rounded p-2">

                              <img
                                src={image.url}
                                alt={`Current offer ${
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

                            </div>

                          </div>
                        )
                      )}

                    </div>

                  ) : (

                    <p className="text-muted">
                      No images available.
                    </p>

                  )}

                </div>

                {/* Replace Images */}
                <div className="mb-4">

                  <label
                    htmlFor="offerImages"
                    className="form-label fw-semibold"
                  >
                    Replace Offer Images
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
                    disabled={saving}
                  />

                  <div className="form-text">
                    Select the complete new image
                    collection. The existing images
                    will be replaced. Each image
                    must be 1 MB or smaller.
                  </div>

                </div>

                {/* New Images Preview */}
                {images.length > 0 && (
                  <div className="mb-4">

                    <label className="form-label fw-semibold">
                      New Image Collection
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
                                alt={`New offer ${
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
                    disabled={saving}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={saving}
                  >
                    {saving
                      ? "Updating..."
                      : "Update Offer"}
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

export default EditOffer;