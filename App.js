import React from 'react';
import Providers from './scr/navigation/index'

import { StyleSheet, View, StatusBar } from 'react-native';
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from '@react-navigation/stack';
// import Login from './scr/pages/Login'
// import NewUser from './scr/pages/NewUser';
// import ForgotPassword from './scr/pages/Reset';
// import Home from './scr/pages/Home';
// import PreLoad from './scr/pages/Preload';
// const Stack = createStackNavigator()

export default function App() {
  return (
    <View style = {{flex:1}}>
    <StatusBar 
      barStyle = "light-content"
    />  
      <Providers/>   
      {/* <FoodDetail/> */}
  </View>
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="PreLoad">
//       <Stack.Screen
//         name="Pre-load"
//         component={PreLoad}
//         options={{
//           headerShown: false,
//         }}
//         />
//       <Stack.Screen
//         name="Login"
//         component={Login}
//         options={{
//           headerShown: false,
//         }}
//         />
//         <Stack.Screen
//         name="NewUser"
//         component={NewUser}
//         options={{
//           headerShown: false,
//         }}
//         />
//         <Stack.Screen
//         name="ForgotPassword"
//         component={ForgotPassword}
//         options={{
//           headerShown: true,
//         }}
//         />
//         <Stack.Screen
//         name="Home"
//         component={Home}
//         options={{
//           headerShown: true,
//         }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#e0e5e5',
//     paddingTop:80,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import React from "react";
// import {View, TouchableOpacity,Text, StyleSheet, Image, TextInput, ScrollView, SafeAreaView} from 'react-native';

// const Login = () => {
//   return(
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//       <View style={styles.divSuperior}>
//         <Image 
//           style={styles.image} 
//           source={require('./assets/LE PETIT2.png')}
//           accessibilityLabel='logo do app'
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="E-mail"
//           keyboardType='email-address'
//           returnKeyType='next'
//           onChange={({ target: { value } }) => setEmail(value)}
//           onEndEditing={()=>this.passTextInput.focus()}
//           value={email}
//         />            
//         <TextInput
//           style={styles.input}
//           secureTextEntry={true}
//           keyboardType='default'
//           returnKeyType='go'
//           placeholder="Senha"
//           type="text"
//           onChange={({ target: { value } }) => setPassword(value)}
//           value={password}
//         />

//         <TouchableOpacity
//           style={styles.buttonLogin}
//           >
//           <Text style={styles.textButtonLogin}>LOGIN</Text>
//         </TouchableOpacity>
//         <Text style={styles.textEsqueceuSenha}>
//           Esqueceu sua senha?
//         </Text>
//       </View>
      
//       <View style={styles.divInferior}>
//         <View style={styles.divOuHr}>
//           <View style={styles.divHr}></View>
//           <Text style={styles.textOu}>OU</Text>
//           <View style={styles.divHr}></View>
//         </View>
//         <View style={styles.divCadastrarSe}>
//         <Text style={styles.textNormal}>Não possui uma conta?</Text>
//         <Text style={styles.textCadastrar}>Cadastre-se</Text>
//         </View>
//       </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };
// export default Login;

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent:'center',
//     padding:20
//   },
//   divSuperior:{
//     flex:5,
//     alignItems: 'center'
//   },
//   divInferior:{
//     flex:1,
//     alignItems: 'center',
//     marginTop:20
//   },
//   image:{
//     width:150,
//     height:150,
//     margin:5,
//   },
//   input: {
//     width:'95%',
//     height:50,
//     borderBottomColor:'#D9D9D9',
//     borderBottomWidth:2,
//     fontSize:16,
//     paddingLeft:2,
//     paddingBottom:1,
//   },
//   buttonLogin:{
//     width: '40%',
//     height: 50,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#FE9293",
//     borderRadius: 10,
//     margin: 10,
//     padding:10,
//   },
//   textButtonLogin:{
//     color:"white",
//     fontWeight:'bold',
//     fontSize:16
//   },
//   textEsqueceuSenha:{
//     fontSize:14,
//     alignItems:'center',
//     marginTop:10,
//     marginBottom:10,
//     color:'#740C01'
//   },
//   divOuHr:{
//     width:'100%',
//     height:20,
//     flexDirection:'row',
//     justifyContent:'center',
//     alignItems:'center'
//   },
//   divHr:{
//     width:'30%',
//     height:1,
//     borderBottomColor:'#A6A6A6',
//     borderBottomWidth:1
//   },
//   textOu:{
//     marginHorizontal:20,
//     fontSize:18,
//     color:'#A6A6A6'
//   },
//   divCadastrarSe:{
//     flex:1,
//     flexDirection:'row',
//     justifyContent:'center',
//     alignItems:'center',
//     padding:20
//   },
//   textNormal:{
//     fontSize:18
//   },
//   textCadastrar:{
//     fontSize:18,
//     color:'#FE9293' ,
//     marginLeft:5

//   }
// })