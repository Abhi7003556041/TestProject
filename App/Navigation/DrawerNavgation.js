import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import BottomTab from './BottomTab';
import DrawerNavigationCard from '../Component/DrawerNavigationCard/DrawerNavigationCard';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
        initialRouteName='BottomTab'
            screenOptions={{
                headerShown: false,
            }}
            
            drawerContent={props => <DrawerNavigationCard {...props} />}
        >
            <Stack.Screen name="BottomTab" component={BottomTab} />

        </Drawer.Navigator>
    );
}
//Abhijit Adak
export default DrawerNavigation