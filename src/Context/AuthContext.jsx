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