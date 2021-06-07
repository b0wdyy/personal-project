import axios from 'axios';

export const loginUser = async (data) => axios.post('/api/auth/login', data);
