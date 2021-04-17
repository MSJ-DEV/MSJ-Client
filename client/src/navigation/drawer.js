import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import HomeStack from './homeStack';
import ProductStack from './productStack'
import SingInStack from './signInStack';
import SingUpStack from './singUpStack';
import MyListStack from './myListStack';
import ProfileStack from './profileStack';
import FoundUs from './FoundUsStack';
import ContactStack from './ContactStack'



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
    },
    Profile:{
        screen: ProfileStack
    },
    FoundUs :{
        screen:FoundUs
    },
    Contact : {
        screen: ContactStack
    }
}
const RootDrawerNavigator = createDrawerNavigator(screens)
export default createAppContainer(RootDrawerNavigator)
