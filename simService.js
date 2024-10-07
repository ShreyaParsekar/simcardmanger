import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const activateSim = async (simNumber) => {
    return await axios.post(`${API_URL}/activate`, { sim_number: simNumber });
};

export const deactivateSim = async (simNumber) => {
    return await axios.post(`${API_URL}/deactivate`, { sim_number: simNumber });
};

export const getSimDetails = async (simNumber) => {
    return await axios.get(`${API_URL}/sim-details/${simNumber}`);
};
