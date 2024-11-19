import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';


import Task from "./src/pages/Task/";
import NewTask from "./src/pages/NewTask";
import Details from "./src/pages/Details";
import Login from "./src/pages/Login"; 

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Task"
          component={Task}
          options={{ headerTintColor: "#878af6" }}
        />
        <Stack.Screen
          name="NewTask"
          component={NewTask}
          options={{ headerTintColor: "#878af6" }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ headerTintColor: "#878af6" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
