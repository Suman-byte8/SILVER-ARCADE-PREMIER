import axios from 'axios';

export const fetchAccommodationDetails = async (bookingId, token) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/users/accommodations/${bookingId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data.success) {
      return { data: response.data.data, error: null };
    } else {
      throw new Error(response.data.message || "Failed to fetch booking details");
    }
  } catch (error) {
    return {
      data: null,
      error: error.response?.data?.message || "Failed to fetch booking details"
    };
  }
};