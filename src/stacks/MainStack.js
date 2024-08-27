import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Preload from '../screens/preload';
import Home from '../screens/Home';

 
const Stack = createNativeStackNavigator();
export default function Ret() {

    
    return (
      <NavigationContainer  >
         
        <Stack.Navigator
      initialRouteName={"Preload"}

      >
       <Stack.Screen
     options={{
        title: 'AutomaServ',
        headerShown: false
    }}   
     name="Preload" component={Preload} />
      <Stack.Screen
     options={{
        title: 'AutomaServ',
        headerShown: false
    }}   
     name="Home" component={Home} />

    

      </Stack.Navigator>
      
      </NavigationContainer>
    );
  }