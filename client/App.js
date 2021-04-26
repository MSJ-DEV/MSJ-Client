import React, { useState } from "react";
import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import Navigation from "./src/navigation/drawer";

export default function App() {
  const getFonts = () => {};
  let [fontsLoaded, setFontsLoaded] = useFonts({
    "Kufam-SemiBoldItalic": require("./assets/fonts/Kufam-SemiBoldItalic.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-BoldItalic": require("./assets/fonts/Lato-BoldItalic.ttf"),
    "Lato-Italic": require("./assets/fonts/Lato-Italic.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  });
  if (fontsLoaded) {
    console.log("fonts loaded");
    return <Navigation />;
  } else {
    console.log("loadingfonts");
    return <AppLoading />;
  }
}
// export default function App() {
//   return (

//     <Navigation />
//   //  <Cart />
//   )
// }
