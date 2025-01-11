import React, { createContext } from 'react';
//create context
export const AuthContext = createContext(null); 


const AuthProvider = ({children}) => {
    const authInfo = {name:'ami'}


    return (
        //provider
        <AuthContext.Provider value={authInfo}> 
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;