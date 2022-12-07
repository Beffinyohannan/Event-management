import axios from "./axios";


export const getUser = (userId)=> axios.get(`/company/${userId}`)