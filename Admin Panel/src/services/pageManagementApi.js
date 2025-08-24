import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';

/**
 * Adds a new hero banner.
 * @param {FormData} formData - The form data containing headline, subHeadline, and image.
 * @param {string} token - The authentication token.
 * @returns {Promise<any>} The response data from the server.
 */
export const addHeroBanner = async (formData, token) => {
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
 * Saves distinctive section data.
 * @param {object} data - The distinctive section data (title, description, file).
 * @param {string} token - The authentication token.
 * @returns {Promise<any>} The response data from the server.
 */
export const saveDistinctiveSection = async (data, token) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    if (data.file) {
        formData.append('image', data.file); // Assuming 'image' is the field name for the file
    }

    try {
        const response = await axios.post(`${API_URL}/content/distinctive-section/save`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error saving distinctive section:', error);
        throw error;
    }
};
