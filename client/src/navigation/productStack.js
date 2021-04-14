import { createStackNavigator } from 'react-navigation-stack';
import About from '../scenes/about';
import Product from '../scenes/product'


const screens = {
   
    About: {
        screen: About
    },
    Product : {
        screen : Product
    },
  
  

}
const ProductStack = createStackNavigator(screens);
export default ProductStack