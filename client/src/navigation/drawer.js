import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import HomeStack from './homeStack';
import ProductStack from './productStack'
import homeStack from './homeStack';
import SingInStack from './signInStack'



const screens = {
    Home:{
        screen: HomeStack,
    },
    Product:{
        screen: ProductStack
    },
    SignIn:{
        screen:SingInStack
    },
    SignUp:{
        screen:homeStack
    },
    myList:{
        screen:homeStack
    }
}
const RootDrawerNavigator = createDrawerNavigator(screens)
export default createAppContainer(RootDrawerNavigator)
