import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./homeStack";
import ProductStack from "./productStack";
import SingInStack from "./signInStack";
import SingUpStack from "./singUpStack";
import MyListStack from "./myListStack";
import ProfileStack from "./profileStack";
import FoundUs from "./FoundUsStack";
import ContactStack from "./ContactStack";
import QuizStack from "./quizStack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { enableScreens } from "react-native-screens";

enableScreens();

const screens = {
  Home: {
    screen: HomeStack,
  },
  Product: {
    screen: ProductStack,
  },
  SignIn: {
    screen: SingInStack,
  },
  SingUp: {
    screen: SingUpStack,
  },
  myList: {
    screen: MyListStack,
  },
  FoundUs: {
    screen: FoundUs,
    // },
    // QuizStack: {
    //   screen: QuizStack,
  },
  Contact: {
    screen: ContactStack,
  },
  ProfileStack: {
    screen: ProfileStack,
  },
};
const RootDrawerNavigator = createDrawerNavigator(screens);
export default createAppContainer(RootDrawerNavigator);
// export default ()=> {return <NavigationContainer>
//     <RootDrawerNavigator />
// </NavigationContainer>}
