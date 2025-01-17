import axios from "axios";
import { getAccessToken, getRefreshToken, setAccessToken, removeAccessToken, removeRefreshToken } from "./cookie";


const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

const refreshAccessToken = async () => {
  try {
    const response = await apiClient.get("/auth/refresh-token", {
      headers: {
        Authorization: `Bearer ${getRefreshToken()}`,
      },
    });
    const { accessToken } = response.data.data;
    setAccessToken(accessToken);
    return accessToken;
  } catch (error) {
    removeAccessToken();
    removeRefreshToken();
    window.location.href = '/signin';
    throw error;
  }
};

apiClient.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    // Handle 401 Unauthorized errors
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        const accessToken = await refreshAccessToken();
        originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        // If refresh token fails, remove all tokens and redirect to signin
        removeRefreshToken(); // This will remove the entire session cookie
        window.location.href = '/signin';
        return Promise.reject(refreshError);
      }
    }
    
    return Promise.reject(error);
  }
);

export default apiClient;
