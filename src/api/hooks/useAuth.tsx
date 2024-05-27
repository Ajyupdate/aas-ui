import axios from "axios";

const apiUrl = "http://localhost:3001/";
const BASE_URL = apiUrl;
export const useAuth = () => {
  const token = "";
  const client = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return { client };
};
