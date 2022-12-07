 
import {createContext,useEffect,useReducer} from "react"

export const AuthenticationContext = createContext()

export const authReducer = (state,action)=>{
    switch (action.type){
        case "LOGIN" :
            return {user: action.payload}
            case 'LOGOUT' :
                return {user : null}
                default : 
                return state
    }
}


export const AuthContextProvider =({children})=>{
    const [state,dispatch] = useReducer(authReducer,{
        user:null
    })
    useEffect(()=>{
        const admin = localStorage.getItem('admin-token')
        if(admin){
            dispatch({type:'LOGIN',payload:admin})
        }
    },[])


    // console.log('AuthContext state :' ,state);
    
    return(
        <AuthenticationContext.Provider value={{...state,dispatch}}>
            {children}
        </AuthenticationContext.Provider>
    )
}
