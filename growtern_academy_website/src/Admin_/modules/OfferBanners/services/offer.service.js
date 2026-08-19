import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// ============================================
// Create Offer
// ============================================

export const createOffer = async (
  formData,
  token
) => {
  const response = await axios.post(
    `${API_URL}/api/admin/offers`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// ============================================
// Get All Offers
// ============================================

export const getAllOffers = async (
  token
) => {
  const response = await axios.get(
    `${API_URL}/api/admin/offers`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// ============================================
// Get Offer By ID
// ============================================

export const getOfferById = async (
  id,
  token
) => {
  const response = await axios.get(
    `${API_URL}/api/admin/offers/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// ============================================
// Update Offer
// ============================================

export const updateOffer = async (
  id,
  formData,
  token
) => {
  const response = await axios.put(
    `${API_URL}/api/admin/offers/${id}`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// ============================================
// Delete Offer
// ============================================

export const deleteOffer = async (
  id,
  token
) => {
  const response = await axios.delete(
    `${API_URL}/api/admin/offers/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// ============================================
// Get Public Offer
// ============================================

export const getPublicOffer = async () => {
  const response = await axios.get(
    `${API_URL}/api/offers`
  );

  return response.data;
};