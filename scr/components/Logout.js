import React from 'react'
// import { AccessibilityInfo } from 'react-native';
import { TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth, signOut} from "firebase/auth";

// const ButtonExit = styled.button`
//     width: 50px;
//     height:50px;
//     alignItems: 'center';
//     justifyContent: 'center';
//     `;

// const Image = styled.image`
//     width: 45px;
//     height:45px;
//     alignItems: 'center';
//     justifyContent: 'center';
//     `;

const auth = getAuth();

const LogoutButton = () => {
    const logout = () =>{
        AsyncStorage.removeItem('user')
        .then(() => {
            signOut(auth)
            .then(() => {})
            .catch(error => {
            console.error(error);
        });
        window.location.assign('../');
        })
        .catch((e) => {
            console.log('LogoutButton, signOut em removeItem:' + e)
        })
    };
    return (
        <TouchableOpacity style={{width: 50,height:50,alignItems: 'center',justifyContent: 'center'}}onPress={logout} underlayColor='transparent'>
            <Image souce={require('../../assets/favicon.png')} style={{width: 45,height:45, alignItems: 'center',  justifyContent: 'center'}} />
        </TouchableOpacity>
        // <View>
        //     <Text></Text>
        // </View>
    )
}

export default LogoutButton;
