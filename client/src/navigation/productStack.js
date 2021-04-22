import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Header from '../components/header'; 
import Product from '../scenes/product'
import React from 'react';
import {Text} from 'react-native'


const screens = {
   
    Product: {
        screen: Product,
       
        navigationOptions: ({navigation})=> {
            return {
                headerLeft : () => <Header navigation={navigation} />,
                headerTitle : ()=> (<Text>Product</Text>)
                
            }
        
    }
    },
    
  
  

}
const ProductStack = createStackNavigator(screens);
export default createAppContainer(ProductStack);