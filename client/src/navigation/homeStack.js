import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../scenes/home';
import Product from '../scenes/product'


const screens = {
   
    Home: {
        screen: Home
    },
    Product : {
        screen : Product
    },
  
  

}
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
