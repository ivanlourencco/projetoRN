import React from 'react';
import {Home} from '../components/Home';
import {Sobre} from '../components/Sobre';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Sobre" component={Sobre} />
      </Tab.Navigator>
  );
}

export default TabNavigator;
