import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Header from "../components/header";
import WheelOfFortune from "../scenes/wheelOfFortune";
import React from "react";
import { Text } from "react-native";

const screens = {
  Home: {
    screen: WheelOfFortune,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: () => <Header navigation={navigation} />,
        headerTitle: () => <Text>Wheel of Fortune</Text>,
      };
    },
  },
};
const weelOfFortuneStack = createStackNavigator(screens);
export default createAppContainer(weelOfFortuneStack);
