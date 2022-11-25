import React, { useEffect } from 'react'
import { useAuth } from '../../Store/AuthContext'
import {Navigate} from 'react-router-dom'

export const RequireAuth = ({children}) => {
    const auth = useAuth()
    // const navigate = useNavigate()
   
    console.log(auth,'mmmmmmmmmmmmmmmmmmmmmmmm');

    if(!auth.user){
        return <Navigate to='/admin/login'/>
    }

  return  children
}
