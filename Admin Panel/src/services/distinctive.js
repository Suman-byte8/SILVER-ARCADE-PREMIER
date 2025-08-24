import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';

/**
 * Adds a new distinctive feature.
 * @param {FormData} formData - The form data containing title, description, and images.
 * @param {string} token - The authentication token.
 * @returns {Promise<any>} The response data from the server.
 */
export const addDistinctive = async (formData, token) => {
    try {
        const response = await axios.post(`${API_URL}/content/home/add-distinctive`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error adding distinctive feature:', error);
        throw error;
    }
};