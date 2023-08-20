//import liraries
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import FilterItems from '../Screens/Filter/Filter';
import DrawerNavigation from './DrawerNavgation';

const Stack = createStackNavigator();
// create a component
const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="DrawerNavigation"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
      <Stack.Screen name="FilterItems" component={FilterItems} />
    </Stack.Navigator>
  );
};
//Abhijit Adak
export default AppStack;
