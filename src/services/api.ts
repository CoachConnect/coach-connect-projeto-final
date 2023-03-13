import axios from "axios"

const api = axios.create({
    baseURL: "https://coach-connect.onrender.com",
    timeout: 7000,
    
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('@token');
  const { headers } = config;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return { ...config, headers };
});

export default api


