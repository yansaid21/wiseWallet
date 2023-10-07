import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#18C3CE',
      color:'#F8F8F8',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
        fontSize:30,
        color:'#F8F8F8'
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
        top: 100,
        marginTop: 20,
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
