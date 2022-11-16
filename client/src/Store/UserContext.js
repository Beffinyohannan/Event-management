import {createContext,useState} from 'react'

export const  UserContext = createContext('')

function User({children})
{

const [userDetails,setUserDetails] = useState('')

return(
    <UserContext.Provider value={{userDetails,setUserDetails}}>
        {children}
    </UserContext.Provider>
)
} 

export default User;