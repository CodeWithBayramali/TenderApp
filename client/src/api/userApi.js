import axios from "axios";

const userApi = axios.create({ baseURL:"http://localhost:5000/user" })


export const signIn = async (userData) => await userApi.post("/login",userData)

export const signUp = async (userData) => await userApi.post("/register",userData)