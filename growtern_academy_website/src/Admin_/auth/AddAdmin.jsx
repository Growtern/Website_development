import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { registerAdmin } from "./services/auth.service";

const AddAdmin = () => {
  const navigate = useNavigate();

  const { token } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password
    ) {
      toast.error("All fields are required.");
      return;
    }

    if (!token) {
      toast.error("Authentication token not found.");
      return;
    }

    setLoading(true);

    try {
      const response = await registerAdmin(
        {
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        },
        token
      );

      if (response.success) {
        toast.success(
          "Admin created successfully."
        );

        setFormData({
          fullName: "",
          email: "",
          password: "",
        });
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to create admin."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid py-4 px-3 px-md-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">

          {/* Page Heading */}
          <div className="mb-4">
            <div className="d-flex align-items-center gap-3 mb-2">
              <div
                className="d-flex align-items-center justify-content-center rounded-3"
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#e8f1ff",
                  color: "#0d6efd",
                }}
              >
                <i className="bi bi-person-plus-fill fs-4"></i>
              </div>

              <div>
                <h2 className="fw-bold mb-1">
                  Add Admin
                </h2>

                <p className="text-muted mb-0">
                  Create a new administrator account.
                </p>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div
            className="card border-0 shadow-sm rounded-4 overflow-hidden"
          >
            {/* Card Header */}
            <div
              className="px-4 py-3"
              style={{
                backgroundColor: "#f8f9fa",
                borderBottom: "1px solid #e9ecef",
              }}
            >
              <h5 className="fw-bold mb-1">
                Administrator Details
              </h5>

              <small className="text-muted">
                Enter the details below to create a
                new admin account.
              </small>
            </div>

            <div className="card-body p-4 p-md-5">

              {/* Info */}
              <div
                className="alert border-0 rounded-3 mb-4"
                style={{
                  backgroundColor: "#eef6ff",
                  color: "#315b85",
                }}
              >
                <div className="d-flex gap-2">
                  <i className="bi bi-info-circle-fill mt-1"></i>

                  <small>
                    The new administrator will be able
                    to access the admin panel using the
                    email and password provided below.
                  </small>
                </div>
              </div>

              <form onSubmit={handleSubmit}>

                {/* Full Name */}
                <div className="mb-4">
                  <label
                    htmlFor="fullName"
                    className="form-label fw-semibold"
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="form-control form-control-lg"
                    placeholder="Enter full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="form-label fw-semibold"
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control form-control-lg"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>

                {/* Password */}
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="form-label fw-semibold"
                  >
                    Password
                  </label>

                  <input
                    type="text"
                    id="password"
                    name="password"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    disabled={loading}
                  />

                  <div className="form-text">
                    Use a strong password for the admin
                    account.
                  </div>
                </div>

                {/* Divider */}
                <hr className="my-4" />

                {/* Buttons */}
                <div className="d-flex flex-column flex-sm-row justify-content-end gap-2">

                  <button
                    type="button"
                    className="btn btn-outline-secondary px-4 py-2"
                    onClick={() =>
                      navigate("/admin/dashboard")
                    }
                    disabled={loading}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="btn btn-primary px-4 py-2 fw-semibold"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>

                        Creating...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-person-plus-fill me-2"></i>
                        Create Admin
                      </>
                    )}
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

export default AddAdmin;