import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
const authHeader = (token) => ({
  Authorization: `Bearer ${token}`,
});

// Fetch About page content
export const fetchAboutPage = async (token) => {
  const { data } = await axios.get(`${API_URL}/content/about/`, {
    headers: authHeader(token),
  });
  console.log("Fetched About page data:", data); // Log the response data
  return data;
};

