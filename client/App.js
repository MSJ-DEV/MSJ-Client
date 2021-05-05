import React, { useState, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Navigation from "./src/navigation/drawer";
import Navigation2 from "./src/navigation/drawerLoggedIn";
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const changerView = (value) => {
    value === "undefined" ? (value = true) : (value = value);
    setIsLoggedIn(value);
  };
  useEffect(() => {
    changerView();
  }, []);

  if (!isLoggedIn) {
    if (fontsLoaded) {
      return (
        <ApplicationProvider {...eva} theme={eva.light}>
          <Navigation />
        </ApplicationProvider>
      );
    } else {
      return <AppLoading />;
    }
  } else {
    if (fontsLoaded) {
      return (
        <ApplicationProvider {...eva} theme={eva.light}>
          <Navigation2 />
        </ApplicationProvider>
      );
    } else {
      return <AppLoading />;
    }
  }
}
