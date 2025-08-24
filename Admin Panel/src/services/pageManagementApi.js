import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';

/**
 * Adds a new hero banner.
 * @param {FormData} formData - The form data containing headline, subHeadline, and image.
 * @param {string} token - The authentication token.
 * @returns {Promise<any>} The response data from the server.
 */
export const addHeroBanner = async (formData, token) => {
    // console.log("Token for adding banner:", token); // Debugging line
    try {
        const response = await axios.post(`${API_URL}/content/home/add-hero-banner`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error adding hero banner:', error);
        throw error;
    }
};

/**
 * Fetches existing banners.
 * @param {string} token - The authentication token.
 * @returns {Promise<any>} The response data from the server.
 */
export const fetchBanners = async (token) => {
    // console.log("Token for fetching banners:", token); // Debugging line
    try {
        const response = await axios.get(`${API_URL}/content/home/hero-banner`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching banners:', error);
        throw error;
    }
};

/**
 * Deletes a banner by ID.
 * @param {string} id - The ID of the banner to delete.
 * @param {string} token - The authentication token.
 * @returns {Promise<any>} The response data from the server.
 */
export const deleteBanner = async (id, token) => {
    // console.log("Token for deleting banner:", token); // Debugging line
    try {
        const response = await axios.delete(`${API_URL}/content/home/banner/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error deleting banner:', error);
        throw error;
    }
};
