import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React from "react"
import ButtonsScreen from "../screens/buttons.screen";
import HomeScreen from "../screens/home.screen";
import InputsScreen from "../screens/inputs.screen";
import StickersScreen from "../screens/stickers.screen";

const Tab = createBottomTabNavigator()

export default function TabsNavigation () {
  return (
    <Tab.Navigator initialRouteName={'Home'}>
      <Tab.Screen
        name={'Home'}
        component={HomeScreen}/>
      <Tab.Screen
        name={'Stickers'}
        component={StickersScreen}/>
      <Tab.Screen
        name={'Inputs'}
        component={InputsScreen}/>
      <Tab.Screen
        name={'Buttons'}
        component={ButtonsScreen}/>
    </Tab.Navigator>
  )
}