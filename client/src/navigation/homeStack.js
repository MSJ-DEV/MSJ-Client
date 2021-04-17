import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../scenes/home';
import Product from '../scenes/product';
import Header from '../components/header'; 
import React from 'react'


const screens = {
   
    Home: {
        screen: Home,
        navigationOptions: ({navigation})=> {
            return {
                headerTitle : () => <Header navigation={navigation}/>
                
            }
        }
    },
    // Product : {
    //     screen : Product
    // },
  
  

}
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
