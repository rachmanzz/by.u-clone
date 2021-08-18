import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RoutersParamList } from './routeProps';
import SplashScreen from "./screens/SplashScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator<RoutersParamList>();

export function Routers () {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}