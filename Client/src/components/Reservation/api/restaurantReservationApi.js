import axios from 'axios';

export const createRestaurantReservation = async (formData, token) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/users/restaurant-reservations`,
      {
        typeOfReservation: 'restaurant',
        ...formData
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }
    );

    if (response.data.success) {
      return { data: response.data.data, error: null };
    }
    throw new Error(response.data.message);
  } catch (error) {
    return {
      data: null,
      error: error.response?.data?.message || 'Failed to create reservation'
    };
  }
};