//import liraries
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  PixelRatio,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';

import {Icon} from 'react-native-basic-elements';
import {moderateScale} from '../Constants/PixelRatio';
import {COLORS} from '../Constants/Colors';
import {FONTS} from '../Constants/Fonts';
import Home from '../Screens/Home/Home';
import AddItems from '../Screens/AddItem/AddItems';
import Community_page from '../Screens/Community/Community_page';

const Tab = createBottomTabNavigator();

// create a component
const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primaryThemeColor,
        tabBarInactiveTintColor: '#777',
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
          marginBottom: moderateScale(7),
        },
        tabBarStyle: {
          backgroundColor: '#fff',
          height: moderateScale(69),
          paddingBottom: 10,
          paddingTop: 10,
          //   borderRadius: moderateScale(20),
          width: '100%',
          alignSelf: 'center',
          //   marginBottom: 10,
          elevation: 5,
          ...styles.shadow,
          // marginTop: 5,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        // screenOptions={{tabBarShowLabel: false,}}
        options={{
          unmountOnBlur: true,
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size}) => (
            <Icon type={'AntDesign'} name="home" size={23} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Community"
        component={Community_page}
        // screenOptions={{tabBarShowLabel: false,}}
        options={{
          unmountOnBlur: true,
          tabBarLabel: 'Community',
          tabBarIcon: ({focused, color, size}) => (
            <Icon type={'Ionicons'} name="people" size={23} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="AddItems"
        component={AddItems}
        // screenOptions={{tabBarShowLabel: false,}}
        options={{
          //   unmountOnBlur: true,
          tabBarLabel: '',
          tabBarIcon: ({focused, color, size}) => (
            <View
              style={{
                width: moderateScale(55),
                height: moderateScale(55),
                borderRadius: 40,
                backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center',
                top: -25,
                elevation: 4,
              }}>
              <Icon type={'Entypo'} name="plus" size={50} color={'#fff'} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Messages"
        component={AddItems}
        screenOptions={{tabBarShowLabel: false}}
        options={{
          unmountOnBlur: true,
          // tabBarLabel: 'Reward',
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              type={'Ionicons'}
              name="chatbox-ellipses-outline"
              size={23}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={AddItems}
        screenOptions={{tabBarShowLabel: false}}
        options={{
          unmountOnBlur: true,
          // tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              type={'FontAwesome5'}
              name="user-circle"
              size={23}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  shadow: {
    shadowColor: '#C5DFF8',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    // elevation:5
  },
});
//Abhijit Adak
//make this component available to the app
export default BottomTab;
