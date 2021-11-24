//arquivo que tem o context da parte de autenticação
//centralizaremos tudo aqui, inclusive a firebase
//Assim, sempre teremos atualizados os dados do aplicativo
import React, { createContext, useState } from "react";

export const AuthUserContext = createContext({});

//função que irá receber todos os filhos como argumento. O value passa todas as infos para os filhos desse Provider
export const AuthUserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    console.log(user)
    return(
        <AuthUserContext.Provider value={{user, setUser}}>
            {children}
            
        </AuthUserContext.Provider>
    )
}