import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Header from '../components/header'; 
import Product from '../scenes/product'
import React from 'react'


const screens = {
   
    Product: {
        screen: Product,
        navigationOptions: ({navigation})=> {
            return {
                headerTitle : () => <Header navigation={navigation}/>
                
            }
        }
    },
    
  
  

}
const ProductStack = createStackNavigator(screens);
export default createAppContainer(ProductStack);