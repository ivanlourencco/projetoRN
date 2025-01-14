import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./Home";

const Tab = createBottomTabNavigator();

export function TabNavigator () {
    return (
<NavigationContainer>
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
</NavigationContainer>
    )
}