import axios from "../api/axios";
import React from 'react'
import {useNavigate} from 'react-router-dom'

const jwt = window.localStorage.getItem('admin-token')
// console.log(jwt,'eeeeeeeeeeeeeeeeeee');

async function Auth() {

    
    
    
    // const navigate =  useNavigate()
    
    const res = await  axios.post('/admin/verify',jwt,{
        headers:{
            'content-type': 'application/json',
            "Authorization" :jwt
        }
    })
    console.log("auth res",res);
    // if (res.data.verified) {
        return res   
        
    // }else{
    //    navigate('/admin/login')
    // window.location.href ='/admin/login'
    // }
}

export default Auth