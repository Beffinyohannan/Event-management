import {createContext,useState} from 'react'

export const  CompanyContext = createContext('')

function Company({children})
{

const [companyDetails,setCompanyDetails] = useState('')

return(
    <CompanyContext.Provider value={{companyDetails,setCompanyDetails}}>
        {children}
    </CompanyContext.Provider>
)
} 

export default Company;