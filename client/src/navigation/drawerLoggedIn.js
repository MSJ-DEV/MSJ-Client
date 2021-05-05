import { createDrawerNavigator } from "react-navigation-drawer";
import { enableScreens } from "react-native-screens";
import { createAppContainer } from "react-navigation";
import HomeStack from "./homeStack";
import ProductStack from "./productStack";
import MyListStack from "./myListStack";
import ProfileStack from "./profileStack";
import FoundUs from "./FoundUsStack";
import React from "react";
import paymentScreen from "../scenes/paymentScreen";
import ContactStack1 from "./contactStack1";

enableScreens();

const screens = {
  Home: {
    screen: HomeStack,
  },
  Product: {
    screen: ProductStack,
  },
  myList: {
    screen: MyListStack,
  },
  FoundUs: {
    screen: FoundUs,
  },
  Contact: {
    screen: ContactStack1,
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
