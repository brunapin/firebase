import React, {useEffect} from 'react';
import { 
    View, 
    Text,
 } from 'react-native'
import { getAuth, signOut} from "firebase/auth";
import LogoutButton from '../../components/Logout';
// import styles from "./style"
// import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {

    // const signOutFirebase = () => {
    //     signOut(auth, email, password)
    //         .then(() => {
    //         window.location.assign('../');
    //     })
    //         .catch(error => {
    //         console.error(error);
    //     })
    //     }
    useEffect(() => {
        navigation.setOptions({
            headerleft:false,
            title:'Usuários',
            headerRight:() => <LogoutButton />

        });
    }, []);
   
    return(
        <View>
                <Text>Home olá</Text>
        </View>
    );
};
export default Home;