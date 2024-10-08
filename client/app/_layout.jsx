import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Stack } from "expo-router";
import Index from './index';
import Register from '../components/pages/register';
import Login from '../components/pages/login';
import ResetPass from '../components/pages/resetPass';
import Home from '../components/pages/home';

export default function RootLayout() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="index" component={Index}/>
        <Stack.Screen name="login" component={Login}/>
        <Stack.Screen name="register" component={Register}/>
        <Stack.Screen name="resetPass" component={ResetPass}/>
        <Stack.Screen name="home" component={Home}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}