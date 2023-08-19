//import liraries
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import NavigationService from './App/Services/Navigation';

import AppStack from './App/Navigation/AppStack';

import { setuser } from './App/Redux/reducer/User';
import MainService from './App/Services/MainService';

const Stack = createStackNavigator();

// create a component
const App = () => {
  const { login_status, userData } = useSelector(state => state.User);
  const dispatch = useDispatch()
  const [LoderStatus, setLoderStatus] = useState(true);

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    setLoderStatus(true)
   setTimeout(()=>{

     setLoderStatus(false)
   },1000)
  }

if (LoderStatus) return <ActivityIndicator style={{ marginTop: 400 }} color={"blue"} size={25} />
  return (
    <View
      style={{
        flex: 1
      }}
    >

      
        <NavigationContainer
          ref={r => NavigationService.setTopLevelNavigator(r)}
        >
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            
                <Stack.Screen name="AppStack" component={AppStack} />
                    

          </Stack.Navigator>
        </NavigationContainer>
    


    </View>
  );
};

export default App;
