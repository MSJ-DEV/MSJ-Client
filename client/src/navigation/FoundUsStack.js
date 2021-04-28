import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Header from "../components/header";
import FoundUs from "../scenes/foundUs";
import React from "react";
import { Text } from "react-native";

const screens = {
  Home: {
    screen: FoundUs,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: () => <Header navigation={navigation} />,
        headerTitle: () => <Text>Product</Text>,
      };
    },
  },
};
const FoundUsStack = createStackNavigator(screens);
export default createAppContainer(FoundUsStack);
