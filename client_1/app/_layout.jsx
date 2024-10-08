import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './index';
import Login from './login';
import Register from './register';
import ResetPass from './resetPass';
import Home from "./home";

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
