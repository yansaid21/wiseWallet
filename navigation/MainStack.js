import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "../screens/login";
import Sigin from "../screens/Sigin";

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return(
        <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name = 'Login'
            component={Login}
        />
        <Stack.Screen
            name = 'Sigin'
            component={Sigin}
        />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default MainStack;
