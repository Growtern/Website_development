import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./AdminLogin.css";
import { toast } from "react-toastify";

import { loginAdmin } from "./services/auth.service";
import { loginSuccess } from "../Redux/slices/authSlice";

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin/dashboard");
    }
  }, [isAuthenticated,navigate]);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle Login
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await loginAdmin(formData);

      if (response.success) {
        // Store authentication state in Redux
        dispatch(
          loginSuccess({
            token: response.token,
            admin: response.data,
          })
        );

        toast.success("Login Successfull.");

        // navigate("/admin/dashboard");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong."
      );

      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Admin Login</h2>

        <p className="login-subtitle">
          Login to Growtern Admin Panel
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label style={{ color: "black" }}>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label style={{ color: "black" }}>Password</label>

            <input
              type="text"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="login-btn"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;