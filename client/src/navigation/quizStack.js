import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Header from "../components/header";
import Quiz from "../scenes/quiz";
import React from "react";
import { Text } from "react-native";

const screens = {
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: () => <Header navigation={navigation} />,
        headerTitle: () => <Text>Quiz</Text>,
      };
    },
  },
};
const weelOfFortuneStack = createStackNavigator(screens);
export default createAppContainer(weelOfFortuneStack);
