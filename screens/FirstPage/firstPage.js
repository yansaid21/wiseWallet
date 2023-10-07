import React from "react";
import {Text, TextInput, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./FirstPageStyle";
import SvgTop from "../Svg";


const FirstPage = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <SvgTop/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Bienvenido a Wise Wallet</Text>
            </View>
            <TouchableOpacity
                style={styles.customButton}
                onPress={() => {
                    navigation.navigate("Login");
                }}
            >
                <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.customButton}
                onPress={() => {
                    navigation.navigate("Sigin");
                }}
            >
                <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
            <StatusBar style="auto"/>
        </View>
    )
}

export default FirstPage;
