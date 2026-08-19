import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import {
  setAdmin,
  setAuthLoading,
  logout,
} from "../Redux/slices/authSlice";

import { getCurrentAdmin } from "./services/auth.service";

const AdminAuthInitializer = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    // Only run authentication check for Admin routes
    if (!location.pathname.startsWith("/admin")) {
      return;
    }

    const verifyAdmin = async () => {
      // No token means user is not authenticated
      if (!token) {
        dispatch(setAuthLoading(false));
        return;
      }

      // if token is there then check tokens validity
      try {
        dispatch(setAuthLoading(true));

        const response = await getCurrentAdmin(token);

        if (response.success) {
          dispatch(setAdmin(response.data));
        } else {
          dispatch(logout());
        }
      } catch (error) {
        console.error("Admin authentication failed:", error);

        // Token is invalid or expired
        dispatch(logout());
      }
    };

    verifyAdmin();
  }, []);

  return null;
};

export default AdminAuthInitializer;