import {NavigationContainer} from "@react-navigation/native";
import React from "react"
import 'react-native-gesture-handler';
import DrawNavigation from "./scr/navigations/draw.navigation";
import StackNavigation from "./scr/navigations/stack.navigation";
import TabsNavigation from "./scr/navigations/tabs.navigation";

type StackType = 'STACK' | 'TABS' | 'DRAW'

export default function App () {
  const stackType: StackType = "TABS"

  return (
    <NavigationContainer>
      {
        stackType === "STACK"
          ? <StackNavigation/>
          : stackType === "TABS"
            ? <TabsNavigation/>
            : <DrawNavigation/>
      }
    </NavigationContainer>
  );
}
