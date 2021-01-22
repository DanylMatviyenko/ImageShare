import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import {
    createStackNavigator
} from "@react-navigation/stack";
import { navigationRef } from "../services/Navigator/Navigator";
import { BottomTabNavigator } from './BottomTabNavigator';

const Stack = createStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, cardOverlayEnabled: true }}
            mode="modal">
            <Stack.Screen name="Root" component={ BottomTabNavigator }/>
        </Stack.Navigator>
    );
}
export const Navigation = () => {
    return (
        <NavigationContainer ref={ navigationRef }>
            <RootNavigator />
        </NavigationContainer>
    );
}