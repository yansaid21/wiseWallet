import React from "react";
import {Text, TextInput, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./LoginStyle";
import SvgTop from "../Svg";


const Login = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <SvgTop/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Bienvenido a Wise Wallet</Text>
            </View>
            <TextInput
                placeholder="Correo"
                placeholderTextColor='#F5F5F5'

                style={styles.textInput}
                textColor='#F5F5F5'
            />
            <TextInput
                placeholder="Contraseña"
                secureTextEntry={true}
                placeholderTextColor='#F5F5F5'
                style={styles.textInput}
            />
            <TouchableOpacity
                style={styles.customButton}
                onPress={() => {
                    navigation.navigate("Sigin");
                }}
            >
                <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>
            <StatusBar style="auto"/>
        </View>
    )
}

export default Login;
