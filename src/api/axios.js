import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000'
});

// Function to save JWT token to localStorage
function saveToken(token) {
    localStorage.setItem('jwtToken', token);
}

// Function to retrieve JWT token from localStorage
function getToken() {
    return localStorage.getItem('jwtToken');
}

// Axios interceptor to add JWT token to headers
axiosInstance.interceptors.request.use(
    config => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// Function to obtain JWT token
async function getJWTToken(username, password) {
    try {
        const response = await axiosInstance.post('/auth/login', {
            username: username,
            password: password
        });
        const token = response.data.token;
        saveToken(token);
        return token;
    } catch (error) {
        console.error("Error while getting JWT token:", error);
        throw error;
    }
}

// Example usage
const username = 'your_username';
const password = 'your_password';

getJWTToken(username, password)
    .then(token => {
        console.log("JWT Token:", token);
        // Now you can make authenticated requests using axiosInstance
        // For example:
        // axiosInstance.get('/some/protected/resource')
        //     .then(response => console.log(response.data))
        //     .catch(error => console.error(error));
    })
    .catch(error => {
        console.error("Error while obtaining JWT token:", error);
    });
