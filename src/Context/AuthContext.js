import { useContext } from "react";

const { useReducer } = require("react");
const { createContext } = require("react");


const AuthtContext = createContext();

const initialState = {
    user : null,
    isAuthenticated : false,
}

function reducer(state, action){
    switch(action.type){
        case 'login': return {
            ...state,
            user: action.paylod,
            isAuthenticated: true,
        }
        case 'logout': return {
            ...state,
            user: null,
            isAuthenticated: false,
        }

        default: throw new Error('Unauthorized route...')
    }
}



    const details = {
        name: "Chris",
        password: "QWERTY"
    }

function AppointmentContext({children}){

    const [{user, isAuthenticated}, dispatch] = useReducer(reducer, initialState);

    function login(name, password){
        if(name === details.name && password === details.password){
            dispatch({type: "login", payload: details})
        }
    }

    function logout(){
        dispatch({type: "logout"})
    }


    const value = {
        user,
        isAuthenticated,
        details,
        dispatch,
        login,
        logout,
    }

    return <AppointmentContext.Provider value={value}>
        {children}
    </AppointmentContext.Provider>

    
}

function useAuth(){
    const context = useContext()
    if(context === undefined) throw new Error("Context was not used in the right component")

        return context;
}


export {AppointmentContext, useAuth}






























































// import { createContext, useContext, useReducer } from "react";


// const AuthContext = createContext()

// const initialState = {
//     user : null,
//     isAuthenticated : false,
// }


// function reducer(state, action){
//     switch(action.type){
//         case "login": 
//         return{
//             ...state,
//             user: action.payload,
//             isAuthenticated: true,
            
//         }
//         case "logout": 
//         return{
//             ...state,
//             user: null,
//             isAuthenticated: false,
//         }

//         default : throw new Error("Incorrect details")
//     }
// }

// const userDetails = {
//     password : "qwerty",
//     name : "Kris",
// }

// function AuthContextProvider({children}){
    
//     const [{user, isAuthenticated}, dispatch] = useReducer(reducer, initialState);
   
//     function login(name,password){
//         if(name === userDetails.name && password === userDetails.password){
//             dispatch({type: "login", payload: userDetails})
//         }
//     }

//     function logout(){
//         dispatch({type: "logout"})
//     }

//     const value = {
//         user,
//         isAuthenticated,
//         login,
//         logout,
//         userDetails,
//         dispatch,
//     }

//     return <AuthContext.Provider value={value}> 
//         {children}
//     </AuthContext.Provider>
// }

// function useAuth(){
//    const context = useContext();
//    if(context === undefined) throw new Error("AuthContext was used in the wrong component...")

//     return context;
// }

// export {AuthContextProvider, useAuth}