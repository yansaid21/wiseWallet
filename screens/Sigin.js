import React from "react";
import { StyleSheet, Text, View } from "react-native";
const Sigin = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <Text>Registrarse</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#323232',
        color:'#F8F8F8',
        alignItems: 'center',
        justifyContent: 'center',
      },

  });
export default Sigin;
