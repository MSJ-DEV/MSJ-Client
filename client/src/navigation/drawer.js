import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import HomeStack from './homeStack';
import ProductStack from './productStack'
import SingInStack from './signInStack';
import SingUpStack from './singUpStack';
import MyListStack from './myListStack';



const screens = {
    Home:{
        screen: HomeStack,
    },
    Product:{
        screen: ProductStack,
    },
    SignIn:{
        screen:SingInStack
    },
    SingUp:{
        screen:SingUpStack
    },
    myList:{
        screen:MyListStack
    }
}
const RootDrawerNavigator = createDrawerNavigator(screens)
export default createAppContainer(RootDrawerNavigator)
