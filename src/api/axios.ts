// admin/src/api/axios.ts
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // ✅ Artık environment'tan alıyor
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token =
    localStorage.getItem("admin_token") ||
    localStorage.getItem("token") ||
    sessionStorage.getItem("admin_token") ||
    sessionStorage.getItem("token");

  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;

// ✅ Statik dosyalar için (örneğin resim URL'leri)
export const STATIC_BASE = import.meta.env.VITE_STATIC_URL;
