import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// Login 
export const loginAdmin = async (loginData) => {
  const response = await axios.post(
    `${API_URL}/api/admin/auth/login`,
    loginData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};


// Logout 
export const logoutAdmin = async (token) => {
  const response = await axios.post(
    `${API_URL}/api/admin/auth/logout`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// Register New Admin
export const registerAdmin = async (adminData, token) => {
  const response = await axios.post(
    `${API_URL}/api/admin/auth/register`,
    adminData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// Get currently logged-in admin
export const getCurrentAdmin = async (token) => {
  console.log("Hit")
  const response = await axios.get(
    `${API_URL}/api/admin/auth/me`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};