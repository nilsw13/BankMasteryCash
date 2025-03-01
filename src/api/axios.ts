import axios from 'axios'

const apiUrl = "http://localhost:8080";
console.log("api url utilisé" + apiUrl);

const api = axios.create({
    baseURL: apiUrl || 'http://localhost:8080',
    headers: {
        'X-Dashboard-Token' : 'dashboard_secret',
        'Content-Type' : 'application/json',
       
    },
})

export default api;
