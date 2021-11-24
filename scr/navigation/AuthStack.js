import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Login from './../pages/Login'
import NewUser from './../pages/NewUser';
import ForgotPassword from './../pages/Reset';
import Home from './../pages/Home';
import PreLoad from './../pages/Preload';


const Stack = createStackNavigator()

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Pre-load">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen
        name="NewUser"
        component={NewUser}
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerShown: true,
        }}
        />
        <Stack.Screen
        name="Pre-load"
        component={PreLoad}
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
        }}
        />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e0e5e5',
      paddingTop:80,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });