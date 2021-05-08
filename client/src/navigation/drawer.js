import { createDrawerNavigator } from "react-navigation-drawer";
import { enableScreens } from "react-native-screens";
import { createAppContainer } from "react-navigation";
import HomeStack from "./homeStack";
import ProductStack from "./productStack";
import SingInStack from "./signInStack";
import SingUpStack from "./singUpStack";
import MyListStack from "./myListStack";
import Profile from "./profileStack";
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
  },
  Contact: {
    screen: ContactStack1,
  },
  Profile: {
    screen: Profile,
  },
};
const RootDrawerNavigator = createDrawerNavigator(screens);
export default createAppContainer(RootDrawerNavigator);
// export default ()=> {return <NavigationContainer>
//     <RootDrawerNavigator />
// </NavigationContainer>}
