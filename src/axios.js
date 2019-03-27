import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost.com:3001'
});

export default instance;