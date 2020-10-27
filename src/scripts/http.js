import axios from 'axios';

export const http = axios.create({
    baseURL: 'https://api-adas.herokuapp.com/api/v1.0',
    headers: { 'x-access-token': localStorage.token }
})
