import {createContext, useContext, useEffect, useState } from 'react'


const AuthContext = createContext(null)

export const AuthProvider = ({children})=>{

    const [user,setUser]=useState(null)
    // useEffect (()=>{
    //     const admin = localStorage.getItem('admin-token')
    //     if(admin){
    //        login(admin)
    //     }
    //     console.log(admin,'admin');
    // },[])

    const login=(user)=>{
        setUser(user)
    }
    console.log(user,'vvvvvvvvvvvvvv');

    const logout = ()=>{
        setUser(null)
    }


    return (
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth =()=>{
    return useContext(AuthContext)
}
