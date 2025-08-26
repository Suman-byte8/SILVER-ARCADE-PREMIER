import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
const authHeader = (token) => ({
  Authorization: `Bearer ${token}`,
});
// Fetch curated offers (public endpoint - no auth required)
export const fetchCuratedOffers = async (token) => {
  const { data } = await axios.get(`${API_URL}/content/home/get-curated-offers`,{
    headers: authHeader(token),
  });
  console.log("Fetched offers data:", data); // Log the response data
  return data;
};
