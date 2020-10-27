import axios from 'axios';

export const http = axios.create({
    baseURL: 'http://192.168.0.3:3000/api/v1.0',
    headers: { 'x-access-token': localStorage.token }
})
