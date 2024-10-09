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
        <Stack.Screen name="index" component={Index} options={{headerShown: false}}/>
        <Stack.Screen name="login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="register" component={Register} options={{headerShown: false}}/>
        <Stack.Screen name="resetPass" component={ResetPass} options={{headerShown: false}}/>
        <Stack.Screen name="home" component={Home} options={{headerShown: false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}