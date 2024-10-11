import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './index';
import Register from '../components/pages/register';
import Login from '../components/pages/login';
import ResetPass from '../components/pages/resetPass';
import Home from '../components/pages/home';
import Dashboard from '../components/pages/dashboard';
import AllCourses from '../components/pages/allCourses';
import Assignments from "../components/pages/assignments";
import Announcements from "../components/pages/announcement";

export default function RootLayout() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="index">
        <Stack.Screen name="index" component={Index} options={{headerShown: false}}/>
        <Stack.Screen name="login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="register" component={Register} options={{headerShown: false}}/>
        <Stack.Screen name="resetPass" component={ResetPass} options={{headerShown: false}}/>
        <Stack.Screen name="home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="dashboard" component={Dashboard} options={{headerShown: false}}/>
        <Stack.Screen name="allCourses" component={AllCourses} options={{headerShown: false}}/>
        <Stack.Screen name="assignment" component={Assignments} options={{headerShown: false}}/>
        <Stack.Screen name="annoucement" component={Announcements} options={{headerShown: false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}