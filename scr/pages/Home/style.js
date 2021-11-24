import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    logo:{
        width: '30%',
        height:'30%',
        resizeMode: 'contain',
    },
    topView:{
        width: '100%',
        height: '20%',
    },
    bottomView:{
        width: '100%',
        height: '80%',
        backgroundColor:'#000',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    }, 
    mainView:{
        marginTop:40,
        flex:1,
        flexDirection:'column',
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:'#ffffff'
    },
    boxTitle:{
        alignItems:"center",
        justifyContent:"center",
        padding:10,
    },
    textTitle:{
        color:"#FF0043",
        fontSize:"24",
        fontWeight:"bold",
    },
    buttonOrder:{
        width: 200,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F92e6a",
        borderRadius: 50,
        marginTop: 30,
    },
    textButtonOrder:{
        color:"#ffffff"
    },
});

export default styles