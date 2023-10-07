import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "./screens/Login/Login";
import Sigin from "./screens/Sigin"
import FirstPage from "./screens/FirstPage/firstPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown:false,
        }}
      >
        <Stack.Screen
            name = 'FirstPage'
            component={FirstPage}
        />
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
  );
}


