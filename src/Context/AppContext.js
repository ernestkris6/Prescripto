import { createContext } from "react";
import { doctors } from "../items";


export const AppContext = createContext()

function AppContextProvider({children}) {

   const value = {
        doctors
    }

    return (
        <AppContext.Provider 
        value={value}>
            {children}
        </AppContext.Provider>
    )



}

export default AppContextProvider;