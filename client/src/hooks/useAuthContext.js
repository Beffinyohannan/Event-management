import { AuthContextProvider } from "../Store/AuthenticartionContext";
import { useContext } from "react";

export const useAuthContext =()=>{
    const context = useContext(AuthContextProvider)
    if (!context){
        throw Error (' useAuthContext must be used inside an AuthContextPrivider')
    }

    return context
}