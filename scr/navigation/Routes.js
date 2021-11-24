import React, {useContext, useEffect} from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {NavigationContainer} from '@react-navigation/native'
import firebase from "./../config/firebase"
import {db} from './../config/firebase'

import { AuthUserContext } from '../context/AuthUserProvider'
// import AppStack from './AppStack'
import AuthStack from './AuthStack'

const auth = getAuth();

export default function Routes() {
    //importar o user do AuthUserContext (usando chaves) e obter ele
    const {user, setUser} = useContext(AuthUserContext);

    

//Para cada página do seu app que precisa de informações sobre o usuário conectado, anexe um observador ao objeto de autenticação global. Este observador é chamado sempre que o estado de login do usuário muda. Anexe o observador usando o método onAuthStateChanged. Quando um usuário faz login corretamente, é possível coletar informações sobre ele no observador.
useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (authUser) => {
        authUser ? setUser(authUser) : setUser(null);
    });
    return unsubscriber;
}, []);

    return (
        <NavigationContainer>
            {/* {user ? <AppStack /> : <AuthStack/>} */}
            <AuthStack/>
        </NavigationContainer>

    )
}
