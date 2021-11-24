import React, {useEffect} from 'react'
import { View, Text, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import { getAuth, setPersistence, signInWithEmailAndPassword, emailVerified, browserSessionPersistence } from "firebase/auth";

const auth = getAuth();


const PreLoad = ({navigation}) => {
   
    const getUserCache = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('user');
          console.log('getUserCache');
          console.log(jsonValue);
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
            console.log('PreLoad: erro em getUserCache:' + e);
        }
      };
    
    const loginUser = async (userCredential) => {
        const user = await getUserCache();
        console.log('tudo certo');
        console.log(user)
        if(user){
            //código copiado de login(serve para autenticar o usuário) - futuro: refatoração da função
            setPersistence(auth, browserSessionPersistence)
            // signInWithEmailAndPassword( auth, user.email, user.password)
            .then(() => {
                navigation.dispatch(
                    CommonActions.reset({
                        index:0,
                        routes:[{name: 'Home'}],
                    }),
                );
            })
            .catch((error) => {
            console.log('PreLoad: erro em auth:' + error);
            });
        }else {
            navigation.dispatch(
                CommonActions.reset({
                    index:0,
                    routes:[{name: 'Login'}],
                }),
            );
          }  
    };

    useEffect(() => {
        loginUser();
    }, []);


    return (
        <View style={{flex:1, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
                <Image 
                style={{width:150, height:150, alignSelf:'center'}} 
                source={require('./../../../assets/LE PETIT2.png')}
                accessibilityLabel='logo do app'
                />
        </View>
    )
}

export default PreLoad;
