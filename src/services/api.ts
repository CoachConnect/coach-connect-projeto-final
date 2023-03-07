import axios from "axios"

const api = axios.create({
    baseURL: "",
    timeout: 7000,
    
})
export default api


