import { createContext } from "react";
import { doctors, specialityData } from "../items";


export const AppContext = createContext()

const AppContextProvider =({children})=> {

   const value = {
        doctors,
        specialityData,
    }

    return (
        <AppContext.Provider 
            value={value}>
            {children}
        </AppContext.Provider>
    )



}

export default AppContextProvider;