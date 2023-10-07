import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#323232',
      color:'#F8F8F8',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
        fontSize:30,
        color:'#F8F8F8'
    },
    textInput:{
        borderWidth:2,
        borderColor:'#5213C5',
        padding:10,
        width:'80%',
        height:50,
        marginTop:20,
        borderRadius:13,
        color:'#F5F5F5',
        top: 250,
    },
    textContainer: {
        position: 'absolute',
        top: 130,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',

    },
    customButton: {
        backgroundColor: "#5213C5", // Cambiar el color de fondo del botón
        width: "80%",
        height: 50,
        marginTop: 280,
        borderRadius: 13,
        alignItems: "center",
        justifyContent: "center",
      },
      buttonText: {
        fontSize: 18,
        color: "#F8F8F8", // Cambiar el color del texto del botón
      },

});

export default styles;
