import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

/**
 * Fetches all curated offers.
 * @param {string} token - The authentication token.
 * @returns {Promise<any>} The response data containing offers.
 */
export const getOffers = async (token) => {
  try {
    const res = await axios.get(`${API_URL}/content/home/get-curated-offers`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data.offers;
  } catch (error) {
    console.error("Error fetching offers:", error);
    throw error;
  }
};

/**
 * Adds a new curated offer.
 * @param {FormData} formData - The form data (title, description, image, etc).
 * @param {string} token - The authentication token.
 * @returns {Promise<any>} The newly created offer.
 */
export const addOffer = async (formData, token) => {
  try {
    const res = await axios.post(
      `${API_URL}/content/home/add-curated-offer`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data.offer;
  } catch (error) {
    console.error("Error adding offer:", error);
    throw error;
  }
};

/**
 * Updates a curated offer by ID.
 * @param {string} id - The ID of the offer to update.
 * @param {FormData} formData - The updated form data.
 * @param {string} token - The authentication token.
 * @returns {Promise<any>} The updated offer.
 */
export const updateOffer = async (id, formData, token) => {
  try {
    const res = await axios.put(
      `${API_URL}/content/home/update-curated-offer/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data.offer;
  } catch (error) {
    console.error("Error updating offer:", error);
    throw error;
  }
};

/**
 * Deletes a curated offer by ID.
 * @param {string} id - The ID of the offer to delete.
 * @param {string} token - The authentication token.
 * @returns {Promise<any>} The response data.
 */
export const deleteOffer = async (id, token) => {
  try {
    const res = await axios.delete(
      `${API_URL}/content/home/delete-curated-offer/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error("Error deleting offer:", error);
    throw error;
  }
};
