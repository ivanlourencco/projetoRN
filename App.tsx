import React from 'react';

import Data from './src/screens/Data';
import List from './src/screens/List';
import {Sobre} from './src/components/Sobre';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MainStack } from './src/navigation/MainStack';

const Stack = createNativeStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator initialRouteName={MainStack.DATA}>
      <Stack.Screen name={MainStack.DATA} component={Data} />
      <Stack.Screen name={MainStack.LIST} component={List} />
    </Stack.Navigator>
  );
}

function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={StackScreen} />
        <Tab.Screen name="Sobre" component={Sobre} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
