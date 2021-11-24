import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
    flex:1,
    justifyContent:'center',
    padding:20,
    backgroundColor:'white',
    },
    divSuperior:{
    flex:5,
    alignItems: 'center',
    marginTop:20
    },
    divInferior:{
    flex:1,
    alignItems: 'center',
    marginTop:20
    },
    image:{
    width:150,
    height:150,
    marginVertical:10,
    },
    input: {
    width:'90%',
    height:50,
    borderBottomColor:'#D9D9D9',
    borderBottomWidth:2,
    fontSize:16,
    paddingLeft:2,
    paddingBottom:1,
    },
    buttonLogin:{
    width: '40%',
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FE9293",
    borderRadius: 10,
    marginTop: 20,
    padding:10,
    },
    textButtonLogin:{
    color:"white",
    fontWeight:'bold',
    fontSize:16
    },
    textEsqueceuSenha:{
    fontSize:14,
    alignItems:'center',
    marginTop:10,
    marginBottom:10,
    color:'black',
    textDecorationLine:'underline',
    },
    divOuHr:{
    width:'100%',
    height:20,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
    },
    divHr:{
    width:'30%',
    height:1,
    borderBottomColor:'#A6A6A6',
    borderBottomWidth:1
    },
    textOu:{
    marginHorizontal:20,
    fontSize:18,
    color:'#A6A6A6'
    },
    divCadastrarSe:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:20
    },
    textNormal:{
    fontSize:16,
    marginBottom:2
    },
    textCadastrar:{
    fontSize:18,
    color:'#FE9293' ,
    marginLeft:5

    }
})

export default styles

// import React, {useState, useEffect} from 'react'
// import {View, TouchableOpacity,Text, StyleSheet, Image, TextInput, ScrollView, SafeAreaView} from 'react-native';
// import firebase from "./../../config/firebase"
// // import styles from "./../Login/styles"
// import Home from './../Home'
// import { MaterialCommunityIcons } from "@expo/vector-icons"
// import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, emailVerified, signOut} from "firebase/auth";
// import { CommonActions } from '@react-navigation/routers'

// return(
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//       <View style={styles.divSuperior}>
//         <Image 
//           style={styles.image} 
//           source={require('./../../../assets/LE PETIT2.png')}
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
//           onPress={loginFirebase}
//           >
//           <Text style={styles.textButtonLogin}>LOGIN</Text>
//         </TouchableOpacity>
//         <Text style={styles.textEsqueceuSenha} onPress={()=> navigation.navigate("ForgotPassword")} >
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
//         <Text style={styles.textCadastrar} onPress={()=> navigation.navigate("NewUser")} >
//             Cadastre-se
//         </Text>
//         </View>
//       </View>
//       <View style={{height:100}}/>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//     container:{
//       flex:1,
//       justifyContent:'center',
//       padding:20,
//       backgroundColor:'white',
//     },
//     divSuperior:{
//       flex:5,
//       alignItems: 'center',
//       marginTop:20
//     },
//     divInferior:{
//       flex:1,
//       alignItems: 'center',
//       marginTop:20
//     },
//     image:{
//       width:150,
//       height:150,
//       marginVertical:10,
//     },
//     input: {
//       width:'90%',
//       height:50,
//       borderBottomColor:'#D9D9D9',
//       borderBottomWidth:2,
//       fontSize:16,
//       paddingLeft:2,
//       paddingBottom:1,
//     },
//     buttonLogin:{
//       width: '40%',
//       height: 50,
//       justifyContent: "center",
//       alignItems: "center",
//       backgroundColor: "#FE9293",
//       borderRadius: 10,
//       marginTop: 20,
//       padding:10,
//     },
//     textButtonLogin:{
//       color:"white",
//       fontWeight:'bold',
//       fontSize:16
//     },
//     textEsqueceuSenha:{
//       fontSize:14,
//       alignItems:'center',
//       marginTop:10,
//       marginBottom:10,
//       color:'black',
//       textDecorationLine:'underline',
//     },
//     divOuHr:{
//       width:'100%',
//       height:20,
//       flexDirection:'row',
//       justifyContent:'center',
//       alignItems:'center'
//     },
//     divHr:{
//       width:'30%',
//       height:1,
//       borderBottomColor:'#A6A6A6',
//       borderBottomWidth:1
//     },
//     textOu:{
//       marginHorizontal:20,
//       fontSize:18,
//       color:'#A6A6A6'
//     },
//     divCadastrarSe:{
//       flex:1,
//       justifyContent:'center',
//       alignItems:'center',
//       padding:20
//     },
//     textNormal:{
//       fontSize:16,
//       marginBottom:2
//     },
//     textCadastrar:{
//       fontSize:18,
//       color:'#FE9293' ,
//       marginLeft:5
  
//     }
//   })


// return(
//     <KeyboardAvoidingView
//     //behavior={Platform.OS == "ios" ? "padding" : "height"}
//     style={styles.container}
//     >
//         <Text style={styles.title}>Bem-Vindo(a)!</Text>
//         <View style={styles.formView}>
//             <TextInput
//             style={styles.input}
//             placeholder="E-mail"
//             type="text"
//             onChangeText={(text) => setEmail(text)}
//             value={email}
//             />            
//             <TextInput
//             style={styles.input}
//             secureTextEntry={true}
//             placeholder="Senha"
//             type="text"
//             onChangeText={(text) => setPassword(text)}
//             value={password}
//             />
//         </View>
//         <TouchableOpacity
//         style={styles.buttonLogin}
//         onPress={loginFirebase}
//         >
//             <Text style={styles.textButtonLogin}>Login</Text>
//         </TouchableOpacity>
//         <Text style={styles.registration}>
//             Não possui conta?</Text>
//         <Text 
//             style={styles.linkSubscribe}
//             onPress={()=> navigation.navigate("NewUser")}             
//         >
//             Cadastre-se agora!
//         </Text>
//         <Text 
//             style={{...styles.linkSubscribe, textDecorationLine:"underline"}}
//             onPress={()=> navigation.navigate("ForgotPassword")}             
//         >
//             Esqueci minha senha!
//         </Text>

//         <Text 
//             style={{...styles.linkSubscribe, textDecorationLine:"underline"}}
//             onPress={signOutFirebase}            
//         >
//             Sair
//         </Text>

//         <View style={{height:100}}/>

//     </KeyboardAvoidingView>
// );
// }