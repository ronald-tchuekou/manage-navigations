import {createDrawerNavigator} from "@react-navigation/drawer";
import React from "react"
import ButtonsScreen from "../screens/buttons.screen";
import HomeScreen from "../screens/home.screen";
import InputsScreen from "../screens/inputs.screen";
import StickersScreen from "../screens/stickers.screen";

const Draw = createDrawerNavigator()

export default function DrawNavigation () {
  return (
    <Draw.Navigator
      screenOptions={{drawerPosition: 'right'}}>
      <Draw.Screen
        name={'Home'}
        component={HomeScreen}/>
      <Draw.Screen
        name={'Stickers'}
        component={StickersScreen}/>
      <Draw.Screen
        name={'Inputs'}
        component={InputsScreen}/>
      <Draw.Screen
        name={'Buttons'}
        component={ButtonsScreen}/>
    </Draw.Navigator>
  )
}