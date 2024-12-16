import { createContext, useContext, useReducer } from "react";


const AuthContext = createContext()

const initialState = {
    user : null,
    isAuthenticated : false,
}


function reducer(state, action){
    switch(action.type){
        case "login": {
            
        }
        case "logout": {

        }
    }
}

function authProvider({children}){
    
    const [state, dispatch] = useReducer(reducer, initialState);
    const userDetails = {
        password : "qwerty",
        name : "Kris",
    }

    const value = {
        login,
        logout,
        userDetails,
        dispatch
    }

    return <AuthContext.Provider>
        {children}
    </AuthContext.Provider>
}

function useAuth(){
   const context = useContext();
   if(context === undefined){
    return "Context was used in the wrong component"
   }
}

export {authProvider, useAuth}