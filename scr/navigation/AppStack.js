import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Home from './../pages/Home';
import PreLoad from './../pages/Preload';

const Stack = createStackNavigator()

export default function AppStack() {
  return (
    <Stack.Navigator initialRouteName="PreLoad">
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