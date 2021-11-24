import React, {useState, useEffect} from 'react'
import { 
    View, 
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform
 } from 'react-native'

import firebase from "./../../config/firebase"
import styles from "../Login/styles"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { getAuth, onAuthStateChanged, sendPasswordResetEmail} from "firebase/auth";

const auth = getAuth();


export default function ForgotPassword({ navigation }){
    const [email, setEmail] = useState("");
    
    const resetPassword = () => {
        if(email!== ""){
        sendPasswordResetEmail(auth, email)
        .then(() => {
            alert('Atenção!\nEnviamos um e-mail de recuperação de senha para o seguinte endereço: ' + email);
            console.log('Password reset email send successfully')
            window.location.assign('../Login');
    })
        .catch((error) => {
            console.error(error);
            switch(error.code){
                case 'auth/user-not-found':
                    alert('Erro:\nUsuário não cadastrado.');
                    break;
                case 'auth/invalid-email':
                    alert('Erro:\nE-mail inválido');
                    break;
                case 'auth/user-disabled':
                    alert('Erro:\nUsuário desabilitado.');
                    break;
              }
        });
    } else {
        alert('Por favor, digite seu e-mail para recuperar a senha.')

    }
}

    //verificar se está realmente logado
    useEffect(()=>{

    }, []);

    return(
        <KeyboardAvoidingView
        //behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
        >
            <Text style={styles.title}>Redefinir a senha</Text>
            <View style={styles.formView}>
                <TextInput
                style={styles.input}
                placeholder="E-mail"
                keyboardType='email-address'
                type="email"
                onChange={({ target: { value } }) => setEmail(value)}
                value={email}
                onEndEditing={()=>this.passTextInput.focus()}
                />            
            </View>
            { email === ""
            ?
            <TouchableOpacity
            disabled={true}
            // style={styles.buttonInactive}
            >
                <Text style={styles.textButtonLogin}>Confirmar</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity
            style={styles.buttonLogin}
            onPress={resetPassword}
            >
                <Text style={styles.textButtonLogin}>Confirmar</Text>
            </TouchableOpacity>
            }
        
            <View style={{height:100}}/>

        </KeyboardAvoidingView>
    );
}