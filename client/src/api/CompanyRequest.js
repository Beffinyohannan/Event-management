import axios from "./axios";


export const getUser = (userId)=> axios.get(`/company/${userId}`)

export const approveEnq = (id)=> axios.put(`/company/accept-form/${id}`)

export const rejectEnq = (id)=> axios.put(`/company/reject-form/${id}`)