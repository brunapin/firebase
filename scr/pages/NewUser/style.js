import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === "ios"? 0:50,
    },
    formView:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10
    },
    title: {
        fontSize:20,
        color:"#F92E64",
        marginBottom:10,
        fontWeight:"bold"
    },
    input:{
        width: '80%',
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth:1,
        borderColor: "#F92E64",
        marginLeft: "auto",
        marginRight: "auto",
        color: "#4d5156",
    },
    buttonRegister:{
        width: 200,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F92e6a",
        borderRadius: 50,
        marginTop: 30,
    },
    textButtonRegister:{
        color:"#ffffff"
    },
    contentAlert:{
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    warningAlert:{
        paddingLeft: 10,
        color: "#bdbdbd",
        fontSize: 16,
    },
    login:{
        marginTop: 20,
        color: "#4d5156",
    },
    linkLogin:{
        color:"#1877f2",
        fontSize: 16,
    }

});

export default styles

// return (
//     <KeyboardAvoidingView style={styles.container}>
//       <Text style={styles.title}>Criar Nova Conta</Text>
//       <View style={styles.formView}>
//         <TextInput
//           style={styles.input}
//           placeholder="Nome Completo"
//           type="text"
//           onChange={({ target: { value } }) => setName(value)}
//           value={name}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="E-mail"
//           keyboardType='email-address'
//           type="text"
//           onChange={({ target: { value } }) => setEmail(value)}
//           value={email}
//         />
//         <TextInput
//           style={styles.input}
//           secureTextEntry={true}
//           placeholder="Senha"
//           type="text"
//           onChange={({ target: { value } }) => setPassword(value)}
//           value={password}
//         />
//         <TextInput
//           style={styles.input}
//           secureTextEntry={true}
//           placeholder="Repetir a senha"
//           type="text"
//           onChange={({ target: { value } }) => setConfirmPassword(value)}
//           value={confirmpassword}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Celular"
//           type="number"
//           keyboardType='number-pad'
//           onChange={({ target: { value } }) => setCellPhone(value)}
//           value={cellphone}
//         />
//       </View>

//       <TouchableOpacity
//             style={styles.buttonRegister}
//             onPress={register}>
//         <Text style={styles.textButtonRegister}>Cadastrar</Text>
//       </TouchableOpacity>
//     <View style={{height:100}}/>
//     </KeyboardAvoidingView>
//   );
// }