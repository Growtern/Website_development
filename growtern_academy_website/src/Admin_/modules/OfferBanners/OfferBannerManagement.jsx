import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import DeleteModal from "../../dashboard/components/DeleteModal";

import {
  getAllOffers,
  deleteOffer,
} from "./services/offer.service";

const OfferBannerManagement = () => {
  const navigate = useNavigate();

  const { token } = useSelector(
    (state) => state.auth
  );

  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [actionLoading, setActionLoading] =
    useState(null);

  const [deleteOfferId, setDeleteOfferId] =
    useState(null);

  const [showDeleteModal, setShowDeleteModal] =
    useState(false);

  // ============================================
  // Fetch Offers
  // ============================================

  const fetchOffers = async () => {
    try {
      setLoading(true);

      const response =
        await getAllOffers(token);

      if (response.success) {
        setOffers(response.data || []);
      }
    } catch (error) {
      console.error(
        "Fetch Offers Error:",
        error
      );

      toast.error(
        error.response?.data?.message ||
          "Failed to load offers."
      );
    } finally {
      setLoading(false);
    }
  };

  // ============================================
  // Initial Load
  // ============================================

  useEffect(() => {
    if (token) {
      fetchOffers();
    }
  }, [token]);

  // ============================================
  // Delete Modal
  // ============================================

  const openDeleteModal = (id) => {
    setDeleteOfferId(id);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setDeleteOfferId(null);
    setShowDeleteModal(false);
  };

  // ============================================
  // Delete Offer
  // ============================================

  const handleDelete = async () => {
    if (!deleteOfferId) return;

    try {
      setActionLoading(deleteOfferId);

      const response =
        await deleteOffer(
          deleteOfferId,
          token
        );

      if (response.success) {
        toast.success(
          response.message ||
            "Offer deleted successfully."
        );

        setOffers((prev) =>
          prev.filter(
            (offer) =>
              offer._id !== deleteOfferId
          )
        );

        closeDeleteModal();
      }
    } catch (error) {
      console.error(
        "Delete Offer Error:",
        error
      );

      toast.error(
        error.response?.data?.message ||
          "Failed to delete offer."
      );
    } finally {
      setActionLoading(null);
    }
  };

  // ============================================
  // Loading State
  // ============================================

  if (loading) {
    return (
      <div className="container-fluid py-4 px-3 px-md-4">
        <div className="d-flex justify-content-center align-items-center py-5">
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

  const offerExists = offers.length > 0;

  return (
    <div className="container-fluid py-4 px-3 px-md-4">

      {/* ============================================
          Header
      ============================================ */}

      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-4">

        <div>
          <h2 className="fw-bold mb-1">
            Offer Management
          </h2>

          <p className="text-muted mb-0">
            Manage the offer banners displayed on the marketing website. Adding offer will reflect on Offer.jsx
          </p>
        </div>

        {/* Desktop Add Button */}
        {!offerExists && (
          <button
            type="button"
            className="btn btn-primary d-none d-sm-block"
            onClick={() =>
              navigate(
                "/admin/offers/add"
              )
            }
          >
            + Add Offer
          </button>
        )}

      </div>

      {/* ============================================
          Empty State
      ============================================ */}

      {!offerExists ? (
        <div className="card border-0 shadow-sm">

          <div className="card-body text-center py-5 px-3">

            <h5 className="fw-semibold mb-2">
              No Offer Found
            </h5>

            <p className="text-muted mb-3">
              Create an offer banner for the
              marketing website.
            </p>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() =>
                navigate(
                  "/admin/offers/add"
                )
              }
            >
              + Add Offer
            </button>

          </div>

        </div>
      ) : (

        <>
          {/* ============================================
              MOBILE CARD VIEW
          ============================================ */}

          <div className="d-block d-md-none">

            {offers.map(
              (offer, index) => (

                <div
                  key={offer._id}
                  className="card border shadow-sm mb-3"
                >

                  <div className="card-body p-3">

                    {/* Top Section */}
                    <div className="d-flex align-items-start gap-3">

                      {/* Number */}
                      <div
                        className="d-flex justify-content-center align-items-center border rounded bg-light flex-shrink-0"
                        style={{
                          width: "36px",
                          height: "36px",
                        }}
                      >
                        <span className="fw-semibold text-primary">
                          {index + 1}
                        </span>
                      </div>

                      {/* Offer Images + count */}
                      <div className="flex-grow-1 min-w-0">

                        <div className="fw-semibold mb-2">
                          Offer Images
                        </div>

                        {offer.images?.length >
                        0 ? (

                          <div className="d-flex flex-wrap gap-2">

                            {offer.images
                              .slice(0, 3)
                              .map(
                                (
                                  image,
                                  imageIndex
                                ) => (
                                  <img
                                    key={
                                      image.public_id ||
                                      imageIndex
                                    }
                                    src={
                                      image.url
                                    }
                                    alt={`Offer ${
                                      imageIndex +
                                      1
                                    }`}
                                    className="rounded border"
                                    style={{
                                      width:
                                        "70px",
                                      height:
                                        "45px",
                                      objectFit:
                                        "cover",
                                    }}
                                  />
                                )
                              )}

                            {offer.images
                              .length > 3 && (
                              <span className="text-muted small align-self-center">
                                +
                                {offer.images
                                  .length -
                                  3}{" "}
                                more
                              </span>
                            )}

                          </div>

                        ) : (

                          <span className="text-muted small">
                            No images
                          </span>

                        )}

                      </div>

                    </div>

                    {/* Divider */}
                    <hr className="my-3" />

                    {/* Number of Images */}
                    <div className="d-flex justify-content-between align-items-center mb-3">

                      <span className="small text-muted">
                        Number of Images
                      </span>

                      <span className="fw-semibold">
                        {offer.images
                          ?.length || 0}
                      </span>

                    </div>

                    {/* Created At */}
                    <div className="d-flex justify-content-between align-items-center mb-3">

                      <span className="small text-muted">
                        Created At
                      </span>

                      <span className="fw-semibold">
                        {offer.createdAt
                          ? new Date(
                              offer.createdAt
                            ).toLocaleDateString(
                              "en-GB"
                            )
                          : "-"}
                      </span>

                    </div>

                    {/* Divider */}
                    <hr className="my-2" />

                    {/* Actions */}
                    <div className="d-flex gap-2">

                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary flex-fill"
                        onClick={() =>
                          navigate(
                            `/admin/offers/edit/${offer._id}`
                          )
                        }
                        disabled={
                          actionLoading ===
                          offer._id
                        }
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger flex-fill"
                        onClick={() =>
                          openDeleteModal(
                            offer._id
                          )
                        }
                        disabled={
                          actionLoading ===
                          offer._id
                        }
                      >
                        {actionLoading ===
                        offer._id
                          ? "..."
                          : "Delete"}
                      </button>

                    </div>

                  </div>

                </div>

              )
            )}

          </div>

          {/* ============================================
              DESKTOP TABLE VIEW
          ============================================ */}

          <div className="d-none d-md-block">

            <div className="card border-0 shadow-sm">

              <div className="card-body p-0">

                <div className="table-responsive">

                  <table className="table table-hover align-middle mb-0">

                    <thead className="table-light">

                      <tr>

                        <th
                          scope="col"
                          className="ps-3 ps-md-4"
                        >
                          #
                        </th>

                        <th scope="col">
                          Offer Images
                        </th>

                        <th scope="col">
                          Number of Images
                        </th>

                        <th scope="col">
                          Created At
                        </th>

                        <th
                          scope="col"
                          className="text-end pe-3 pe-md-4"
                        >
                          Actions
                        </th>

                      </tr>

                    </thead>

                    <tbody>

                      {offers.map(
                        (
                          offer,
                          index
                        ) => (

                          <tr
                            key={
                              offer._id
                            }
                          >

                            {/* Number */}
                            <td className="ps-3 ps-md-4">
                              {index + 1}
                            </td>

                            {/* Images */}
                            <td>

                              {offer.images?.length >
                              0 ? (

                                <div className="d-flex align-items-center gap-2">

                                  {offer.images
                                    .slice(
                                      0,
                                      3
                                    )
                                    .map(
                                      (
                                        image,
                                        imageIndex
                                      ) => (
                                        <img
                                          key={
                                            image.public_id ||
                                            imageIndex
                                          }
                                          src={
                                            image.url
                                          }
                                          alt={`Offer ${
                                            imageIndex +
                                            1
                                          }`}
                                          className="rounded"
                                          style={{
                                            width:
                                              "100px",
                                            height:
                                              "60px",
                                            objectFit:
                                              "cover",
                                          }}
                                        />
                                      )
                                    )}

                                  {offer.images
                                    .length >
                                    3 && (
                                    <span className="text-muted small">
                                      +
                                      {offer.images
                                        .length -
                                        3}{" "}
                                      more
                                    </span>
                                  )}

                                </div>

                              ) : (

                                <span className="text-muted">
                                  No images
                                </span>

                              )}

                            </td>

                            {/* Number of Images */}
                            <td>

                              <span className="badge text-bg-primary">
                                {offer.images
                                  ?.length ||
                                  0}
                              </span>

                            </td>

                            {/* Created At */}
                            <td className="text-nowrap">

                              {offer.createdAt
                                ? new Date(
                                    offer.createdAt
                                  ).toLocaleDateString(
                                    "en-GB"
                                  )
                                : "-"}

                            </td>

                            {/* Actions */}
                            <td className="pe-3 pe-md-4">

                              <div className="d-flex justify-content-end gap-2">

                                {/* Edit */}
                                <button
                                  type="button"
                                  className="btn btn-sm btn-outline-primary"
                                  onClick={() =>
                                    navigate(
                                      `/admin/offers/edit/${offer._id}`
                                    )
                                  }
                                  disabled={
                                    actionLoading ===
                                    offer._id
                                  }
                                >
                                  Edit
                                </button>

                                {/* Delete */}
                                <button
                                  type="button"
                                  className="btn btn-sm btn-outline-danger"
                                  onClick={() =>
                                    openDeleteModal(
                                      offer._id
                                    )
                                  }
                                  disabled={
                                    actionLoading ===
                                    offer._id
                                  }
                                >
                                  {actionLoading ===
                                  offer._id
                                    ? "..."
                                    : "Delete"}
                                </button>

                              </div>

                            </td>

                          </tr>

                        )
                      )}

                    </tbody>

                  </table>

                </div>

              </div>

            </div>

          </div>
        </>
      )}

      {/* ============================================
          Delete Modal
      ============================================ */}

      <DeleteModal
        show={showDeleteModal}
        onClose={closeDeleteModal}
        onConfirm={handleDelete}
        title="Delete Offer"
        message="Are you sure you want to delete this offer?"
      />

    </div>
  );
};

export default OfferBannerManagement;