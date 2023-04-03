import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react"
import HomeScreen from "../screens/home.screen";
import InputsScreen from "../screens/inputs.screen";
import StickersScreen from "../screens/stickers.screen";

const Stack = createNativeStackNavigator()

export default function HomeNavigation () {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen
        name={'Home'}
        component={HomeScreen}/>
      <Stack.Screen
        name={'Stickers'}
        component={StickersScreen}/>
      <Stack.Screen
        name={'Inputs'}
        component={InputsScreen}/>
    </Stack.Navigator>
  )
}