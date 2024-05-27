import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
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
