import React from "react";
import {Route,Navigate} from 'react-router-dom'

 const ProtectedRoute =({auth,component:Component , ...rest})=>{
    return(
        <Route 
        {...rest} 
        render={(props)=>{
            if(auth) return <Component {...props} />;
            if(!auth) 
            return(
                 <Navigate to='/admin/login'/>
            )
        }} 
        />
    )
 }
 export default ProtectedRoute