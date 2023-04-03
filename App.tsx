import {NavigationContainer} from "@react-navigation/native";
import React from "react"
import HomeNavigation from "./scr/navigations/home.navigation";

export default function App () {
  return (
    <NavigationContainer>
      <HomeNavigation/>
    </NavigationContainer>
  );
}

