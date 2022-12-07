import axios from "./axios";


export const getUserDetail = (userId)=> axios.get(`/userDetail/${userId}`)
