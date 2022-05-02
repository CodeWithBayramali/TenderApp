import axios from 'axios';

const webApi = axios.create({ baseURL:"http://localhost:5000/api/tender" });


export const getTenders = async () => await webApi.get();

