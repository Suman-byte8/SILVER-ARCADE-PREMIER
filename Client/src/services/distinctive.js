import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

const authHeader = (token) => ({
  Authorization: `Bearer ${token}`,
});

// READ
export const fetchDistinctives = async (token) => {
  const { data } = await axios.get(`${API_URL}/content/home/distinctives`, {
    headers: authHeader(token),
  });
  return data;
};
