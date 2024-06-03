import axios from 'axios';

const apiCall = axios.create({
    baseURL: 'https://hufs-mutsa-12th.store',
    headers: {
        'Content-Type': 'application/json',
    }
});

export default apiCall;
