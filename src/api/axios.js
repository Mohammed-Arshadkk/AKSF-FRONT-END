import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000'
});

// Function to retrieve JWT token from localStorage
function getToken() {
    return localStorage.getItem('jwt');
}

// Axios interceptor to add JWT token to headers
axiosInstance.interceptors.request.use(
    config => {
        const token = getToken();
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        
        console.log(config);
        console.log("front:", token);
        return config;
    },
    error => {
        console.error('Interceptor error:', error);
        return Promise.reject(error);
    }
);

export default axiosInstance;
