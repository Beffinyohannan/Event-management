import axios from "./axios";


export const getUserDetail = (userId)=> axios.get(`/userDetail/${userId}`)

export const approveQuotation = (id)=> axios.put(`/accept-quotation/${id}`)

export const rejectQuotation = (id)=> axios.put(`/reject-quotation/${id}`)

export const reportUserPost =(reason,postId,userId)=>axios.post(`/report-post/${postId}`,{reason,userId})
