import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Navigation from "./src/navigation/drawer";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";

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
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <Navigation />
      </ApplicationProvider>
    );
  } else {
    console.log("loadingfonts");
    return <AppLoading />;
  }
}
